import * as Styles from "./styles";
import { InputProps } from "./types";

export function Input({
    label,
    register,
    name,
    placeholder,
    ...rest
}: InputProps) {
    return (
        <Styles.InputWrapper>
            <label>{label}</label>

            <input
                {...register(name)}
                name={name}
                placeholder={placeholder}
                {...rest}
            />
        </Styles.InputWrapper>
    );
}
