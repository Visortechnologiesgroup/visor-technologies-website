import React from 'react';
import './Footer.css';
import { Button } from './Button';
import Link from 'react-scroll/modules/components/Link';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                VISOR TECHNOLOGY
            </p>
            
            </section>

            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                            <Link to='/'>Solar Power</Link>
                            <Link to='/'>Hydro Power</Link>
                            <Link to='/'>Smart Home</Link>
                            <Link to='/'>Security</Link>
                            <Link to='/'>Testimonials</Link>
                    </div>
                    <div className='footer-links-items'>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>twitter</Link>
                            <Link to='/'>Linkedin</Link>
                            <Link to='/'>Facebook</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
