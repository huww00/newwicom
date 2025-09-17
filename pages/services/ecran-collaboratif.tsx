import React from "react";
import ServicePage from "../../components/ServicePage";

export default function EcranCollaboratif() {
  return (
    <ServicePage
      title="Vidéoconférence et écran collaboratif"
      description="Equipez vos salles avec des écrans collaboratifs et des systèmes de visioconférence pour des réunions fluides et interactives."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/09/ecran-collaboratif-600x380.png"
      sections={[
        { title: "Cas d’usage", items: ["Salles de réunion et espaces de formation", "Travail hybride et brainstorm", "Interopérabilité Teams/Zoom/Meet"] },
      ]}
    />
  );
}
