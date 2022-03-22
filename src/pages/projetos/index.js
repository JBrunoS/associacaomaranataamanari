import React from "react";


import './style.css'
import Logo from '../../assets/logo-pev.png'
import Header from '../../components/header';
import Footer from "../../components/footer";

export default function Projetos() {
    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content">
                    <span>Projetos</span>
                    <div className="project">
                        <div>
                            <h1>Projeto Ensinando a Viver - Itapebussu</h1>
                            <p>Endereço: Rua ADSDADSDD, 900 - Telefone 98464646644 </p>
                            <p>Crianças atendidas: 900</p>
                            <p>Faixa etária: 3 - 18 anos</p>
                            <h2>Atividades Realizadas</h2>
                            <ul>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                            </ul>

                            <h2>Dias de Atendimento</h2>
                            <p>Terça-feira a Sábado - manhã e tarde</p>

                            <h2>Histórico breve</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                        </div>

                        <div className="carousel">
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                        </div>

                    </div>

                    <div className="project">
                        <div>
                            <h1>Projeto Ensinando a Viver - Itapebussu</h1>
                            <p>Endereço: Rua ADSDADSDD, 900 - Telefone 98464646644 </p>
                            <p>Crianças atendidas: 900</p>
                            <p>Faixa etária: 3 - 18 anos</p>
                            <h2>Atividades Realizadas</h2>
                            <ul>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                            </ul>

                            <h2>Dias de Atendimento</h2>
                            <p>Terça-feira a Sábado - manhã e tarde</p>

                            <h2>Histórico breve</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                        </div>

                        <div className="carousel">
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                            <img src={Logo} alt='img' />
                        </div>

                    </div>
                </div>
                
            </div>

           <Footer />
        </div>
    )
}