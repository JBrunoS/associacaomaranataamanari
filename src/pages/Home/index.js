import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { Carousel } from 'react-responsive-carousel'
import {
    StaticGoogleMap,
    Marker,
} from 'react-static-google-map';

import './carouselHome.css'
import './style.css'
import api from '../../services/api'

import about from '../../assets/about.jpeg'
import image1 from '../../assets/image1.JPG'
import image2 from '../../assets/image2.JPG'
import image3 from '../../assets/image3.JPG'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.JPG'
import image6 from '../../assets/image6.JPG'

import cmas from '../../assets/cmas.png'
import atestado from '../../assets/atestado.png'
import utilidade from '../../assets/utilidade.png'
import utilidadeEstadual from '../../assets/utilidade-estadual.png'

import parceiro1 from '../../assets/igreja.png'
import parceiro2 from '../../assets/dagoberto.jpeg'
import parceiro3 from '../../assets/escola.jpeg'
import parceiro4 from '../../assets/menorpreco.jpeg'
import parceiro5 from '../../assets/cras.gif'
import parceiro6 from '../../assets/umplay.jpeg'
import parceiro7 from '../../assets/ubs.jpeg'
import parceiro8 from '../../assets/otica.jpeg'
import parceiro9 from '../../assets/kdm.jpeg'
import parceiro10 from '../../assets/mesa brasil.png'

import { useNavigate } from 'react-router-dom'
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Home() {
    const [incidents, setIncidents] = useState([])
    const navigate = useNavigate()

    const itapebussu = 'IGQWRNMEZACcWd1YXl4ZAHk3NTgwNll5SFU5SVR2QnVaVzZAVd0xNTVBzSXNVd2dhZA1B4Q2RfbVlDVndETWkzYWQzUGc3R3lXV3lsSHBsVjJoeDBWUVlqVHNHUEZAwell6SzlYdDRWdU5rRGE2VE1INUlNLTY0TXdUbGcZD'
    const amanari = 'IGQWRNclYxZAV9ZAb3p0YXRGc1JWUkdpV3JCRDJNeUZA5dlBxc2RIaWV1OFg1ckhmN3pOSW94a1FsOGRCLUFJaVVzVlY1WVZAYUXRCOGhJMk0wU3Q2LTZAvdTlNU2JRRzBoNGpTdGhRazV1LXlqVjZAEei1jYkZABcTNrejQZD'

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function handleSendMessage(e) {
        e.preventDefault();
        const win = window.open(`https://api.whatsapp.com/send?phone=5585988859466&text=Olá, me chamo ${nome}, esse é meu email ${email} e essa é minha mensagem: ${mensagem}. Aguardo retorno.`, '_blank')
        win.focus()

    }

    async function handleIncidents() {
        
        const array1 = []
        const array2 = []
        await api.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${itapebussu}`)
            .then(response => {
                for (let i = 0; i < 3; i++) {
                    array1.push(response.data.data[i])
                }
                
            })
        await api.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${amanari}`)
            .then(response => {
                for (let i = 0; i < 3; i++) {
                    array2.push(response.data.data[i])
                }
            })

            const array = array1.concat(array2)
            
            
            setIncidents(array)
            
    }
 
    useEffect(() => {
        handleIncidents();
    }, [])

    function goToHistory() {
        navigate('/about')
    }

    function goToActivities() {
        navigate('/activities')
    }

    function goToDetails(id, caption, type, username) {
        localStorage.setItem("post_id", id);
        localStorage.setItem("caption_post", caption);
        localStorage.setItem("media_type", type);
        localStorage.setItem("username", username);
        navigate('/details')
    }

    return (
        <div className='container'>
            <Header />
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
                            <img src={image1} alt='imagem' />
                        </div>
                        <div>
                            <img src={image2} alt='imagem' />
                        </div>
                        <div>
                            <img src={image3} alt='imagem' />
                        </div>
                        <div>
                            <img src={image4} alt='imagem' />
                        </div>
                        <div>
                            <img src={image5} alt='imagem' />
                        </div>
                        <div>
                            <img src={image6} alt='imagem' />
                        </div>
                    </Carousel>
                    
                </div>

                <div className='about'>
                    <div>
                        <span>Quem Somos</span>

                        <p>
                            A Associação Maranata de Desenvolvimento Social do Amanari fundada em 25 de Março de 2016
                            na cidade de Maranguape, cujo registro do seu Estatuto encontra-se no cartório Paula Costa,
                            é uma instituição Civil, autônoma, com fins não econômicos e, com personalidade jurídica de
                            direito privado de duração indeterminada, com sede e foro
                            neste município, capital Fortaleza. Associação Maranata desenvolve diversas atividades nas áres assistenciais,
                            saúde e sócio-cultural, através de ações próprias, por meio de assessorias técnicas e por intermédio de gestões
                            políticas administrativas junto a instituições governamentais e não governamentais.
                        </p>
                        <button onClick={goToHistory} >Saber Mais</button>
                    </div>
                    <div>
                        <img src={about} alt='imagem' />
                    </div>

                </div>
                <div className='activities'>
                    <span>Atividades</span>

                    <div className='cards'>

                        {incidents.map((incidents, index) => (
                            <div className='card' onClick={() => goToDetails(incidents.id, incidents.caption, incidents.media_type, incidents.username)} key={incidents.id} > 

                                <div className='image-card'>
                                    {
                                        incidents.media_type === 'VIDEO' ?
                                            <video src={incidents.media_url} ></video> :
                                            <img src={incidents.media_url} alt={incidents.caption} />
                                    }
                                    
                                </div>

                                <div className='description-card'>
                                    <p>{incidents.username === "pev_itapebussu" ? "Itapebussu" : "Amanari"} -  {incidents.timestamp ? (incidents.timestamp.slice(8, 10) + '/' + incidents.timestamp.slice(5, 7) + '/' + incidents.timestamp.slice(0, 4)) : (incidents.timestamp)}</p>
                                    <h3>{incidents.caption}</h3>

                                </div>
                            </div>
                        ))}

                    </div>

                    <button onClick={goToActivities} >Ver todas as Atividades</button>
                </div>
                <div className='titulos'>
                    <span>Títulos e Reconhecimento</span>
                    <div>
                        <img src={cmas} alt='team' />
                        <img src={atestado} alt='team' />
                        <img src={utilidade} alt='team' />
                        <img src={utilidadeEstadual} alt='team' />
                    </div>

                </div>

                <div className='contact'>
                    <span>Contato - Seja um Parceiro</span>
                    <div>
                        <div className='form'>
                            <h2>Fale com a gente!</h2>
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
                                <button><FaWhatsapp size={18} color='#FFFFFF' /> Enviar</button>
                            </form>
                        </div>
                        <div className='info'>
                            <h2>Associação Maranata de Desenvolvimento Social <br />
                                CNPJ: 24.675.913/0001-76
                            </h2>
                            <p>Rua Euvaldo Marques, 306 <br /> Itapebussu - Mpe - CE - Brasil</p>

                            <h2>Dados Bancários</h2>
                            <div className='agency'>
                                <p>Banco PagSeguro <br />Agencia 0001 <br /> Conta: 15846199-6</p>
                                {/* <p>Banco X <br />Agencia 0919<br />Conta: 0928282-1</p> */}
                            </div>

                            <p>Pix: maranata.itap01@hotmail.com</p>

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
                        <Carousel
                            autoPlay
                            showThumbs={false}
                            infiniteLoop
                            stopOnHover={false}
                            interval={4500}
                            className='partners-carousel'
                        >
                            <div>
                                <img src={parceiro1} alt='parceiros' />
                                <img src={parceiro10} alt='parceiros' />
                                <img src={parceiro8} alt='parceiros' />
                                <img src={parceiro2} alt='parceiros' />
                            </div>
                            <div>
                                <img src={parceiro3} alt='parceiros' />
                                <img src={parceiro4} alt='parceiros' />
                                <img src={parceiro5} alt='parceiros' />
                            </div>
                            <div>
                                <img src={parceiro6} alt='parceiros' />
                                <img src={parceiro7} alt='parceiros' />
                                <img src={parceiro9} alt='parceiros' />
                            </div>
                        </Carousel>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}