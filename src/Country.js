import React from 'react';

import styled from "styled-components";
const Select = styled.select`
  width: 80vw;
  height: 35px;
  background: white;
  color: #808080;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid #808080;
  margin-left: 10px;
  margin-bottom: 3.2vh;
  @media (min-width: 576px) {
    width: 16vw;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Country = (props) => {
   const {country, handleCountryChange} = props;
    return (
        <form>
            <Select name="country" id="country"
                value={ country }
                onChange={e => handleCountryChange(e.target.value)}
            >
                <option value="Germany">Germany</option>
                <option value="Sweden">Sweden</option>
                <option value="UK">United Kingdom</option>
                <option value="Ireland">Ireland</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="USA">United States of America</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
                <option value="Taiwan">Taiwan</option>
            </Select>
        </form>
    );
}

export default Country;