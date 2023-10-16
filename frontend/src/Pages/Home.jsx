import { useLoaderData } from 'react-router-dom';
import Hero from '../Utilities/Hero';
import PopularProduct from '../Utilities/PopularProduct';
import Services from '../Utilities/Services';

const Home = () => {
  const coffees = useLoaderData();
  return (
    <>
      <Hero />
      <Services />
      <PopularProduct coffees={coffees} />
    </>
  );
};

export default Home;
