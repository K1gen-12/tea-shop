"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = z.object({
    fullName: z.string().min(1, "お名前は必須です"),
    email: z.string().email("メールアドレスの形式が正しくありません"),
    postalCode: z.string().regex(/^\d{3}-?\d{4}$/, "郵便番号の形式が正しくありません (例: 123-4567)"),
    address: z.string().min(1, "住所は必須です"),
    paymentMethod: z.enum(["credit", "bank", "cod"]),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutPage() {
    const { cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            paymentMethod: "credit"
        }
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log("Order Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        clearCart();
        router.push("/checkout/success");
    };

    return (
        <div className="container mx-auto px-4 md:px-8 py-12 max-w-2xl">
            <h1 className="font-serif-jp text-3xl text-center mb-12 text-green-900">注文手続き</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white p-6 md:p-8 rounded-lg border border-border-light space-y-6">
                    <h2 className="font-serif-jp text-xl mb-4 text-brown-700">配送先情報</h2>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-text-primary">お名前</label>
                        <input
                            {...register("fullName")}
                            className="w-full p-3 border border-gray-300 rounded focus:border-green-700 outline-none transition-colors"
                            placeholder="山田 太郎"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-text-primary">メールアドレス</label>
                        <input
                            {...register("email")}
                            className="w-full p-3 border border-gray-300 rounded focus:border-green-700 outline-none transition-colors"
                            placeholder="taro@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-text-primary">郵便番号</label>
                        <input
                            {...register("postalCode")}
                            className="w-full p-3 border border-gray-300 rounded focus:border-green-700 outline-none transition-colors"
                            placeholder="123-4567"
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-text-primary">住所</label>
                        <textarea
                            {...register("address")}
                            className="w-full p-3 border border-gray-300 rounded focus:border-green-700 outline-none transition-colors h-24"
                            placeholder="東京都..."
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                    </div>
                </div>

                {/* Payment */}
                <div className="bg-white p-6 md:p-8 rounded-lg border border-border-light space-y-6">
                    <h2 className="font-serif-jp text-xl mb-4 text-brown-700">お支払い方法</h2>
                    <div className="space-y-4">
                        <label className="flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-gray-50">
                            <input type="radio" value="credit" {...register("paymentMethod")} />
                            <span>クレジットカード</span>
                        </label>
                        <label className="flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-gray-50">
                            <input type="radio" value="bank" {...register("paymentMethod")} />
                            <span>銀行振込</span>
                        </label>
                        <label className="flex items-center gap-3 p-4 border rounded cursor-pointer hover:bg-gray-50">
                            <input type="radio" value="cod" {...register("paymentMethod")} />
                            <span>代金引換</span>
                        </label>
                    </div>
                </div>

                {/* Total & Submit */}
                <div className="bg-green-50 p-6 rounded-lg text-center space-y-4">
                    <div className="flex justify-between items-center text-lg md:text-xl font-bold text-green-900 border-b border-green-200 pb-4">
                        <span>お支払い合計</span>
                        <span>¥{cartTotal.toLocaleString()}</span>
                    </div>

                    <Button type="submit" isLoading={isSubmitting} className="w-full py-4 text-lg">
                        注文を確定する
                    </Button>
                </div>
            </form>
        </div>
    );
}
