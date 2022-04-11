import { PrismicLink } from '@prismicio/react'
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";
//import { Layout } from "../components/Layout";
import Head from 'next/head'

export default function Page({ project }) {
  const {title, subtitle, image, websiteUrl, slices} = project.data;
  return (
    
    <div className="site">
      {/* <pre>{JSON.stringify(project,null,2)}</pre> */}
      <Head>
        <title>My SliceZon Text</title>
        <meta name="description" content="Just experimenting to see how fast it is"></meta>
      </Head>
      <header>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Image
          
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
        {websiteUrl &&
          <p><PrismicLink  field={websiteUrl}>Visit the Website →</PrismicLink></p>
        }

      </header>
      <SliceZone
        slices={slices}
        components={components}
      />
    </div>

  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const project = await client.getByUID("project", params.uid);

  return {
    props: { project },
  }
}

export const getStaticPaths = async () => {
  const client = createClient();

  const documents = await client.getAllByType("project");

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  };
};