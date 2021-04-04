import React, { InputHTMLAttributes } from 'react';

import { Container, TextErro } from './styles';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
    register?: any;
    label?: string;
    error?: any;
    options: any[];
    propertyValue?: string;
    propertyView?: string;
}

export const Select: React.FC<Props> = ({ options, propertyValue = 'id', propertyView = 'name', label, register, error, ...rest }) => {

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
            <select {...register} {...rest}>
                {options.map(object => (
                    <option key={object[propertyValue]} value={object[propertyValue]}>
                        {object[propertyView]}
                    </option>
                ))}
            </select>
            {error && <TextErro>{getMessageErro()}</TextErro>}
        </Container>
    );
}
