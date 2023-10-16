import Swal from 'sweetalert2';

import { AiFillEye } from 'react-icons/ai';
import { BiSolidPencil, BiSolidTrashAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ coffee, index, setCoffees, coffees }) => {
  console.log(coffee);
  const { _id, name, photo, price, chef } = coffee || {};

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(() => {
      fetch(`http://localhost:8080/coffee/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount) {
            setCoffees(coffees.filter((cof) => cof._id !== _id));
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        })
        .catch((err) => console.error(err));
    });
  };
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
        <Link to={`/coffee/${_id}`}>
          <button className="bg-[#D2B48C] text-2xl p-2 rounded-lg text-white">
            <AiFillEye />
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button className="bg-[#3C393B] text-2xl p-2 rounded-lg text-white">
            <BiSolidPencil />
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="bg-[#EA4744] text-2xl p-2 rounded-lg text-white">
          <BiSolidTrashAlt />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  setCoffees: PropTypes.func.isRequired,
  coffees: PropTypes.func.isRequired,
};

export default ProductCard;
