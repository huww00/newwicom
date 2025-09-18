import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function EcranCollaboratif() {
  return (
    <>
      <ServicePage
        title="Vidéoconférence et écran collaboratif"
        description="Equipez vos salles avec des écrans collaboratifs et des systèmes de visioconférence pour des réunions fluides et interactives."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/09/ecran-collaboratif-600x380.png"
        sections={[
          { title: "Cas d’usage", items: ["Salles de réunion et espaces de formation", "Travail hybride et brainstorm", "Interopérabilité Teams/Zoom/Meet"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Salles de réunion modernes</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Barres de visio, écrans tactiles, réservation de salles et scénarios BYOD/BYOM pour un déploiement simple.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Interopérabilité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Compatibilité Teams/Zoom/Meet, partage sans fil sécurisé et audio/vidéo optimisés.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Support et supervision</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Surveillance proactive des équipements, mises à jour centralisées et support utilisateur.</p>
            </MotionCard>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-24">
              <MotionCard className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-gray-200">
                  <iframe
                    src="https://tally.so/embed/mZzGlo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Site Saph Expertise"
                    scrolling="no"
                  />
                </div>
              </MotionCard>
            </div>
          </aside>
        </MotionSection>
      </section>
    </>
  );
}
