import { Box, styled } from '@mui/material';
import Image from 'next/image';
import Jono from '../public/assets/jono.jpg';
import Ehan from '../public/assets/eugene.jpg';

const GalleryContainer = styled(Box, {
    label: 'homepage-gallery-container',
})(({ theme }) => ({
    padding: "0 8px",
    border: "1px solid grey",
    display: "grid",
    maxWidth: "100vw",
    overflow: "hidden",
    gap: '80px',
    gridTemplateColumns: "repeat(8, 1fr)",
    gridAutoRows: '600px',
    [theme.breakpoints.up('md')]: {
        padding: "0 80px 0 30px",
    },
}));

const PhotoContainer1 = styled(Box)(({ theme }) => ({
    position: 'relative',
    border: '1px solid green',
    gridColumn: 'span 5 / auto',
}));

const PhotoContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    border: '1px solid green',
    gridColumn: 'span 3 / auto',
    gridRow: 'span 2 / auto'
}));

export default function Navbar() {
    return (
        <GalleryContainer>
            <PhotoContainer1>
                <Image 
                    src={Jono}
                    alt="picture of man in field"
                    fill
                    quality="100"
                    style={{objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1800px) 60vw, 33vw"
                />
            </PhotoContainer1>
            <PhotoContainer>
                <Image 
                    src={Ehan}
                    alt="picture of man in field"
                    fill
                    quality="100"
                    style={{objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1800px) 60vw, 33vw"
                />
            </PhotoContainer>
        </GalleryContainer>
    );
}
