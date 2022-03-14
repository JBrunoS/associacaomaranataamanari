import React from "react";
import { FaTrashAlt } from 'react-icons/fa'

import './style.css'
import kids from '../../assets/kids.jpg'
import kids1 from '../../assets/kidsto.jpg'

export default function Register() {
    const data = [1, 2, 3, 3, 2, 4]

    return (
        <div className='container-register'>
            <form>
                <div>
                    <label>Nome da Atividade</label>
                    <input placeholder='Nome da Atividade' />
                </div>
                <div>
                    <label>Descrição da Atividade</label>
                    <textarea placeholder='Descrição da Atividade' maxLength={300} />
                </div>
                <div>
                    <label>Área desenvolvida</label>
                    <input type='text' placeholder='Área desenvolvida' />
                </div>
                <div>
                    <label>Data da Atividade</label>
                    <input type='date' />
                </div>
                <div>
                    <label>Projeto + BR</label>
                    <input placeholder='projeto + BR' />
                </div>
                <div>
                    <label>Local da Atividade</label>
                    <input placeholder='Local da Atividade' />
                </div>
                <div>
                    <label>Imagens</label>
                    <input type='file' multiple accept='image/*' />
                </div>

                <button>Salvar postagem</button>
            </form>

            <div className='photos'>
                {
                    data.map((e, index) => (
                        <div className='card-photos'>
                            <img src={kids} />
                            <div>
                                <FaTrashAlt size={15} color='#db2020' />
                            </div>

                        </div>
                    ))
                }


            </div>
        </div>
    )
}