import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ imges, onImageClick }) {
  return (
    <ul className={style.imageGalleryWrap}>
      {imges.map((image) => (
        <li
          key={image.id}
          className={style.imageGalleryItem}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
