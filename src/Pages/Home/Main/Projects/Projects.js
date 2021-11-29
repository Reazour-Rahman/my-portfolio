import React from 'react';
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects-container container">
            <h3 style={{color:"#ccd6f6"}} className="mb-3">My Projects Below</h3>
            <p className="mb-5 text-info">View My All Projects</p>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src="https://image.freepik.com/free-psd/decorative-frame-concept-mock-up_23-2148591585.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://image.freepik.com/free-psd/succulent-pot-plant-with-frame-mockup_43614-722.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://image.freepik.com/free-photo/photo-frame-fresh-flowers_23-2148005807.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://image.freepik.com/free-psd/beautiful-frame-concept-mock-up_23-2148591603.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;