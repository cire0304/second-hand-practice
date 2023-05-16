import { styled } from 'styled-components';
import FilterInput from './FilterInput/FilterInput';
import DropDown from '../DropDown/DropDown';
import chevronDown from '../../assets/chevronDown.svg';

const FilterBar = () => {
  const dropDownConfig = {
    buttonText: '필터',
    buttonImage: chevronDown,
    headerText: '이슈 필터',
    bodyItems: [
      { img: chevronDown, text: '열린 이슈', checked: true },
      { text: '닫힌 이슈', checked: false },
    ],
    bodyCheck: true,
    // posright: true,
    marginTop: '10px',
  };

  return (
    <FilterBarBox>
      <FilterBarDropDown config={dropDownConfig} />
      <FilterInput />
    </FilterBarBox>
  );
};
export default FilterBar;

const FilterBarBox = styled.div`
  display: flex;

  border: 1px solid #d9dbe9;
  border-radius: 11px;
  width: 600px;
  position: relative;
  height: 40px;
  color: #6e7191;
`;

const FilterBarDropDown = styled(DropDown)`
  padding: 4px 24px;
  border-radius: 11px 0px 0px 11px;
`;
