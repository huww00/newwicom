import React from "react";
import ServicePage from "../../components/ServicePage";

export default function AccesInternet() {
  return (
    <ServicePage
      title="Accès internet"
      description="Reliez vos sites avec des accès internet professionnels haut débit et garanties adaptées à vos enjeux."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/acces-internet-600x380.png"
      sections={[
        { title: "Technologies", items: ["Fibre dédiée / mutualisée", "SDSL/4G/5G de secours", "Supervision et SLA"] },
      ]}
    />
  );
}
