import { createClient } from 'next-sanity';
import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import HomePageGallery from 'components/HomePageGallery';

export interface NavMetaData {
  imageTitle?: string;
  seriesOrClient?: string;
  date?: string;
}

interface Props {
  homePageImages: [];
}

export default function Home(props: Props) {
  const { homePageImages } = props;
  const [navMetaData, setMetaData] = React.useState<NavMetaData>({});
  const [metaVisible, setMetaVisibile] = React.useState(false);

  return (
    <>
      <Navbar navMetaData={navMetaData} metaVisible={metaVisible} />
      <HomePageGallery images={homePageImages} setMetaData={setMetaData} setMetaVisible={setMetaVisibile} />
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
  const homePageImages = await client.fetch('*[_type == "home-page-image"]| order(_createdAt desc)');

  return {
    props: {
      homePageImages,
    },
  };
}
