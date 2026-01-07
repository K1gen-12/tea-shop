"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/product";
import { Minus, Plus } from "lucide-react";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    if (product.stock_status === "out_of_stock") {
        return (
            <Button disabled className="w-full md:w-auto flex-1 font-bold">
                在庫切れ
            </Button>
        );
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex items-center border border-border-light rounded bg-white">
                <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                >
                    <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans-jp">{quantity}</span>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>

            <Button
                onClick={handleAdd}
                className="w-full md:w-auto flex-1 font-bold"
                disabled={isAdded}
            >
                {isAdded ? "カートに追加しました" : "カートに入れる"}
            </Button>
        </div>
    );
}
