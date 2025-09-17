import React from "react";
import ServicePage from "../../components/ServicePage";

export default function Cybersecurite() {
  return (
    <ServicePage
      title="Cybersécurité"
      description="Protégez vos utilisateurs, terminaux et données contre les menaces. Déployez des politiques de sécurité adaptées et supervisées."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/cybersecurite-800x506.png"
      sections={[
        { title: "Périmètre", items: ["Protection endpoint et mobile", "Pare-feu/UTM & filtrage", "Sensibilisation et conformité"] },
      ]}
    />
  );
}
