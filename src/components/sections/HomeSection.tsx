import { Button } from "../ui/button";

export default function HomeSection() {
    return (
        <div className="h-full flex justify-around items-center">
            <div className="flex flex-col gap-4">
                <div className="text-2xl/loose">
                    <p className="font-bold text-accent-primary">
                        Hello !
                    </p>
                    <p>
                        Je m'appelle <span className="text-accent-primary text-4xl font-bold">Antoine</span>
                    </p>
                    <p className="font-light">
                        et je suis développeur full-stack
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        size={"lg"}
                        className="hover:cursor-pointer hover:bg-accent-secondary hover:text-bg-primary"
                    >Télécharger mon CV</Button>
                    <Button
                        size={"icon"}
                        className="hover:cursor-pointer hover:bg-accent-primary hover:text-bg-primary"
                    >*</Button>
                    <Button
                        size={"icon"}
                        className="hover:cursor-pointer hover:bg-accent-primary hover:text-bg-primary"
                    >*</Button>
                </div>
            </div>
            <div>IMAGE</div>
        </div>
    )
}