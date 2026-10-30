import { Scissors, Sparkles, Zap, Palette } from 'lucide-react'

// Prices match the salon's current price sheets ("no" = from). No durations are defined for these
// cards — none were supplied, so none are shown.
export const services = [
  {
    id: 'vīriešu-griezumi',
    icon: Scissors,
    title: 'Vīriešu matu griezumi',
    description: 'Klasika un moderni stili',
    details:
      'Profesionāls matu griezums, kas pielāgots tavai galvas formai, matu tipam un vēlamajam stilam — no klasikas līdz modernām tendencēm.',
    price: 'no 20 €',
    image: '/images/services/mens-haircut.png',
  },
  {
    id: 'sieviešu-griezumi',
    icon: Sparkles,
    title: 'Sieviešu matu griezumi',
    description: 'Tavam unikālajam stilam',
    details:
      'Individuāli pielāgots matu griezums, kas uzsver tavu unikālo stilu — meistari ņem vērā matu struktūru un ikdienas kopšanas paradumus.',
    price: 'no 25 €',
    image: '/images/services/womens-haircut.jpg',
  },
  {
    id: 'bārda',
    icon: Zap,
    title: 'Bārda un ūsas',
    description: 'Precizitāte un stils',
    details:
      'Precīza bārdas un ūsu veidošana un kopšana — no ikdienas apgriešanas līdz pilnīgai formas maiņai.',
    price: 'no 10 €',
    image: '/images/services/beard.jpg',
  },
  {
    id: 'krāsošana',
    icon: Palette,
    title: 'Matu krāsošana',
    description: 'Jauns izskats — jauna Tu',
    details:
      'Matu krāsošana un tonēšana ar kvalitatīviem produktiem — jauns izskats, kas iedvesmo jaunu Tu.',
    price: 'no 50 €',
    image: '/images/services/coloring.webp',
  },
]
