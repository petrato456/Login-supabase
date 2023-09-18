import styled from "styled-components";


export const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    form {
        display: flex;
        flex-direction: column;
        gap: 32px;

        width: 100%;

        p {
            height: 0;

            color: ${(props) => props.theme.colors.red};

            position: relative;
            bottom: 18px;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 30px;

    width: 100%;
    max-width: 401px;
    min-height: 600px;

    padding: 10px 14px;
    margin:14px;
`;

export const BoxForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 641px;

    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    margin: 10px;

    border-radius: 40px;

    h1 {
        font-size: 2rem;
    }
    .text-footer {
        display: flex;
        gap: 10px;

        a {
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }
        }
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50px;

    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};

    border: none;
    border-radius: 5px;

    font-size: 1.25rem;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        cursor: not-allowed;
        &:hover {
            opacity: 1;
        }
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
