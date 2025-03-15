import css from './ImageCard.module.css';

export default function ImageCard({ srcImg, altImg }) {
  return (
    <div className={css.wrapperImg}>
      <img src={srcImg} alt={altImg} />
    </div>
  );
}
