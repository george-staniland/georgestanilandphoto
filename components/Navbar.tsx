import React from 'react';
import Link from 'next/link';
import LinkHoverAnimation from './LinkHoverAnimation';
import { NavMetaData } from '@/pages';
import { Box, styled, Typography, useScrollTrigger } from '@mui/material';
import { animated, useSpring, config } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import Wordmark from '../public/assets/wordmark.svg';
import MenuIcon from '../public/assets/menu-icon.svg';
import MenuIconOpen from '../public/assets/menu-icon-open.svg';

interface Props {
    navMetaData?: NavMetaData;
    metaVisible: boolean;
}

const MetaDataPanel = (props: Props) => {
    const { navMetaData, metaVisible } = props;

    const spring = useSpring({
        opacity: metaVisible ? 1 : 0,
        config: config.stiff,
    });

    const ABox = animated(Box);
    return (
        <ABox display="flex" style={spring}>
            <Typography variant="monoSmaller" paddingRight="100px">{navMetaData?.imageTitle}</Typography>
            <Typography variant="monoSmaller" paddingRight="50px">{navMetaData?.seriesOrClient}</Typography>
            <Typography variant="monoSmaller" paddingRight="100px">{navMetaData?.date}</Typography>
        </ABox>
    )
}

const NavBarContainer = styled(Box, {
    label: 'navbar-container',
})(({ theme }) => ({
    display: "flex",
    position: "fixed",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    width: "100%",
    top: "0",
    zIndex: '10',
    padding: "0 8px",
    [theme.breakpoints.up('md')]: {
        padding: "0 60px 0 30px",
    },
}));

const WordMarkWrap = styled(Box, {
    label: 'wordmark-wrap',
})(({ theme }) => ({
    width: '70%',
    maxWidth: '330px',
    [theme.breakpoints.up('md')]: {
        width: '330px',
    },
}));

const MenuRightWrap = styled(Box, {
    label: 'menu-right-wrap',
})(({ theme }) => ({
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
}));

const MenuItemsWrap = styled(Box)(({ theme }) => ({
    width: '22px',
    marginRight: '16px',
    position: 'relative',
    overflow: 'visible',
    [theme.breakpoints.up('md')]: {
        width: '24px',
        marginRight: '0',
    },
}));

const MenuItemWrap = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

const IconWrap = styled(Box)(({ theme }) => ({
    cursor: 'pointer',
    transformOrigin: 'center',
}));

export default function Navbar(props: Props) {
    const { navMetaData, metaVisible } = props;
    const [showMenu, setShowMenu] = React.useState(false);
    const [iconHovered, setIconHovered] = React.useState(false);
    const trigger = useScrollTrigger({ threshold: 42, disableHysteresis: true });

    const menuSpring = useSpring({
        opacity: showMenu ? 1 : 0,
        config: config.stiff,
    });

    const iconSpring = useSpring({
        transform: iconHovered ? 'rotate(45deg)' : 'rotate(0deg)',
        opacity: iconHovered ? '0.9' : '1',
    });

    const MenuContainer = styled(Box)(({ theme }) => ({
        position: 'absolute',
        top: '100%',
        right: '-148%',
        pointerEvents: showMenu ? 'auto' : 'none',
    }));

    const bind = useGesture({
        onHover: ({ hovering }) => {
            setIconHovered(hovering ?? false);
        },
    })

    const AnimatedMenuContainer = animated(MenuContainer);
    const AnimatedIconWrap = animated(IconWrap);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <NavBarContainer>
            <WordMarkWrap >
                <Wordmark />
            </WordMarkWrap>
            <MenuRightWrap>
                <MetaDataPanel navMetaData={navMetaData} metaVisible={metaVisible} />
                <MenuItemsWrap onClick={toggleMenu} >
                    <AnimatedIconWrap {...bind()} style={iconSpring}>
                        {showMenu ? <MenuIconOpen /> : <MenuIcon />}
                    </AnimatedIconWrap>
                    <AnimatedMenuContainer style={menuSpring}>
                        <MenuItemWrap padding="14px 0 8px" >
                            <LinkHoverAnimation>
                                <Link href="/commissions">
                                    <Typography variant="monoSmall">Commissions</Typography>
                                </Link>
                            </LinkHoverAnimation>
                        </MenuItemWrap>
                        <MenuItemWrap padding="8px 0" >
                            <LinkHoverAnimation>
                                <Link href="/personal">
                                    <Typography variant="monoSmall">Personal</Typography>
                                </Link>
                            </LinkHoverAnimation>
                        </MenuItemWrap>
                        <MenuItemWrap padding="8px 0" >
                            <LinkHoverAnimation>
                                <Link href="/about">
                                    <Typography variant="monoSmall">About</Typography>
                                </Link>
                            </LinkHoverAnimation>
                        </MenuItemWrap>
                    </AnimatedMenuContainer>
                </MenuItemsWrap>
            </MenuRightWrap>
        </NavBarContainer>
    );
}
