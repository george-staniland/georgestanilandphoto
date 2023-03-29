import { Box } from '@mui/system';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { useRouter } from 'next/router'

const Project = () => {
    const router = useRouter()
    const { query } = router;
    console.log(router);
    return (
        <>
            <Navbar />
            <Box marginTop="200px">
                <h1>Project title  {query.project_title}</h1>
            </Box>
            <Footer />
        </>
    )
}

export default Project