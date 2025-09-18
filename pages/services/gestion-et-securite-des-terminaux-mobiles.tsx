import React from "react";
import ServicePage from "../../components/ServicePage";
import { MotionCard, MotionSection } from "../../components/Motion";

export default function GestionSecuriteTerminaux() {
  return (
    <>
      <ServicePage
        title="Gestion et sécurité des terminaux mobiles assurée !"
        description="Protégez les données de l’entreprise et de vos collaborateurs. Déployez, sécurisez et supervisez votre flotte de smartphones et tablettes avec une gestion centralisée."
        heroImage="https://www.groupesaph.com/wp-content/uploads/2025/09/terminaux-mobiles-scaled.png"
        sections={[
          {
            title: "Objectifs clés",
            items: [
              "Sécurisation des terminaux et des données",
              "Déploiement et administration centralisés",
              "Contrôles et conformité à l’échelle",
            ],
          },
        ]}
      />

      <section className="w-full padding-x pb-24 -mt-8">
        <MotionSection className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8" direction="up">
          <div className="lg:col-span-3 space-y-10">
            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Configurez à distance les terminaux mobiles</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                <strong>Déployez sans fil les configurations email</strong>, VPN, Wi‑Fi et imposez des restrictions spécifiques par profil.
              </p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Déployez des applications en toute simplicité</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                Définissez les applications indispensables par profil utilisateur et <strong>pilotez leur déploiement</strong> depuis un outil unique.
              </p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Définissez une stratégie de sécurité adaptée</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                Mots de passe, chiffrement, effacement à distance en cas de perte ou vol : bâtissez une politique de sécurité par profil utilisateur.
              </p>
            </MotionCard>

            <MotionCard className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold font-FoundersGrotesk">Bénéficiez d’un outil de gestion de parc</h2>
              <p className="mt-4 text-gray-700 font-NeueMontreal">
                Supervisez l’ensemble de vos terminaux dans un <strong>outil de gestion unique</strong>, accessible depuis un simple navigateur.
              </p>
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
