import React from "react";
import ServicePage from "../../components/ServicePage";

export default function SolutionsWifi() {
  return (
    <ServicePage
      title="Solutions WIFI"
      description="Optimisez votre couverture sans fil avec des solutions WiFi professionnelles, performantes et sécurisées."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/wifi-800x506.png"
      sections={[
        { title: "Enjeux", items: ["Études de site et dimensionnement", "Qualité d’expérience utilisateur", "Portails invités et segmentation"] },
      ]}
    />
  );
}
