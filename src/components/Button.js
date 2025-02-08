function Button({ children, onclick, type }) {
  const baseStyle = `flex items-center justify-between py-[0.8rem] gap-[0.8rem] px-[1.2rem] text-[1.4rem] rounded-lg border`;
  if (type === 'secondary') {
    return (
      <button onClick={onclick} className={`${baseStyle} bg-[#28005B] text-gray-50`}>
        {children}
      </button>
    );
  }
  return (
    <button onClick={onclick} className={baseStyle}>
      {children}
    </button>
  );
}

export default Button;
