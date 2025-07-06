export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-green-700">Al Falah Islamic Centre</h1>
                <ul className="flex gap-6 text-sm font-medium">
                {[
                    { label: "Home", href: "#home" },
                    { label: "Prayer Times", href: "#prayer" },
                    { label: "Donate", href: "#donate" },
                    { label: "Calendar", href: "#calendar"},
                    { label: "Contact", href: "#contact" },
                ].map(({ label, href }) => (
                    <li key={href}>
                    <a
                        href={href}
                        className="text-green-700 hover:text-green-800 visited:text-green-700 active:text-green-900 transition-colors"
                    >
                        {label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
}
