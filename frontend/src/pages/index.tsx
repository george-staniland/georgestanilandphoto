import { createClient } from 'next-sanity';
import Head from 'next/head';
import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import HomePageGallery from 'components/HomePageGallery';
import { SanityImage } from 'models/models';

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
  const [metaVisible, setMetaVisibile] = React.useState(false);

  return (
    <>
      <Head>
        <title>George Staniland Photography Auckland</title>
      </Head>
      <Navbar navMetaData={navMetaData} metaVisible={metaVisible} hasMetadata />
      <HomePageGallery gallery={homeGallery} setMetaData={setMetaData} setMetaVisible={setMetaVisibile} />
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
  const imageGalleries = await client.fetch('*[_type == "image_galleries" && _id == "25debf56-bfaa-47a2-8671-a85f0c1a094e" ]');
  const homeGallery = imageGalleries[0];
  return {
    props: {
      homeGallery,
    },
  };
}
