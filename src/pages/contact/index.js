import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import {
    StaticGoogleMap,
    Marker,
} from 'react-static-google-map';
import Header from '../header';

import './style.css'


export default function Contact() {
    return (
        <div className="container">
            <Header />

            <div className="body">
                <div className="content">
                    <span>Fala com a gente!</span>

                    <div className='form'>
                        <form>
                            <input type='text' placeholder='Nome Completo' />
                            <input type='email' placeholder='E-mail' />
                            <textarea maxLength={200} placeholder='Digite sua mensagem' />
                            <button>Enviar Mensagem</button>
                        </form>
                    </div>

                    <div className='info'>
                        <div className='card-info'>
                            <h2>Associação Maranata de Desenvolvimento Social</h2>
                            <p>CNPJ: 001099290220111/-010</p>
                            <h2>Dados Bancários:</h2>
                            <div className='agency'>
                                <div>
                                    <p>Banco Y <br />Agencia 09192 <br /> Conta: 0928221-0</p>
                                </div>
                                <div>
                                    <p>Banco Y <br />Agencia 09192 <br /> Conta: 0928221-0</p>
                                </div>
                            </div>
                            <p>Pix: 0298737373383/0001-00</p>
                        </div>
                        <div className='card-info'>
                            <div className='maps'>
                                <a href='https://www.google.com/maps/place/Assembleia+de+Deus+Templo+Central/@-4.0272109,-38.930069,17z/data=!4m9!1m2!2m1!1sAssembleia+de+Deus+itapebussu!3m5!1s0x7bf5df0a4dc55f7:0x581facc0eb256889!8m2!3d-4.0268283!4d-38.9273842!15sCh1Bc3NlbWJsZWlhIGRlIERldXMgaXRhcGVidXNzdZIBEHBsYWNlX29mX3dvcnNoaXA' target='_blank' rel="noreferrer">
                                    <StaticGoogleMap size="700x200" className="img-fluid" apiKey="AIzaSyBEHGmDcCyldH4B7oUTm8SuyPe9PAuR88k">
                                        <Marker location="-4.0272109,-38.930069" color="red" label="PEV" />
                                    </StaticGoogleMap>
                                </a>
                            </div>
                            <div>
                                <p>Endereço Rua Asdjdasdhasd, 988Itapebussu - Mpe - CE - Brasil</p>
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