import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Fancybox from '../../components/Fancybox'

const ImageGallery = ({ slice }) => (
  <section>
    <div className="container">
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
      
      {
        slice.items && 
        <Fancybox>
          { slice?.items?.map((item, i) =>(
              <a key={`gallery-image-${i}`} href={item.image.url} data-fancybox="gallery">
                <img src={item.image.thumb.url} alt={item.image.alt} />
              </a>
            )
          ) }
        </Fancybox>
      }
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
        .title {
          color: #8592e0;
        }
        a img {
          opacity: 1;
          filter: contrast(100%);
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        a:hover img {
          opacity: 0.8;
          filter: contrast(150%);
        }
    `}</style>
  </section>
)

export default ImageGallery