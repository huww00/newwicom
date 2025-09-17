import React from "react";
import ServicePage from "../../components/ServicePage";

export default function TelephonieTeams() {
  return (
    <ServicePage
      title="Téléphonie Teams"
      description="Unifiez appels et collaboration avec Microsoft Teams. Connectez votre standard d’entreprise au réseau téléphonique pour une expérience fluide."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/09/telephonie-teams-600x380.png"
      sections={[
        { title: "Bénéfices", items: ["Numéros et routage d’appels dans Teams", "Softphone multi-terminaux", "Contrôle et reporting centralisés"] },
      ]}
    />
  );
}
