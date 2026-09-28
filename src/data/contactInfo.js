export const contactInfo = {
  address: 'Dubultu prospekts 5-k-2, Jūrmala, LV-2015',
  phone: '67572757',
  telHref: 'tel:+37167572757',
  // No public email address yet — intentionally no `email` field; Contact.jsx only renders an
  // E-pasts row when one is present, so leaving this out removes that row entirely.
  // The real salon schedule.
  hours: [
    { days: 'Pirmdiena', time: '09:00–17:00' },
    { days: 'Otrdiena – Sestdiena', time: '08:00–20:00' },
    { days: 'Svētdiena', time: '09:00–17:00' },
  ],
}
