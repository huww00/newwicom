import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function ReseauxVpnSdwan() {
  return (
    <>
      <ServicePage
        title="Réseaux VPN & SD-WAN"
        description="Modernisez votre réseau d’entreprise avec VPN et SD-WAN pour une connectivité sécurisée, performante et pilotable."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/08/reseaux-vpn-600x380.png"
        sections={[
          { title: "Bénéfices", items: ["Routage intelligent", "Sécurité renforcée", "Observabilité et contrôle"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Performance applicative</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Routage dynamique, priorisation des flux et surveillance de l’expérience applicative.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Sécurité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Segmentation, tunnels chiffrés, pare��feu/UTM et intégration SASE.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Pilotage</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Portail centralisé, politiques par site et tableaux de bord pour une gouvernance fine.</p>
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
