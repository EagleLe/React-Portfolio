import React from 'react'
import pic2 from './../eagle.jpg';


export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi , I am
Eagle Le </h1>
<div className="col-md-5 mt-4">
 <p class="subheader subheader--2">A full stack web developer</p>

		

</div> 

<div className="col-md-5 mt-4">
            <img className="img2" src={pic2} />
            </div>
<div>
<a href="/contact" className="btn btn-info">Contact Me</a>


</div>

        </div>
    </div>
                )
}
