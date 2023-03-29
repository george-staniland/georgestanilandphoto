import React from 'react';
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Project from 'components/Project';
import { createClient } from 'next-sanity';
import { Box, styled } from "@mui/material"
import { ProjectModel } from '../../models/project';

const AllProjects = styled(Box, {
    label: 'all-projects',
})(({ theme }) => ({
    marginTop: '120px',
    minHeight: '81vh',
}));

interface Props {
    commissionedProjects: ProjectModel[],
}

export default function Commisions(props: Props) {
    const { commissionedProjects } = props;

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

// TO DO: use tokens here
const client = createClient({
    projectId: 'nimz3ndn',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
});

export async function getStaticProps() {
    const commissionedProjects = await client.fetch('*[_type == "projects" && project_category in ["personal"]] | order(orderRank)');

    return {
        props: {
            commissionedProjects,
        },
    };
}
