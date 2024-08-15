import React, {useState} from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import {
    StaticGoogleMap,
    Marker,
} from 'react-static-google-map';
import Header from '../../components/header';

import './style.css'
// import api from '../../services/api'
import Footer from '../../components/footer';


export default function Contact() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function handleSendMessage(e) {
        e.preventDefault();

        e.preventDefault();
        const win = window.open(`https://api.whatsapp.com/send?phone=5585988859466&text=Olá, me chamo ${nome}, esse é meu email ${email} e essa é minha mensagem: ${mensagem}. Aguardo retorno.`, '_blank')
        win.focus()

        // const data = { nome, email, mensagem }

        // try {
        //     await api.post('/messages', data)

        //     setNome('')
        //     setEmail('')
        //     setMensagem('')

        //     alert("Mensagem Enviada!")
        // } catch (error) {
        //     console.log(error)
        // }

    }

    return (
        <div className="container">
            <Header />

            <div className="body">
                <div className="content">
                    <span>Fala com a gente!</span>

                    <div className='form'>
                    <form onSubmit={handleSendMessage}>
                                <input
                                    type='text'
                                    placeholder='Nome Completo'
                                    required
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <textarea
                                    maxLength={255}
                                    placeholder='Digite Sua Mensagem'
                                    required
                                    value={mensagem}
                                    onChange={e => setMensagem(e.target.value)}
                                />
                                <button> <FaWhatsapp size={20} color='#FFFFFF' /> Enviar</button>
                            </form>
                    </div>

                    <div className='info'>
                        <div className='card-info'>
                            <h2>Associação Maranata de Desenvolvimento Social</h2>
                            <p>CNPJ: 24.675.913/0001-76</p>
                            <h2>Dados Bancários:</h2>
                            <div className='agency'>
                                <div>
                                    <p>Banco PagSeguro <br />Agencia 0001 <br /> Conta: 15846199-6</p>
                                </div>
                                
                            </div>
                            <p>Pix: maranata.itap01@hotmail.com</p>
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
                                <p>Rua Euvaldo Marques, 306 - Itapebussu - Mpe - CE - Brasil</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}