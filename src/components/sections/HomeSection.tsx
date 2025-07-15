import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import GithubIcon from "../ui/GithubIcon";
import { FaLinkedin } from "react-icons/fa6";

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
                        et je suis développeur full-stack.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        size={"lg"}
                        className="border border-text-primary hover:cursor-pointer hover:bg-accent-secondary hover:text-bg-primary"
                    >
                        <FileText /> Télécharger mon CV
                    </Button>
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="hover:cursor-pointer hover:bg-accent-primary hover:text-bg-primary"
                    >
                        <GithubIcon />
                    </Button>
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="hover:cursor-pointer hover:bg-accent-primary hover:text-bg-primary"
                    >
                        <FaLinkedin className="fill-bg-primary" />
                    </Button>
                </div>
            </div>
            <div>IMAGE</div>
        </div>
    )
}