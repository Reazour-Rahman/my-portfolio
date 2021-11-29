import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <section className="d-flex justify-content-around py-5">
                <div className="text-white d-flex flex-column justify-content-start align-items-start button-hover">
                    <p className="text-white">Hi, my name is</p>
                    <h1 className="title-font" style={{color:"#ecf1ff"}}>Reazour Rahaman</h1>
                    <h1 className="title-font">I build things for the web.</h1>
                    <p className=" pt-4 paragraph-color my-0">I’m a software engineer specializing in building (and occasionally 
                    </p> <p className="py-0  my-0 paragraph-color">designing) exceptional digital experiences. Currently, I’m focused on </p> <p className="py-0 my-0 paragraph-color"> building accessible, human-centered products at <span className="text-info">Upstatement</span>.</p>
                    <button className="text-info my-5 py-2 px-4 border border-1 border-info">Download My Resume</button>
                </div>
                <div>.</div>
            </section>
        </div>
    );
};

export default Banner;