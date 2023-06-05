import { useDispatch } from 'react-redux';
import { FilterStyled } from './Filter.styled';
import { filterContacts } from 'redux/contactsFilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    e.preventDefault();
    const filter = e.target;
    dispatch(filterContacts(filter.value));
  };

  return (
    <FilterStyled>
      Find contcts by name
      <input type="text" onChange={filterHandler}></input>
    </FilterStyled>
  );
};
