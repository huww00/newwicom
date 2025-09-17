import React from "react";
import { MotionCard, MotionImage, MotionSection } from "./Motion";

export type ServiceSection = {
  title: string;
  items?: string[];
  imageUrls?: string[];
};

export interface ServicePageProps {
  title: string;
  description: string;
  heroImage?: string;
  sections?: ServiceSection[];
}

export default function ServicePage({ title, description, heroImage, sections = [] }: ServicePageProps) {
  return (
    <main className="min-h-screen bg-background text-secondry">
      <section className="w-full padding-x py-16 lg:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <MotionSection direction="up">
            <h1 className="text-3xl lg:text-5xl font-bold font-FoundersGrotesk leading-tight">{title}</h1>
            <p className="mt-6 text-base lg:text-lg text-gray-700 font-NeueMontreal">{description}</p>
          </MotionSection>
          {heroImage ? (
            <MotionImage direction="left" className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroImage} alt={title} className="w-full h-auto rounded-2xl border border-gray-200 shadow-sm object-cover" loading="lazy" />
            </MotionImage>
          ) : null}
        </div>
      </section>

      {sections.length > 0 ? (
        <section className="w-full padding-x pb-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {sections.map((sec, idx) => (
              <MotionCard key={sec.title} delay={idx * 0.05} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm focus-within:ring-2 focus-within:ring-marquee/50">
                <h2 className="text-xl lg:text-2xl font-semibold font-FoundersGrotesk">{sec.title}</h2>
                {sec.items && sec.items.length > 0 ? (
                  <ul className="mt-4 grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700 font-NeueMontreal">
                    {sec.items.map((it) => (
                      <li key={it} className="transition-colors hover:text-gray-900">{it}</li>
                    ))}
                  </ul>
                ) : null}
                {sec.imageUrls && sec.imageUrls.length > 0 ? (
                  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sec.imageUrls.map((url) => (
                      <MotionImage key={url}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={url} alt={sec.title} className="w-full h-40 object-contain bg-white rounded-xl border border-gray-200 p-3" loading="lazy" />
                      </MotionImage>
                    ))}
                  </div>
                ) : null}
              </MotionCard>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
