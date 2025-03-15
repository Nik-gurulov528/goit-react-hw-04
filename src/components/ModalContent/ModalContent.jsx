import css from './ModalContent.module.css';

export default function ModalContent({ content }) {
  return (
    <div className={css.modalWrapper}>
      <img src={content.urls.regular} alt={content.alt_description} />
      <p className={css.modalText}>{content.description}</p>
    </div>
  );
}
