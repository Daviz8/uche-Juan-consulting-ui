/* eslint-disable react/prop-types */
// Product.jsx
export default function Product({ name, imageUrl, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-md mx-9 p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 object-cover rounded-xl mb-4 "
      />

      {/* Title */}
      <h3 className="text-lg font-semibold Mont text-gray-800 leading-4">{name}</h3>

      {/* Description */}
      <p className="text-sm  text-gray-600 mt-2 font-bold Mont leading-6">{text}</p>
    </div>
  );
}
