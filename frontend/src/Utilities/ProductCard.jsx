import { AiFillEye } from 'react-icons/ai';
import { BiSolidPencil, BiSolidTrashAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ coffee, index }) => {
  const { _id, name, photo, price, chef } = coffee || {};
  return (
    <div
      className="bg-[#F5F4F1] p-8 rounded-lg flex max-sm:flex-col items-center justify-between max-sm:gap-4"
      data-aos="fade-up"
      data-aos-delay={index * 100}>
      <img src={photo} alt="" />
      <div className="space-y-3">
        <p className="text-xl text-light-body">
          <span className="font-bold text-body">Name: </span>
          {name}
        </p>
        <p className="text-xl text-light-body">
          <span className="font-bold text-body">Chef: </span>
          {chef}
        </p>
        <p className="text-xl text-light-body">
          <span className="font-bold text-body">Price: </span>${price}
        </p>
      </div>
      <div className="flex sm:flex-col gap-4">
        <Link>
          <button className="bg-[#D2B48C] text-2xl p-2 rounded-lg text-white">
            <AiFillEye />
          </button>
        </Link>
        <Link>
          <button className="bg-[#3C393B] text-2xl p-2 rounded-lg text-white">
            <BiSolidPencil />
          </button>
        </Link>
        <Link>
          <button className="bg-[#EA4744] text-2xl p-2 rounded-lg text-white">
            <BiSolidTrashAlt />
          </button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
