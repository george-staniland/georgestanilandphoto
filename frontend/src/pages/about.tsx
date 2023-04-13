import Navbar from "components/Navbar";
import Footer from "components/Footer";
import LinkHoverAnimation from "components/LinkHoverAnimation";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import Jono from '../../public/assets/jono.jpg';

const AboutTextContainer = styled(Box, {
    label: 'about-text-container',
})(({ theme }) => ({
    display: "flex",
    padding: "0 8px",
    marginTop: '200px',
    [theme.breakpoints.up('md')]: {
        padding: "0 60px 0 30px",
        marginTop: '240px',
    },
}));

const AboutImageContainer = styled(Box, {
    label: 'about-image-container',
})(({ theme }) => ({
    padding: "0 8px",
    overflow: 'hidden',
    margin: '30px 0 100px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        padding: "0 60px 0 30px",
    },
}));

const LargeText = styled('a')(({ theme }) => ({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '18px',
    display: 'block',
    [theme.breakpoints.up('md')]: {
        fontSize: '24px',
    },
}));

export default function About() {
    return (
        <>
            <Navbar />
            <AboutTextContainer >
                <Box display="flex" flexDirection="column">
                    <LinkHoverAnimation>
                        <LargeText href="tel:+62225109709">
                            +64 22 510 9709
                        </LargeText>
                    </LinkHoverAnimation>
                    <LinkHoverAnimation>
                        <LargeText
                            href="mailto:georgestaniland@gmail.com"
                            target="_blank"
                            sx={{ marginTop: '8px' }}
                        >
                            georgestaniland@gmail.com
                        </LargeText>
                    </LinkHoverAnimation>
                </Box>
                <Box maxWidth="450px" marginLeft={{ xs: '0', md: '170px' }}>
                    <Typography variant="body1">
                        George Staniland is a photographer based in Tāmaki Makaurau - Auckland. His work has been shown in spaces across Australia and New Zealand. George continues to seek new and absorbing subjects to photograph and remains engaged in personal and commissioned projects.
                    </Typography>
                </Box>
            </AboutTextContainer>
            <AboutImageContainer>
                <Box
                    position="relative"
                    sx={{ aspectRatio: '7/6' }}
                    maxHeight="1500px"
                    margin="0 auto"
                >
                    <Image
                        src={Jono}
                        fill
                        quality={100}
                        alt="an image on gs photo"
                        style={{
                            objectFit: 'contain',
                        }}
                    />

                </Box>
            </AboutImageContainer>
            <Footer showButton={false} />
        </>
    )
}