import React from "react";

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
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold font-FoundersGrotesk leading-tight">{title}</h1>
            <p className="mt-6 text-base lg:text-lg text-gray-700 font-NeueMontreal">{description}</p>
          </div>
          {heroImage ? (
            <div className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroImage} alt={title} className="w-full h-auto rounded-2xl border border-gray-200 shadow-sm object-cover" loading="lazy" />
            </div>
          ) : null}
        </div>
      </section>

      {sections.length > 0 ? (
        <section className="w-full padding-x pb-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {sections.map((sec) => (
              <div key={sec.title} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl lg:text-2xl font-semibold font-FoundersGrotesk">{sec.title}</h2>
                {sec.items && sec.items.length > 0 ? (
                  <ul className="mt-4 grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700 font-NeueMontreal">
                    {sec.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ) : null}
                {sec.imageUrls && sec.imageUrls.length > 0 ? (
                  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sec.imageUrls.map((url) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={url} src={url} alt={sec.title} className="w-full h-40 object-contain bg-white rounded-xl border border-gray-200 p-3" loading="lazy" />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
