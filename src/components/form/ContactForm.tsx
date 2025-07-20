"use client"

import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type FormData = {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-[80%] md:w-full md:max-w-[600px] bg-bg-tertiary p-4 md:p-8 rounded-lg">
            <div>
                <Label className="block pb-1 pl-1 font-semibold">Nom</Label>
                <Input 
                    type="text" 
                    {...register("name", { required: "Le nom est requis" })}
                    className="w-full p-2 border rounded"
                />
                {errors.name && <p className="text-status-error text-sm">{errors.name.message}</p>}
            </div>

            <div>
                <Label className="block pb-1 pl-1 font-semibold">Email</Label>
                <Input 
                    type="email" 
                    {...register("email", { 
                        required: "L'email est requis",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Email invalide"
                        }
                    })}
                    className="w-full p-2 border rounded"
                />
                {errors.email && <p className="text-status-error text-sm">{errors.email.message}</p>}
            </div>

            <div>
                <Label className="block pb-1 pl-1 font-semibold">Message</Label>
                <Textarea 
                    {...register("message", { required: "Le message est requis" })}
                    className="w-full p-2 border rounded h-32 resize-none"
                />
                {errors.message && <p className="text-status-error text-sm">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="bg-accent-primary py-2 px-4 rounded hover:bg-accent-tertiary text-bg-secondary hover:cursor-pointer">
                Envoyer
            </Button>
        </form>
    )
}