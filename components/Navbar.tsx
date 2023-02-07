import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import Wordmark from '../public/assets/wordmark.svg';
import MenuIcon from '../public/assets/menu-icon.svg';
import MenuIconOpen from '../public/assets/menu-icon-open.svg';

const NavBarContainer = styled(Box, {
    label: 'navbar-container',
})(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    padding: "0 8px",
    [theme.breakpoints.up('md')]: {
        padding: "0 60px 0 30px",
    },
}));

const WordMarkWrap = styled(Box)(({ theme }) => ({
    width: '70%',
    maxWidth: '330px',
    [theme.breakpoints.up('md')]: {
        width: '330px',
    },
}));

const IconWrap = styled(Box)(({ theme }) => ({
    width: '22px',
    marginRight: '16px',
    position: 'relative',
    overflow: 'visible',
    [theme.breakpoints.up('md')]: {
        width: '24px',
        marginRight: '0',
    },
}));

const MenuContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top:'100%',
    right: '-148%',
    overflow: 'hidden',
    maxHeight: '0',
}));

const AnimatedMenuContainer = animated(MenuContainer);

const MenuItemWrap = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

export default function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false);

    const menuSpring = useSpring({
        maxHeight: showMenu ? '120px' : '0px',
    });

    const toggleMenu = () => setShowMenu(!showMenu);
    
    return (
        <NavBarContainer>
            <WordMarkWrap >
                <Wordmark/>
            </WordMarkWrap>
            <IconWrap onClick={toggleMenu} >
                {showMenu ? <MenuIconOpen/> : <MenuIcon/> }
                <AnimatedMenuContainer style={menuSpring}>
                    <MenuItemWrap padding="14px 0 8px" >
                        <Typography variant="monoSmall">Commissions</Typography>
                    </MenuItemWrap>
                    <MenuItemWrap padding="8px 0" >
                        <Typography variant="monoSmall">Personal</Typography>
                    </MenuItemWrap>
                    <MenuItemWrap padding="8px 0" >
                        <Typography variant="monoSmall">About</Typography>
                    </MenuItemWrap>
                </AnimatedMenuContainer>
            </IconWrap>
        </NavBarContainer>
    );
}
