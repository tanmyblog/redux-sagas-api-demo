import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý user',
        to: '/user-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({match}) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-link ${active}`}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />            
    );
};

export class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <p className="navbar-brand" >Navbar</p>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            { this.showMenu(menus) }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

    showMenu = (menus) => {
        let result = null;
        if(menus.length > 0) {
            result = menus.map( (menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            } );
        }
        return result;
    }
}

export default Menu
