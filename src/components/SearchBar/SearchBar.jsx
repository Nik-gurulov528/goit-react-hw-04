import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './SearchBar.module.css';
import { IoMdSearch } from 'react-icons/io';

export default function SearchBar({ handleSubmit }) {
  return (
    <header className={css.topHeader}>
      <Formik initialValues={{ field: '' }} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <Field
            type="text"
            autoComplete="off"
            name="field"
            autoFocus
            placeholder="Search images and photos"
            className={css.searchInput}
          />
          <button type="submit" className={css.searchBtn}>
            <IoMdSearch size={24} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
