import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState,useEffect } from "react"
import RepoList from "./service/repoList"
 const ManageProjects=()=>{

        
const [filtro,setFiltro]=useState('')
const [list,setList]=useState([])

    const handleFiltroChange=(event)=>{
        setFiltro(event.target.value)
    }

    const handleRepoListChange=(newList)=>{

        setList(newList)

    }

    const filterList= list.filter((item)=>(
       
        item.name?.toLowerCase().includes(filtro.toLowerCase())

    ))



    return(

        
    <div>

        <RepoList onRepoListChange={handleRepoListChange}/>
        
        <input className="search-projects-box" type="text" value={filtro} onChange={handleFiltroChange} 
        placeholder={<span><FontAwesomeIcon icon={faSearch}/> </span>}></input>

            <ul>
                {
                    filterList.length >0 ?(
                    <ul>
                        {filterList.map((item)=>(
                            <li>{item.name}</li>
                        ))}

                    </ul>)
                         :
                         (<p>Sin resultados</p>)
                }
            </ul>
        
    </div>
    )


 }

 export default ManageProjects