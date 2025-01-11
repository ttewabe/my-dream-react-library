import styled from 'styled-components';

export const View = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 14px;
        font-weight: 500;
    }

    select {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;

        &:disabled {
            background-color: #f0f0f0;
            cursor: not-allowed;
        }
    }
`;
