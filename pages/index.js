import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices/index'
import Layout from '../components/Layout'

export default function Homepage({ page, menu }) {
  return (
    <Layout menu={menu} >
      <SliceZone
        slices={page.data.slices}
        components={components}
      />
      {/* <pre>{JSON.stringify(page,null,2)}</pre> */}
    </Layout>

  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const menu = await client.getSingle("main-nav");
  const page = await client.getSingle('homepage')

  return {
    props: { page, menu },
  }
}