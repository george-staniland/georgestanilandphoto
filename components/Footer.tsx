import React from 'react';
import { Box, Icon, styled, Typography } from '@mui/material';
import MenuIcon from '../public/assets/menu-icon.svg';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

const FooterContainer = styled(Box, {
    label: 'footer-container',
})(({ theme }) => ({
    padding: "0 8px",
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 2fr',
    [theme.breakpoints.up('md')]: {
        padding: "0 60px 30px 30px",
    },
}));

const IconWrap = styled(Box)(({ theme }) => ({
    width: '22px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        width: '19px',
        marginRight: '12px',
    },
}));

const FooterItem = styled(Typography)(({ theme }) => ({
    paddingBottom: '4px',
}));

const ToTopButton = () => {
    const [isHovered, setHovered] = React.useState(false);
    const spring = useSpring({
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    })

    const bind = useGesture({
        onHover: ({ hovering }) => {
            setHovered(hovering ?? false);
        },
    })

    const Button = styled(Box)(({ theme }) => ({
        cursor: 'pointer',
        display: 'inline-flex',
    }));

    const AButton = animated(Button);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <AButton {...bind()} style={spring} onClick={scrollToTop}>
            <IconWrap>
                <MenuIcon />
            </IconWrap>
            <Typography variant="spaceGrotesk" >
                back to top
            </Typography>
        </AButton>
    )
}

export default function Footer() {
    return (
        <FooterContainer>
            <Box>
                <ToTopButton />
            </Box>
            <Box display="flex" flexDirection="column">
                <FooterItem variant="spaceGrotesk" >
                    Commissions
                </FooterItem>
                <FooterItem variant="spaceGrotesk" >
                    Personal
                </FooterItem>
                <FooterItem variant="spaceGrotesk" >
                    About
                </FooterItem>
            </Box>
            <Box display="flex" flexDirection="column" >
                <FooterItem variant="spaceGrotesk" >
                    <a href="https://www.instagram.com/george.staniland/?hl=en" target="_blank" rel="noreferrer" > Instagram </a>
                </FooterItem>
            </Box>
            <Box />
        </FooterContainer>
    )
}