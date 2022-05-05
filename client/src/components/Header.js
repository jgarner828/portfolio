import React from 'react';

import { StyledHeader } from './styles/Header.styled';
import HeaderMenu from './HeaderMenu';


export default function Header(props) {

    return (
            <StyledHeader>
                    <h1>Justin Garner</h1>
                   <HeaderMenu />
            </StyledHeader>
    )
}