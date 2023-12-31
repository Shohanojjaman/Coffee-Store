import { IoArrowBack } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, price, chef, supplier, taste, category, details } = coffee || {};

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    // Get form data
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo, price };
    console.log(updatedCoffee);

    fetch(`https://coffee-store-backend-auh67h67g-shohanojjaman-emons-projects.vercel.app/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success('Updated coffee successfully!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: 'light',
          });
        }
      })
      .catch((err) => console.error(err));
  };

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
            <h4 className="drop-shadow-[0px_0px_10px_rgb(51,26,21)] text-[#374151] text-5xl">
              Update Existing Coffee Details
            </h4>
            <p className="">
              It is a long established fact that a reader will be distraceted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleUpdateCoffee} className="grid grid-cols-2 gap-6">
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
                defaultValue={name}
                required
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
                defaultValue={chef}
                required
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
                defaultValue={supplier}
                required
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
                defaultValue={taste}
                required
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
                defaultValue={category}
                required
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
                defaultValue={details}
                required
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="photo" className="text-xl font-semibold">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter photo URL"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
                defaultValue={photo}
                required
              />
            </div>
            <div className="space-y-4 flex flex-col text-[#1b1a1acc]">
              <label htmlFor="price" className="text-xl font-semibold">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter price URL"
                className="p-3 rounded-md focus:outline-2 outline-secondary transition-all duration-200"
                defaultValue={price}
                required
              />
            </div>
            <input
              type="submit"
              value="Update Coffee"
              className="primary-btn col-span-2 rounded-md border-2 border-theme cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
