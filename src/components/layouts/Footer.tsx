import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-green-900 text-white py-16 px-8 md:px-16 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link href="/" className="font-serif-jp text-3xl font-bold tracking-widest block mb-4 hover:opacity-80 transition-opacity">
                        深茶
                    </Link>
                    <p className="text-sm text-gray-300 leading-loose font-sans-jp">
                        伝統と現代の融合。<br />
                        新しい日本茶の楽しみ方を提案します。
                    </p>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="font-serif-jp text-lg mb-6 tracking-wider">商品</h4>
                    <ul className="space-y-4 text-sm text-gray-300 font-sans-jp">
                        <li><Link href="/products?c=sencha" className="hover:text-white transition-colors">煎茶</Link></li>
                        <li><Link href="/products?c=gyokuro" className="hover:text-white transition-colors">玉露</Link></li>
                        <li><Link href="/products?c=matcha" className="hover:text-white transition-colors">抹茶</Link></li>
                        <li><Link href="/products?c=tool" className="hover:text-white transition-colors">茶器</Link></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="font-serif-jp text-lg mb-6 tracking-wider">コンテンツ</h4>
                    <ul className="space-y-4 text-sm text-gray-300 font-sans-jp">
                        <li><Link href="/about" className="hover:text-white transition-colors">深茶について</Link></li>
                        <li><Link href="/journal" className="hover:text-white transition-colors">読み物</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                    </ul>
                </div>

                {/* Info */}
                <div>
                    <h4 className="font-serif-jp text-lg mb-6 tracking-wider">店舗情報</h4>
                    <p className="text-sm text-gray-300 leading-loose font-sans-jp">
                        〒605-0000<br />
                        京都府京都市東山区...<br />
                        Open: 10:00 - 18:00
                    </p>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-400 font-sans-jp tracking-wider">
                &copy; 2026 Fukamicha. All rights reserved.
            </div>
        </footer>
    );
}
