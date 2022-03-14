import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa'

import './style.css'
import kids2 from '../../assets/kids.jpg'
import Header from '../header'

export default function Details() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content">
                    <span>Descrição da Atividade - 20/02/2022</span>
                    <div className='description'>
                        <p>Descrição da Atividade: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                    </div>

                    <div className='grid'>
                        {data.map((incidents, index) => (
                            <div key={index}>
                                <img src={kids2} alt='imagem' />
                            </div>
                        ))}

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