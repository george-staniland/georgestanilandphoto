import React from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity';
import { useHover } from '@use-gesture/react';
import { Box, styled, useMediaQuery, useTheme, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import Missing from '../public/assets/missing.png';
import { SanityImage } from 'models/models';


const launchModal = () => {
    console.log('click!')
}

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});

const ImageContainer = styled(Box, {
    label: 'image-container',
})(({ theme }) => ({
    position: 'relative',
    flexGrow: '1',
    border: '1px solid green',
}));

const ImageModal = styled(Modal, {
    label: 'mui-modal',
})(({ theme }) => ({
    width: '92%',
    height: '97%',
    margin: 'auto',
}));

interface HomePageImageProps {
    setMetaData: React.Dispatch<React.SetStateAction<{}>>;
    setMetaVisible: React.Dispatch<React.SetStateAction<boolean>>;
    objectFit?: React.CSSProperties['objectFit'];
    objectPosition?: React.CSSProperties['objectPosition'];
    sizes?: string;
    priority?: boolean;
    paddingTop?: string;
    imageData: {
        altText?: string;
        imageMetaData?: {};
        image?: SanityImage,
    },
    title?: string;
}

export default function HomePageImage(homePageImageProps: HomePageImageProps) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const {
        objectFit = "contain",
        objectPosition = "center",
        priority = false,
        sizes = "(max-width: 768px) 100vw, (max-width: 1800px) 60vw, 47vw",
        paddingTop = "",
        setMetaData,
        setMetaVisible,
        imageData
    } = homePageImageProps;

    const theme = useTheme();
    const isXLarge = useMediaQuery(theme.breakpoints.up('xxl'));

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
        <>
            <ImageContainer
                {...bind(imageMetaData)}
                paddingTop={paddingTop}
                onClick={handleOpen}
            >
                <Image
                    src={image ? urlFor(image.asset._id).quality(100).url() : Missing}
                    alt={altText}
                    fill
                    priority={priority}
                    quality="100"
                    style={{
                        objectFit: objectFit,
                        objectPosition: isXLarge ? "center" : objectPosition,
                    }}
                    sizes={sizes}
                />
            </ImageContainer>
            <ImageModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>

                    <Image
                        src={image ? urlFor(image.asset._id).quality(100).url() : Missing}
                        alt={altText}
                        fill
                        quality="100"
                        sizes='100vw'
                        style={{ objectFit: "contain", }}
                    />

                </Box>
            </ImageModal>
        </>
    )
}