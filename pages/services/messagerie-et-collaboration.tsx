import React from "react";
import ServicePage from "../../components/ServicePage";

export default function MessagerieCollaboration() {
  return (
    <ServicePage
      title="Messagerie et Collaboration"
      description="Outillez vos équipes avec messagerie professionnelle, calendriers partagés et espaces de collaboration pour gagner en efficacité."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/Communication-et-Collaboration-1-800x506.png"
      sections={[
        { title: "Solutions", items: ["Messagerie professionnelle", "Stockage et partage sécurisés", "Co-édition de documents"] },
      ]}
    />
  );
}
