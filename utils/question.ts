export function convertSlugToPath(slug: string): string {
  return `/questions/${slug}`
}

export function convertPathToSlug(_path: string): string {
  return _path.replace('/questions/', '')
}
