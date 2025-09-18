import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function SolutionsWifi() {
  return (
    <>
      <ServicePage
        title="Solutions WIFI"
        description="Optimisez votre couverture sans fil avec des solutions WiFi professionnelles, performantes et sécurisées."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/08/wifi-800x506.png"
        sections={[
          { title: "Enjeux", items: ["Études de site et dimensionnement", "Qualité d’expérience utilisateur", "Portails invités et segmentation"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Études et déploiement</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Site survey, plan de couverture, placement des points d’accès et contrôleurs centralisés.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Expérience et sécurité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">QoE, roaming optimisé, WPA3/802.1X, segmentation et portails invités.</p>
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
