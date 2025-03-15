import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ handleClick }) {
  return (
    <button type="button" className={css.loadMore} onClick={handleClick}>
      Load More
    </button>
  );
}
