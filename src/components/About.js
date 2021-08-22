import React from 'react';
import pic from './../Eagle2.jpg';

export const About = () => {
    return (
        <div className="container-fluid mybg">
            <div className="container">
            <div className="row ">
                <div className="col-md-8 col-xs-8 mt-3 pt-3 ml-4 pl-4">
                    <h1 className="ml-4 pl-4">Who I am</h1>
                    <div className="col-md-6 mt-4">

                    <p class="subheader subheader--2">Based in Atlanta, Georgia</p>

                    </div>           
                            <br/>
                            <br/>
                        <div className="col-md-10 col-xs-4">
                            <p>I recently Graduated from Georgia State University with a bachelor of Neuroscience. I was part of the Men Ultimate Frisbee Club as well as the Collegiate Neuroscience society all four years at my school. This lead me do a lot of volunteer experience outside of school. This past year I have been working at cvs as a pharmacy Technician. With the whole Covid-19 event, I have since transitioned to doing covid testing at the GA tech site full time. I get to do a lot of swabbing and do testing. Outside of works, I like play a lot of instruments and video games.

                                As of 2021, I signed up for a coding boot-camp and I am on my path to becoming a full-Stack developer.</p>

                        </div>
                </div>
                <div className="col-md-4 col-xs-4 mt-3 pt-3">
                    <img className="img1" src={pic} />
                </div>
            </div>
            </div>
        </div>
    )
}
