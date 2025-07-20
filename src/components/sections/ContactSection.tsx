import ContactForm from "../form/ContactForm";

export default function ContactSection() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center p-8 pt-0">
            <h2 className="font-bold text-text-primary text-4xl py-4">Contactez-moi</h2>
            <p className="text-text-secondary text-center text-lg pb-4">
                Une <strong>question</strong>, un <strong>commentaire</strong>, ou un <strong>projet</strong> sur lequel collaborer ? Je prends le temps de considérer tous vos messages.
            </p>
            <ContactForm />
        </div>
    )
}