import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function EquipementsReconditionnes() {
  return (
    <>
      <ServicePage
        title="Recyclage et équipements reconditionnés"
        description="Valorisez votre parc mobile en fin de vie : reprise, effacement sécurisé des données, traçabilité et fourniture d’équipements reconditionnés (grades A/B) pour réduire les coûts et l’empreinte carbone."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/09/equipements-reconditionnes-scaled.png"
        sections={[
          { title: "Nos engagements", items: ["Effacement certifié des données et conformité RGPD", "Traçabilité et certificats de recyclage", "Appareils reconditionnés testés et garantis"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Donnez une seconde vie à vos équipements</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Reprise, reconditionnement et réemploi des terminaux pour une économie circulaire maîtrisée.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Sécurité et conformité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Effacement sécurisé certifié, respect du RGPD, traçabilité complète des lots et certificats fournis.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Qualité contrôlée</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Grades A/B, batteries testées, garanties et assistance pour un parc fiable et durable.</p>
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
