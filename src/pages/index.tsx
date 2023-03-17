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
  imageGalleries: [{}];
}

export default function Home(props: Props) {
  const { imageGalleries } = props;
  const [navMetaData, setMetaData] = React.useState<NavMetaData>({});
  const [metaVisible, setMetaVisibile] = React.useState(false);

  return (
    <>
      <Navbar navMetaData={navMetaData} metaVisible={metaVisible} />
      <HomePageGallery gallery={imageGalleries[0]} setMetaData={setMetaData} setMetaVisible={setMetaVisibile} />
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

  return {
    props: {
      imageGalleries,
    },
  };
}
