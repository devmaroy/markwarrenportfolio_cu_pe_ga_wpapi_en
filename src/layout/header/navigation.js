import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Menu from './menu';
import hamburgerMenuIcon from '../../images/icons/hamburger-menu.svg'


class Navigation extends Component {
    constructor( props ) {
        super( props );
        this.state = { showMenu: false };
    }

    toggleMenu = () => {
        this.setState(( { showMenu } ) => ( { showMenu: ! showMenu } ) );
    }

    render() {
        return (
            <div className="navigation">
                <button className="hamburger-menu" onClick={ this.toggleMenu }>
                    <img src={ hamburgerMenuIcon } alt="Hamburger menu icon" className="hamburger-menu__icon" />
                </button>

                <div className={ this.state.showMenu ? 'navigation__inner active' : 'navigation__inner' }>
                    <Menu toggleMenu={ this.toggleMenu } />
                    <ScrollLink 
                        to="contact" 
                        className="button button--primary navigation__button"
                        spy={ true }
                        hashSpy={ true }
                        smooth={ true }
                        duration={ 500 }
                    >
                        Hire me
                    </ScrollLink>
                </div>
            </div>
        );
    }
}


export default Navigation;