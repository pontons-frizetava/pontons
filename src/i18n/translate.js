// Merges an LV source array/object with the EN override map for the current language. LV stays
// the source of truth for ids, prices, durations, images and icons — EN only ever overrides text.
export function translateList(lvList, enMap, lang) {
  if (lang !== 'en') return lvList
  return lvList.map((item) => ({ ...item, ...(enMap[item.id] || {}) }))
}

export function translateCategories(categories, enMap, lang) {
  if (lang !== 'en') return categories
  return categories.map((category) => {
    const override = enMap[category.id] || {}
    return {
      ...category,
      ...override,
      promo: override.promo ? { ...category.promo, ...override.promo } : category.promo,
      services: category.services.map((service) => ({
        ...service,
        ...(override.services?.[service.id] || {}),
      })),
    }
  })
}
