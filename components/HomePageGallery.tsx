import { Box, styled } from '@mui/material';
import { useHover, useGesture } from '@use-gesture/react';
import Image from 'next/image';
import Jono from '../public/assets/jono.jpg';
import Ehan from '../public/assets/eugene.jpg';
import Castlehill from '../public/assets/castlehill.jpg';
import Door from '../public/assets/door.jpg';
import Garden from '../public/assets/garden.jpg';
import Goodsport from '../public/assets/goodsport.jpg';
import Blackcat from '../public/assets/black-cat.jpg';
import Fireplace from '../public/assets/eve_fireplace.jpg';
import Flowers from '../public/assets/flowers.jpg';
import ParkingBuilding from '../public/assets/parking-building.jpg';
import WaterBottle from '../public/assets/waterbottle.jpg';
import GransTable from '../public/assets/grans_table.jpg';
import Xanda from '../public/assets/xanda.jpg';
import Flowers1 from '../public/assets/flowers_1.jpg';
import Orari from '../public/assets/orari.jpg';

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


export default function HomePageGallery() {

    interface Args {
        0: object;
    }

    const testFunction = (args: Args) => {
        console.log(args[0])
    }

    const bind = useHover(({ args }) => testFunction(args))

    const testData = {
        'one': 'first thing',
        'two': 'second thing',
        'three': 'third thing',
    }

    return (
        <GalleryContainer>
            <GallerySection>
                <Section1Child1>
                    <Box>
                        <ImageContainer paddingTop="85.714%" {...bind(testData)} >
                            <Image
                                src={Jono}
                                alt="picture of man in field"
                                fill
                                quality="100"
                                style={{
                                    objectFit: 'contain',
                                }}
                                sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 47vw"
                            />
                        </ImageContainer>
                    </Box>
                    <Box display="flex" flexGrow="1" paddingTop="40px">
                        <ImageContainer>
                            <Image
                                src={Castlehill}
                                alt="picture of man in field"
                                fill
                                quality="100"
                                style={{
                                    objectFit: 'contain',
                                }}
                                sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                            />
                        </ImageContainer>
                    </Box>
                </Section1Child1>
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
            </GallerySection>
            <GallerySection2>
                <SectionChild padding="11% 0">
                    <ImageContainer>
                        <Image
                            src={Door}
                            alt="Upclose film image of a door"
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
                <SectionChild padding="4% 0">
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
                <SectionChild paddingLeft="28%">
                    <ImageContainer>
                        <Image
                            src={Goodsport}
                            alt="picture of man in field"
                            fill
                            quality="100"
                            style={{
                                objectFit: 'contain',
                            }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <SectionChild padding="1% 25% 20%">
                    <ImageContainer>
                        <Image
                            src={Blackcat}
                            alt="Architecural photo of melbourne bar"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </GallerySection2>
            <GallerySection3>
                <SectionChild padding="30% 10% 0 0">
                    <ImageContainer>
                        <Image
                            src={Fireplace}
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
                <SectionChild padding="0 6%">
                    <ImageContainer>
                        <Image
                            src={Flowers}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain', objectPosition: 'top' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </GallerySection3>
            <GallerySection marginTop="-7vh">
                <Section4Child1 paddingLeft="10%">
                    <ImageContainer>
                        <Image
                            src={ParkingBuilding}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </Section4Child1>
                <SectionChild padding="0 0 0 30%">
                    <ImageContainer>
                        <Image
                            src={WaterBottle}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain', objectPosition: 'top' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <SectionChild paddingLeft="11%">
                    <ImageContainer>
                        <Image
                            src={GransTable}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </GallerySection>
            <GallerySection5 marginBottom="160px">
                <SectionChild padding="0 5% 0 22%">
                    <ImageContainer>
                        <Image
                            src={Xanda}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain', objectPosition: 'top' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
                <Section5Child2 padding="35% 6%">
                    <ImageContainer>
                        <Image
                            src={Flowers1}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain', objectPosition: 'top' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </Section5Child2>
                <SectionChild padding="0 2% 0 6%">
                    <ImageContainer>
                        <Image
                            src={Orari}
                            alt="flowers"
                            fill
                            quality="100"
                            style={{ objectFit: 'contain', objectPosition: 'right' }}
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1800px) 60vw, 33vw"
                        />
                    </ImageContainer>
                </SectionChild>
            </GallerySection5>
        </GalleryContainer>
    );
}
