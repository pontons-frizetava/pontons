import { useLanguage } from '../lib/LanguageContext'

// Static UI copy that isn't driven by a data file. Keyed to mirror the sections/components that
// consume it. `useT()` below picks the right language object.
export const uiText = {
  lv: {
    nav: {
      sakums: 'Sākums',
      pakalpojumi: 'Pakalpojumi',
      galerija: 'Galerija',
      parMums: 'Par mums',
      kontakti: 'Kontakti',
    },
    common: {
      zvanit: 'Zvanīt',
      aizvert: 'Aizvērt',
      iepriekseja: 'Iepriekšējā',
      nakama: 'Nākamā',
      atvertIzvelni: 'Atvērt izvēlni',
      aizvertIzvelni: 'Aizvērt izvēlni',
      sekoMums: 'Seko mums',
    },
    hero: {
      eyebrow: 'Dāmu un kungu frizētava',
      subtitle: 'Tavs stils — mūsu darbs.',
      description: 'Profesionāla frizieru komanda, moderns stils un individuāla pieeja katram klientam.',
      callBtn: 'Zvanīt',
      servicesBtn: 'Apskatīt pakalpojumus',
      scrollHint: 'Ritini lejup',
    },
    infoCards: [
      { title: 'Profesionāla komanda', description: 'Pieredzējuši meistari' },
      { title: 'Kvalitatīvi rezultāti', description: 'Individuāla pieeja' },
      { title: 'Ērta atrašanās vieta', description: 'Viegli atrast' },
      { title: 'Ērts pieraksts', description: 'Zvani un piesakies' },
    ],
    services: {
      eyebrow: 'Mūsu pakalpojumi',
      heading: 'Skaistums sākas šeit',
      viewAll: 'Skatīt visus pakalpojumus',
    },
    pricing: {
      eyebrow: 'Cenrādis',
      heading: 'Pakalpojumi un cenas',
      subtitle: 'Pilns PONTONS pakalpojumu klāsts un cenas — izvēlies kategoriju un piesakies sev ērtā laikā.',
      tabAll: 'Visi',
      booking: 'Pieraksts:',
    },
    gallery: {
      eyebrow: 'Galerija',
      heading: 'Mūsu darbnīca tuvplānā',
    },
    about: {
      eyebrow: 'Par Pontons',
      heading: 'Stils, kas runā tavā vārdā',
      description:
        'PONTONS ir dāmu un kungu frizētava, kur profesionāls serviss, kvalitāte un individuāla pieeja satiekas ar modernu stilu.',
      values: ['Profesionalitāte', 'Kvalitāte', 'Individualitāte'],
    },
    contact: {
      eyebrow: 'Kontakti',
      tagline: 'Dāmu un kungu frizētava',
      adrese: 'Adrese',
      telefons: 'Telefons',
      darbaLaiks: 'Darba laiks',
    },
    quote: {
      text: 'Labi mati — laba diena.',
      team: 'Pontons komanda',
    },
    callModal: {
      instruction: 'Lai pierakstītos, zvani uz numuru',
      callNow: 'Zvanīt tagad',
      followUs: 'Vai seko mums',
    },
    footer: {
      tagline: 'Dāmu un kungu frizētava.',
      navigation: 'Navigācija',
      services: 'Pakalpojumi',
      socials: 'Sociālie tīkli',
      servicesList: ['Vīriešu matu griezumi', 'Sieviešu matu griezumi', 'Bārda un ūsas', 'Matu krāsošana'],
      copyright: '© 2026 PONTONS. Visas tiesības aizsargātas.',
      tagline2: 'Dāmu un kungu frizētava',
    },
  },
  en: {
    nav: {
      sakums: 'Home',
      pakalpojumi: 'Services',
      galerija: 'Gallery',
      parMums: 'About',
      kontakti: 'Contact',
    },
    common: {
      zvanit: 'Call',
      aizvert: 'Close',
      iepriekseja: 'Previous',
      nakama: 'Next',
      atvertIzvelni: 'Open menu',
      aizvertIzvelni: 'Close menu',
      sekoMums: 'Follow us',
    },
    hero: {
      eyebrow: 'Hair salon for women and men',
      subtitle: 'Your style — our work.',
      description:
        'A professional team of hairdressers, modern style, and an individual approach for every client.',
      callBtn: 'Call',
      servicesBtn: 'View services',
      scrollHint: 'Scroll down',
    },
    infoCards: [
      { title: 'Professional team', description: 'Experienced stylists' },
      { title: 'Quality results', description: 'Individual approach' },
      { title: 'Convenient location', description: 'Easy to find' },
      { title: 'Easy booking', description: 'Call to book' },
    ],
    services: {
      eyebrow: 'Our services',
      heading: 'Beauty starts here',
      viewAll: 'View all services',
    },
    pricing: {
      eyebrow: 'Price list',
      heading: 'Services and prices',
      subtitle: 'The full range of PONTONS services and prices — choose a category and book at a time that suits you.',
      tabAll: 'All',
      booking: 'Booking:',
    },
    gallery: {
      eyebrow: 'Gallery',
      heading: 'Our workshop up close',
    },
    about: {
      eyebrow: 'About Pontons',
      heading: 'Style that speaks your name',
      description:
        'PONTONS is a hair salon for women and men, where professional service, quality, and an individual approach meet modern style.',
      values: ['Professionalism', 'Quality', 'Individuality'],
    },
    contact: {
      eyebrow: 'Contact',
      tagline: 'Hair salon for women and men',
      adrese: 'Address',
      telefons: 'Phone',
      darbaLaiks: 'Opening hours',
    },
    quote: {
      text: 'Good hair — good day.',
      team: 'The Pontons team',
    },
    callModal: {
      instruction: 'To book an appointment, call',
      callNow: 'Call now',
      followUs: 'Or follow us',
    },
    footer: {
      tagline: 'Hair salon for women and men.',
      navigation: 'Navigation',
      services: 'Services',
      socials: 'Social media',
      servicesList: ["Men's haircuts", "Women's haircuts", 'Beard & mustache', 'Hair coloring'],
      copyright: '© 2026 PONTONS. All rights reserved.',
      tagline2: 'Hair salon for women and men',
    },
  },
}

export function useT() {
  const { language } = useLanguage()
  return uiText[language]
}
