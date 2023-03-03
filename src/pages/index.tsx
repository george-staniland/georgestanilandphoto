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

export default function Home() {

  const [navMetaData, setMetaData] = React.useState<NavMetaData>({});

  return (
    <>
      <Navbar navMetaData={navMetaData} />
      <HomePageGallery setMetaData={setMetaData} />
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
  const pets = await client.fetch('*[_type == "pet"]');

  return {
    props: {
      pets,
    },
  };
}
