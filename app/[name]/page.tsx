"use client";

import { notFound, redirect } from "next/navigation";
import { getCoachBySlug } from "@/app/data/utils";

export default async function CoachPage({
    params,
    }: {
    params: Promise<{ name: string }>;
    }) {
    const { name } = await params;
    const coachSlug = name;
    const coach = getCoachBySlug(coachSlug);

    if (!coach) {
        notFound();
    }

    redirect(`${coachSlug}/home`)
}
