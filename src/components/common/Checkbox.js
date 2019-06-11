import React from 'react';
import styled from 'styled-components';

const Checkbox = ({name, value, onChange}) => {
    return <Label><Input type="checkbox" value={value} onChange={onChange}/>{name}</Label>
}

export default Checkbox;

const Input = styled.input`
    height: 20px;
    width: 20px;
    margin-right: 16px;
`
const Label = styled.label`
    display: flex;
    align-items: center;
`
