import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from "next/image";

const TextImage = ({ slice }) => {
  return (
  <section className={slice.variation}>
    <div className="container">
      <div className="textImageContent">
        <span className="title">
          {
            slice.primary.title ?
            <PrismicRichText field={slice.primary.title}/>
            : <h2>Template slice, update me!</h2>
          }
        </span>
        {
          slice.primary.description ?
          <PrismicRichText field={slice.primary.description}/>
          : <p>start by editing this slice from inside Slice Machine!</p>
        }
      </div>
      <div className="textImageImage">
        <Image
          src={slice.primary.mainImage.url}
          alt={slice.primary.mainImage.alt}
          layout="responsive"
          width={slice.primary.mainImage.dimensions.width}
          height={slice.primary.mainImage.dimensions.height}
          objectfit="contain"
          className="object-contain"
        />
      </div>
    </div>
    <style jsx>{`
        section {
          
          margin: 4em auto;
        }
        .container {

          text-align: center;
          display: flex;
          gap: 2rem;
          align-items: center;
          flex-direction: column;
        }
        .container .textImageImage {
          width: 100%;

        }
        @media (min-width:800px){
          .container {
            flex-direction: row;
          }
        
          .container > div {
            flex: 0 0 50%;
          }

          section.imageLeft .container .textImageContent {
            order: 2;
          }

          section.imageLeft .container .textImageImage {
            order: 1;
          }
        }
    `}</style>
  </section>
)}

export default TextImage