import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export function Searchbar(props) {
  const [searchForm, setSearchForm] = useState('');

  const handleSearchForm = event => {
    setSearchForm(event.target.value);
  };

  const handleSubmitSearchForm = event => {
    event.preventDefault();
    if (searchForm === '') {
      Notiflix.Notify.warning('Enter a search term');
      return;
    }
    props.onSearchGallery(searchForm);
    setSearchForm('');
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSubmitSearchForm}>
        <SearchFormButton type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormButton>

        <SearchFormInput
          class="input"
          type="text"
          namt="searchform"
          value={searchForm}
          onChange={handleSearchForm}
          autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Search>
  );
}

Searchbar.propTypes = {
  props: PropTypes.object,
};
