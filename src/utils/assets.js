export const imgPath = (path) => {
  if (!path) return ''
  // Remove leading /src/ or src/ if present, ensure clean path
  const clean = path.replace(/^\/?(src\/)?/, '')
  return `/src/assets/images/${clean}`
}
