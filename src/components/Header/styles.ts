import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 1rem 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    padding: 0.75rem 1.25rem;
    background: var(--blue-light);
    border-radius: 0.25rem;
    color: #fff;
    border: none;
    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`