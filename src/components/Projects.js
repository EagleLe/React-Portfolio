import React from 'react';
import proj1 from './../Daily Planner.png';

export const Projects = () => {
    return (
        <div className="container-fluid mybg">
            <div className="container">
            <div className="row ">
                <div className="col-md-8 col-xs-8 mt-3 pt-3 ml-4 pl-4">
                    <h1 className="ml-4 pl-4">My Projects</h1>
                    <div className="col-md-5 mt-4">

                    <p class="subheader subheader--2">Deployed on Github</p>

                    </div>  

                    </div>
                    </div>

                <div className="row">
                    <div className="col-md-4 mt-2 mb-2">
                        <a href="https://eaglele.github.io/5-Day-Planner"><div className="proj proj1">
                        </div></a>
                    </div>
                    <div className="col-md-4 mt-2 mb-2">
                        <a href="https://github.com/EagleLe/Read-Me"><div className="proj proj2">
                        </div></a>
                    </div>
                    <div className="col-md-4 mt-2 mb-2">
                       <a href="https://github.com/sxtnkyl/Timbre"> <div className="proj proj3">
                        </div></a>
                    </div>
                    <div className="col-md-4 mt-2 mb-4">
                       <a href="https://matildabrantley.github.io/project-one/"> <div className="proj proj4">
                        </div></a>
                    </div>
                    <div className="col-md-4 mt-2 mb-4">
                      <a href="https://eaglele.github.io/Homework-3/">  <div className="proj proj5">
                        </div></a>
                    </div>
                    <div className="col-md-4 mt-2 mb-4">
                       <a href="https://protected-chamber-13700.herokuapp.com/"> <div className="proj proj6">
                        </div></a>
                    </div>

                </div>
            </div>
        </div>
    )
}
