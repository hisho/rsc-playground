import { FRONTEND_URL } from '@/constant/constant'
import { env } from '@/constant/env'

const fetchArticles = async (): Promise<{ message: string }> =>
  fetch(`https://${env.VERCEL_URL}/articles/api`).then((res) => res.json())

const Page = async () => {
  const { message } = await fetchArticles()
  return <div>{message}</div>
}

export default Page
