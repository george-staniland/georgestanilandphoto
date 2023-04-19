import { createClient } from 'next-sanity';
import Head from 'next/head';
import { useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import HomePageGallery from 'components/HomePageGallery';
import { SanityImage } from 'models/models';
import MobileHomePageGallery from 'components/MobileHomePageGallery';

export interface NavMetaData {
  imageTitle?: string;
  seriesOrClient?: string;
  date?: string;
}

interface Props {
  homeGallery: {
    images: {
      image: SanityImage;
    }[];
  };
}

export default function Home(props: Props) {
  const { homeGallery } = props;
  const [navMetaData, setMetaData] = React.useState<NavMetaData>({});
  const [metaVisible, setMetaVisible] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Head>
        <title>New Zealand based photographer, working on personal and commissioned projects.</title>
        <meta name="description" content="George is focused on various long and short-term photography art projects, additionally taking on commissioned work for selected clients." />
      </Head>
      <Navbar navMetaData={navMetaData} metaVisible={metaVisible} hasMetadata />
      {isMobile ?
        <MobileHomePageGallery gallery={homeGallery} /> :
        <HomePageGallery gallery={homeGallery} setMetaData={setMetaData} setMetaVisible={setMetaVisible} />
      }
      <Footer />
    </>
  );
}

const client = createClient({
  projectId: 'nimz3ndn',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
});

export async function getStaticProps() {
  const imageGalleries = await client.fetch('*[_type=="image_galleries"&&_id=="25debf56-bfaa-47a2-8671-a85f0c1a094e"]{images[]{..., image{ ..., asset->{ ..., metadata}}}}');
  const homeGallery = imageGalleries[0];
  return {
    props: {
      homeGallery,
    },
  };
}
