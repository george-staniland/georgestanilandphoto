import React from "react";
import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';
import { useSpring, animated } from "@react-spring/web";
import Missing from '../public/assets/missing.png'
import Landscape from "../public/assets/landscape-test.jpg";
import { ProjectModel } from "models/project";

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});

const SingleProject = styled(Box, {
    label: 'single-project',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: '0 8px',
    marginBottom: '30px',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
        padding: '0 8vw 0 8vw',
    },
}));

const LeftSection = styled(Box, {
    label: 'left-section',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    },
}));

const RightSection = styled(Box, {
    label: 'right-section',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
    [theme.breakpoints.up('sm')]: {
        paddingBottom: '0',
    },
}));

interface Props {
    project: ProjectModel,
    index: number;
}

export default function Project(props: Props) {
    let { index } = props;
    const { project } = props;
    const { project_title, project_year, cover_image, description, project_slug, client_or_type } = project;
    const [isHovered, setHovered] = React.useState(false);
    const theme = useTheme();
    const smallerThanTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    index = index + 1;

    const bind = useGesture({
        onHover: ({ hovering }) => {
            setHovered(hovering ?? false);
        },
    });

    console.log(project_slug)

    const style = useSpring({
        opacity: isHovered || smallerThanTablet ? '1' : '0',
    });

    const AnimatedLeftSection = animated(LeftSection);

    const builder = imageUrlBuilder(client);

    function urlFor(source: String) {
        return builder.image(source);
    }

    const imageProps = useNextSanityImage(client, cover_image);

    return (
        <Link href={`/projects/${project_slug.current}`}>
            <SingleProject {...bind()}>
                <AnimatedLeftSection style={style}>
                    <Box marginRight={{ xs: "0", sm: "20px", md: "80px" }} paddingBottom={{ xs: "20px", sm: "0" }} >
                        <Typography variant="spaceGroteskSmall">(0{index})</Typography>
                    </Box>
                    <Box maxWidth="700px" display="flex" flexDirection="column" paddingRight={{ xs: "0", sm: "40px" }}>
                        <Typography variant="monoSmaller" paddingBottom={{ xs: "10px", sm: "50px" }} >{project_title}</Typography>
                        <Typography variant="monoSmaller">{client_or_type}</Typography>
                        <Typography variant="monoSmaller" paddingBottom={{ xs: "25px", sm: "50px" }} >{project_year}</Typography>
                        <Typography variant="monoSmaller" >{description}</Typography>
                    </Box>
                </AnimatedLeftSection>
                <RightSection>
                    {!isMobile && <Typography variant="spaceGroteskSmall" paddingBottom="6px">(0{index})</Typography>}
                    {isMobile &&
                        <Box height="260px" position="relative">
                            <Image
                                src={cover_image ? urlFor(cover_image.asset._ref).quality(100).url() : Missing}
                                fill
                                alt="test"
                                style={{
                                    objectFit: 'cover',
                                }}
                                sizes="(max-width: 800px) 100vw, 320px"
                            />
                        </Box>
                    }
                    {!isMobile &&
                        <Box width="300px" position="relative">
                            <Image
                                {...imageProps}
                                style={{ width: '100%', height: 'auto' }}
                                alt="test"
                                sizes="(max-width: 800px) 100vw, 320px"
                            />
                        </Box>

                    }
                </RightSection>
            </SingleProject>
        </Link>
    )
}