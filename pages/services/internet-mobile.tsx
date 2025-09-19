import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";
import ServiceContactForm from "../../components/ServiceContactForm";

export default function InternetMobile() {
  return (
    <>
      <ServicePage
        title="Des forfaits internet mobile conçus pour les entreprises !"
        description="Forfaits 4G et 5G adaptés aux sites temporaires, à la connexion bureautique et au travail nomade. Accédez à vos applications de n’importe où avec une connectivité fiable."
        heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/internet-mobile-scaled.png"
        sections={[
          {
            title: "Cas d’usage",
            items: [
              "Sites temporaires et chantiers",
              "Connexion bureautique sécurisée",
              "Nomadisme et télétravail",
            ],
          },
          {
            title: "Visuels du service",
            imageUrls: [
              "https://www.groupesaph.com/wp-content/uploads/2025/09/SAPHELEC-SFR-02-scaled.png",
              "https://www.groupesaph.com/wp-content/uploads/2025/09/SAPHELEC-SFR-2-scaled.png",
            ],
          },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Des forfaits internet mobiles conçus pour les entreprises</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Que ce soit pour un usage ponctuel ou une connexion permanente, notre gamme de forfaits 4G et 5G répondra à l’ensemble de vos besoins.</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Une gamme de produits et services exclusive</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Produits et services pour les professionnels : routeurs nomades, routeurs reliés à votre réseau d’entreprise, solutions externes à placer sur le toit de vos bâtiments, …</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Une tarification claire et avantageuse</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Des forfaits illimités ou des packs de Go, des options de bridage pour éviter les dépassements : nous avons LE forfait dont vous avez besoin !</p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Et toujours la qualité de service SAPHELEC</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">Le meilleur du conseil et de l’accompagnement en téléphonie mobile depuis plus de dix ans, pour être sûr de prendre la meilleure décision.</p>
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
