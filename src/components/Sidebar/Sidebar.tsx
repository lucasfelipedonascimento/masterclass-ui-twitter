import TwitterLogo from '../../assets/logo-twitter.svg';
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react';
import './Sidebar.css';
import { NavLink, Link } from 'react-router-dom'

// contexto: no react existem locais onde eu tenho acesso a algumas informações, e locais aonde 
// eu não consigo ter acesso a essas mesmas informnações

export function Sidebar() {
  return (
    <aside className='sidebar'>
          <img className='logo' src={TwitterLogo} alt="Logo" />

          <nav className='main-navigaton'>
            <NavLink className='active' to="/">
              <House weight='fill'  />
              <span>Home</span>
            </NavLink>


            <Link to="">
              <Hash />
              <span>Explore</span>
            </Link>

            <Link to="">
              <Bell />
              <span>Notifications</span>
            </Link>

            <Link to="">
              <Envelope />
              <span>Messages</span>
            </Link>

            <Link to="">
              <BookmarkSimple />
              <span>Bookmarks</span>
            </Link>

            <Link to="">
              <FileText />
              <span>Lists</span>
            </Link>

            <Link to="">
              <User />
              <span>Profile</span>
            </Link>

            <Link to="">
              <DotsThreeCircle />
              <span>More</span>
            </Link>

          </nav>

          <button className='new-tweet'>
            <Pencil />
            <span className='title-button'>Tweet</span>
          </button>
      </aside>
  )
}