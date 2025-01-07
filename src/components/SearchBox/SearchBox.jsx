import { useId } from "react";
import style from "./SearchBox.module.css";

export default function SearchBox({ value = "", onFilter }) {
  const IdSearch = useId();
  const handleChange = (e) => {
    onFilter(e.target.value);
  };
  return (
    <div className={style.SearchBoxWrap}>
      <label htmlFor={IdSearch}></label>
      <span className={style.SpanBox}>Find contact by name</span>
      <input
        className={style.InputBox}
        type="text"
        id={IdSearch}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
