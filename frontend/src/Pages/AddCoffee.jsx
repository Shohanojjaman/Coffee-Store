import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
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
        <div className="bg-[#F4F3F0] my-12 py-16 px-28 space-y-8 rounded-md" data-aos="fade-up">
          <div className="text-center px-24 space-y-8">
            <h4 className="drop-shadow-[0px_0px_10px_rgb(51,26,21)] text-[#374151] text-5xl">Add a coffee</h4>
            <p className="">
              It is a long established fact that a reader will be distraceted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here.
            </p>
          </div>
          <form className="grid grid-cols-2 gap-6">
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="name" className="text-xl font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter coffee name"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="chef" className="text-xl font-semibold">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                id="chef"
                placeholder="Enter coffee chef"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="supplier" className="text-xl font-semibold">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                id="supplier"
                placeholder="Enter coffee supplier"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="taste" className="text-xl font-semibold">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                id="taste"
                placeholder="Enter coffee taste"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="category" className="text-xl font-semibold">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Enter coffee category"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="details" className="text-xl font-semibold">
                Details
              </label>
              <input
                type="text"
                name="details"
                id="details"
                placeholder="Enter coffee details"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <div className="space-y-4 col-span-2 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="name" className="text-xl font-semibold">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter photo URL"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
              />
            </div>
            <input
              type="button"
              value="Add Coffee"
              className="primary-btn col-span-2 rounded-md border-2 border-theme"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
