import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

ReactModal.setAppElement('#root');

export default function ImageModal({ currentImg, setCurrentImg }) {
  return (
    <ReactModal
      isOpen={Boolean(currentImg.urls)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => setCurrentImg({})}
      style={{
        overlay: {
          backgroundColor: 'rgba(12, 12, 12, 0.8)',
        },
      }}
    >
      <img src={currentImg.urls?.regular} alt={currentImg.alt_description} />
      <p className={css.modalText}>{currentImg.description}</p>
    </ReactModal>
  );
}
