import { PrismicLink } from '@prismicio/react'
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Image from "next/image";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";
import  Layout  from "../../components/Layout";

export default function Page({ project, menu }) {
  const {title, subtitle, image, websiteUrl, slices} = project.data;
  return (
    
    <Layout menu={menu}>
      <div>
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

      </div>
      <SliceZone
        slices={slices}
        components={components}
      />
    </Layout>

  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const menu = await client.getSingle("main-nav");
  const project = await client.getByUID("project", params.uid);

  return {
    props: { project, menu },
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