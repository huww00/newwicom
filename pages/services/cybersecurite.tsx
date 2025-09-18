import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function Cybersecurite() {
  return (
    <>
      <ServicePage
        title="Cybersécurité"
        description="Protégez vos utilisateurs, terminaux et données contre les menaces. Déployez des politiques de sécurité adaptées et supervisées."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/08/cybersecurite-800x506.png"
        sections={[
          { title: "Périmètre", items: ["Protection endpoint et mobile", "Pare-feu/UTM & filtrage", "Sensibilisation et conformité"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Protection des endpoints</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Antivirus nouvelle génération (EDR/XDR), protection mobile (MDM/MAM) et politiques de durcissement des postes.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Pare‑feu, filtrage et accès sécurisés</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Pare‑feu/UTM, VPN, filtrage DNS/URL et segmentation réseau pour limiter la surface d’attaque.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Supervision & réponse à incident</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Collecte de logs, alerting, playbooks de réponse et accompagnement lors d’incidents de sécurité.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Conformité & sensibilisation</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Politique de mots de passe, MFA, gestion des identités, formation phishing et conformité RGPD.</p>
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
