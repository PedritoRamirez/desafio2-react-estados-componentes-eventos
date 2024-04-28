import { useState } from "react";
import Formulario from "./Formulario";
import Alert from "./Alert"; 
import SocialButton from "./SocialButton";

export default function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });
  return (
    <>
      <Formulario setAlert={setAlert} />
      {alert.mensaje && <h5 style={{color:alert.color}}>{alert.mensaje}</h5>}
    </>
  );
}
