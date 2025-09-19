import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionImage, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function LocationDeSmartphone() {
  return (
    <>
      <ServicePage
        title="La location de smartphone n’a jamais été aussi simple !"
        description="Accédez à des terminaux de dernière génération à partir de tarifs mensuels attractifs. Simplifiez votre gestion de parc avec des services associés et un accompagnement complet."
        heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/location-de-smartphone-scaled.png"
        sections={[
          {
            title: "Bénéfices clés",
            items: [
              "Budget prévisible et sans surprise",
              "Renouvellement facile des terminaux",
              "Assistance et services associés",
            ],
          },
        ]}
      />

      {/* Centered image and headings */}
      <section className="w-full padding-x pb-4 -mt-6">
        <div className="max-w-4xl mx-auto">
          <MotionImage className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.groupesaph.com/wp-content/uploads/2025/08/location-de-smartphone-scaled.png" alt="Location de smartphone" className="max-w-full h-auto" />
          </MotionImage>
          <div className="text-center mt-6">
            <h3 className="uppercase tracking-[0.3em] text-xs text-gray-700">Tout ce qui dure plus d’un an dans une entreprise devrait être loué !</h3>
            <h2 className="text-2xl lg:text-3xl font-FoundersGrotesk font-bold mt-3">Louez vos tablettes et smartphones tout simplement</h2>
          </div>
        </div>
      </section>

      <section className="w-full padding-x pb-24">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Déployez des terminaux de dernière génération</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">La dernière génération de terminaux Apple disponible <strong>à partir de 6 euros HT</strong> par mois et par utilisateur.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Conservez votre trésorerie pour des projets stratégiques</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">La location est <strong>la solution pour vous équiper des meilleures technologies</strong>, sans investissement initial.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Bénéficiez de notre assistance téléphonique</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Vos utilisateurs profitent d’une <strong>assistance personnalisée</strong> pour leur accompagnement au quotidien.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Sécurisez votre flotte avec un MDM</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Déployez à distance les configurations et <strong>applications sélectionnées par l’entreprise</strong>, supervisez et sécurisez votre parc.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Webinar</h2>
              <p className="mt-2 text-gray-700 font-NeueMontreal">Prenez 30 minutes pour regarder notre webinar sur la gestion et la sécurisation des terminaux mobiles.</p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/rQhgBDFjTjg?autoplay=0&rel=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Webinar gestion et sécurisation"
                />
              </div>
            </MotionCard>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-24">
              <MotionCard className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-sm">
                <ServiceContactForm />
              </MotionCard>
            </div>
          </aside>
        </MotionSection>
      </section>
    </>
  );
}
