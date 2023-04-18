import React from 'react';
import { Box, styled, useTheme, useMediaQuery } from '@mui/material';
import { createClient } from 'next-sanity';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { SanityImage } from 'models/models';

const MobileGalleryContainer = styled(Box, {
    label: 'homepage-gallery-container-mobile',
})(({ theme }) => ({
    padding: "0 8px",
    marginTop: "110px",
    marginBottom: "100px",
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

const ImageWrap = styled(Box)(() => ({
    display: 'flex',
    marginBottom: '40px',
    padding: '0 3%'
}));


interface Props {
    gallery: {
        images: {
            image: SanityImage;
        }[],
    };
}

export default function MobileHomePageGallery(props: Props) {
    const { gallery } = props;

    return (
        <MobileGallery gallery={gallery} />
    );
}


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
            alt="image on gs website"
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