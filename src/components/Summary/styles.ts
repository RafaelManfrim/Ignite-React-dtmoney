import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -6rem;

    div {
        background-color: var(--shape);
        width: 32%;
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;
        color: var(--text-title);

        &.highlight-background {
            background-color: var(--green);
            color: #fff;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`