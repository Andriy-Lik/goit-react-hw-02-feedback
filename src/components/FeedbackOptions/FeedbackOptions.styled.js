import styled from '@emotion/styled';

export const Button = styled.button`
    background-color: white;
    margin-right: 10px;
    padding: 7px;
    border: 2px solid silver;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
        border: 2px solid skyblue;
        scale: 1.1;
    }
`;