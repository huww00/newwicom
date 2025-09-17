import React from "react";
import ServicePage from "../../components/ServicePage";

export default function Telephonie3CX() {
  return (
    <ServicePage
      title="Téléphonie 3CX"
      description="Déployez une solution de communications unifiées 3CX : standard IP, softphones, visioconférence et centre d’appels, en toute simplicité."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/3CX-800x506.png"
      sections={[
        { title: "Fonctionnalités", items: ["Softphone et mobile apps", "SVI, files d’attente, enregistrements", "Visio intégrée et chat"] },
      ]}
    />
  );
}
