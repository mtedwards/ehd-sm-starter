import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices/index'
import Head from 'next/head'

export default function Homepage({ page }) {
  return (
    <div className="site">
      <Head>
        <title>My SliceZon Text</title>
        <meta name="description" content="Just experimenting to see how fast it is"></meta>
      </Head>
      <header>
        <h1>{page.data.title}</h1>
      </header>
      <SliceZone
        slices={page.data.slices}
        components={components}
      />
    </div>

  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: { page },
  }
}