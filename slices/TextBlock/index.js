import React from 'react'
import { PrismicRichText } from '@prismicio/react'


const TextBlock = ({ slice }) => (
  <section className={slice.variation}>
    <div className="container">
    
      { slice.primary.heading &&
        <PrismicRichText field={slice.primary.heading}/>
      }
    
      { slice.primary.content &&
        <PrismicRichText field={slice.primary.content}/>
      }
    </div>
    <style jsx>{`
        section {
          margin: 4em auto;
        }

        section.centered {
          text-align: center;
        }
        
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default TextBlock