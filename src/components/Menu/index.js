import React from 'react';
import FutebolFlix from '../../assets/img/FutebolFlix.png';
import './Menu.css'
import Button from '../Button'


function Menu() {
    return (
      
        <nav className="Menu">
            <a href="/">
           <img className="FutebolFlix" src={FutebolFlix} alt="FutebolFlix FutebolFlix" />
            </a>

          <Button as='a' className="ButtonLink" href="/">
            Novo vídeo
          </Button>
        </nav>   
    );
}
export default Menu;