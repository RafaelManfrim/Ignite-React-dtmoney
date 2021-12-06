import styled from "styled-components";
import { darken } from "polished"

export const Container = styled.form`
    h2 {
        color: var(--text-tilte);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background-color: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);
        color: #fff;
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 0.5rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
        height: 4rem;
        background: transparent;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }


        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
    }
`