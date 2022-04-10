import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.umd.js";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gallery">
      {props.children}
      
      <style jsx>{`
        .gallery {
          width: 100%;
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
        }
      `}</style>
      
    </div>
    
  );

}

export default Fancybox;