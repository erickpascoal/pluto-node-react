import React, { InputHTMLAttributes } from 'react';

import { Container, TextErro } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    register?: any;
    label?: string;
    error: any;
}

export const Input: React.FC<Props> = ({ label, register, error, ...rest }) => {

    const getMessageErro = () => {

        if (error && error.message !== '') {
            return error.message;
        }

        if (error && error.type === 'required') {
            return 'Campo obrigatório.';
        }
    };

    return (
        <Container isErro={error}>
            {label && <label>{label}</label>}
            <input  {...register} {...rest} />
            {error && <TextErro>{getMessageErro()}</TextErro>}
        </Container>
    );
}

