import React from 'react';
import styled from 'styled-components';
import {link, Link} from 'react-router-dom';
import './header.css';
const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <div className='header'>
            <h3 className='header-title'>
                <Link to ='/'>
                    Game of Thrones DB
                </Link>
            </h3>
            <ul className ='header-list'>
                <li>
                    <Link to='/characters'>characters</Link>
                </li>
                <li>
                    <Link to='/houses'>houses</Link>
                </li>
                <li>
                    <Link to='/books'>books</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;