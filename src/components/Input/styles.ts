import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;

    label {
        color: ${(props) => props.theme.colors.black};
    }

    input {
        width: 100%;
        height: 50px;

        padding: 17px 22px;

        border: none;
        border-radius: 5px;

        outline: none;
    }
`;
