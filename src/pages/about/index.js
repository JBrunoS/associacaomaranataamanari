import React from 'react'
import { FaUser } from 'react-icons/fa'

import './style.css'
import './carouselAbout.css'

import Header from '../../components/header'
import Footer from '../../components/footer'

import fisica from '../../assets/fisica.png'
import cidadania from '../../assets/cidadania.png'
import cognitiva from '../../assets/cognitiva.png'
import socioemocional from '../../assets/socioemocional.png'
import sobre from '../../assets/about.jpeg'

export default function About() {
    const equipe = [
        { cargo: "Presidente", nome: "Vicente Viana" },
        { cargo: "Vice-Presidente", nome: "Juciver Oliveira" },
        { cargo: "1º Secretário", nome: "Júlio César Mourão" },
        { cargo: "2º Secretário", nome: "Alanildo Abreu" },
        { cargo: "1º Tesoureiro", nome: "Wilque de Sousa" },
        { cargo: "2º Tesoureiro", nome: "Joás Fernandes" },
        { cargo: "Conselho Fiscal", nome: "Luciano Santiago" },
        { cargo: "Conselho Fiscal", nome: "Anderson Ângelo" },
        { cargo: "Conselho Fiscal", nome: "Luiz Clementino" },
    ]

    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content">

                    <div className='history-about'>
                        <span>Nossa História</span>
                        <div>
                            <p>
                                A Associação Maranata de Desenvolvimento Social do Amanari fundada em 25 de Março de 2016
                                na cidade de Maranguape, cujo registro do seu Estatuto encontra-se no cartório Paula Costa,
                                é uma instituição Civil, autônoma, com fins não econômicos e, com personalidade jurídica de direito privado
                                de duração indeterminada, com sede e foro
                                neste município, capital Fortaleza. Associação Maranata desenvolve diversas atividades nas áres assistenciais,
                                saúde e sócio-cultural, através de ações próprias, por meio de assessorias técnicas e por intermédio de gestões
                                políticas administrativas
                                junto a instituições governamentais e não governamentais.
                            </p>
                        </div>

                        {/* <iframe
                            width="55%"
                            height="350"
                            src="https://www.youtube.com/embed/RrEegFxV3YE"
                            title="APRESENTAÇÃO - PROJETO ENSINANDO A VIVER"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            
                            >

                        </iframe> */}

                    </div>
                    <div className='history-pilares'>
                        <span>Pilares</span>
                        <div className='history-pilares-content'>
                            <div>
                                <span>Área Cognitiva</span>
                                <p>Desenvolve e exercita suas habilidades mentais</p>
                                <img src={cognitiva} alt='' />
                            </div>
                            <div>
                                <span>Área Física</span>
                                <p>Desenvolve a autonomia e a prática de bons hábitos de saúde.</p>
                                <img src={fisica} alt='' />
                            </div>
                            <div>
                                <span>Área Socioemocional</span>
                                <p>Desenvolve o domínio próprio e a habilidade de interagir com os outros de modo saudável e compassivo, conhecendo a si mesmo e aos outros.
                                </p>
                                <img src={socioemocional} alt='' />
                            </div>
                            <div>
                                <span>Área Cidadania</span>
                                <p>Demonstra compromisso com o senhorio de Cristo, Conhece e entende a Bíblia e Pratica as disciplinas espirituais de oração, estudo bíblico, adoração, e serviço.
                                </p>
                                <img src={cidadania} alt='' />
                            </div>
                        </div>

                    </div>
                    <div className='history-objetivos'>
                        <div className='history-objetivos-card'>
                            <img src={sobre} />
                        </div>
                        <div className='history-objetivos-missao'>
                            <div>
                                <span>Missão</span>
                                <p>Atuar no terceiro setor com a responsabilidade de defender o direito da criança e do adolescente e promover um ambiente seguro e de bem estar físico, socioemocional, cognitivo e de cidadania da criança e do adolescente atendidos pela nossa associação, desenvolvendo cidadãos responsáveis.</p>
                            </div>
                            <div>
                                <span>Visão</span>
                                <p>Ser reconhecida como uma das melhores defensoras do direito da criança e do adolescente, defendendo e acompanhando o desenvolvimento individual de cada criança atendida pelos nossos projetos, desenvolvendo cidadãos responsáveis.</p>
                            </div>
                        </div>

                    </div>

                    <div className='history-equipe'>
                        <span>Equipe</span>
                        <div>
                            {equipe.map((incidents, index) => (
                                <div key={index}>
                                    <div>
                                        <FaUser size={40} color='#c0bdbd' />
                                    </div>
                                    <div className='describe'>
                                        <h4>{incidents.nome}</h4>
                                        <h5>{incidents.cargo}</h5>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>


                    {/* <div className='picture'>
                        <Carousel
                            autoPlay
                            showThumbs={false}
                            infiniteLoop
                            stopOnHover={false}
                            interval={4500}
                        >
                            <div>
                                <img src={about} alt='imagem' />
                            </div>
                            <div>
                                <img src={equipe1} alt='imagem' />
                            </div>
                            <div>
                                <img src={equipe2} alt='imagem' />
                            </div>
                            <div>
                                <img src={equipe3} alt='imagem' />
                            </div>
                            <div>
                                <img src={equipe4} alt='imagem' />
                            </div>
                            <div>
                                <img src={equipe5} alt='imagem' />
                            </div>
                        </Carousel>

                    </div> */}

                </div>

            </div>

            <Footer />
        </div>
    )
}