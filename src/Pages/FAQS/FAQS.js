import React from 'react';
import './FAQS.css';
import Question from "../../Components/Question/Question";


function FAQS(props) {
    return (
        <>
            <section className='inner-content-container faq-section-one'>
                <h2>Vind hier het antwoord op jouw vragen</h2>
                    <section className='faq-section-two'>
                        <Question
                            question='wat kan ik kopen?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'

                        />
                        <Question
                            question='hoe kan ik retourneren?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <Question
                            question='hoe lang moet ik wachten op mijn pakketje?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <Question
                            question='waar is mijn pakketje?'
                            description= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <Question
                            question='waar komen de producten vandaan?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <Question
                            question='wanneer komen er weer armbandjes op voorraad?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae consectetur consequuntur, dolore esse exercitationem, impedit iste iure libero natus quisquam reiciendis repellat tenetur totam! Animi dolor odio quaerat.'
                        />
                        <Question
                            question='hoe lang heb ik om te retourneren?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <Question
                            question='met welke maatschappij worden de pakketen verstuurd?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <Question
                            question='kan ik iets op maat laten maken?'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur, corporis cupiditate doloremque doloribus esse et ex excepturi fugiat itaque laboriosam, modi molestias nobis numquam, perferendis quaerat quidem? Alias animi architecto assumenda atque dolorem ducimus expedita ipsam iste nam nesciunt nihil pariatur, provident quis rem sint ut voluptatem voluptates? Autem debitis dignissimos error esse facere inventore laboriosam nemo rerum. Consectetur deserunt eveniet labore mollitia natus odit reprehenderit. Aut molestiae nisi quis! Accusamus aliquam beatae, dignissimos quo reiciendis soluta vero. Necessitatibus.'
                        />
                        <p className='faq-last-question'> Staat jouw vraag er toch niet tussen? Neem dan contact met ons op via ons <a className='faq-contact' href='/about'> formulier! </a> </p>

                    </section>

            </section>




        </>
    )
    }

export default FAQS;