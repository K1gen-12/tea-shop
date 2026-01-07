import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 h-[80px] w-full bg-white border-b border-border-light flex items-center justify-between px-8 md:px-16 transition-all">
            {/* Logo */}
            <Link href="/" className="font-serif-jp text-2xl font-bold tracking-widest text-text-primary hover:opacity-80 transition-opacity">
                深茶
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
                {[
                    { label: "PRODUCTS", href: "/products" },
                    { label: "JOURNAL", href: "/journal" },
                    { label: "ABOUT", href: "/about" }
                ].map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="font-serif-jp text-[15px] tracking-widest hover:text-brown-700 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-6 text-text-primary">
                <button className="hover:text-brown-700 transition-colors" aria-label="Search">
                    <Search className="w-5 h-5" />
                </button>
                <Link href="/cart" className="hover:text-brown-700 transition-colors relative" aria-label="Cart">
                    <ShoppingBag className="w-5 h-5" />
                    {/* Cart count badge could go here */}
                </Link>
                <button className="md:hidden hover:text-brown-700 transition-colors" aria-label="Menu">
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
