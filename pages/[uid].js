// ~/pages/[uid].js

import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
//import { Layout } from "../components/Layout";
import Head from 'next/head'

export default function Page({ page }) {
  return (
    
    <div className="site">
      <Head>
        <title>My SliceZon Text</title>
        <meta name="description" content="Just experimenting to see how fast it is"></meta>
      </Head>
      <header>
        <h1>{page.data.title.text}</h1>
      </header>
      <SliceZone
        slices={page.data.slices}
        components={components}
      />
      {/* <pre>{JSON.stringify(page,null,2)}</pre> */}
    </div>

  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)

  return {
    props: { page },
  }
}

export const getStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
};