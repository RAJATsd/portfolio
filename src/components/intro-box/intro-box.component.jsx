import React from 'react';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

import './intro-box.styles.css';
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import {ReactComponent as GitHub} from '../../assets/github.svg';
import {ReactComponent as Facebook} from '../../assets/facebook.svg';

import ImageFile from '../../assets/profile_image.jpeg'

const IntroBox = () => (
    <div className='intro-box'>
        <div className='intro-box-container'>
            <div className='intro-box-container__image'>
                <img src={ImageFile} alt="Profile" />
            </div>
            <div className='intro-box-container__text'>
                <div className='intro-box-container__text__basic'>
                    <h5 className='intro-box-container__text__basic_item'>HELLO EVERYBODY, I AM</h5>
                    <h1 className='intro-box-container__text__basic_item'>RAJAT SHARMA</h1>
                    <h5 className='intro-box-container__text__basic_item'>Junior MERN Stack Developer</h5>
                </div>
                <div className='intro-box-container__text__connect'>
                    <div className='intro-box-container__text__connect__item'>
                        <CakeRoundedIcon /> 
                        <h5>14th Decemeber,1998</h5> 
                    </div>
                    <div className='intro-box-container__text__connect__item'>
                        <CallRoundedIcon /> 
                        <h5>+91 8708690173</h5>
                    </div>
                    <div className='intro-box-container__text__connect__item'>
                        <MailOutlineRoundedIcon /> 
                        <h5>rajatsharmaatri@gmail.com</h5>
                    </div>
                </div>
                <div className='intro-box-container__text_sites'>
                    <a href="https://www.linkedin.com/in/rajat-sharma-06ba9a141/" target="_blank" rel="noopener noreferrer" className='intro-box-container__text_sites__site'>
                        <LinkedIn className='intro-box-container__text_sites__site_icon' />
                    </a>
                    <a href="https://github.com/RAJATsd" target="_blank" rel="noopener noreferrer" className='intro-box-container__text_sites__site'>
                        <GitHub className='intro-box-container__text_sites__site_icon' />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100003168924278" target="_blank" rel="noopener noreferrer" className='intro-box-container__text_sites__site'>
                        <Facebook className='intro-box-container__text_sites__site_icon' />
                    </a>
                </div>
            </div>
        </div>
    </div>

)

export default IntroBox;