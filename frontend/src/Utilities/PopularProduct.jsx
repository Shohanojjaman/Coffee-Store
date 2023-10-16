import PropTypes from 'prop-types';
import { FiCoffee } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';

const PopularProduct = ({ coffees, setCoffees }) => {
  console.log(coffees);
  return (
    <div className="py-32 popular-product" data-aos="fade-up">
      <SectionTitle title="Our Popular Product" subTitle="--- Sip & Savor ---" />
      <div className="mx-auto w-fit mt-6">
        <Link
          to={'/addcoffee'}
          className="primary-btn flex gap-2 items-center text-white border-theme border-2 rounded-md hover:bg-transparent">
          <span className="drop-shadow-[0px_0px_10px_rgb(51,26,21)]">Add a coffee</span>
          <FiCoffee className="text-theme" />
        </Link>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {coffees?.map((coffee, index) => (
            <ProductCard key={coffee?._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

PopularProduct.propTypes = {
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired,
};

export default PopularProduct;
