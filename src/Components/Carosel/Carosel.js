import React from 'react'
import './Carosel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carosel() {
    return (
        <div className="mcarosel1" >
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div  >
                    <img  className="imagediv" src="https://icms-image.slatic.net/images/ims-web/46ffe5f6-69b7-4b66-bc47-2505113b6714.jpg" alt="UserName" />
                    
                </div>
                <div  >
                    <img  className="imagediv" src="https://icms-image.slatic.net/images/ims-web/46ffe5f6-69b7-4b66-bc47-2505113b6714.jpg" alt="UserName" />
                    
                </div>
                <div  >
                    <img  className="imagediv" src="https://icms-image.slatic.net/images/ims-web/46ffe5f6-69b7-4b66-bc47-2505113b6714.jpg" alt="UserName" />
                    
                </div>
            </Carousel>
        </div>
    )
}

export default Carosel
