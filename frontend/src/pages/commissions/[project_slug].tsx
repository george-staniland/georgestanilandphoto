import React from 'react';
import { Box, styled, useMediaQuery, useTheme } from "@mui/material"
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import ScrollProgress from 'components/ScrollProgress';
import { createClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { SanityImage } from 'models/models';

//To Do: Both dynamic routes should use the same components

const ImageContainer = styled(Box, {
    label: 'project-img-container',
})(({ theme }) => ({
    width: '100%',
    overflow: 'hidden',
    marginBottom: '12vh',
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
        minHeight: '700px',
        padding: '0 18px',
        height: '81vh',
        marginBottom: '100px',
    },
}));

const ImageContainerFirstImage = styled(ImageContainer, {
    label: 'first',
})(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginBottom: '42px',
    },
}));

interface ImgProps {
    image: SanityImage;
    index: number;
}

const ProjectSingleImage = (props: ImgProps) => {
    const [isFirst, setIsFirst] = React.useState(false);
    const { image, index } = props;
    const imageProps = useNextSanityImage(client, image);
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));

    React.useEffect(() => {
        if (index === 0) {
            setIsFirst(true);
        }
    }, [index]);

    return (
        <>
            {isFirst ?
                <ImageContainerFirstImage>
                    {isTablet ?
                        <Image
                            {...imageProps}
                            style={{ height: '100%', width: 'auto' }}
                            alt="test"
                            sizes="(max-width: 1200px) 70vw, 97vw"
                            placeholder='blur'
                            blurDataURL={image.asset.metadata.lqip}
                        />
                        :
                        <Image
                            {...imageProps}
                            style={{
                                height: 'auto',
                                width: '100%',
                                objectFit: 'contain',
                            }}
                            alt="test"
                            sizes="100vw"
                            placeholder='blur'
                            blurDataURL={image.asset.metadata.lqip}
                        />}
                </ImageContainerFirstImage>
                :
                <ImageContainer>
                    {isTablet ?
                        <Image
                            {...imageProps}
                            style={{ height: '100%', width: 'auto' }}
                            alt="test"
                            sizes="(max-width: 1200px) 70vw, 97vw"
                            placeholder='blur'
                            blurDataURL={image.asset.metadata.lqip}
                        />
                        :
                        <Image
                            {...imageProps}
                            style={{
                                height: 'auto',
                                width: '100%',
                                objectFit: 'contain',
                            }}
                            alt="test"
                            sizes="100vw"
                            placeholder='blur'
                            blurDataURL={image.asset.metadata.lqip}
                        />}
                </ImageContainer>
            }
        </>
    )
}

interface Props {
    project: {
        images: SanityImage[];
    }
}

const Project = (props: Props) => {
    const { project } = props;
    const { images } = project;
    return (
        <>
            <ScrollProgress>
                <Navbar />
                <Box marginTop="120px" marginBottom={{ xs: "30px", md: "120px" }}>
                    {images.map((image, index) => <ProjectSingleImage image={image} key={index} index={index} />)}
                </Box>
                <Footer showButton={false} showBackButton={true} linkTitle='back to commissions' backLink='/commissions' />
            </ScrollProgress>
        </>
    )
}

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});

interface ProjectContext {
    params: {
        project_slug: string;
    }
}

export async function getStaticProps(context: ProjectContext) {
    const { params } = context;
    const { project_slug } = params;

    const data = await client.fetch(`*[_type == "projects" && project_slug.current == "${project_slug}"]{images[]{ ..., asset->{ ..., metadata } }}`);
    const project = data[0];

    return {
        props: {
            project,
        },
    }
}

export const getStaticPaths = async () => ({
    paths: [],
    fallback: 'blocking',
});

export default Project

