import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Utilities/Hero';
import PopularProduct from '../Utilities/PopularProduct';
import Services from '../Utilities/Services';

const Home = () => {
  const Loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(Loadedcoffees);
  return (
    <>
      <Hero />
      <Services />
      <PopularProduct coffees={coffees} setCoffees={setCoffees} />
    </>
  );
};

export default Home;
