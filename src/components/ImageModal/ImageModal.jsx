import Modal from "react-modal";
import style from "./ImageModale.module.css";

export default function ImageModal({ isOpen, ModalClose, image }) {
  Modal.setAppElement("#root");
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "40%",
      right: "auto",
      left: "50%",
      bottom: "auto",
      marginRight: "-50%",
      marginTop: "40px",
      padding: "40px",
      transform: "translate(-50%, -50%)",
      border: 0,
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={ModalClose}
      shouldCloseOnOverlayClick={true}
    >
      <img
        className={style.imgModale}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <button onClick={ModalClose}></button>
    </Modal>
  );
}
