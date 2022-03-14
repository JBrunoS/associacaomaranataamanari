import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import {
    StaticGoogleMap,
    Marker,
} from 'react-static-google-map';

import './carousel.css'
import './style.css'

import kids2 from '../../assets/kidsto.jpg'
import kids1 from '../../assets/kids.jpg'
import team from '../../assets/team.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()


    function goToHistory() {
        navigate('/about')
    }

    function goToActivities() {
        navigate('/activities')
    }

    function goToDetails() {
        navigate('/details')
    }

    return (
        <div className='container'>

            <div className='body' >

                <div className='projects' >
                    <Carousel
                        autoPlay
                        showThumbs={false}
                        infiniteLoop
                        stopOnHover={false}
                        interval={4500}
                    >
                        <div>
                            <img src={team} alt='imagem' />
                        </div>
                        <div>
                            <img src={kids1} alt='imagem' />
                        </div>
                        <div>
                            <img src={kids2} alt='imagem' />
                        </div>
                    </Carousel>
                    <div className='button'>
                        <Link to='/projects'><p>Ver Projetos</p></Link>
                    </div>
                </div>

                <div className='about'>
                    <div>
                        <span>Quem Somos</span>

                        <p>
                            
                        </p>
                        <button onClick={goToHistory} >Saber Mais</button>
                    </div>
                    <div>
                        <img src={kids2} alt='imagem' />
                    </div>

                </div>
                <div className='activities'>
                    <span>Atividades</span>

                    <div className='cards'>
                        <div className='card' onClick={goToDetails}>
                            <div className='image-card'>
                                <img src={kids2} alt='imagem' />
                            </div>

                            <div className='description-card'>
                                <h3>Descrição da Atividade</h3>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                        <div className='card' onClick={goToDetails}>
                            <div className='image-card'>
                                <img src={kids1} alt='imagem' />
                            </div>

                            <div className='description-card'>
                                <h3>Descrição da Atividade</h3>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                        <div className='card' onClick={goToDetails}>
                            <div className='image-card'>
                                <img src={kids2} alt='imagem' />
                            </div>

                            <div className='description-card'>
                                <h3>Descrição da Atividade</h3>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                    </div>

                    <button onClick={goToActivities} >Ver todas as Atividades</button>
                </div>
                <div className='titulos'>
                    <span>Títulos e Reconhecimento</span>
                    <div>
                        <img src={team} alt='team' />
                        <img src={team} alt='team' />
                        <img src={team} alt='team' />
                    </div>

                </div>

                <div className='contact'>
                    <span>Contato</span>
                    <div>
                        <div className='form'>
                            <h2>Fale com a gente!</h2>
                            <form>
                                <input type='text' placeholder='Nome Completo' />
                                <input type='email' placeholder='Email' />
                                <textarea maxLength={200} placeholder='Digite Sua Mensagem' />
                                <button type='button'>Enviar</button>
                            </form>
                        </div>
                        <div className='info'>
                            <h2>Associação Maranata de Desenvolvimento Social <br />
                                CNPJ: 001099290220111/10
                            </h2>
                            <p>Rua Euvaldo Marques, 306 <br /> Itapebussu - Mpe - CE - Brasil</p>

                            <h2>Dados Bancários</h2>
                            <div className='agency'>
                                <p>Bradesco <br />Agencia 1579<br />Conta: </p>
                                <p>Banco X <br />Agencia 0919<br />Conta: 0928282-1</p>
                            </div>

                            <p>Pix: 03.326.552/0001-52</p>

                            <div className='map'>
                                <a href='https://www.google.com/maps/place/Assembleia+de+Deus+Templo+Central/@-4.0272109,-38.930069,17z/data=!4m9!1m2!2m1!1sAssembleia+de+Deus+itapebussu!3m5!1s0x7bf5df0a4dc55f7:0x581facc0eb256889!8m2!3d-4.0268283!4d-38.9273842!15sCh1Bc3NlbWJsZWlhIGRlIERldXMgaXRhcGVidXNzdZIBEHBsYWNlX29mX3dvcnNoaXA' target='_blank' rel="noreferrer">
                                    <StaticGoogleMap size="700x200" className="img-fluid" apiKey="AIzaSyBEHGmDcCyldH4B7oUTm8SuyPe9PAuR88k">
                                        <Marker location="-4.0272109,-38.930069" color="red" label="PEV" />
                                    </StaticGoogleMap>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='partners'>
                    <span>Parceiros</span>
                    <div>
                        <img src={team} alt='team' />
                        <img src={team} alt='team' />
                        <img src={team} alt='team' />
                    </div>

                </div>

                <div className='social-media'>
                    <a href='https://www.instagram.com/projeto_pev/' target='_blank' rel="noreferrer" ><FaInstagram size={60} color='#000000' /></a>
                    <a href='www.instagram.com' target='_blank' rel="noreferrer"><FaFacebook size={60} color='#000000' /></a>
                    <a href='https://www.youtube.com/channel/UCmHphXPxiwLZjYW7me1Og-w' target='_blank' rel="noreferrer"><FaYoutube size={60} color='#000000' /></a>
                    <a href='https://api.whatsapp.com/send?phone=5585987306182&text=Olá' target='_blank' rel="noreferrer"><FaWhatsapp size={60} color='#000000' /></a>
                </div>
            </div>

            <footer>
                <div>
                    <p>Associação Maranata de Desenvolvimento Social</p>
                    <p>associacao@gmail.com</p>
                    <p>(085) 98877-6655 / (085) 98877-6655</p>
                    <p>&copy; 2022 Maranata</p>
                </div>
            </footer>
        </div>
    )
}