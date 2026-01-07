"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
            {/* Brand Story */}
            <section className="mb-24 flex flex-col items-center text-center">
                <h1 className="font-serif-jp text-3xl md:text-4xl text-green-900 mb-12 tracking-widest">深茶について</h1>

                <div className="relative w-full h-[400px] md:h-[500px] mb-16 rounded-lg overflow-hidden">
                    <Image
                        src="/images/hero_bg.png"
                        alt="Tea plantation"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-serif-jp text-2xl md:text-3xl writing-vertical-rl tracking-widest leading-loose drop-shadow-lg">
                            一杯の茶に、<br />心を澄ませて。
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto font-sans-jp text-text-primary leading-[2.5] text-justify md:text-center space-y-8">
                    <p>
                        「深茶 - Fukamicha」は、八女の奥深く、霧深い山間で作られる希少な日本茶をお届けするブランドです。
                    </p>
                    <p>
                        効率よりも品質を、速さよりも深さを。
                        <br />
                        私たちは、土作りから茶摘み、製茶に至るまで、
                        昔ながらの手仕事を大切にする生産者と共に歩んでいます。
                    </p>
                    <p>
                        忙しない日々の中で、急須でお茶を淹れる時間は、
                        自分自身と向き合うための大切な儀式のようなもの。
                        <br />
                        湯気とともに立ち上る香り、口に含んだ瞬間の深い味わい。
                    </p>
                    <p>
                        深茶が、あなたの心に静寂と豊かさをもたらすことを願っています。
                    </p>
                </div>
            </section>

            {/* Store Info */}
            <section className="border-t border-border-light pt-16">
                <h2 className="font-serif-jp text-2xl text-center text-green-900 mb-12 tracking-widest">店舗情報</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 font-sans-jp">
                        <div className="flex border-b border-border-light pb-4">
                            <span className="w-32 font-bold text-green-900">屋号</span>
                            <span>深茶 - Fukamicha</span>
                        </div>
                        <div className="flex border-b border-border-light pb-4">
                            <span className="w-32 font-bold text-green-900">住所</span>
                            <span>
                                〒810-0000<br />
                                福岡県福岡市中央区...
                            </span>
                        </div>
                        <div className="flex border-b border-border-light pb-4">
                            <span className="w-32 font-bold text-green-900">営業時間</span>
                            <span>10:00 - 18:00 (水曜定休)</span>
                        </div>
                        <div className="flex border-b border-border-light pb-4">
                            <span className="w-32 font-bold text-green-900">連絡先</span>
                            <span>info@fukamicha.example.com</span>
                        </div>
                    </div>

                    <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center text-text-secondary">
                        {/* Google Maps Embed placeholder */}
                        <span className="font-serif-jp">Google Maps Area</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
