import styled from 'styled-components';

const AlternativesForm = styled.form`
    margin: 0 auto;
    transition: .3s;
    label {
        &[data-selected="true"] {
            background-color: ${({ theme }) => theme.colors.secondary};

            &[data-status="SUCCESS"] {
                background-color: ${({ theme }) => theme.colors.success};
            }

            &[data-status="ERROR"] {
                background-color: ${({ theme }) => theme.colors.wrong};
            }
        }
        &:focus {
            opacity: 1;
        }
    }
    @media screen and (max-width: 500px) {
        margin: 10px auto;
        max-width: 220px;
    }

    button {
        margin-top: 20px;
        margin-left: auto;
    }
`;

export default AlternativesForm;