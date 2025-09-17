import React from "react";
import ServicePage from "../../components/ServicePage";

export default function ReseauxVpnSdwan() {
  return (
    <ServicePage
      title="Réseaux VPN & SD-WAN"
      description="Modernisez votre réseau d’entreprise avec VPN et SD-WAN pour une connectivité sécurisée, performante et pilotable."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/reseaux-vpn-600x380.png"
      sections={[
        { title: "Bénéfices", items: ["Routage intelligent", "Sécurité renforcée", "Observabilité et contrôle"] },
      ]}
    />
  );
}
