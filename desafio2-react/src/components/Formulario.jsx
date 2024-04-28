import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SocialButton from './SocialButton';

export default function Formulario({setAlert}) {
  
  const [email,setEmail] = useState('')
  const [text,setText] = useState('')
  const [password,setPassword] = useState('')
  const [confPassword,setConfPassword] = useState('')
  
  function enviarFormulario(e){
    e.preventDefault()
    if(email === "" || text === "" || password === "" || confPassword === "" ){
      setAlert({mensaje:'Debes completar todos los campos',color:'red'})
      return
    }else if(password !== confPassword){
      setAlert({mensaje:'Las contraseñas deben coincidir', color:'red'})
      return
    }else if(text.length <= 2){
      setAlert({mensaje:'Debes ingresar un nombre mas grande',color:'red'})
      return
    }else{
      setAlert({mensaje:'Datos Correctos', color:'green'})
    }
  }
  return (
    <>
        <Form className='border p-4' onSubmit={enviarFormulario}>
          <h2>Crea una Cuenta</h2>
            <div className='botones'> 
              <SocialButton icono = 'fa-brands fa-facebook fa-2x'/>  
              <SocialButton icono = 'fa-brands fa-github fa-2x'/>  
              <SocialButton icono = 'fa-brands fa-linkedin-in fa-2x'/>             
            </div>
            <h6>O usa tu email para registrarte</h6>
          <Form.Group className="mb-3" controlId="formBasicEmail">  
            <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" placeholder="Nombre" value={text} onChange={(e)=>setText(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfPassword">
          <Form.Control type="password" placeholder="Confirma tu Contraseña" value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}/>
          </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="success" size="xl" type="submit">
                Registrarse
              </Button>
            </div>
          </Form>
          <div className='estados'>
            <p>{email}</p>
            <p>{text}</p>
            <p>{password}</p>
            <p>{confPassword}</p>
          </div>
    </>
  )
}
