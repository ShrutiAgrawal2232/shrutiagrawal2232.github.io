import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/img2.jpeg';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Education'
                details='Shruti Agrawal | MCA | NIT Jamshedpur | Full Stack Developer'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Master of Computer Applications(MCA)</h3>
                    <p className='about-details'>
                    National Institute of Technology, Jamshedpur<br/>
                        2019-22<br/>
                        CGPA : 8.7
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Bachelor of Science (Computer Science)</h3>
                    <p className='about-details'>
                    Dr. Bhim Rao Ambedkar University, Agra<br/>
                        2016-19<br/>
                        62%
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Senior Secondary School Certificate</h3>
                    <p className='about-details'>
                    Central Board of Secondary Education<br/>
                        2016<br/>
                        91%
                    </p>

                    {/* Sub section 4 */}
                    <h3 className='about-sub-head'>Secondary School Certificate</h3>
                    <p className='about-details'>
                    Central Board of Secondary Education<br/>
                        2014<br/>
                        CGPA : 10
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;