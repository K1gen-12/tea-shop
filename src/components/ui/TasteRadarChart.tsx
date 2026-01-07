"use client";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { TASTE_LABELS } from "@/lib/constants";
import { Product } from "@/types/product";

interface TasteRadarChartProps {
    data: Product["taste_profile"];
    className?: string;
}

export function TasteRadarChart({ data, className }: TasteRadarChartProps) {
    const chartData = [
        { subject: TASTE_LABELS.sweetness, A: data.sweetness, fullMark: 5 },
        { subject: TASTE_LABELS.bitterness, A: data.bitterness, fullMark: 5 },
        { subject: TASTE_LABELS.umami, A: data.umami, fullMark: 5 },
        { subject: TASTE_LABELS.fragrance, A: data.fragrance, fullMark: 5 },
    ];

    return (
        <div className={className} style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="#E5E5E5" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#333333", fontSize: 12, fontFamily: "var(--font-sans-jp)" }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={false} axisLine={false} />
                    <Radar
                        name="Taste"
                        dataKey="A"
                        stroke="#4B6E5B"
                        strokeWidth={2}
                        fill="#4B6E5B"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
