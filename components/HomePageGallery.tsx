import { Box, styled } from '@mui/material';
import Image from 'next/image';
import Jono from '../public/assets/jono.jpg';
import Ehan from '../public/assets/eugene.jpg';
import Castlehill from '../public/assets/castlehill.jpg';
import Door from '../public/assets/door.jpg';
import Garden from '../public/assets/garden.jpg';
import Goodsport from '../public/assets/goodsport.jpg';
import Blackcat from '../public/assets/black-cat.jpg';

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
        height: 'clamp(900px, 140vh, 3000px)',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(300px, 70vh)',
        gap: '40px',
    },
}));

const ImageContainer = styled(Box, {
    label: 'image-container',
})(({ theme }) => ({
    position: 'relative',
    flexGrow: '1',
}));

const SectionChild = styled(Box, {
    label: 'section-child',
})(({ theme }) => ({
    position: 'relative',
    display: 'flex',
}));

const Section1Child2 = styled(SectionChild)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: '2',
    },
}));


export default function Navbar() {
    return (
        <GalleryContainer>
            <GallerySection>
                <SectionChild>
                    <ImageContainer>
                        <Image
                            src={Jono}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'left'
                            }}
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
                <SectionChild padding="6vh 6vw">
                    <ImageContainer>
                        <Image
                            src={Castlehill}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'top',
                            }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </GallerySection>
            <GallerySection>
                <SectionChild padding="13vh 0">
                    <ImageContainer>
                        <Image
                            src={Door}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'left'
                            }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <SectionChild padding="5vh 0">
                    <ImageContainer>
                        <Image
                            src={Garden}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <SectionChild paddingLeft="10vw">
                    <ImageContainer>
                        <Image
                            src={Goodsport}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'right'
                            }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <SectionChild padding="0 5vw 20vh 5vw">
                    <ImageContainer>
                        <Image
                            src={Blackcat}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </GallerySection>
        </GalleryContainer>
    );
}
