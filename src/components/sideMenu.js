
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import profile from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {

        const isOpenCache = localStorage.getItem("isOpen")
      

        setIsOpen(isOpenCache === 'true')
        
    }, [])


    const toggleMenu = () => {
        localStorage.setItem("isOpen", String(!isOpen))
        setIsOpen(!isOpen)
        
    }
    
    const dropDownMenuAnimation=useSpring(
        {
            transform: isOpen ? 'translateX(0%)' :'translateX(-50%)',
        }
    )
   
    
    
    

    return (
        <div className="container">
        
 
        < animated.div className={isOpen ? "container-menu container-menu-color container-menu-center" :"default-container default-container-menu"} style={ dropDownMenuAnimation}>
                <button onClick={toggleMenu}   className={isOpen ? "toggle-button":"default-toggle-button"}><FontAwesomeIcon icon={faAngleRight} style={{ transform: isOpen ? "rotate(90deg)" : "rotate(270deg)" }} /></button>

                <section className={isOpen ? "title":"default-title"}>{isOpen ? "Midnight practice":"MP"}</section>
                
                <section className={isOpen ? "Profile":"default-Profile"}> <img className={isOpen ? "img-profile":"default-img-profile"} src={profile}></img> 
            {isOpen ? ( <ul>
                    <li>Edjo31</li>
                    <li>Admin</li>
                </ul>):""}
                
                </section>
                <ul >
                    <a href="home"><li className={isOpen ? "list":"default-list"}>{isOpen ? "Principal":<FontAwesomeIcon icon={faHouse} />}</li> </a>
                    <a href="home"><li className={isOpen ? "list":"default-list"}>{isOpen ? "Proyects":<FontAwesomeIcon icon={faDiagramProject} />}</li> </a>
                    <a href="home"><li className={isOpen ? "list":"default-list"}>{isOpen ? "Proyects":<FontAwesomeIcon icon={faInbox} />}</li> </a>
                    
         
                    
                </ul>
 </animated.div>
         

           

           
        </div>
    );

}
export default SideMenu