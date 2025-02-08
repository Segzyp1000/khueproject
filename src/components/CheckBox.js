function CheckBox({ isChecked, handleCheck }) {
  return (
    <input
      type="checkbox"
      value={isChecked}
      checked={isChecked}
      onChange={handleCheck}
      className="w-4 h-4 focus:outline-none  accent-[#28005B] "
    />
  );
}

export default CheckBox;
