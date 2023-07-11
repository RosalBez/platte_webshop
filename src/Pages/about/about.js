import React from 'react';
import './about.css'
import Card from '../../Components/Card/Card'
import layingGirl from '../../assets/photos/login.jpg'
import aboutSignature from '../../assets/Specifics/signatuur.svg'
import contactGirl from '../../assets/photos/contactgirl.jpg'
import Contact from "../../Components/Contact/Contact";


function About() {
    return (
        <div className='outer-container-about'>
            <div className='inner-container-about'>
                <img src={layingGirl} alt='laying girl' className='about-laying-girl'/>
                <Card title='Over RSL' className='about-card'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim eos maiores natus
                        repudiandae! A accusamus accusantium aliquam aliquid amet aperiam atque cum cumque debitis
                        deserunt earum eius, error est expedita facere ipsa ipsam iusto libero maxime mollitia natus,
                        nobis non numquam obcaecati possimus quia quis quos recusandae reiciendis sed tempore ullam
                        veniam vitae. Amet cumque deserunt, enim exercitationem expedita laudantium, libero nulla odit
                        pariatur provident quae tenetur ullam voluptatum. At aut commodi consectetur, dicta distinctio
                        dolore ducimus et eum fugiat, iusto magnam molestiae nobis odit pariatur perspiciatis placeat
                        praesentium provident quae quam quidem reprehenderit sint unde velit veritatis voluptate?
                        Accusamus ad at doloremque fugiat iure minima molestias nihil rem sapiente, vero. Ad adipisci
                        assumenda debitis esse et, iure libero nobis, pariatur, perspiciatis quae quia repudiandae unde
                        veritatis. Ad aliquid, aperiam aspernatur consequuntur cumque delectus distinctio doloremque
                        enim error hic ipsam, iure minima nemo officiis perspiciatis placeat qui quo voluptatibus.

                        <div> xxx RSL </div>
                        <img src={aboutSignature} alt='signature'/>

                    </p> </Card>

            </div>

            <div className='inner-container-contact'>
                <img src={contactGirl} alt='contact girl' className='contact-girl'/>
                <Card title='Contact' className='contact-card'>
                    <Contact/>
                </Card>


            </div>

        </div>
    );
}

export default About;