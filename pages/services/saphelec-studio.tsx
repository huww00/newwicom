import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function SaphelecStudio() {
  return (
    <>
      <ServicePage
        title="Saphelec Studio"
        description="Créez des expériences audiovisuelles sur‑mesure pour vos espaces et votre communication. Catalogue de musiques et solutions d’ambiance."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/09/saphelec-studio-800x506.png"
        sections={[
          { title: "Prestations", items: ["Design sonore et playlists", "Intégration audiovisuelle", "Support et maintenance"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Design sonore & identité de marque</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Création de playlists, habillage sonore de points de vente et événements, respect de votre charte.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Intégration audiovisuelle</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Écrans d’affichage, systèmes audio, pilotage centralisé et contenu dynamique selon vos campagnes.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Ambiance, signalétique & diffusion</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Création d’expériences immersives: scénarisation de l’espace, diffusion multi‑zones et messages ciblés.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Support & maintenance</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Supervision, mises à jour de contenu, interventions sur site et engagements de service.</p>
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
