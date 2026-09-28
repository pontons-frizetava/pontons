// Disambiguates services that share a name across durations (e.g. the Ergoline tiers)
// so each option is unique once reduced to a plain string.
export function formatServiceLabel(service) {
  return service.duration ? `${service.name} (${service.duration})` : service.name
}

// Real PONTONS service & price list (source: the salon's current price sheets).
// Keep prices exact — do not round or invent. "no X €" = "from X €" as on the salon's sheets.
export const priceCategories = [
  {
    id: 'frizieru-pakalpojumi',
    label: 'Frizieru pakalpojumi',
    services: [
      { id: 'matu-mazgasana-zavesana', name: 'Matu mazgāšana + žāvēšana', price: 'no 15 €' },
      { id: 'svetku-veidojums', name: 'Svētku veidojums', price: 'no 25 €' },
      { id: 'veidosana-pieaugusiem-matiem', name: 'Veidošana pieaudzētiem matiem', price: 'no 20 €' },
      { id: 'sieviesu-griezums', name: 'Sieviešu griezums', price: 'no 25 €' },
      { id: 'ponijs-korekcija', name: '“Ponijs” korekcija (bez mazgāšanas)', price: 'no 5 €' },
      { id: 'matu-saknu-krasosana', name: 'Matu sakņu krāsošana', price: 'no 40 €' },
      { id: 'matu-krasosana-viena-toni', name: 'Matu krāsošana vienā tonī', price: 'no 50 €' },
      { id: 'matu-krasosana-vairakos-tonos', name: 'Matu krāsošana vairākos toņos', price: 'no 70 €' },
      {
        id: 'krasu-parjeja',
        name: 'Krāsu pāreja',
        description: 'AirTouch, Šatuš, Brazilian Blonde',
        price: 'no 150 €',
      },
      { id: 'matu-balinasana', name: 'Matu balināšana', description: 'Total Blond', price: 'no 60 €' },
      { id: 'matu-balinasana-skipsnas', name: 'Matu balināšana šķipsnās', price: 'no 60 €' },
      { id: 'matu-tonesana', name: 'Matu tonēšana', price: 'no 40 €' },
      { id: 'matu-krasosana-klienta-krasa', name: 'Matu krāsošana ar klienta krāsu', price: '40 €' },
      { id: 'matu-laminesana-keratins', name: 'Matu laminēšana, keratīns', price: 'no 40 €' },
    ],
  },
  {
    id: 'kungiem',
    label: 'Kungiem',
    services: [
      { id: 'kungiem-matu-griezums', name: 'Matu griezums', price: 'no 20 €' },
      { id: 'kungiem-matu-griezums-0', name: 'Matu griezums “0”', price: 'no 10 €' },
      { id: 'kungiem-usas-barda', name: 'Ūsas, bārdas formas veidošana', price: 'no 10 €' },
      { id: 'kungiem-tonesana', name: 'Matu, bārdas tonēšana', price: 'no 20 €' },
      { id: 'kungiem-ausu-sejas-vaksacija', name: 'Ausu, sejas zonu vaksācija', price: '5 €' },
    ],
  },
  {
    id: 'berniem',
    label: 'Bērniem',
    services: [
      { id: 'berniem-zenu-mazulitis', name: 'Zēnu griezums “MAZULĪTS”', description: 'līdz 3 gadiem', price: '15 €' },
      { id: 'berniem-zenu-griezums', name: 'Zēnu matu griezums', price: '20 €' },
      {
        id: 'berniem-meitenu-mazulitis',
        name: 'Meiteņu griezums “MAZULĪTS”',
        description: 'līdz 3 gadiem',
        price: '15 €',
      },
      { id: 'berniem-meitenu-griezums', name: 'Meiteņu matu griezums', price: 'no 25 €' },
    ],
  },
  {
    id: 'sejas-proceduras',
    label: 'Sejas procedūras',
    services: [
      { id: 'sejas-masaza', name: 'Sejas masāža', duration: '30 min', price: '30 €' },
      { id: 'mezoterapija-dermapen', name: 'Mezoterapija ar Dermapen', duration: '40 min', price: '35 €' },
      {
        id: 'sejas-mitrinasana-ultraskana',
        name: 'Sejas dziļā mitrināšana ar ultraskaņu',
        duration: '30 min',
        price: '35 €',
      },
      {
        id: 'sejas-kopsana-masaza',
        name: 'Sejas kopšanas procedūra ar sejas & dekoltē masāžu',
        duration: '60 min',
        price: '45 €',
      },
      {
        id: 'mezoterapija-masaza',
        name: 'Mezoterapijas procedūra ar sejas & dekoltē masāžu',
        duration: '75 min',
        price: '55 €',
      },
      {
        id: 'mitrinasana-masaza',
        name: 'Sejas dziļā mitrināšana ar ultraskaņu un sejas & dekoltē masāžu',
        duration: '60 min',
        price: '50 €',
      },
    ],
  },
  {
    id: 'masazas',
    label: 'Masāžas',
    services: [
      { id: 'masaza-sejas-dekolte', name: 'Sejas un dekoltē', duration: '30 min', price: '25 €' },
      { id: 'masaza-sejas-dekolte-muguras', name: 'Sejas, dekoltē, muguras', duration: '60 min', price: '40 €' },
      { id: 'masaza-muguras', name: 'Muguras', duration: '40 min', price: '30 €' },
      { id: 'masaza-klasiska-pilna', name: 'Klasiskā pilna ķermeņa', duration: '90 min', price: '55 €' },
      {
        id: 'masaza-klasiska-sportistiem',
        name: 'Klasiskā pilna ķermeņa sportistiem',
        duration: '60 min',
        price: '45 €',
      },
      { id: 'masaza-berniem-30', name: 'Bērnu līdz 12 g.', duration: '30 min', price: '25 €' },
      { id: 'masaza-berniem-60', name: 'Bērnu līdz 12 g.', duration: '60 min', price: '35 €' },
    ],
  },
  {
    id: 'uzacis-skropstas',
    label: 'Uzacis un skropstas',
    phone: '67572757',
    note: 'Ātrai pierakstei uz uzacu korekciju / krāsošanu zvani',
    services: [
      { id: 'uzacu-korekcija', name: 'Uzacu korekcija', price: '10 €' },
      { id: 'uzacu-krasosana', name: 'Uzacu krāsošana', price: '10 €' },
      { id: 'skropstu-krasosana', name: 'Skropstu krāsošana', price: '10 €' },
      { id: 'uzacu-korekcija-krasosana', name: 'Uzacu korekcija un krāsošana', price: '15 €' },
      {
        id: 'uzacu-korekcija-krasosana-skropstas',
        name: 'Uzacu korekcija, krāsošana un skropstu krāsošana',
        price: '20 €',
      },
    ],
  },
  {
    id: 'vaksacija-sievietem',
    label: 'Vaksācija sievietēm',
    phone: '67572757',
    discount: 'Veicot vaksāciju vairākās zonās piemērojas atlaide.',
    services: [
      {
        id: 'bikini-dzilais',
        name: 'Bikini dziļais',
        description: 'saudzīgais granulu vasks jutīgai ādai',
        price: '30 €',
      },
      {
        id: 'bikini-malinas',
        name: 'Bikini maliņas',
        description: 'saudzīgais granulu vasks jutīgai ādai',
        price: '20 €',
      },
      { id: 'kajas-lidz-celim', name: 'Kājas līdz celim', price: '15 €' },
      { id: 'kajas-visa-garuma-s', name: 'Kājas visā garumā', price: '25 €' },
      { id: 'virsupa', name: 'Virsūpa', price: '5 €' },
      { id: 'zods-vaigi', name: 'Zods, vaigi', price: '7 €' },
      { id: 'paduses-s', name: 'Paduses', price: '10 €' },
      { id: 'rokas-lidz-elkonim', name: 'Rokas līdz elkonim', price: '10 €' },
      { id: 'rokas-visa-garuma-s', name: 'Rokas visā garumā', price: '20 €' },
    ],
  },
  {
    id: 'vaksacija-viriesiem',
    label: 'Vaksācija vīriešiem',
    phone: '67572757',
    services: [
      { id: 'paduses-v', name: 'Paduses', price: '15 €' },
      { id: 'krutis', name: 'Krūtis', price: '25 €' },
      { id: 'mugura', name: 'Mugura', price: '30 €' },
      { id: 'rokas-visa-garuma-v', name: 'Rokas visā garumā', price: '20 €' },
      { id: 'kajas-visa-garuma-v', name: 'Kājas visā garumā', price: '30 €' },
    ],
  },
  {
    id: 'skaisti-nagi',
    label: 'Skaistiem nagiem',
    services: [
      { id: 'nagi-klasiskais-manikirs', name: 'Klasiskais manikīrs', price: '15 €' },
      { id: 'nagi-klasiskais-pedikirs', name: 'Klasiskais pedikīrs', price: '30 €' },
      { id: 'nagi-manikirs-gellaka', name: 'Manikīrs ar gēllaku', price: '30 €' },
      { id: 'nagi-pedikirs-gellaka', name: 'Pedikīrs ar gēllaku', price: '35 €' },
      { id: 'nagi-gellakas-nonemsana', name: 'Gēllakas noņemšana', price: '10 €' },
      { id: 'nagi-pariklajums-laka', name: 'Nagu pārklājums ar nagu laku', price: '5 €' },
    ],
  },
  {
    id: 'ergoline',
    label: 'Ergoline',
    promo: {
      title: 'Svini svētkus!',
      lines: ['Nepazūdi palagos — nāc sauloties!', 'MIN ieguldījums — MAX skaists efekts!'],
    },
    services: [
      { id: 'ergoline-9', name: 'Ergoline solārijs', duration: '9 min', price: '6 €' },
      { id: 'ergoline-12', name: 'Ergoline solārijs', duration: '12 min', price: '8 €' },
      { id: 'ergoline-16', name: 'Ergoline solārijs', duration: '16 min', price: '10 €' },
      { id: 'ergoline-20', name: 'Ergoline solārijs', duration: '20 min', price: '12 €' },
      { id: 'ergoline-24', name: 'Ergoline solārijs', duration: '24 min', price: '14 €' },
      { id: 'ergoline-extra-min', name: 'Ergoline solārijs — katra nākamā minūte', price: '0,50 €' },
    ],
  },
  {
    id: 'hair-tattoo',
    label: 'Hair Tattoo',
    services: [
      {
        id: 'hair-tattoo-ponts',
        name: 'Hair Tattoo / zīmējums “Ponts”',
        // `featured`: long description — PriceCard shows it as a full-width, easy-to-read card.
        featured: true,
        description:
          '“Hair Tattoo” (zīmējums “Ponts”) ir izvēles brīvība ar maksimālu daudzveidību. Mainot matu garumu vai krāsojumu, tiek iegūts vēlamais zīmējums, ar kuru mati ar laiku ataugs un zīmējums kļūs nemanāms.',
        price: '30–40 €',
      },
    ],
  },
  {
    id: 'permanentais-grims',
    label: 'Permanentais grims',
    services: [
      { id: 'pg-uzacis', name: 'Permanentais grims uzacīm', price: '110 €' },
      {
        id: 'pg-uzacis-korekcija',
        name: 'Permanentais grims uzacīm — korekcija',
        description: 'līdz 3 mēn. pēc sākotnējās procedūras',
        price: '65 €',
      },
      { id: 'pg-lupas', name: 'Permanentais grims lūpām', price: '110 €' },
      {
        id: 'pg-lupas-korekcija',
        name: 'Permanentais grims lūpām — korekcija',
        description: 'līdz 3 mēn. pēc sākotnējās procedūras',
        price: '65 €',
      },
      { id: 'pg-starpskropstu', name: 'Permanentais grims starpskropstu līnijā', price: '100 €' },
      {
        id: 'pg-starpskropstu-korekcija',
        name: 'Permanentais grims starpskropstām — korekcija',
        description: 'līdz 3 mēn. pēc sākotnējās procedūras',
        price: '55 €',
      },
    ],
  },
  {
    id: 'sejas-attirisana',
    label: 'Sejas attīrīšana',
    services: [
      {
        id: 'sejas-attirisana',
        name: 'Sejas attīrīšana',
        description: 'Pusaudžiem un jauniešiem — gan meitenēm, gan puišiem! Arī pieaugušajiem.',
        duration: '30 min',
        price: '25 €',
      },
    ],
  },
]
