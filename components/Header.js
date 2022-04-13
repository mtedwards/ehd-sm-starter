import React from 'react'
import { PrismicLink } from '@prismicio/react' 
export default function Header({ menu }) {
  return (
    <header>
    
      <h1 className='site-title'>{menu.data.title[0].text}</h1>
      <nav>
        <ul>
          {menu.data?.menuLinks.map((menuLink) => (
            <li key={menuLink.Label}>
              <PrismicLink field={menuLink.link}>
                {menuLink.Label}
              </PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        header {
          h1 {
            font-size: clamp(2.5em, calc(1.5em + 4vw) ,6em);
            font-family: 'Raleway', sans-serif;
            font-weight: 900;
            margin: 2rem 0;
          }
          display: flex;
          flex-direction: column;
          align-items: center;

      
          nav ul {
            margin: 0;
            padding: 0;
            display: flex;
            gap: 1em;
            list-style: none;
          }
        }
    `}</style>
    </header>
  )
}
