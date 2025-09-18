import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";

export default function FlotteMobile() {
  return (
    <>
      <ServicePage
        title="Solution de gestion de flotte mobile"
        description="Externalisez la gestion et la supervision de votre flotte mobile pour gagner en sécurité, en maîtrise et en performance. Un point de contrôle unique pour déployer, administrer et optimiser votre parc."
        heroImage="https://images.weserv.nl/?url=www.groupesaph.com/wp-content/uploads/2025/09/flotte-mobile-scaled.png"
        sections={[
          { title: "Périmètre d’infogérance", items: ["Provisioning et déploiement", "Supervision et alerting", "Politiques de sécurité et conformité"] },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Centre de service et pilotage</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Prise en charge des demandes utilisateur, suivi des incidents et pilotage des actions en continu.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Optimisation du parc</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Catalogue d’équipements, renouvellement, rationalisation des coûts et tableaux de bord.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Sécurité opérée</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Politiques MDM, chiffrement, conformité et actions d’urgence à distance.</p>
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
