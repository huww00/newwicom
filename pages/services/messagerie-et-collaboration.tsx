import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";

export default function MessagerieCollaboration() {
  return (
    <>
      <ServicePage
        title="Messagerie et Collaboration"
        description="Outillez vos équipes avec messagerie professionnelle, calendriers partagés et espaces de collaboration pour gagner en efficacité."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/08/Communication-et-Collaboration-1-800x506.png"
        sections={[
          { title: "Solutions", items: ["Messagerie professionnelle", "Stockage et partage sécurisés", "Co-édition de documents"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Messagerie et calendrier</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Comptes professionnels, archivage, politiques anti‑spam/anti‑phishing et délégation sécurisée des agendas.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Espaces de collaboration</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Partage de fichiers, co‑édition, workflows et automatisations pour gagner en efficacité au quotidien.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Gouvernance et conformité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Rétention, classification et contrôle d’accès; protection des informations sensibles et audits.</p>
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
