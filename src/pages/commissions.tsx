import Navbar from "components/Navbar";
import React from 'react';
import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from '@use-gesture/react';
import Image from "next/image";
import Missing from "../../public/assets/missing.png"
import Portrait from "../../public/assets/portrait-test.jpg"
import Landscape from "../../public/assets/landscape-test.jpg"
import Footer from "components/Footer";

const AllProjects = styled(Box, {
    label: 'all-projects',
})(({ theme }) => ({
    marginTop: '120px',
}));

const SingleProject = styled(Box, {
    label: 'single-project',
})(({ theme }) => ({
    display: 'flex',
    border: '1px solid blue',
    flexDirection: 'column-reverse',
    padding: '0 8px',
    marginBottom: '30px',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
        padding: '0 8vw 0 8vw',
    },
}));

const LeftSection = styled(Box, {
    label: 'left-section',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    },
}));

const RightSection = styled(Box, {
    label: 'right-section',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
    [theme.breakpoints.up('sm')]: {
        paddingBottom: '0',
    },
}));

export default function Commisions() {

    const [isHovered, setHovered] = React.useState(false);
    const theme = useTheme();
    const smallerThanTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const bind = useGesture({
        onHover: ({ hovering }) => {
            setHovered(hovering ?? false);
        },
    });

    const style = useSpring({
        opacity: isHovered || smallerThanTablet ? '1' : '0',
    });

    const AnimatedLeftSection = animated(LeftSection);

    return (
        <>
            <Navbar />
            <AllProjects>
                <SingleProject {...bind()}>
                    <AnimatedLeftSection style={style}>
                        <Box marginRight={{ xs: "0", sm: "80px" }} paddingBottom={{ xs: "20px", sm: "0" }} >
                            <Typography variant="spaceGroteskSmall">(01)</Typography>
                        </Box>
                        <Box maxWidth="700px" display="flex" flexDirection="column">
                            <Typography variant="monoSmaller" paddingBottom={{ xs: "10px", sm: "50px" }} >Project Title</Typography>
                            <Typography variant="monoSmaller" paddingBottom={{ xs: "25px", sm: "50px" }} >Project Year</Typography>
                            <Typography variant="monoSmaller" >
                                Description: Lorem ipsum dolor sit amet consectetur. Euismod feugiat faucibus consequat vulputate. Vitae arcu nunc molestie tinc idunt tortor. Amet sodales elem entum viverra.
                            </Typography>
                        </Box>
                    </AnimatedLeftSection>
                    <RightSection>
                        {!isMobile && <Typography variant="spaceGroteskSmall" paddingBottom="6px">(01)</Typography>}
                        {isMobile &&
                            <Box border="1px solid red" height="260px" position="relative">
                                <Image
                                    src={Landscape}
                                    fill
                                    alt="test"
                                    style={{
                                        objectFit: 'cover',
                                    }} />
                            </Box>
                        }
                        {!isMobile &&
                            <Image
                                src={Landscape}
                                alt="test"
                                width="270"
                            />
                        }
                    </RightSection>
                </SingleProject>
            </AllProjects>
            <Footer />
        </>
    )
}