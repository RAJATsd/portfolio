import React from 'react';

import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import {ReactComponent as GitHub} from '../../assets/github.svg';
import {ReactComponent as Facebook} from '../../assets/facebook.svg';

import './footer.styles.css';

const Footer = () => (
    <div className='footer-main'>
        <div className='footer-main_items'>
            <div className='footer-main_items__aboutme'>
                <h3>About Me</h3>
                <div>
                    I am a passionate developer interested to learn new <br />
                    things everyday. Passing out in 2021 I am looking <br />
                    better appurtunity which will help me get a pefect <br />
                    start in the corporate world.
                    <br /><br />
                    This is my first react project with a bit of material ui
                </div>
            </div>
            <div className='footer-main_items__connect'>
                <h3>Connect with me</h3>
                <div className='footer-main_items__connect_sites'>
                    <a href="https://www.linkedin.com/in/rajat-sharma-06ba9a141/" className='footer-main_items__connect_site'>
                        <LinkedIn className='footer-main_items__connect_site_icon' />
                    </a>
                    <a href="https://github.com/RAJATsd" className='footer-main_items__connect_site'>
                        <GitHub className='footer-main_items__connect_site_icon' />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100003168924278" className='footer-main_items__connect_site'>
                        <Facebook className='footer-main_items__connect_site_icon' />
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;