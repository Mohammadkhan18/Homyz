import React from "react";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

import './contact.css';

const Contact = () =>{
      return(
        <section className="c-wrapper">
     <div className="paddings innerWidth flexCenter c-container">
       <div className="flexColStart c-left">
       <span className="orangeText">Our Contact Us</span>
       <span className="primaryText">Easy to contact us</span>
       <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good <br /> place to live can make your life better</span>
       
       <div className="flexColStart contactModes">
        <div className="flexStart row">
            <div className="flexcolCenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Call</span>
                        <span className="secondaryText">021 123 145 14</span>
                    </div>
                </div>
                <div className="flexCenter button">Call Now</div>
            </div>

            <div className="flexcolCenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Chat</span>
                        <span className="secondaryText">021 123 145 14</span>
                    </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
            </div>
        </div>
         
        <div className="flexStart row">
            <div className="flexcolCenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Video Call</span>
                        <span className="secondaryText">021 123 145 14</span>
                    </div>
                </div>
                <div className="flexCenter button">Call Now</div>
            </div>

            <div className="flexcolCenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter size={25}/>
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">Message</span>
                        <span className="secondaryText">021 123 145 14</span>
                    </div>
                </div>
                <div className="flexCenter button">Message Now</div>
            </div>
        </div>
       
       </div>
       </div>

       <div className="c-right">
        <div className="image-container">
            <img src="./contact.jpg" alt="" />
        </div>
       </div>
     </div>
     </section>
      );
}

export default Contact;