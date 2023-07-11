import React from 'react';
import './FAQS.css';

import Question from "../../Components/Question/Question";

function FAQS(props) {
    return (
        <>
            <section className='inner-content-container'>
                <h2>Veelgestelde vragen</h2>
                    <section className='inner-content-container faq-section'>
                        <Question
                            question='wat kan ik kopen?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='hoe kan ik retourneren?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='hoe lang moet ik wachten op mijn pakketje?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='waar is mijn pakketje?'
                            description= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='waar komen de producten vandaan?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='wanneer komen er weer armbandjes op voorraad?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='hoe lang heb ik om te retourneren?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='met welke maatschappij worden de pakketen verstuurd?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='kan ik iets op maat laten maken?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                    </section>
            </section>




        </>
    )
    }

export default FAQS;