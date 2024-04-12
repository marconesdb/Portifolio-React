import React, { useState, useEffect } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

 
  

  useEffect(() => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-slate-700 to-black bg-opacity-50 h-screen flex justify-center items-center">
      <div className="container mx-auto ml-4 mr-4 max-w-md" id=""> {/* Adicionando id="form" */}
       <h1 className='text-center mb-4 text-3xl font-bold  text-amber-400 '>Fale Comigo</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 transform transition-transform duration-300 hover:scale-105" action="https://formsubmit.co/df3edde0e58c921f466da54d846b184a" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Seu nome"
              name="name"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Seu email"
              name="email"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Telefone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Seu telefone"
              name="phone"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Sua mensagem"
              name="message"
              required></textarea>
          </div>
          <div className="flex items-center justify-between">
          
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
            <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
          </div>
        </form>
         {/* Âncora para voltar para o topo */}
         <a href="#" className="fixed bottom-4 right-4 text-white text-sm py-2 px-4 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">
          Voltar para o topo
        </a>
      </div>
    </div>
  );
}
