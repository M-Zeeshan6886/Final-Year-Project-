import React from 'react'
import './Footer.scss';
import FB from '../../Components/assest/fb.png';
import insta from '../../Components/assest/insta.png';
import linkedin from '../../Components/assest/linkedin.png';
import rss from '../../Components/assest/rss.png';
import FooterLogo from '../../Components/assest/Logo.jpg';
// import Phone from '../../Components/assest/phone.png';
import { FiPhone } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { AiOutlineWechat } from 'react-icons/ai';
// import Mail from '../../Components/assest/mail.png';
// import Chat from '../../Components/assest/chat.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='footer-container-content'>
            <div className='footer-container-content-one'>
                <div className="footer-container-content-one-logo">
                    <img src={FooterLogo} alt="footer-logo" />
                    <h1>Mental Health</h1>
                </div>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia </p>
                <img src={FB} alt="social-icon" />
                <img src={insta} alt="social-icon" />
                <img src={linkedin} alt="social-icon" />
                <img src={rss} alt="social-icon" />

            </div>
            
            <div className='footer-container-content-two'>
             <h1>Help Information</h1>
             <hr></hr>
             <div className='footer-container-content-two-links'>
             <Link className='link-footer'>Forums Guidelines</Link>
             <Link className='link-footer'>FAQ</Link>
             <Link className='link-footer'>How the Forums are moderated</Link>
             <Link className='link-footer'>Forums Etiquette</Link>
             </div>
             <h1>Stay in touch</h1>
             <hr />
             <p>Sign up below for regular emails from Mental Health, filled with information, advice and support for you or your loved ones.</p>
            </div>

            <div className='footer-container-content-three'>
                <h1>Talk it through with us</h1>
                <hr/>
                <div className='footer-container-content-three-1'>
                    {/* <img src={Phone} alt='footer-ph' /> */}
                    <h2><FiPhone /></h2>
                    <h1>Call +92308****524</h1>
                </div>

                <div className='footer-container-content-three-2'>
                    {/* <img src={Chat} alt='footer-ch' /> */}
                    <h2><AiOutlineWechat /></h2>
                    <h1>Chat Online</h1>
                </div>

                <div className='footer-container-content-three-3'>
                    {/* <img src={Mail} alt='footer-mail' /> */}
                    <h2><GoMail /></h2>
                    <h1>Email Us</h1>
                </div>

            </div>
        </div>
        <div className='footer-container-content2'>
            {/* <hr/> */}
            <img src={FB} alt="social-icon" />
                <img src={insta} alt="social-icon" />
                <img src={linkedin} alt="social-icon" />
                <img src={rss} alt="social-icon" />
        </div>
    </div>
    
    </>
  )
}

export default Footer;