import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import GithubIcon from "../ui/GithubIcon";
import { FaLinkedin } from "react-icons/fa6";
import AnimatedTerminal from "../ui/AnimatedTerminal";

export default function HomeSection() {
    return (
        <div className="h-full flex max-md:flex-col justify-around items-center">
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
                    <a href="/cv/CV_AntoineCoulon.pdf" download={"CV_AntoineCoulon.pdf"}>
                    <Button
                        size={"lg"}
                        className="border border-text-primary hover:cursor-pointer hover:bg-accent-secondary hover:text-bg-primary"
                    >
                        
                            <FileText /> Télécharger mon CV
                    </Button>
                        </a>
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="hover:cursor-pointer hover:bg-accent-primary hover:text-bg-primary"
                    >
                        <a href="https://github.com/antoinecoulon" target="blank">
                            <GithubIcon />
                        </a>
                    </Button>
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="hover:cursor-pointer hover:bg-accent-primary hover:text-bg-primary"
                    >
                        <a href="http://www.linkedin.com/in/antoine-coulon-65638882" target="blank">
                            <FaLinkedin className="fill-bg-primary" />
                        </a>
                    </Button>
                </div>
            </div>
            <div className="w-full px-4 sm:w-[600px]">
                <AnimatedTerminal />
            </div>
        </div>
    )
}