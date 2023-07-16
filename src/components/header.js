


 const Header=()=>{
    return(
 <nav>
        <div className="conatiner-header">
            <ul className="header-horizontal-item">
                <li>Principal</li>
                <li>Contacto</li>
                <li>acerca de</li>
                <li className="special">
                    proyectos
                    <ul className="header-vertical-item">
                    <a href="home"><li>Gitcraft</li> </a>
                    <a href="home"><li>midnight</li> </a>
                    </ul>
                </li>
            </ul>
        </div>
        </nav>

    )


 }

 export default Header