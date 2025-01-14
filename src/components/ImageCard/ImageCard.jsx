import style from "./ImageCard.module.css";

export default function ImageCard({ image, onImageGallery }) {
  return (
    <div className={style.imageCardWrap}>
      <img
        className={style.imagePhoto}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageGallery}
      />
    </div>
  );
}
