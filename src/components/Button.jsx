const Button = ({ label, iconUrl }) => {
  return (
    <button className="item-center flex items-center justify-center gap-2 rounded-full bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
      {label}

      <img
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 h-5 w-5 rounded-full "
      />
    </button>
  );
};
export default Button;
