import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity';
import { useHover } from '@use-gesture/react';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import Missing from '../public/assets/missing.png'

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
}));

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

export default function HomePageImage(homePageImageProps: HomePageImageProps) {

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