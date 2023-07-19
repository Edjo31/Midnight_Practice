import React, { useEffect, useState } from 'react'
import RepoList from './service/repoList'

const Header = () => {
  const [filtro, setFiltro] = useState('')
  const [lista, setLista] = useState([])

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value)
  };

  const handleRepoListChange = (newList) => {
    setLista(newList)
  }

  const listaFiltrada = lista.filter((item) =>
    item.name?.toLowerCase().includes(filtro?.toLowerCase())||
    item?.description?.toLowerCase().includes(filtro?.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={filtro} onChange={handleFiltroChange} placeholder="Buscar..." />
      <RepoList onRepoListChange={handleRepoListChange} />
    
      { listaFiltrada.length > 0 ? (
      <ul>
          {listaFiltrada.map((item)=>(
            <li>{item.name}</li>
          ))}
      </ul>)
      :
      (<p>Sin Resultado</p>)

    }
    </div>
  )
}


export default Header