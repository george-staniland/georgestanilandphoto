import { createClient } from 'next-sanity';
import Navbar from 'components/Navbar';

export default function Home() {
  return (
    <Navbar />
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
