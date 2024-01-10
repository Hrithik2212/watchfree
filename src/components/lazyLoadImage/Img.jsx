import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, classname, noImg }) => {
    return (
        <LazyLoadImage
            className={classname || ""}
            alt=""
           
            effect="blur"
            src={src}
            onError={(e)=>{e.target.alt=noImg}}
            
        />
    );
};

export default Img;