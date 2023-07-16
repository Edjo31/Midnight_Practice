
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import {Link} from 'react-router-dom'
import profile from '../assets/profile.jpg'

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
            transform: isOpen ? 'translateX(0%)' :'translateX(-40%)',
        }

    )
   
    
    
    

    return (
        <div className="container">
        
            <section className={"buttonTogle"}>
            <div className={"arrow " + (isOpen ? "arrow-down":"arrow-up")}></div>
            </section>
         
           

                
        < animated.div className={isOpen ? "container-menu container-menu-color container-menu-center" :"default-container default-container-menu"} style={ dropDownMenuAnimation}>
                <button onClick={toggleMenu}   className="toggle-button"></button>

                <section className={isOpen ? "title":"default-title"}>{isOpen ? "Midnight practice":"MP"}</section>
                
                <section className={isOpen ? "Profile":"default-Profile"}> <img className={isOpen ? "img-profile":"default-img-profile"} src={profile}></img> 
            {isOpen ? ( <ul>
                    <li>Edjo31</li>
                    <li>Admin</li>
                </ul>):""}
                
                </section>
                <ul >
                    <a href="home"><li className="list">Principal</li> </a>
                    <a href="aboutme"><li className="list"> Acerca de</li> </a>
                    <a href="home"><li className="list">Principal</li> </a>
                    <a href="aboutme"><li className="list"> Acerca de</li> </a>
         
                    
                </ul>
 </animated.div>
         

           

           
        </div>
    );

}
export default SideMenu