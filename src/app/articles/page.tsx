const fetchArticles = async (): Promise<{ message: string }> =>
  fetch(
    `${
      process.env.NODE_ENV === 'production'
        ? `http://localhost:${process.env.NEXT_PUBLIC_PORT}`
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    }/articles/api`
  ).then((res) => res.json())

const Page = async () => {
  const { message } = await fetchArticles()
  return <div>{message}</div>
}

export default Page
