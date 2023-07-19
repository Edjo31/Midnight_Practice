
import '../assets/projects.css';
import SideMenu from '../components/sideMenu'
import RepoList from '../components/service/repoList';
import AvatarGitHub from '../components/service/avatarGithub';
import ManageProjects from '../components/manageProjects';

const Projects =()=>{


   
return(
<div className='all-container'>

<div className="container-projects">
        <header className="header-projects">header</header>
        <aside className="sidebar-projects">
            <SideMenu/>
        </aside>
        <main className="main-projects">
       <ManageProjects />

        </main>
        
    </div>
</div>
  
)
}

export default Projects