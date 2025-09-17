import React from "react";
import ServicePage from "../../components/ServicePage";

export default function EquipementsReconditionnes() {
  return (
    <ServicePage
      title="Recyclage et équipements reconditionnés"
      description="Valorisez votre parc mobile en fin de vie : reprise, effacement sécurisé des données, traçabilité et fourniture d’équipements reconditionnés (grades A/B) pour réduire les coûts et l’empreinte carbone."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/09/equipements-reconditionnes-scaled.png"
      sections={[
        {
          title: "Nos engagements",
          items: [
            "Effacement certifié des données et conformité RGPD",
            "Traçabilité et certification de recyclage",
            "Appareils reconditionnés testés et garantis",
          ],
        },
      ]}
    />
  );
}
