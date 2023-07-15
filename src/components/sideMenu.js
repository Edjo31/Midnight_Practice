
import { useState, useEffect } from "react";


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

    return (
        <div className="container">
            <button onClick={toggleMenu}>Menú</button>
            <section className={"buttonTogle"}>
            <div className={"arrow " + (isOpen ? "arrow-down":"arrow-up")}></div>
            </section>
         
            {isOpen && (
        <div className="container-menu container-menu-color container-menu-center">
                <ul>
                    <li className="list">Hamburguesa 1</li>
                    <li className="list">Hamburguesa 2</li>
                    <li className="list">Hamburguesa 3</li>
                    <li className="list">Hamburguesa 3</li>
                    
                </ul>
 </div>
            )}
           
        </div>
    );

}
export default SideMenu