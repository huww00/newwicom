import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";

export default function TelephonieMobile() {
  return (
    <>
      <ServicePage
        title="Votre téléphonie mobile prend une nouvelle dimension !"
        description="Solutions de téléphonie mobile professionnelles sous l’égide de SFR Business. Offres, forfaits et smartphones pour entreprises avec outils pensés pour rendre vos équipes plus mobiles et performantes."
        heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/telephonie-mobile-scaled.png"
        sections={[
          {
            title: "Gamme d’offres pour entreprises",
            items: [
              "Forfaits 4G/5G professionnels",
              "Smartphones et terminaux adaptés au métier",
              "Options et services associés (messagerie, collaboration)",
            ],
          },
          {
            title: "Visuels clés",
            imageUrls: [
              "https://www.groupesaph.com/wp-content/uploads/2025/08/internet-mobile-scaled.png",
              "https://www.groupesaph.com/wp-content/uploads/2025/08/terminaux-mobiles-scaled.png",
              "https://www.groupesaph.com/wp-content/uploads/2025/08/location-de-smartphone-scaled.png",
            ],
          },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          {/* Left content */}
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Des forfaits mobiles conçus pour les entreprises</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                Vous avez des besoins spécifiques concernant la téléphonie de votre entreprise, nous avons des solutions adéquates : une large gamme tarifaire, des smartphones à la pointe, des options pour n’avoir que ce dont vous avez réellement besoin, vous permettant de <strong>constituer vos flottes mobiles sur-mesure</strong>.
              </p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Une gamme de services exclusifs</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                SAPHELEC vous propose un ensemble de services développés pour les professionnels : appels à l’international, SMS illimités, <strong>gestion des terminaux à distance</strong>, 2ème carte SIM …
              </p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Une tarification claire et avantageuse</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                <strong>Facturation à la seconde</strong> dès la première seconde en France et à l’étranger, remises selon le nombre de lignes, tarification dégressive.
              </p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Et toujours la qualité de service SAPHELEC</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                Le meilleur du conseil et de l’accompagnement en téléphonie mobile depuis plus de dix ans, pour être sûr de prendre la meilleure décision.
              </p>
            </MotionCard>
          </div>

          {/* Right sticky form */}
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
                    allow="fullscreen"
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
