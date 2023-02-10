import { Box, styled } from '@mui/material';
import Image from 'next/image';
import Jono from '../public/assets/jono.jpg';
import Ehan from '../public/assets/eugene.jpg';
import Castelhill from '../public/assets/castlehill.jpg';

const GalleryContainer = styled(Box, {
    label: 'homepage-gallery-container',
})(({ theme }) => ({
    padding: "0 8px",
    marginTop: "80px",
}));

const Test = styled(Box)(({ theme }) => ({
    aspectRatio: '6/7',
}));

const GallerySection = styled(Box)(({ theme }) => ({
    height: 'clamp(900px, 140vh, 3000px)',
    display: 'grid',
    overflow: 'hidden',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    flexGrow: '1',
}));

const Section1 = styled(GallerySection)(({ theme }) => ({
    gridTemplateColumns: 'repeat(2, 1fr)',
}));

const SectionChild = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
}));

const Section1Child2 = styled(SectionChild)(({ theme }) => ({
    gridRowStart: '1',
    gridRowEnd: '3',
    gridColumnStart: '2',
}));


export default function Navbar() {
    return (
        <GalleryContainer>
            <Section1>
                <SectionChild padding="0 4%">
                    <ImageContainer>
                        <Image
                            src={Jono}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 47vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <Section1Child2 padding="30vh 12% 20vh">
                    <ImageContainer>
                        <Image
                            src={Ehan}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </Section1Child2>
                <SectionChild padding="4% 14%">
                    <ImageContainer>
                        <Image
                            src={Castelhill}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </Section1>
        </GalleryContainer>
    );
}
