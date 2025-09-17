import React from "react";
import ServicePage from "../../components/ServicePage";

export default function TelephonieHebergeeSFR() {
  return (
    <ServicePage
      title="Téléphonie hébergée SFR"
      description="Passez à une téléphonie d’entreprise hébergée, flexible et sécurisée, opérée par SFR Business. Simplifiez la gestion, gagnez en fiabilité et équipez vos collaborateurs partout."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/SFR-600x380.png"
      sections={[
        { title: "Atouts clés", items: ["Haute disponibilité opérateur", "Échelle flexible et gestion simplifiée", "Intégration avec outils de collaboration"] },
      ]}
    />
  );
}
