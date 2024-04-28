import {useState} from 'react'

export default function Alert() {
  const [alert,setAlert] = useState({mensaje:'',color:''})
  return (
    <>
      {
        alert.mensaje && <h1>{alert.mensaje}</h1>
      }
    </>
  )
}
