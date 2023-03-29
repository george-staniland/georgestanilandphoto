import React from 'react';
import { Box, styled } from '@mui/material';
import { createClient } from 'next-sanity';
import HomePageImage from './HomePageImage';

const GalleryContainer = styled(Box, {
    label: 'homepage-gallery-container',
})(({ theme }) => ({
    padding: "0 8px",
    marginTop: "110px",
    [theme.breakpoints.up('sm')]: {
        padding: "0 60px 0 30px",
        marginTop: "150px",
    },
}));

const GallerySection = styled(Box, {
    label: 'gallery-section',
})(({ theme }) => ({
    display: 'grid',
    minHeight: '650px',
    height: '100vh',
    overflow: 'hidden',
    gridTemplateColumns: '1fr',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        height: 'unset',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: 'clamp(400px, 60vh, 3000px)',
        gap: '40px',
    },
}));

const GallerySection1Flex = styled(Box)(({ theme }) => ({
    display: 'flex',
}));

const GallerySection2 = styled(GallerySection)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        columnGap: '40px',
        rowGap: 'clamp(60px, 12vh, 300px)'
    },
}));

const GallerySection3 = styled(GallerySection)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        gridAutoRows: 'clamp(400px, 85vh, 3000px)',
    },
}));

const GallerySection5 = styled(GallerySection)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        gridAutoRows: 'clamp(400px, 68vh, 3000px)',
    },
}));

const SectionChild = styled(Box, {
    label: 'section-child',
})(({ theme }) => ({
    position: 'relative',
    display: 'flex',
}));

const Section1Child1 = styled(SectionChild)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: '1',
    },
}));

const Section1Child2 = styled(SectionChild)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: '2',
    },
}));

const Section4Child1 = styled(SectionChild)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: '1',
    },
}));

const Section5Child2 = styled(SectionChild)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: '2',
    },
}));

interface Props {
    setMetaData: React.Dispatch<React.SetStateAction<{}>>;
    setMetaVisible: React.Dispatch<React.SetStateAction<boolean>>;
    gallery: {
        images: {}[],
    };
}

export default function HomePageGallery(props: Props) {

    const { setMetaData, setMetaVisible, gallery } = props;
    const { images } = gallery;

    return (
        <GalleryContainer>
            <GallerySection1Flex>
                <Box
                    flexGrow="1"
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Box
                        height={{ xs: "60vh", lg: "70vh" }}
                        minHeight={{ xs: "300px", lg: "610px" }}
                        paddingRight={{ xs: "15px", xl: "0" }}
                        width="100%"
                        display="flex"
                    >
                        <HomePageImage
                            title="jono in field"
                            imageData={images[0]}
                            setMetaData={setMetaData}
                            setMetaVisible={setMetaVisible}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </Box>
                    <Box
                        height={{ xs: "50vh", lg: "65vh" }}
                        minHeight={{ xs: "300px", lg: "550px" }}
                        marginTop={{ xs: "5vh", lg: "8vh" }}
                        width="88%"
                        display="flex"
                    >
                        <HomePageImage
                            title="castlehill"
                            imageData={images[2]}
                            setMetaData={setMetaData}
                            setMetaVisible={setMetaVisible}
                            sizes="(max-width: 768px) 100vw, 47vw"
                        />
                    </Box>
                </Box>
                <Box flexGrow="1" paddingTop="20%" >
                    <Box
                        height={{ xs: "60vh", lg: "80vh" }}
                        minHeight={{ xs: "300px", lg: "550px" }}
                        display="flex"
                    >
                        <HomePageImage
                            title="eugene"
                            imageData={images[1]}
                            setMetaData={setMetaData}
                            setMetaVisible={setMetaVisible}
                            sizes="(max-width: 768px) 100vw, 47vw"
                            objectPosition="right"
                            priority
                        />
                    </Box>
                </Box>
            </GallerySection1Flex>
            <GallerySection2>
                <SectionChild padding="11% 0">
                    <HomePageImage
                        title="nicholson st door"
                        imageData={images[3]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="left"
                    />
                </SectionChild>
                <SectionChild padding="4% 0">
                    <HomePageImage
                        title="toni in garden"
                        imageData={images[4]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                    />
                </SectionChild>
                <SectionChild paddingLeft="28%">
                    <HomePageImage
                        title="goodsport shoes"
                        imageData={images[5]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                    />
                </SectionChild>
                <SectionChild padding="1% 25% 20%">
                    <HomePageImage
                        title="Blackcat"
                        imageData={images[6]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                    />
                </SectionChild>
            </GallerySection2>
            <GallerySection3>
                <SectionChild padding="30% 10% 0 0">
                    <HomePageImage
                        title="Eve's fireplace"
                        imageData={images[7]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="right"
                    />
                </SectionChild>
                <SectionChild padding="0 6%">
                    <HomePageImage
                        title="Flowerbed"
                        imageData={images[8]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="top"
                    />
                </SectionChild>
            </GallerySection3>
            <GallerySection marginTop="-7vh">
                <Section4Child1 paddingLeft="10%">
                    <HomePageImage
                        title="Goodsport carpark"
                        imageData={images[10]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                    />
                </Section4Child1>
                <SectionChild padding="0 0 0 30%">
                    <HomePageImage
                        title="bottle"
                        imageData={images[9]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="top"
                    />

                </SectionChild>
                <SectionChild paddingLeft="11%">
                    <HomePageImage
                        title="grannys table"
                        imageData={images[11]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                    />
                </SectionChild>
            </GallerySection>
            <GallerySection5 marginBottom="160px">
                <SectionChild padding="0 5% 0 22%">
                    <HomePageImage
                        title="xander and alba"
                        imageData={images[12]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition='top'
                    />

                </SectionChild>
                <Section5Child2 padding="35% 6%">
                    <HomePageImage
                        title="Flower at parliament st"
                        imageData={images[13]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="top"
                    />
                </Section5Child2>
                <SectionChild padding="0 2% 0 6%">
                    <HomePageImage
                        title="Orari river"
                        imageData={images[14]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="right"
                    />
                </SectionChild>
            </GallerySection5>
        </GalleryContainer >
    );
}

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});