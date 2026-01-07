"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/Button";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="font-serif-jp text-2xl mb-8">カートは空です</h1>
                <Link href="/products">
                    <Button variant="secondary">買い物を続ける</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
            <h1 className="font-serif-jp text-3xl text-green-900 mb-12 text-center">ショッピングカート</h1>

            <div className="space-y-8">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-6 py-6 border-b border-border-light items-start">
                        <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded overflow-hidden">
                            <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <Link href={`/products/${item.id}`} className="font-serif-jp text-lg text-green-900 hover:text-brown-700">
                                    {item.name}
                                </Link>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-text-secondary hover:text-red-500 transition-colors"
                                    aria-label="削除"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>

                            <p className="text-sm text-text-secondary mb-4">¥{item.price.toLocaleString()}</p>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-border-light rounded">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-sans-jp">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-2 hover:bg-gray-100"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="ml-auto font-bold text-lg text-green-900">
                                    ¥{(item.price * item.quantity).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                    <span className="font-serif-jp text-xl">小計 (税込)</span>
                    <span className="font-serif-jp text-2xl font-bold text-green-900">
                        ¥{cartTotal.toLocaleString()}
                    </span>
                </div>
                <div className="text-center">
                    <Link href="/checkout">
                        <Button className="w-full md:w-2/3 py-4 text-lg">
                            レジに進む
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
