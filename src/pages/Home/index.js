import React, { useEffect, useState } from 'react'

import { Carousel } from 'react-responsive-carousel'
import {
    StaticGoogleMap,
    Marker,
} from 'react-static-google-map';

import './carousel.css'
import './style.css'
import api from '../../services/api'


import team from '../../assets/team.jpg'


import about from '../../assets/about.JPG'
import image1 from '../../assets/image1.JPG'
import image2 from '../../assets/image2.JPG'
import image3 from '../../assets/image3.JPG'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.JPG'
import image6 from '../../assets/image6.JPG'

import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Home() {
    const [incidents, setIncidents] = useState([])
    const [imagens, setImagens] = useState([])
    const navigate = useNavigate()
    const positions = [];

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function handleSendMessage(e) {
        e.preventDefault();

        const data = { nome, email, mensagem }

        try {
            await api.post('/messages', data)

            setNome('')
            setEmail('')
            setMensagem('')

            alert("Mensagem Enviada!")
        } catch (error) {
            console.log(error)
        }

    }

    async function handleIncidents() {

        try {
            await api.get('/posts')
                .then(response => {
                    setIncidents(response.data);

                    for (let index = 0; index < response.data.length; index++) {
                        api.get(`/image/${response.data[index].id}`)
                            .then(response => {
                                positions.push(...response.data)
                            })
                    }
                    setImagens(positions);
                })
        } catch (error) {
            alert(error)
        }

        positions.push(...incidents)
        
        console.log(positions) 
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

    function goToDetails(id) {
        localStorage.setItem("post_id", id);
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
                            <img src={image5} alt='imagem' />
                        </div>
                        <div>
                            <img src={image6} alt='imagem' />
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
                            A Associaçõa Maranata de Desenvolvimento Social do Amanari fundada em 25 de Março de 2016
                            na cidade de Maranguape, cujo registro do seu Estatuto encontra-se no cartório Paula Costa,
                            é uma instiutição Civil, autônoma, com fins não econômicos e, com personalidade jurídica de direito privado de duração indeterminada, com sede e foro
                            neste município, capital Fortaleza. Associação Maranata desenvolve diversas ativiades nas áres assistenciais, saúde, educacional e sócio-cultural, através de ações próprias, por meio de assessorias técnicas e por intermédio de gestões políticas administrativas
                            junto a instituições governamentais e não governamentais.
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
                            <div className='card' onClick={() => goToDetails(incidents.id)} key={incidents.id} >
                                
                                <div className='image-card'>
                                    {imagens ? <img src={imagens} alt={index}/> : <img src={image1} alt='kids' />}
                                </div>

                                <div className='description-card'>
                                    <h3>{incidents.atividade + '/' + incidents.local}</h3>
                                    <p>{incidents.data}</p>
                                </div>
                            </div>
                        ))}

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
                                <button>Enviar</button>
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
                        <img src={team} alt='team' />
                        <img src={team} alt='team' />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}