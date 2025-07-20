"use client"

import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

type FormData = {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        setLoading(true)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                access_key: "1ee3626e-bf37-4c9e-925b-9db60cdd4919",
                subject: "[Portfolio - Contact Form] Nouveau message",
                botcheck: "",
                ...data
            })
        })

        const result = await response.json()
        setLoading(false)

        if (result.success) {
            setSuccess(true)
            reset()
        } else {
            alert("Erreur lors de l'envoi")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-[80%] md:w-full md:max-w-[600px] bg-bg-tertiary p-4 md:p-8 border border-accent-primary rounded-lg">
            <div>
                <Label className="block pb-1 pl-1 font-semibold">Nom</Label>
                <Input 
                    type="text" 
                    {...register("name", { required: "Le nom est requis" })}
                    className="w-full p-2 border rounded animate-cursor-blink"
                />
                {errors.name && <p className="text-status-error text-sm pt-0.5">{errors.name.message}</p>}
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
                {errors.email && <p className="text-status-error text-sm pt-0.5">{errors.email.message}</p>}
            </div>

            <div>
                <Label className="block pb-1 pl-1 font-semibold">Message</Label>
                <Textarea 
                    {...register("message", { required: "Le message est requis" })}
                    className="w-full p-2 border rounded h-32 resize-none"
                />
                {errors.message && <p className="text-status-error text-sm pt-0.5">{errors.message.message}</p>}
            </div>

            <Button 
                type="submit" 
                disabled={loading}
                className="bg-accent-primary py-2 px-4 rounded hover:bg-accent-tertiary text-bg-secondary hover:cursor-pointer"
            >
                {loading ? "Envoi en cours..." : "Envoyer"}
            </Button>

            {success && (
                <p className="text-status-success text-center font-bold">
                    Message envoyé avec succès.
                </p>
            )}
        </form>
    )
}