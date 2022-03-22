import React from 'react'

import './style.css'

import team from '../../assets/team.jpg'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function About() {
    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content">
                    <div className='content-card'>
                        <span>Nossa História</span>
                        <p>
                            A Associação Maranata de Desenvolvimento Social do Amanari fundada em 25 de Março de 2016
                            na cidade de Maranguape, cujo registro do seu Estatuto encontra-se no cartório Paula Costa,
                            é uma instiutição Civil, autônoma, com fins não econômicos e, com personalidade jurídica de direito privado de duração indeterminada, com sede e foro
                            neste município, capital Fortaleza. Associação Maranata desenvolve diversas atividades nas áres assistenciais, saúde, educacional e sócio-cultural, através de ações próprias, por meio de assessorias técnicas e por intermédio de gestões políticas administrativas
                            junto a instituições governamentais e não governamentais. Hoje, seu principal serviço consiste na convivência e 
                            fortalecimento de vínculos para crianças e adolescentes: 
                                <ul>
                                    <li>Área Cognitiva: Desenvolve e exercita suas habilidades mentais</li>
                                    <li>Área Física: A instituição oferece alimentação balanceada, atendimento médico, exercícios físicos e 
                                        Atividades em que são estimuladas a autonomia e a prática de bons hábitos de saúde.
                                    </li>
                                    <li>Área Socioemocional: Atendimento individual e com amor, a instituição oferece um ambiente e atividades para que crianças e adolescentes aprendam a expressar seus sentimentos de maneira apropriada, 
                                        desenvolvendo o domínio próprio e a habilidade de interagir com os outros de modo saudável e compassivo, conhecendo a si mesmo e aos outros.
                                    </li>
                                </ul>
                        </p>
                    </div>
                    <div className='content-card'>
                        <span>Missão</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                    </div>
                    <div className='content-card'>
                        <span>Visão</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                    </div>
                    <div className='content-card'>
                        <span>Metas</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                    </div>
                    <div className='content-card'>
                        <span>Objetivos</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                    </div>

                    <div className='picture'>
                        <img src={team} alt='Team' />
                    </div>

                </div>
                
            </div>

            <Footer />
        </div>
    )
}