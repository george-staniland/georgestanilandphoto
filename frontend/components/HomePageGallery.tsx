import React from 'react';
import { Box, styled, useTheme, useMediaQuery } from '@mui/material';
import { createClient } from 'next-sanity';
import Image from 'next/image';
import HomePageImage from './HomePageImage';
import { useNextSanityImage } from 'next-sanity-image';
import { SanityImage } from 'models/models';

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
        rowGap: '60px'
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
        images: {
            image: SanityImage;
        }[],
    };
}

export default function HomePageGallery(props: Props) {

    const { setMetaData, setMetaVisible, gallery } = props;
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            {isTablet ?
                <DesktopGallery gallery={gallery} setMetaData={setMetaData} setMetaVisible={setMetaVisible} />
                :
                <MobileGallery gallery={gallery} setMetaData={setMetaData} setMetaVisible={setMetaVisible} />
            }
        </>
    );
}

const DesktopGallery = (props: Props) => {
    const { gallery, setMetaData, setMetaVisible } = props;
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
                            sizes="(max-width: 768px) 100vw, 56vw"
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
                <SectionChild padding="7% 0 0% 24%">
                    <HomePageImage
                        title="nicholson st door"
                        imageData={images[3]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="left"
                        sizes="(max-width: 768px) 100vw, 36vw"
                    />
                </SectionChild>
                <SectionChild padding="4% 0">
                    <HomePageImage
                        title="toni in garden"
                        imageData={images[4]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        sizes="(max-width: 768px) 100vw, 51vw"
                    />
                </SectionChild>
                <SectionChild paddingLeft="28%">
                    <HomePageImage
                        title="goodsport shoes"
                        imageData={images[5]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        sizes="(max-width: 768px) 100vw, 45vw"
                    />
                </SectionChild>
                <SectionChild padding="1% 25% 20%">
                    <HomePageImage
                        title="Blackcat"
                        imageData={images[6]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        sizes="(max-width: 768px) 100vw, 40vw"
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
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </SectionChild>
                <SectionChild padding="0 6%">
                    <HomePageImage
                        title="Flowerbed"
                        imageData={images[8]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="top"
                        sizes="(max-width: 768px) 100vw, 55vw"
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
                        sizes="(max-width: 768px) 100vw, 55vw"
                    />
                </Section4Child1>
                <SectionChild padding="0 0 0 30%">
                    <HomePageImage
                        title="bottle"
                        imageData={images[9]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="top"
                        sizes="(max-width: 768px) 100vw, 46vw"
                    />

                </SectionChild>
                <SectionChild paddingLeft="11%">
                    <HomePageImage
                        title="grannys table"
                        imageData={images[11]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        sizes="(max-width: 768px) 100vw, 50vw"
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
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />

                </SectionChild>
                <Section5Child2 padding="35% 6%">
                    <HomePageImage
                        title="Flower at parliament st"
                        imageData={images[13]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="top"
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </Section5Child2>
                <SectionChild padding="0 2% 0 6%">
                    <HomePageImage
                        title="Orari river"
                        imageData={images[14]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                        objectPosition="right"
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </SectionChild>
            </GallerySection5>
        </GalleryContainer >
    )
}

const MobileGalleryContainer = styled(Box, {
    label: 'homepage-gallery-container-mobile',
})(({ theme }) => ({
    padding: "0 8px",
    marginTop: "110px",
    marginBottom: "100px",
    [theme.breakpoints.up('sm')]: {
    },
}));

const ImageWrap = styled(Box)(() => ({
    display: 'flex',
    marginBottom: '40px',
    padding: '0 3%'
}));

const MobileGallery = (props: Props) => {
    const { gallery } = props;
    const { images } = gallery;

    return (
        <MobileGalleryContainer>
            <ImageWrap justifyContent="flex-end">
                <MobileImage height="auto" width="92%" image={images[4].image} priority title="garden" />
            </ImageWrap>
            <ImageWrap justifyContent="start" ml="6px" >
                <MobileImage height="auto" width="90%" image={images[3].image} priority title="door" />
            </ImageWrap>
            <ImageWrap justifyContent="flex-end" >
                <MobileImage height="auto" width="90%" image={images[2].image} title="castelhill" />
            </ImageWrap>
            <ImageWrap justifyContent="start" >
                <MobileImage height="auto" width="96%" image={images[0].image} title="jono" />
            </ImageWrap>
            <ImageWrap justifyContent="right" >
                <MobileImage height="auto" width="87%" image={images[1].image} title="ehan" />
            </ImageWrap>
            <ImageWrap justifyContent="center" >
                <MobileImage height="auto" width="90%" image={images[5].image} title="ampm-shoes" />
            </ImageWrap>
            <ImageWrap justifyContent="end" >
                <MobileImage height="auto" width="80%" image={images[6].image} title="blackcat" />
            </ImageWrap>
            <ImageWrap justifyContent="center" >
                <MobileImage height="auto" width="98%" image={images[8].image} title="flowerbed" />
            </ImageWrap>
            <ImageWrap justifyContent="center" >
                <MobileImage height="auto" width="99%" image={images[7].image} title="eves" />
            </ImageWrap>
            <ImageWrap justifyContent="center" >
                <MobileImage height="auto" width="100%" image={images[9].image} title="bottle" />
            </ImageWrap>
            <ImageWrap justifyContent="end" >
                <MobileImage height="auto" width="80%" image={images[10].image} title="carpark" />
            </ImageWrap>
            <ImageWrap justifyContent="left" >
                <MobileImage height="auto" width="96%" image={images[11].image} title="grannys" />
            </ImageWrap>
            <ImageWrap justifyContent="end" >
                <MobileImage height="auto" width="90%" image={images[12].image} title="xander" />
            </ImageWrap>
            <ImageWrap justifyContent="center" >
                <MobileImage height="auto" width="100%" image={images[14].image} title="orari" />
            </ImageWrap>
            <ImageWrap justifyContent="center" >
                <MobileImage height="auto" width="80%" image={images[13].image} title="single-flower" />
            </ImageWrap>

        </MobileGalleryContainer >
    )
}

interface MobileImageProps {
    width: string;
    height: string;
    image: SanityImage;
    title?: string;
    priority?: boolean;
}

const MobileImage = (props: MobileImageProps) => {
    const { image, width, height, priority = false } = props;
    const imageProps = useNextSanityImage(client, image);
    return (
        <Image
            {...imageProps}
            style={{ height: height, width: width }}
            alt="test"
            sizes="100vw"
            priority={priority}
            placeholder='blur'
            blurDataURL={image.asset.metadata.lqip}
        />
    )
}

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});