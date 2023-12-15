import React from 'react'

const Rutinas = () => {
  return (
    <div>
      <h3>Lista de rutinas segun parametros</h3>
      <form action="">
        <label htmlFor="objetivo">Objetivo:</label>
        <select name="objetivo" id="objetivo">
          <option value="subir">Ganar Peso</option>
          <option value="bajar">Perder peso</option>
          <option value="mantener">Mantener Peso</option>
        </select>
        <label htmlFor="peso">Peso:</label>
        <input type="number" name='peso'/>
        <label htmlFor="altura">Altura</label>
        <input type="number" name="altura"/>
        <button>Consultar</button>
      </form>
    </div>
  )
}

export default Rutinas