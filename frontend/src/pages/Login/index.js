import React, { useState } from 'react';
import api from '../../services/api';

export default function Login(){
    const [email, setEmail] = useState('');

    async function handleSubmite(event){
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
        
  }

    return( 
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmite}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Digite o seu email aqui!!"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}