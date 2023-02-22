import TwitterLogo from '../../assets/logo-twitter.svg';
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react';
import './Sidebar.css';
import { Link } from 'react-router-dom'

// contexto: no react existem locais onde eu tenho acesso a algumas informações, e locais aonde 
// eu não consigo ter acesso a essas mesmas informnações

export function Sidebar() {
  return (
    <aside className='sidebar'>
          <img className='logo' src={TwitterLogo} alt="Logo" />

          <nav className='main-navigaton'>
            <Link className='active' to="/">
              <House weight='fill'  />
              Home
            </Link>


            <Link to="">
              <Hash />
              Explore
            </Link>

            <Link to="">
              <Bell />
              Notifications
            </Link>

            <Link to="">
              <Envelope />
              Messages
            </Link>

            <Link to="">
              <BookmarkSimple />
              Bookmarks
            </Link>

            <Link to="">
              <FileText />
              Lists
            </Link>

            <Link to="">
              <User />
              Profile
            </Link>

            <Link to="">
              <DotsThreeCircle />
              More
            </Link>

          </nav>

          <button className='new-tweet'>Tweet</button>
      </aside>
  )
}