import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function Telephonie3CX() {
  return (
    <>
      <ServicePage
        title="Téléphonie 3CX"
        description="Déployez une solution de communications unifiées 3CX : standard IP, softphones, visioconférence et centre d’appels, en toute simplicité."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/08/3CX-800x506.png"
        sections={[
          { title: "Fonctionnalités", items: ["Softphone et mobile apps", "SVI, files d’attente, enregistrements", "Visio intégrée et chat"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Centre d’appels</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Files d’attente, SVI, rapports temps réel et enregistrements pour une expérience client maîtrisée.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Applications et intégrations</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Softphones Windows/macOS/iOS/Android, intégrations CRM et notifications web.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Sécurité et supervision</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Chiffrement SRTP/TLS, politiques d’accès et supervision du système.</p>
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
