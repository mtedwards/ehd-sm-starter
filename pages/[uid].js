// ~/pages/[uid].js

import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import Layout from "../components/Layout";


export default function Page({ page, menu }) {
  return (
    <Layout menu={menu} >
      <header>
        <h1>{page.data.title[0].text}</h1>
      </header>
      <SliceZone
        slices={page.data.slices}
        components={components}
      />
      
    </Layout>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const menu = await client.getSingle("main-nav");
  const page = await client.getByUID('page', params.uid, {
		fetchLinks: [
      'project.title',
      'project.subtitle',
      'project.image',
    ]
	});

  return {
    props: { page, menu },
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