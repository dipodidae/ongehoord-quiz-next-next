export function convertSlugToPath(slug: string): string {
  return `/question/${slug}`
}

export function convertPathToSlug(_path: string): string {
  return _path.replace('/question/', '')
}
