
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';

import AvatarGitHub from "./service/avatarGithub";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SideMenu = () => {

    const font = <FontAwesomeIcon icon={faHouse} />
    const [list,setList]=useState([])
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {

        const isOpenCache = localStorage.getItem("isOpen")


        setIsOpen(isOpenCache === 'true')

    }, [])

    const handleAvatarChange=(newList)=>{

        setList(newList)
    }


    const toggleMenu = () => {
        localStorage.setItem("isOpen", String(!isOpen))
        setIsOpen(!isOpen)

    }

    const dropDownMenuAnimation = useSpring(
        {
            transform: isOpen ? 'translateX(0%)' : 'translateX(-50%)',
        }
    )





    return (
        <div className="container">

        <AvatarGitHub onAvatarChange={handleAvatarChange} />

            < animated.div className={isOpen ? "container-menu container-menu-color container-menu-center" : "default-container default-container-menu"} style={dropDownMenuAnimation}>
                <button onClick={toggleMenu} className={isOpen ? "toggle-button" : "default-toggle-button"}><FontAwesomeIcon icon={faAngleRight} style={{ transform: isOpen ? "rotate(90deg)" : "rotate(270deg)" }} /></button>

                <section className={isOpen ? "title" : "default-title"}>{isOpen ? "Midnight practice" : "MP"}</section>

                <section className={isOpen ? "Profile" : "default-Profile"}> <img className={isOpen ? "img-profile" : "default-img-profile"} src={list.avatar_url}></img>
                    {isOpen ? (<ul>
                        <li>{list.login}</li>
                        <li>Admin</li>
                    </ul>) : ""}

                </section>
                <ul >
                    <a href="home"><li className={isOpen ? "list" : "default-list"}>{isOpen ? 
                    (<span className="icons"> <FontAwesomeIcon icon={faHouse} /> Principal</span>) 
                    : <FontAwesomeIcon icon={faHouse} />}</li> </a>
                    <a href="projects"><li className={isOpen ? "list" : "default-list"}>{isOpen 
                    ? (<span> <FontAwesomeIcon icon={faDiagramProject} /> Projects</span>) 
                    : <FontAwesomeIcon icon={faDiagramProject} />}</li> </a>
                    <a href="home"><li className={isOpen ? "list" : "default-list"}>{isOpen
                     ? (<span> <FontAwesomeIcon icon={faInbox} /> About</span>) 
                     : <FontAwesomeIcon icon={faInbox} />}</li> </a>
                </ul>
            </animated.div>





        </div>
    );

}
export default SideMenu