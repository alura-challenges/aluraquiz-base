import styled from 'styled-components';

const QuizForm = styled.form`
    display: flex;
    flex-direction: column;
    & label{
        display: flex;
    }
`;

QuizForm.Label = styled.label`
    font-weight: bold;`
;

QuizForm.Input = styled.input`
    margin: 1rem 0;
    padding: 10px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 3px;
`;

QuizForm.Button = styled.button`
    padding: 10px;
    color: #FFF;
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 3px;
    &:disabled{
        opacity: 0.5;
    }
`;

export default QuizForm;