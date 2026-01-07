"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

import { JOURNAL_ARTICLES } from "@/lib/journal-data";

export default function JournalPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-7xl">
            <div className="text-center mb-20">
                <h1 className="font-serif-jp text-3xl md:text-4xl text-green-900 mb-6">読み物</h1>
                <p className="font-sans-jp text-text-secondary">お茶にまつわる日々の記録と、暮らしの提案</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {JOURNAL_ARTICLES.map((article) => (
                    <article key={article.id} className="group cursor-pointer">
                        <Link href={`/journal/${article.id}`}>
                            <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-4 bg-gray-100">
                                {/* Using unoptimized images/placeholders for now if actual assets don't match perfectly */}
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-xs font-sans-jp text-text-secondary tracking-wider">{article.date}</span>
                                <Badge variant="outline" className="text-xs py-0.5 px-2">{article.category}</Badge>
                            </div>
                            <h2 className="font-serif-jp text-xl text-green-900 leading-relaxed mb-3 group-hover:text-brown-700 transition-colors">
                                {article.title}
                            </h2>
                            <p className="font-sans-jp text-sm text-text-secondary leading-loose line-clamp-3">
                                {article.excerpt}
                            </p>
                        </Link>
                    </article>
                ))}
            </div>

            <div className="mt-20 text-center">
                <button disabled className="px-8 py-3 border border-border-light text-text-secondary text-sm font-sans-jp tracking-wider opacity-50 cursor-not-allowed">
                    もっと見る
                </button>
            </div>
        </div>
    );
}
