import React from 'react';
import { Link } from 'react-router-dom';
import FutebolFlix from '../../assets/img/FutebolFlix.png';
import './Menu.css'
import Button from '../Button'


function Menu() {
    return (
      
        <nav className="Menu">
            <Link to="/">
           <img className="FutebolFlix" src={FutebolFlix} alt="FutebolFlix FutebolFlix" />
            </Link>

          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
          </Button>
        </nav>   
    );
}
export default Menu;