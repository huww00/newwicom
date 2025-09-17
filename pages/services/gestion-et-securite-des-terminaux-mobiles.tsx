import React from "react";
import ServicePage from "../../components/ServicePage";

export default function GestionSecuriteTerminaux() {
  return (
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
        {
          title: "Visuels du service",
          imageUrls: [
            "https://www.groupesaph.com/wp-content/uploads/2025/08/telephonie-mobile-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/08/terminaux-mobiles-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/09/SAPHELEC-SFR-02-scaled.png",
          ],
        },
      ]}
    />
  );
}
