import Navbar from "components/Navbar";
import { Box, styled } from "@mui/material"
import Image from "next/image";
import Missing from "../../public/assets/missing.png"
import Portrait from "../../public/assets/portrait-test.jpg"

const SingleProject = styled(Box, {
    label: 'single-project',
})(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 60px',
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
        padding: '0 4vw',
    },
}));

const LeftSection = styled(Box, {
    label: 'left-section',
})(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
    },
}));

const RightSection = styled(Box, {
    label: 'right-section',
})(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
    },
}));

export default function Commisions() {
    return (
        <>
            <Navbar />
            <Box border="1px solid red " marginTop="100px" >
                <SingleProject>
                    <LeftSection>
                        <Box marginRight="80px">
                            (02)
                        </Box>
                        <Box maxWidth="700px">
                            <Box paddingBottom="50px">Projec Title</Box>
                            <Box paddingBottom="50px">Project Year</Box>
                            <Box>Project Description: Lorem ipsum dolor sit amet consectetur. Euismod feugiat faucibus consequat vulputate. Vitae arcu nunc molestie tinc idunt tortor. Amet sodales elem entum viverra.</Box>
                        </Box>
                    </LeftSection>
                    <RightSection >
                        (02)
                        <Box position="relative" border="1px solid red">
                            <Image src={Portrait} alt="test" width="200" />
                        </Box>
                    </RightSection>
                </SingleProject>
            </Box>
        </>
    )
}