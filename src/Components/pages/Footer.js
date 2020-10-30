import React from 'react'
import {Button} from '../Button'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <section className='footer-sub'>
                <p className='footer-sub-head'> Join the Wanderlust newsletter to receive notice on all our new functionality</p>
                <p className='footer-sub-text'> You can not unsubscribe at any given time</p>
                <div className='footer-inputs'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
                <div className='footer-links'>
                    <div className='footer-link-wrap'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/'>How it works</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrap'>
                        <div className='footer-link-items'>
                            <h2>Photos</h2>
                            <Link to='/'>Submit Photos</Link>
                            <Link to='/'>Travel Ambassadors</Link>
                            <Link to='/'>Agencies</Link>
                            <Link to='/'>Influencers</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social'>
                    <div className='social-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'> Wanderlust <i class="fas fa-plane"></i> </Link>
                        </div>
                            <small className='web-rights'>Wanderlust © 2020</small>
                            <div className='social-icons'>
                                <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'> 
                                    <i className='fab fa-facebook-f'></i>
                                </Link>
                                <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'> 
                                    <i className='fab fa-instagram'></i>
                                </Link>
                                <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'> 
                                    <i className='fab fa-youtube'></i>
                                </Link>
                                <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'> 
                                    <i className='fab fa-twitter'></i>
                                </Link>
                                <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'> 
                                    <i className='fab fa-linkedin'></i>
                                </Link>
                            </div>
                    </div>
                </section>
        </div>
    )
}

export default Footer
