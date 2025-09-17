import React from "react";

// Data
type LinkItem = { label: string; href: string; image: string; alt: string; external?: boolean };

type Category = { key: string; title: string; links: LinkItem[] };

const categories: Category[] = [
  {
    key: "solutions-mobiles",
    title: "Solutions Mobiles",
    links: [
      { label: "Téléphonie mobile", href: "https://www.groupesaph.com/telephonie-mobile/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/telephonie-mobile-600x380.png", alt: "Téléphonie mobile" },
      { label: "Internet mobile", href: "https://www.groupesaph.com/internet-mobile/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/internet-mobile-800x506.png", alt: "Internet mobile" },
      { label: "Gestion et sécurité des terminaux mobiles", href: "https://www.groupesaph.com/gestion-et-securite-des-terminaux-mobiles/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/terminaux-mobiles-800x506.png", alt: "Gestion et sécurité des terminaux mobiles" },
      { label: "Location de smartphone", href: "https://www.groupesaph.com/location-de-smartphone/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/location-de-smartphone-600x380.png", alt: "Location de smartphone" },
      { label: "Recyclage et équipements reconditionnés", href: "https://www.groupesaph.com/equipements-reconditionnes/", image: "https://www.groupesaph.com/wp-content/uploads/2025/09/equipements-reconditionnes-800x506.png", alt: "Recyclage et équipements reconditionnés" },
      { label: "Infogérance Mobile", href: "https://www.groupesaph.com/flotte-mobile/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/partenaires-800x506.png", alt: "Infogérance Mobile" },
    ],
  },
  {
    key: "communication-collaboration",
    title: "Communication et Collaboration",
    links: [
      { label: "Téléphonie hébergée SFR", href: "https://www.groupesaph.com/telephonie-hebergee-sfr/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/SFR-600x380.png", alt: "Téléphonie hébergée SFR" },
      { label: "Téléphonie Teams", href: "https://www.groupesaph.com/telephonie-teams/", image: "https://www.groupesaph.com/wp-content/uploads/2025/09/telephonie-teams-600x380.png", alt: "Téléphonie Teams" },
      { label: "Téléphonie 3CX", href: "https://www.groupesaph.com/telephonie-3cx/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/3CX-800x506.png", alt: "Téléphonie 3CX" },
      { label: "Vidéoconférence et écran collaboratif", href: "https://www.groupesaph.com/ecran-collaboratif/", image: "https://www.groupesaph.com/wp-content/uploads/2025/09/ecran-collaboratif-600x380.png", alt: "Vidéoconférence et écran collaboratif" },
      { label: "Messagerie et Collaboration", href: "https://www.groupesaph.com/messagerie-et-collaboration/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/Communication-et-Collaboration-1-800x506.png", alt: "Messagerie et Collaboration" },
      { label: "Saphelec Studio", href: "https://www.idstudios.fr/audiovisuelle/saphelec/catalogue-de-musiques/", image: "https://www.groupesaph.com/wp-content/uploads/2025/09/saphelec-studio-800x506.png", alt: "Saphelec Studio", external: true },
    ],
  },
  {
    key: "reseaux-securite",
    title: "Réseaux et sécurité",
    links: [
      { label: "Accès internet", href: "https://www.groupesaph.com/acces-internet/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/acces-internet-600x380.png", alt: "Accès internet" },
      { label: "Réseaux VPN & SD-WAN", href: "https://www.groupesaph.com/reseaux-vpn-et-sd-wan/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/reseaux-vpn-600x380.png", alt: "Réseaux VPN & SD-WAN" },
      { label: "Solutions WIFI", href: "https://www.groupesaph.com/solutions-wifi/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/wifi-800x506.png", alt: "Solutions WIFI" },
      { label: "Cybersécurité", href: "https://www.groupesaph.com/cybersecurite/", image: "https://www.groupesaph.com/wp-content/uploads/2025/08/cybersecurite-800x506.png", alt: "Cybersécurité" },
    ],
  },
];

export default function SecondaryHeader() {
  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-gray-200/70 py-2 relative z-40 mt-[8vh]">
      <div className="w-full padding-x">
        <nav className="flex items-center justify-center gap-8">
          {categories.map((cat) => (
            <div key={cat.key} className="group relative">
              <button className="flex items-center gap-2 py-3 px-2 text-[15px] font-medium text-gray-800 hover:text-gray-900">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-800" />
                <span className="font-NeueMontreal">{cat.title}</span>
                <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>

              <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1200px] max-w-[96vw] bg-white rounded-[24px] border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pointer-events-none opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-50 max-h-[85vh] overflow-y-auto overscroll-contain">
                {cat.links.map((link) => (
                  <li key={`${cat.key}-${link.label}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener" : undefined}
                      className="group/card block"
                    >
                      <div className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col items-center">
                        <img src={link.image} alt={link.alt} className="w-60 h-36 object-contain" loading="lazy" />
                        <p className="mt-3 text-center text-[15px] text-gray-800 font-medium">{link.label}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
