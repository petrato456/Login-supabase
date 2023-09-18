import {UseFormRegister } from 'react-hook-form'
import { FormDataProps } from '../../context/types';

export interface InputProps {
    label: string;
    name: string;
    placeholder: string
    register: UseFormRegister<FormDataProps>
}
