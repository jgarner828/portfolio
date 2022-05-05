import React from 'react';

import { StyledHeaderMenu } from './styles/HeaderMenu.styled';


export default function HeaderMenu(props) {

    return (
            <StyledHeaderMenu>
                <li>About me</li>
                <li>Projects</li>
                <li>Contact</li>
            </StyledHeaderMenu>
    )
}