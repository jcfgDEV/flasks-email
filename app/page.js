'use client'
import {useState} from 'react';

export default function Home() {

  const [Nombre, setNombre] = useState("");
  const [Asunto, setAsunto] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMesage] = useState("");


  const HandleSubmit = async (e) => {
    e.preventDefault();
    const Res = await fetch('https://flask-mails-endpoint.vercel.app//SendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Nombre,
        Asunto,
        Email,
        Message
      })
    })
    await Res.json();
    setNombre('');
    setAsunto('');
    setEmail('');
    setMesage('');
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center p-3">
        <form onSubmit={HandleSubmit}>
          <input 
          className=" outline-none border-none bg-slate-200 w-full m-2 p-2 shadow-lg"
          type='text'
          name='Nombre'
          placeholder='John Doe'
          onChange={e => setNombre(e.target.value)}
          value={Nombre}
          />
          <input 
          className=" outline-none border-none bg-slate-200 w-full m-2 p-2 shadow-lg"
          type='text'
          name='Asunto'
          placeholder='Subject'
          onChange={e => setAsunto(e.target.value)}
          value={Asunto}
          />
          <input 
          className=" outline-none border-none bg-slate-200 w-full m-2 p-2 shadow-lg"
          type='text'
          name='Email'
          placeholder='example@gmail.com'
          onChange={e => setEmail(e.target.value)}
          value={Email}
          />
          <textarea 
          className=" outline-none border-none bg-slate-200 w-full m-2 p-2 shadow-lg"
          type='text'
          name='Message'
          placeholder='Message'
          onChange={e => setMesage(e.target.value)}
          value={Message}
          />
          <div className="flex justify-center">
            <input 
            className=" outline-none border-none bg-slate-200 w-40 m-2 p-2 shadow-lg cursor-pointer"
            type='submit'
            value='Send'
            />
          </div>
        </form>
      </div>
    </>
  )
}
