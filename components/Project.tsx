import React from "react";
import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
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
    const { project, index } = props;
    const { project_title, project_year, cover_image, description } = project;
    const [isHovered, setHovered] = React.useState(false);
    const theme = useTheme();
    const smallerThanTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const bind = useGesture({
        onHover: ({ hovering }) => {
            setHovered(hovering ?? false);
        },
    });

    const style = useSpring({
        opacity: isHovered || smallerThanTablet ? '1' : '0',
    });

    const AnimatedLeftSection = animated(LeftSection);

    const builder = imageUrlBuilder(client);

    function urlFor(source: String) {
        return builder.image(source);
    }


    return (
        <SingleProject {...bind()}>
            <AnimatedLeftSection style={style}>
                <Box marginRight={{ xs: "0", sm: "80px" }} paddingBottom={{ xs: "20px", sm: "0" }} >
                    <Typography variant="spaceGroteskSmall">({index + 1})</Typography>
                </Box>
                <Box maxWidth="700px" display="flex" flexDirection="column">
                    <Typography variant="monoSmaller" paddingBottom={{ xs: "10px", sm: "50px" }} >{project_title}</Typography>
                    <Typography variant="monoSmaller" paddingBottom={{ xs: "25px", sm: "50px" }} >{project_year}</Typography>
                    <Typography variant="monoSmaller" >{description}</Typography>
                </Box>
            </AnimatedLeftSection>
            <RightSection>
                {!isMobile && <Typography variant="spaceGroteskSmall" paddingBottom="6px">({index + 1})</Typography>}
                {isMobile &&
                    <Box height="260px" position="relative">
                        <Image
                            src={cover_image ? urlFor(cover_image.asset._ref).quality(100).url() : Missing}
                            fill
                            alt="test"
                            style={{
                                objectFit: 'cover',
                            }} />
                    </Box>
                }
                {!isMobile &&
                    <Image
                        src={cover_image ? urlFor(cover_image.asset._ref).quality(100).url() : Missing}
                        alt="test"
                        width="270"
                        height="235"
                    />
                }
            </RightSection>
        </SingleProject>
    )
}