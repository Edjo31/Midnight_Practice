
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';


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
            transform: isOpen ? 'translateY(0%)' :'translateY(-100%)',
        }
    )
    

    return (
        <div className="container">
            <button onClick={toggleMenu}>Menú</button>
            <section className={"buttonTogle"}>
            <div className={"arrow " + (isOpen ? "arrow-down":"arrow-up")}></div>
            </section>
         
            {isOpen && (
        < animated.div className="container-menu container-menu-color container-menu-center" style={dropDownMenuAnimation}>
                <ul>
                    <li className="list"><a href="./routes/aboutMe.js">Acerca de</a></li>
                    <li className="list">Hamburguesa 2</li>
                    <li className="list">Hamburguesa 3</li>
                    <li className="list">Hamburguesa 3</li>
                    
                </ul>
 </animated.div>
            )}
           
        </div>
    );

}
export default SideMenu