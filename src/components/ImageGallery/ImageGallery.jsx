import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ list, handleClick }) {
  return (
    <ul className={css.collectionOfImages}>
      {list.map(item => {
        return (
          <li
            key={item.id}
            className={css.itemOfCollection}
            onClick={() => handleClick(item.id)}
          >
            <ImageCard srcImg={item.urls.small} altImg={item.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
