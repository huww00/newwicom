import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function TelephonieTeams() {
  return (
    <>
      <ServicePage
        title="Téléphonie Teams"
        description="Unifiez appels et collaboration avec Microsoft Teams. Connectez votre standard d’entreprise au réseau téléphonique pour une expérience fluide."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/09/telephonie-teams-600x380.png"
        sections={[
          { title: "Bénéfices", items: ["Numéros et routage d’appels dans Teams", "Softphone multi-terminaux", "Contrôle et reporting centralisés"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Direct Routing / Operator Connect</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Connectez Teams au réseau téléphonique via SBC certifiés, conservez vos numéros et scénarios d’appels existants.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Expérience utilisateur</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Softphone, mobile et postes Teams certifiés; supervision, files d’attente et enregistrements selon les besoins.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Sécurité et conformité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Gestion des identités, MFA, politiques de rétention et conformité aux exigences métiers.</p>
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
