import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import facebook from './../../assets/facebook.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />
            <Header
                heading=''
                details='Email : shrutiagrawal2232@gmail.com'
            />
            <Header
                heading=''
                details='Phone : +91 7017709791'
            />
            <Header
                heading=''
                details='Visit : Mathura , Uttar Pradesh'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form' action="https://formspree.io/f/mjvjolba"
                    method="POST">
                    <input
                        type='text'
                        placeholder='Your Name'
                        name='name'
                        className='input-box name-input'
                        autoComplete='off'
                    />

                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />
                    <input
                        type='text'
                        placeholder='Your Subject'
                        name='subject'
                        className='input-box subject-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/shrutiagrawal2232' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://linkedin.com/in/agrawalshruti2232'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;