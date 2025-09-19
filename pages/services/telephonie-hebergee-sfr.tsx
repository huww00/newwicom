import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function TelephonieHebergeeSFR() {
  return (
    <>
      <ServicePage
        title="Téléphonie hébergée SFR"
        description="Passez à une téléphonie d’entreprise hébergée, flexible et sécurisée, opérée par SFR Business. Simplifiez la gestion, gagnez en fiabilité et équipez vos collaborateurs partout."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/08/SFR-600x380.png"
        sections={[
          { title: "Atouts clés", items: ["Haute disponibilité opérateur", "Échelle flexible et gestion simplifiée", "Intégration avec outils de collaboration"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Migration vers une voix IP opérée</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Portage de numéros, scénarios d’appels, SVI et files d’attente opérées dans le cloud pour réduire l’infrastructure sur site.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Qualité de service et continuité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">SLA opérateur, redondance multi-sites et politiques QoS pour garantir une expérience d’appel stable.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Interopérabilité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Intégration Outlook/Teams/CRM, terminaux IP certifiés et softphones multi-plateformes.</p>
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
