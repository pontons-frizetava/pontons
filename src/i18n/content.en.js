// English overrides for data-driven content, keyed by the same `id`s used in the LV source files
// (src/data/*.js). Only text fields are overridden — prices, durations, phone numbers, images
// and icons stay identical across languages.

export const navLinksEn = {
  '#sakums': 'Home',
  '#pakalpojumi': 'Services',
  '#galerija': 'Gallery',
  '#par-mums': 'About',
  '#kontakti': 'Contact',
}

export const servicesEn = {
  'vīriešu-griezumi': {
    title: "Men's haircuts",
    description: 'Classic and modern styles',
    details:
      "Professional haircut tailored to your head shape, hair type and desired style — from classics to modern trends.",
  },
  'sieviešu-griezumi': {
    title: "Women's haircuts",
    description: 'For your unique style',
    details:
      "A custom-tailored haircut that highlights your unique style — our stylists take into account your hair structure and daily care habits.",
  },
  bārda: {
    title: 'Beard & mustache',
    description: 'Precision and style',
    details:
      'Precise beard and mustache shaping and grooming — from everyday trims to a complete style change.',
  },
  krāsošana: {
    title: 'Hair coloring',
    description: 'New look — new you',
    details: 'Hair coloring and toning with quality products — a new look that inspires a new you.',
  },
}

export const galleryAltEn = {
  1: 'PONTONS hair salon interior',
  2: 'PONTONS — inspirational quote on the wall',
  3: 'PONTONS hair salon work area',
  4: 'PONTONS interior collage',
}

export const contactDaysEn = {
  Pirmdiena: 'Monday',
  'Otrdiena – Sestdiena': 'Tuesday – Saturday',
  Svētdiena: 'Sunday',
}

export const priceCategoriesEn = {
  'frizieru-pakalpojumi': {
    label: 'Hairdressing services',
    services: {
      'matu-mazgasana-zavesana': { name: 'Hair wash + blow-dry' },
      'svetku-veidojums': { name: 'Festive styling' },
      'veidosana-pieaugusiem-matiem': { name: 'Styling for hair extensions' },
      'sieviesu-griezums': { name: "Women's haircut" },
      'ponijs-korekcija': { name: 'Fringe trim (without wash)' },
      'matu-saknu-krasosana': { name: 'Root color touch-up' },
      'matu-krasosana-viena-toni': { name: 'Hair coloring, single tone' },
      'matu-krasosana-vairakos-tonos': { name: 'Hair coloring, multiple tones' },
      'krasu-parjeja': { name: 'Color transition', description: 'AirTouch, Shatush, Brazilian Blonde' },
      'matu-balinasana': { name: 'Hair bleaching', description: 'Total Blond' },
      'matu-balinasana-skipsnas': { name: 'Hair bleaching in strands' },
      'matu-tonesana': { name: 'Hair toning' },
      'matu-krasosana-klienta-krasa': { name: "Hair coloring with client's own color" },
      'matu-laminesana-keratins': { name: 'Hair lamination, keratin treatment' },
    },
  },
  kungiem: {
    label: 'For men',
    services: {
      'kungiem-matu-griezums': { name: 'Haircut' },
      'kungiem-matu-griezums-0': { name: 'Haircut “0” (buzz cut)' },
      'kungiem-usas-barda': { name: 'Mustache, beard shaping' },
      'kungiem-tonesana': { name: 'Hair, beard toning' },
      'kungiem-ausu-sejas-vaksacija': { name: 'Ear, face area waxing' },
    },
  },
  berniem: {
    label: 'For children',
    services: {
      'berniem-zenu-mazulitis': { name: 'Boys’ haircut “TODDLER”', description: 'up to 3 years' },
      'berniem-zenu-griezums': { name: "Boys' haircut" },
      'berniem-meitenu-mazulitis': { name: 'Girls’ haircut “TODDLER”', description: 'up to 3 years' },
      'berniem-meitenu-griezums': { name: "Girls' haircut" },
    },
  },
  'sejas-proceduras': {
    label: 'Facial treatments',
    services: {
      'sejas-masaza': { name: 'Facial massage' },
      'mezoterapija-dermapen': { name: 'Mesotherapy with Dermapen' },
      'sejas-mitrinasana-ultraskana': { name: 'Deep facial hydration with ultrasound' },
      'sejas-kopsana-masaza': { name: 'Facial care treatment with face & décolleté massage' },
      'mezoterapija-masaza': { name: 'Mesotherapy treatment with face & décolleté massage' },
      'mitrinasana-masaza': { name: 'Deep facial hydration with ultrasound and face & décolleté massage' },
    },
  },
  masazas: {
    label: 'Massages',
    services: {
      'masaza-sejas-dekolte': { name: 'Face and décolleté' },
      'masaza-sejas-dekolte-muguras': { name: 'Face, décolleté, back' },
      'masaza-muguras': { name: 'Back' },
      'masaza-klasiska-pilna': { name: 'Classic full body' },
      'masaza-klasiska-sportistiem': { name: 'Classic full body for athletes' },
      'masaza-berniem-30': { name: 'Children up to 12 y.o.' },
      'masaza-berniem-60': { name: 'Children up to 12 y.o.' },
    },
  },
  'uzacis-skropstas': {
    label: 'Eyebrows and eyelashes',
    note: 'To quickly book an eyebrow correction/tinting appointment, call',
    services: {
      'uzacu-korekcija': { name: 'Eyebrow shaping' },
      'uzacu-krasosana': { name: 'Eyebrow tinting' },
      'skropstu-krasosana': { name: 'Eyelash tinting' },
      'uzacu-korekcija-krasosana': { name: 'Eyebrow shaping and tinting' },
      'uzacu-korekcija-krasosana-skropstas': { name: 'Eyebrow shaping, tinting and eyelash tinting' },
    },
  },
  'vaksacija-sievietem': {
    label: 'Waxing for women',
    discount: 'A discount applies when waxing multiple areas.',
    services: {
      'bikini-dzilais': { name: 'Bikini deep', description: 'gentle granule wax for sensitive skin' },
      'bikini-malinas': { name: 'Bikini line', description: 'gentle granule wax for sensitive skin' },
      'kajas-lidz-celim': { name: 'Legs to the knee' },
      'kajas-visa-garuma-s': { name: 'Full-length legs' },
      virsupa: { name: 'Upper lip' },
      'zods-vaigi': { name: 'Chin, cheeks' },
      'paduses-s': { name: 'Underarms' },
      'rokas-lidz-elkonim': { name: 'Arms to the elbow' },
      'rokas-visa-garuma-s': { name: 'Full-length arms' },
    },
  },
  'vaksacija-viriesiem': {
    label: 'Waxing for men',
    services: {
      'paduses-v': { name: 'Underarms' },
      krutis: { name: 'Chest' },
      mugura: { name: 'Back' },
      'rokas-visa-garuma-v': { name: 'Full-length arms' },
      'kajas-visa-garuma-v': { name: 'Full-length legs' },
    },
  },
  'skaisti-nagi': {
    label: 'Beautiful nails',
    services: {
      'nagi-klasiskais-manikirs': { name: 'Classic manicure' },
      'nagi-klasiskais-pedikirs': { name: 'Classic pedicure' },
      'nagi-manikirs-gellaka': { name: 'Manicure with gel polish' },
      'nagi-pedikirs-gellaka': { name: 'Pedicure with gel polish' },
      'nagi-gellakas-nonemsana': { name: 'Gel polish removal' },
      'nagi-pariklajums-laka': { name: 'Nail coating with regular polish' },
    },
  },
  ergoline: {
    label: 'Ergoline',
    promo: {
      title: 'Celebrate!',
      lines: ["Don't disappear into bedsheets — come get a tan!", 'MIN investment — MAX beautiful effect!'],
    },
    services: {
      'ergoline-9': { name: 'Ergoline sunbed' },
      'ergoline-12': { name: 'Ergoline sunbed' },
      'ergoline-16': { name: 'Ergoline sunbed' },
      'ergoline-20': { name: 'Ergoline sunbed' },
      'ergoline-24': { name: 'Ergoline sunbed' },
      'ergoline-extra-min': { name: 'Ergoline sunbed — each additional minute' },
    },
  },
  'hair-tattoo': {
    label: 'Hair Tattoo',
    services: {
      'hair-tattoo-ponts': {
        name: 'Hair Tattoo / “Ponts” design',
        description:
          '“Hair Tattoo” (the “Ponts” design) offers maximum freedom of choice. By changing hair length or color, the desired design is created — as the hair grows out over time, the design gradually fades away.',
      },
    },
  },
  'permanentais-grims': {
    label: 'Permanent makeup',
    services: {
      'pg-uzacis': { name: 'Permanent makeup — eyebrows' },
      'pg-uzacis-korekcija': {
        name: 'Permanent makeup — eyebrows, touch-up',
        description: 'within 3 months of the initial procedure',
      },
      'pg-lupas': { name: 'Permanent makeup — lips' },
      'pg-lupas-korekcija': {
        name: 'Permanent makeup — lips, touch-up',
        description: 'within 3 months of the initial procedure',
      },
      'pg-starpskropstu': { name: 'Permanent makeup — lash line' },
      'pg-starpskropstu-korekcija': {
        name: 'Permanent makeup — lash line, touch-up',
        description: 'within 3 months of the initial procedure',
      },
    },
  },
  'sejas-attirisana': {
    label: 'Facial cleansing',
    services: {
      'sejas-attirisana': {
        name: 'Facial cleansing',
        description: 'For teens and young adults — both girls and boys! Also for adults.',
      },
    },
  },
}
