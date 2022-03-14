import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa'

import './style.css'

import kids1 from '../../assets/kidsto.jpg'
import kids2 from '../../assets/kids.jpg'

export default function About() {
    return (
        <div className="container">
            <div className="body">
                <div className="content">
                    <span>Últimas Atividades</span>

                    <div className='cards'>
                        <div className='card'>

                            <div>
                                <img src={kids2} alt='imagem' />
                            </div>
                            <div>
                                <p>Descrição da Atividade</p>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <img src={kids2} alt='imagem' />
                            </div>
                            <div>
                                <p>Descrição da Atividade</p>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <img src={kids1} alt='imagem' />
                            </div>
                            <div>
                                <p>Descrição da Atividade</p>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <img src={kids1} alt='imagem' />
                            </div>
                            <div>
                                <p>Descrição da Atividade</p>
                                <p>22/01/2022</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <img src={kids1} alt='imagem' />
                            </div>
                            <div>
                                <p>Descrição da Atividade</p>
                                <p>22/01/2022</p>
                            </div>
                        </div>
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