import { FC } from 'react'

interface pageProps {
  params: {
    slug: string
  }
}

const page: FC<pageProps> = ({params}: {params: {slug: string}}) => {
  return <div>page: {params.slug}</div>
}

export default page