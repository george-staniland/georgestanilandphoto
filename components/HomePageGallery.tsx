import { Box, styled } from '@mui/material';
import React from 'react';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'
import { useHover } from '@use-gesture/react';
import Image from 'next/image';
import Missing from '../public/assets/missing.png'

interface HomePageImageProps {
    setMetaData: React.Dispatch<React.SetStateAction<{}>>;
    setMetaVisible: React.Dispatch<React.SetStateAction<boolean>>;
    objectFit?: React.CSSProperties['objectFit'];
    objectPosition?: React.CSSProperties['objectPosition'];
    sizes?: string;
    paddingTop?: string;
    imageData: {
        altText?: string;
        imageMetaData?: {};
        image?: {},
    },
    title?: string;
}

const HomePageImage = (homePageImageProps: HomePageImageProps) => {

    const {
        objectFit = "contain",
        objectPosition = "center",
        sizes = "(max-width: 768px) 100vw, (max-width: 1800px) 60vw, 47vw",
        paddingTop = "",
        setMetaData,
        setMetaVisible,
        imageData
    } = homePageImageProps;

    const { image, imageMetaData, altText = '' } = imageData;

    const bind = useHover(({ args, hovering }) => {
        setMetaData(args[0]);
        setMetaVisible(hovering ? true : false);
    });

    const builder = imageUrlBuilder(client);

    function urlFor(source: String) {
        return builder.image(source);
    }

    return (
        <ImageContainer {...bind(imageMetaData)} paddingTop={paddingTop} >
            <Image
                src={image ? urlFor(image.asset._ref).url() : Missing}
                alt={altText}
                fill
                quality="100"
                style={{
                    objectFit: objectFit,
                    objectPosition: objectPosition,
                }}
                sizes={sizes}
            />
        </ImageContainer>
    )
}

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

const ImageContainer = styled(Box, {
    label: 'image-container',
})(({ theme }) => ({
    position: 'relative',
    flexGrow: '1',
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
    console.log(images);

    return (
        <GalleryContainer>
            <GallerySection>
                <Section1Child1>
                    <Box>
                        <HomePageImage
                            title="jono in field"
                            imageData={images[0]}
                            setMetaData={setMetaData}
                            setMetaVisible={setMetaVisible}
                            paddingTop="80%"
                        />
                    </Box>
                    <Box display="flex" flexGrow="1" paddingTop="40px">
                        <HomePageImage
                            title="castlehill"
                            imageData={images[2]}
                            setMetaData={setMetaData}
                            setMetaVisible={setMetaVisible}
                        />
                    </Box>
                </Section1Child1>
                <Section1Child2 padding="30vh 12% 20vh">
                    <HomePageImage
                        title="Eugene"
                        imageData={images[1]}
                        setMetaData={setMetaData}
                        setMetaVisible={setMetaVisible}
                    />
                </Section1Child2>
            </GallerySection>
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
        </GalleryContainer>
    );
}

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});