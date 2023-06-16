import { NEXT_PUBLIC_FRONTEND_URL } from '@/constant/constant'

export const fetchArticles = async (): Promise<{ message: string }> =>
  fetch(`${NEXT_PUBLIC_FRONTEND_URL}/articles/api`).then((res) => res.json())

const Page = async () => {
  const { message } = await fetchArticles()
  return <div>{message}</div>
}

export default Page
