import React from 'react';
import Link from 'next/link';
import { Box, styled, Typography } from '@mui/material';
import LinkHoverAnimation from './LinkHoverAnimation';
import MenuIcon from '../public/assets/menu-icon.svg';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

const FooterContainer = styled(Box, {
    label: 'footer-container',
})(({ theme }) => ({
    padding: "0 14px",
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr 1fr 2fr',
        padding: "0 8px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "0 60px 30px 30px",
    },
}));

const IconWrap = styled(Box)(({ theme }) => ({
    width: '18px',
    marginRight: '14px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        width: '19px',
    },
}));

const FooterItem = styled(Typography)(({ theme }) => ({
    paddingBottom: '7px',
    [theme.breakpoints.up('sm')]: {
        paddingBottom: '7px',
    },
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

interface Props {
    showButton?: boolean;
}

export default function Footer(props: Props) {
    const { showButton = true } = props;
    return (
        <FooterContainer>
            <Box
                gridColumn={{ xs: "span 2", sm: "span 1" }}
                paddingBottom={{ xs: "30px", sm: "0" }}
            >
                {showButton && <ToTopButton />}
            </Box>
            <Box display="flex" flexDirection="column" paddingBottom={{ xs: "30px", sm: "0" }}>
                <FooterItem variant="spaceGrotesk" >
                    <LinkHoverAnimation>
                        <Link href="/personal">
                            Personal
                        </Link>
                    </LinkHoverAnimation>
                </FooterItem>
                <FooterItem variant="spaceGrotesk" >
                    <LinkHoverAnimation>
                        <Link href="/commissions">
                            Commissions
                        </Link>
                    </LinkHoverAnimation>
                </FooterItem>
                <FooterItem variant="spaceGrotesk" >
                    <LinkHoverAnimation>
                        <Link href="/about">
                            About
                        </Link>
                    </LinkHoverAnimation>
                </FooterItem>
            </Box>
            <Box display="flex" flexDirection="column" >
                <FooterItem variant="spaceGrotesk" >
                    <LinkHoverAnimation>
                        <a href="https://www.instagram.com/george.staniland/?hl=en" target="_blank" rel="noreferrer" > Instagram </a>
                    </LinkHoverAnimation>
                </FooterItem>
            </Box>
            <Box display="flex" justifyContent={{ xs: 'flex-start', sm: 'flex-end' }} alignItems="flex-end" gridColumn={{ xs: "span 2", sm: "span 1" }}>
                <FooterItem variant="spaceGroteskSmall" >
                    © George Staniland Photography 2023
                </FooterItem>
            </Box>
        </FooterContainer>
    )
}