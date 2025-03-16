import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { RxCross2 } from 'react-icons/rx';

ReactModal.setAppElement('#root');

export default function ImageModal({ currentImg, isOpen }) {
  if (isOpen && currentImg.urls.regular) {
    return (
      <>
        <div className={css.modalWrapper}>
          <img src={currentImg.urls.regular} alt={currentImg.alt_description} />
          <p className={css.modalText}>{currentImg.description}</p>
        </div>
      </>
    );
  }
}
