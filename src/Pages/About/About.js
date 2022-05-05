import React from 'react';
import ali from '../../../src/images/ali.JPG'

const About = () => {
    return (
        <div className="card container w-75 mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className='w-100 h-100' src={ali} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">Md. Ali Hossain</h5>
                        <h6 className="card-title text-center">CSE, Khulna University</h6>

                        <p className="card-text mt-5">Hi, I am Ali. I am a student of CSE discipline Khulna University. I love to coding. I want to  be a Full Stack Web Developer in future. I know about C, Javascript, Rect HTML5, CSS3, Bootstrap5, Tailwind, API, Dev Tool, Firebase, Netlify. I use those Visual Studio Code, Git, Google Colaboratory development tools </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
