import React from 'react'
import "./contacto.css";

const Contacto = () => {
  return (
    <div>
      <h3>Quieres entrenar con nosotros?</h3>
      <div className='datos'>
        <div className='datos-ubicacion'>
          <p>Ubicacion</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.3724782661725!2d-96.7441341195059!3d17.07752136506605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c72206aa56bc19%3A0x134879e849e14789!2sTecNM%20-%20Campus%20Oaxaca!5e0!3m2!1ses-419!2smx!4v1702537681037!5m2!1ses-419!2smx" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='datos-contacto'>
          <p>Datos de contacto</p>
          <p>Direccion<br/>Telefono<br/>Correo Electrónico</p>
        </div>
      </div>
      <h3>Suscribete a nuestro blog</h3>
      <form action="">
        <input type="email" name="" id="" placeholder='Email'/>
        <button>Suscribirse</button>
      </form>
    </div>
  )
}

export default Contacto