import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo}  from '../components/img/logo 1.svg';

import {ReactComponent as Cart}  from '../components/img/Group 152.svg';
import {ReactComponent as Search}  from '../components/img/Search (Traced).svg';
import {ReactComponent as Insta}  from '../components/img/Instagram.svg';
import {ReactComponent as Vk}  from '../components/img/VK.svg';
import {ReactComponent as Facebook}  from '../components/img/Frame.svg';

class Menu extends Component {
    render() {
        return (
            <div className="main_container">
                <div className="menu_icons">
                    <div className="menu_block">
                        <Insta/>
                        <Vk/>
                        <Facebook/>
                    </div >
                    <div className="menu_block">
                        <div>
                            <Logo/>
                            <p>Wunderbeer</p>
                        </div>
                    </div>
                    <div className="menu_block">
                        <Search/>
                        <Cart/>
                    </div>
                </div>
               <div className="wrapper_menu">
                   <Link to="/">
                       <p className="link" >Home</p>
                   </Link>
                   <Link to="/about">
                       <p className="link" >About</p>
                   </Link>
                   <Link to="/catalog">
                       <p className="link" >Catalog</p>
                   </Link>
                   <Link to="/destrib">
                       <p className="link" >Destrib</p>
                   </Link>
                   <Link to="/complictation">
                       <p className="link" >Complictation</p>
                   </Link>
               </div>
            </div>

        );
    }
}

export default Menu;