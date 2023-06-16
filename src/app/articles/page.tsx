import { FRONTEND_URL } from '@/constant/constant'

const fetchArticles = async (): Promise<{ message: string }> =>
  fetch(`${FRONTEND_URL}/articles/api`).then((res) => res.json())

const Page = async () => {
  const { message } = await fetchArticles()
  return <div>{message}</div>
}

export default Page
