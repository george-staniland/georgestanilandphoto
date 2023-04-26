import React from "react";
import { Box, styled } from "@mui/material";
import { useSpring, animated, config } from "@react-spring/web";
import UpArrow from '../public/assets/up-arrow.svg';

interface Props {
    children: React.ReactNode;
}

const ScrollProgress = (props: Props) => {
    const [showBtn, setShowBtn] = React.useState(false);
    const { children } = props;

    React.useEffect(() => {
        const updatePosition = () => {
            const windowHeight = window.document.body.offsetHeight;
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > windowHeight - 1200) {
                setShowBtn(false);
            } else if (scrollPosition > 3000) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };
        window.addEventListener('scroll', updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    const Button = styled(Box, {
        label: 'progress-back-to-top',
    })(({ theme }) => ({
        position: 'fixed',
        right: '5px',
        bottom: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        pointerEvents: showBtn ? 'auto' : 'none',
        width: '50px',
        height: '50px',
        [theme.breakpoints.up('md')]: {
            right: '42px',
            width: '60px',
            height: '60px',
        }
    }));

    const spring = useSpring({
        opacity: showBtn ? '0.85' : '0',
        config: config.molasses,
    });

    const AButton = animated(Button);

    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {children}
            <AButton style={spring} onClick={ScrollTop}>
                <UpArrow />
            </AButton>
        </>
    )
}

export default ScrollProgress;