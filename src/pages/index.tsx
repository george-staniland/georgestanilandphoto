import { createClient } from 'next-sanity';
import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import HomePageGallery from 'components/HomePageGallery';

export interface NavMetaData {
  meta1?: string;
  meta2?: string;
  meta3?: string;
  meta4?: string;
}

interface Props {
  homePageImages: [];
}

export default function Home(props: Props) {
  const { homePageImages } = props;
  const [navMetaData, setMetaData] = React.useState<NavMetaData>({});

  return (
    <>
      <Navbar navMetaData={navMetaData} />
      <HomePageGallery images={homePageImages} setMetaData={setMetaData} />
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
  const homePageImages = await client.fetch('*[_type == "home-page-image"]');

  return {
    props: {
      homePageImages,
    },
  };
}
