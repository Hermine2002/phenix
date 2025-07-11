import clsx from "clsx";

const Input = ({type, placeholder, value, setValue, header, className}) => {
  return (
    <div className="w-full">
      <div className="text-[16px] mb-1">
        {header}
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={clsx(
          'rounded-xl p-2 text-white w-full placeholder:text-sm bg-[#202020]',
          className,
        )}
      />
    </div>
  )
}

export default Input;