import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImages } from "./api";
import { useState, useEffect } from "react";

export default function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const getImagesData = async () => {
      try {
        if (!query) return;

        setIsLoading(true);
        const { results, total_pages } = await getImages(query, page);
        setImg((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
        setError(null);
      } catch (error) {
        setError(error.message) ||
          "Youre query is not found, server is not responding";
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [query, page]);

  const OnEmptyQuery = (newQuery) => {
    if (!newQuery.trim() || query === newQuery.trim()) return;
    setImg([]);
    setQuery(newQuery.trim());
    setPage(1);
  };

  const handleLoadMore = () => {
    if (page >= totalPages) return;
    setPage((prev) => prev + 1);
  };

  const ModalOpen = (image) => {
    if (!modalIsOpen) {
      setSelectedImage(image);
      setModalIsOpen(true);
    }
  };

  const ModalClose = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar OnEmptyQuery={OnEmptyQuery} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery imges={img} onImageClick={ModalOpen} />
      {isLoading && <Loader />}
      {img.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          ModalClose={ModalClose}
          image={selectedImage}
        />
      )}
    </div>
  );
}
