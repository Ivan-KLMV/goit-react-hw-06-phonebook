import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

export const Filter = ({ filterValue, onChange }) => (
  <FilterStyled>
    Find contcts by name
    <input type="text" value={filterValue} onChange={onChange}></input>
  </FilterStyled>
);

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
