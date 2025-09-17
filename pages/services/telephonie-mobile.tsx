import React from "react";
import ServicePage from "../../components/ServicePage";

export default function TelephonieMobile() {
  return (
    <ServicePage
      title="Votre téléphonie mobile prend une nouvelle dimension !"
      description="Solutions de téléphonie mobile professionnelles sous l’égide de SFR Business. Offres, forfaits et smartphones pour entreprises avec outils pensés pour rendre vos équipes plus mobiles et performantes."
      heroImage="https://www.groupesaph.com/wp-content/uploads/2025/08/telephonie-mobile-scaled.png"
      sections={[
        {
          title: "Gamme d’offres pour entreprises",
          items: [
            "Forfaits 4G/5G professionnels",
            "Smartphones et terminaux adaptés au métier",
            "Options et services associés (messagerie, collaboration)",
          ],
        },
        {
          title: "Visuels clés",
          imageUrls: [
            "https://www.groupesaph.com/wp-content/uploads/2025/08/internet-mobile-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/08/terminaux-mobiles-scaled.png",
            "https://www.groupesaph.com/wp-content/uploads/2025/08/location-de-smartphone-scaled.png",
          ],
        },
      ]}
    />
  );
}
