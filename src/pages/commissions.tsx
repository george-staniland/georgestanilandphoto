import React from 'react';
import { createClient } from 'next-sanity';
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from '@use-gesture/react';
import Project from 'components/Project';
import { ProjectModel } from '../../models/project';

const AllProjects = styled(Box, {
    label: 'all-projects',
})(({ theme }) => ({
    marginTop: '120px',
}));

interface Props {
    commissionedProjects: ProjectModel[],
}

export default function Commisions(props: Props) {

    const { commissionedProjects } = props;
    const project1 = commissionedProjects[0];
    console.log(project1);

    return (
        <>
            <Navbar />
            <AllProjects>
                {commissionedProjects.map((project, index) => {
                    return (
                        <Project project={project} key={index} index={index} />
                    )
                })}
            </AllProjects>
            <Footer />
        </>
    )
}

const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});

export async function getStaticProps() {
    const commissionedProjects = await client.fetch('*[_type == "projects" && project_category in ["commissioned"]]');

    return {
        props: {
            commissionedProjects,
        },
    };
}
