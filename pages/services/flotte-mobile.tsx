import React from "react";
import ServicePage from "../../components/ServicePage";

export default function FlotteMobile() {
  return (
    <ServicePage
      title="Solution de gestion de flotte mobile"
      description="Externalisez la gestion et la supervision de votre flotte mobile pour gagner en sécurité, en maîtrise et en performance. Un point de contrôle unique pour déployer, administrer et optimiser votre parc."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/09/flotte-mobile-scaled.png"
      sections={[
        {
          title: "Périmètre d’infogérance",
          items: [
            "Provisioning et déploiement des terminaux",
            "Supervision et alerting centralisés",
            "Politiques de sécurité et conformité",
          ],
        },
        {
          title: "Visuels du service",
          imageUrls: [
            "https://www.groupesaph.com/wp-content/uploads/2025/08/telephonie-mobile-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/08/terminaux-mobiles-scaled.png",
          ],
        },
      ]}
    />
  );
}
