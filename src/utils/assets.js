export const imgPath = (path) => {
  if (!path) return ''
  const clean = path.replace(/^\/?(src\/assets\/images\/)?/, '')

  try {
    return new URL(`../assets/images/${clean}`, import.meta.url).href
  } catch {
    return '' // fails gracefully if file missing
  }
}
