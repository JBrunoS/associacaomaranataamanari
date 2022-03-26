import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import './style.css'
import './carousel.css'

import about from '../../assets/about.JPG'
import equipe1 from '../../assets/equipe1.JPG'
import equipe2 from '../../assets/equipe2.JPG'
import equipe3 from '../../assets/equipe3.JPG'
import equipe4 from '../../assets/equipe4.JPG'
import equipe5 from '../../assets/equipe5.JPG'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function About() {
    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content">
                    <div className='content-card-about'>
                        <span>Nossa História</span>
                        <p>
                            A Associação Maranata de Desenvolvimento Social do Amanari fundada em 25 de Março de 2016
                            na cidade de Maranguape, cujo registro do seu Estatuto encontra-se no cartório Paula Costa,
                            é uma instituição Civil, autônoma, com fins não econômicos e, com personalidade jurídica de direito privado 
                            de duração indeterminada, com sede e foro
                            neste município, capital Fortaleza. Associação Maranata desenvolve diversas atividades nas áres assistenciais, 
                            saúde e sócio-cultural, através de ações próprias, por meio de assessorias técnicas e por intermédio de gestões 
                            políticas administrativas
                            junto a instituições governamentais e não governamentais. 
                            Hoje, seu principal serviço consiste na convivência e fortalecimento de vínculos para crianças e adolescentes:
                        </p>
                        <ul>
                            <li>Área Cognitiva: Desenvolve e exercita suas habilidades mentais</li>
                            <li>Área Física: A instituição oferece alimentação balanceada, atendimento médico, exercícios físicos e
                                Atividades em que são estimuladas a autonomia e a prática de bons hábitos de saúde.
                            </li>
                            <li>Área Socioemocional: Atendimento individual e com amor, a instituição oferece um ambiente e atividades para que crianças e adolescentes aprendam a expressar seus sentimentos de maneira apropriada,
                                desenvolvendo o domínio próprio e a habilidade de interagir com os outros de modo saudável e compassivo, conhecendo a si mesmo e aos outros.
                            </li>
                        </ul>

                    </div>
                    <div className='content-card-about'>
                        <span>Missão</span>
                        <p>Atuar no terceiro setor com a responsabilidade de defender o direito da criança e do adolescente e promover um ambiente seguro e de bem estar físico, socioemocional, cognitivo e de cidadania da criança e do adolescente atendidos pela nossa associação, desenvolvendo cidadãos responsáveis.</p>
                    </div>
                    <div className='content-card-about'>
                        <span>Visão</span>
                        <p>Ser reconhecida como uma das melhores defensoras do direito da criança e do adolescente, defendendo e acompanhando o desenvolvimento individual de cada criança atendida pelos nossos projetos, desenvolvendo cidadãos responsáveis.</p>
                    </div>

                    <div className='picture'>
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

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}