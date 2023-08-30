import React from 'react';
import Link from 'next/link';
import { Box, styled, Typography } from '@mui/material';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated, config } from '@react-spring/web';

const HoverAnimationContainer = styled(Box, {
    label: 'hover-animation-container',
})(({ theme }) => ({
    display: 'inline-flex',
    position: 'relative',
}));

export default function LinkHoverAnimation(props: React.PropsWithChildren) {
    const { children } = props;
    const [isHovered, setHovered] = React.useState(false);

    const bind = useGesture({
        onHover: ({ hovering }) => {
            setHovered(hovering ?? false);
        },
    })

    const containerSpring = useSpring({
        overflow: isHovered ? 'visible' : 'hidden',
        delay: 100,
    })

    const backgroundSpring = useSpring({
        bottom: isHovered ? '0%' : '-120%',
        config: config.wobbly,
    })

    const AHoverAnimationContainer = animated(HoverAnimationContainer);

    const BackgroundShape = styled(Box)(({ theme }) => ({
        position: 'absolute',
        left: '-5%',
        height: '116%',
        width: '110%',
        zIndex: -1,
        backgroundColor: '#FFFAC6',
    }));

    const ABackgroundShape = animated(BackgroundShape);

    return (
        <AHoverAnimationContainer {...bind()} style={containerSpring} >
            {children}
            <ABackgroundShape style={backgroundSpring} />
        </AHoverAnimationContainer>
    )
}