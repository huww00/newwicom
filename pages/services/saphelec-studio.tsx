import React from "react";
import ServicePage from "../../components/ServicePage";

export default function SaphelecStudio() {
  return (
    <ServicePage
      title="Saphelec Studio"
      description="Créez des expériences audiovisuelles sur-mesure pour vos espaces et votre communication. Catalogue de musiques et solutions d’ambiance."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/09/saphelec-studio-800x506.png"
      sections={[
        { title: "Prestations", items: ["Design sonore et playlists", "Intégration audiovisuelle", "Support et maintenance"] },
      ]}
    />
  );
}
