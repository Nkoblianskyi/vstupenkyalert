export type Event = {
  id: number
  title: string
  date: string
  venue: string
  category: string
  priceFrom: number
  image: string
}

export const allEvents: Event[] = [
  {
    id: 1,
    title: "Colours of Ostrava 2026",
    date: "16. 7. – 19. 7. 2026",
    venue: "Dolní oblast Vítkovice, Ostrava",
    category: "Festival",
    priceFrom: 2490,
    image: "/images/sziget-2026.jpg",
  },
  {
    id: 2,
    title: "Rammstein – Praha",
    date: "8. 7. 2026",
    venue: "Letiště Letňany, Praha",
    category: "Koncert",
    priceFrom: 2950,
    image: "/images/rammstein-2026.jpg",
  },
  {
    id: 3,
    title: "Coldplay – Music of the Spheres World Tour",
    date: "14. 6. 2026",
    venue: "Letiště Letňany, Praha",
    category: "Koncert",
    priceFrom: 3200,
    image: "/images/coldplay-2026.jpg",
  },
  {
    id: 4,
    title: "Pražské jaro – Jazz",
    date: "19. 8. – 23. 8. 2026",
    venue: "Rudolfinum, Praha",
    category: "Festival",
    priceFrom: 890,
    image: "/images/jazz-2026.jpg",
  },
  {
    id: 5,
    title: "Sparta – Slavia",
    date: "21. 3. 2026",
    venue: "Generali Arena, Praha",
    category: "Sport",
    priceFrom: 450,
    image: "/images/fradi-2026.jpg",
  },
  {
    id: 6,
    title: "Ed Sheeran – +-=÷× Tour",
    date: "30. 5. 2026",
    venue: "Letiště Letňany, Praha",
    category: "Koncert",
    priceFrom: 2190,
    image: "/images/ed-sheeran-2026.jpg",
  },
  {
    id: 7,
    title: "Rock for People 2026",
    date: "25. 6. – 28. 6. 2026",
    venue: "Hradec Králové",
    category: "Festival",
    priceFrom: 2990,
    image: "/images/volt-2026.jpg",
  },
  {
    id: 8,
    title: "Národní divadlo – Cyrano de Bergerac",
    date: "15. 3. 2026",
    venue: "Národní divadlo, Praha",
    category: "Divadlo",
    priceFrom: 590,
    image: "/images/vigszinhaz-2026.jpg",
  },
  {
    id: 9,
    title: "Formula 1 – Velká cena ČR",
    date: "16. 5. 2026",
    venue: "Automotodrom Brno",
    category: "Sport",
    priceFrom: 1990,
    image: "/images/formula-e-2026.jpg",
  },
  {
    id: 10,
    title: "Česká filharmonie – Velikonoční gala",
    date: "5. 4. 2026",
    venue: "Rudolfinum, Praha",
    category: "Jiné",
    priceFrom: 690,
    image: "/images/filharmonikusok-2026.jpg",
  },
  {
    id: 11,
    title: "Prague Open – WTA tenis",
    date: "18. 7. – 26. 7. 2026",
    venue: "TK Sparta Praha",
    category: "Sport",
    priceFrom: 720,
    image: "/images/tennis-2026.jpg",
  },
  {
    id: 12,
    title: "Metallica – M72 World Tour",
    date: "3. 9. 2026",
    venue: "Letiště Letňany, Praha",
    category: "Koncert",
    priceFrom: 3100,
    image: "/images/metallica-2026.jpg",
  },
]

export function getEventById(id: number) {
  return allEvents.find((e) => e.id === id)
}

const eventDescriptions: Record<number, string> = {
  1: "Colours of Ostrava je jeden z největších mult žánrových festivalů ve střední Evropě. V industriálním areálu Dolních Vítkovic každoročně vystupují světové hvězdy i domácí favorité. V roce 2026 čekají návštěvníky skvělé programy, speciální stage a nezapomenutelná atmosféra.",
  2: "Rammstein patří k největším metalovým kapelám světa. V Praze na Letňanech vystoupí v rámci jedinečného večera – masivní show, ikonické skladby a ohromná pyrotechnika. Vstupenky mizí rychle.",
  3: "Coldplay s turné Music of the Spheres zavítá i do Prahy. Britská kapela nabídne barevnou, vizuálně strhující show a největší hity na celoživotní zážitek.",
  4: "Pražské jaro – Jazzová sekce přináší do Rudolfina špičkové jazzové koncerty. Mezinárodní i české hvězdy, příjemná atmosféra a různorodé styly.",
  5: "Sparta proti Slavii – fotbalové derby v Praze. Na Generali Areně zažijete napětí a emoce živého zápasu.",
  6: "Ed Sheeran s turné +-=÷× nabídne mix akustických i elektronických písní. Letiště Letňany s obrovskou kapacitou hostí jeden z největších koncertů sezóny.",
  7: "Rock for People v Hradci Králové láká na rock, pop a alternativu. Více dní kempování, několik stage a program pro každého.",
  8: "Národní divadlo uvádí Cyrana de Bergeraca v moderním pojetí. Klasická divadelní hra v jedné z nejoblíbenějších scén v Praze.",
  9: "Velká cena ČR Formule 1 na brněnském automotodromu. Elektrické závody, napětí a festivalová atmosféra na jednom místě.",
  10: "Česká filharmonie – Velikonoční gala v Rudolfinu nabízí vážnou hudbu v sváteční atmosféře. Vynikající interpreti a ikonická díla.",
  11: "Prague Open WTA je jedním z hlavních tenisových turnajů v Česku. Mezinárodní hvězdy hrají v českých barvách.",
  12: "Metallica M72 World Tour přijíždí do Prahy ve dvouvečerním formátu. Metalové ikony v plné síle na Letňanech.",
}

export function getEventDescription(eventId: number): string {
  return eventDescriptions[eventId] ?? "Užijte si událost podle podmínek vybraného partnera. Pro detaily klikněte na tlačítko Nabídka."
}

export const partners = [
  { name: "Ticketmaster CZ", url: "https://www.ticketmaster.cz", specialty: "Koncert, Sport, Festival" },
  { name: "Eventim CZ", url: "https://www.eventim.cz", specialty: "Koncert, Divadlo, Sport" },
  { name: "StubHub", url: "https://stubhub.com", specialty: "Sekundární trh" },
  { name: "Viagogo", url: "https://viagogo.com", specialty: "Koncert, Sport, Festival" },
  { name: "Slevomat", url: "https://www.slevomat.cz", specialty: "Festival, Lokální akce" },
  { name: "GoOut", url: "https://goout.net", specialty: "Koncert, Kultura, Divadlo" },
]
