export default function Header() {
    return (
        <div className="h-[40px] px-4 flex items-center gap-16 bg-bg-secondary">
            <h1>Portfolio</h1>
            <ul className="flex gap-8">
                <li>Home</li>
                <li>Projets</li>
                <li>Compétences</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}