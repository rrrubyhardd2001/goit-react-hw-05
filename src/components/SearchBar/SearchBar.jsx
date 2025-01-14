import style from "./SearchBar.module.css";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ OnEmptyQuery }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error(
        "Your search query is empty its dosent make sense to search for nothing"
      );
      return;
    }
    OnEmptyQuery(query.trim());
    setQuery("");
  };

  return (
    <header>
      <form className={style.SearchForm} onSubmit={handleQueryChange}>
        <input
          className={style.SearchInput}
          type="text"
          placeholder="Search images and photos"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Toaster
          position="top-right"
          duration="6000"
          toastOptions={{
            style: { background: "green", color: "yellow" },
          }}
        />
        <button className={style.SearchBtn} type="submit">
          <IoSearchSharp className={style.SearchIcon} />
        </button>
      </form>
    </header>
  );
}
