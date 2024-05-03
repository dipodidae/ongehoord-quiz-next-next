import { convertSlugToPath } from '~/utils/question'

export default function useNextQuestion(): Page | null {
  const { pages } = UsePageStore()

  const _path = convertSlugToPath(useRoute().params.slug!)

  const currentPageIndex = pages.value.findIndex((page: Page) => page._path === _path)

  const nextPage = pages.value[currentPageIndex + 1] ?? null

  return nextPage
}
