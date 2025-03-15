import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.errorText}>
      Oops, sorry, something went wrong, try to reload
    </p>
  );
}
