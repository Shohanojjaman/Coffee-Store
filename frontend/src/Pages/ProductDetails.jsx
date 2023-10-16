import { IoArrowBack } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const coffee = useLoaderData();
  const { name, photo, price, chef, supplier, taste, category, details } = coffee || {};
  return (
    <div className="add-coffee py-12">
      <div className="container">
        <Link
          to={'/'}
          className="flex items-center gap-4 hover:bg-secondary w-fit py-4 px-2 rounded-lg transition-colors duration-200"
          data-aos="fade-left">
          <IoArrowBack className="text-2xl" />
          <span className="drop-shadow-[0px_0px_10px_rgb(51,26,21)] text-[#374151] font-Rancho text-3xl">
            Back to home
          </span>
        </Link>
        <div className="bg-[#F4F3F0] flex items-center my-12 py-16 px-28 rounded-md" data-aos="fade-up">
          <div className="w-1/2">
            <img src={photo} className="w-4/5" alt={`Image of ${name}`} />
          </div>
          <div className="w-1/2 space-y-8">
            <h3 className="drop-shadow-[0px_0px_10px_rgb(51,26,21)] text-[#374151] font-Rancho text-3xl">{name}</h3>
            <div className=" space-y-3">
              <p className="text-xl text-[#5C5B5B]">
                <span className="text-[#1B1A1A] font-semibold">Price: </span>
                {price}
              </p>
              <p className="text-xl text-[#5C5B5B]">
                <span className="text-[#1B1A1A] font-semibold">Chef: </span>
                {chef}
              </p>
              <p className="text-xl text-[#5C5B5B]">
                <span className="text-[#1B1A1A] font-semibold">Supplier: </span>
                {supplier}
              </p>
              <p className="text-xl text-[#5C5B5B]">
                <span className="text-[#1B1A1A] font-semibold">Taste: </span>
                {taste}
              </p>
              <p className="text-xl text-[#5C5B5B]">
                <span className="text-[#1B1A1A] font-semibold">Category: </span>
                {category}
              </p>
              <p className="text-xl text-[#5C5B5B]">
                <span className="text-[#1B1A1A] font-semibold">Details: </span>
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
