
const InputBox = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <textarea
        rows={5}
        id={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="py-2.5 px-4 border-none focus:outline-none block w-full 
          rounded-lg bg-neutral-300 border-transparent text-black"
      />

    </div>
  );
};

export default InputBox;
