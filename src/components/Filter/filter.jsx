import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import { FilterStyled, FilterInput } from '../Component.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <span>Find contact by name </span>
      <FilterInput
        type="text"
        placeholder="enter name or phone number..."
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FilterStyled>
  );
};

export default Filter;
