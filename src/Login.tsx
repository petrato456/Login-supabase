import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./components/Input";
import { AuthContext } from "./context/AuthContext";

import { schemaLogin, schemaRegister } from "./helpers/schema";
import { FormDataProps } from "./context/types";

import * as Styles from "./styles/login";

const clearValues = {
    email: "",
    name: "",
    password: "",
};

function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const { SignUp, SignIn, isLoading, isSuccess } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormDataProps>({
        resolver: zodResolver(isRegister ? schemaLogin : schemaRegister),
    });

    useEffect(() => {
        if (isSuccess) {
            reset(clearValues);
            setIsRegister(!isRegister);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    return (
        <>
            <Styles.Home>
                <Styles.BoxForm>
                    <Styles.Container>
                        {isRegister ? (
                            <>
                                <h1>Login</h1>
                                <form
                                    onSubmit={handleSubmit((data) =>
                                        SignIn(data)
                                    )}
                                >
                                    <Input
                                        label="E-mail"
                                        register={register}
                                        placeholder="Digite seu email"
                                        name="email"
                                    />
                                    {errors.email?.message && (
                                        <p>{errors.email.message}</p>
                                    )}
                                    <Input
                                        label="Senha"
                                        register={register}
                                        placeholder="Digite sua senha"
                                        name="password"
                                    />
                                    {errors.password?.message && (
                                        <p>{errors.password.message}</p>
                                    )}
                                    <Styles.Button
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="loader"></span>
                                        ) : (
                                            "Entrar"
                                        )}
                                    </Styles.Button>
                                </form>
                            </>
                        ) : (
                            <>
                                <h1>Registro</h1>
                                <form
                                    onSubmit={handleSubmit((data) =>
                                        SignUp(data)
                                    )}
                                >
                                    <Input
                                        label="Nome"
                                        register={register}
                                        placeholder="Digite seu nome"
                                        name="name"
                                    />
                                    {errors.name?.message && (
                                        <p>{errors.name.message}</p>
                                    )}
                                    <Input
                                        label="E-mail"
                                        register={register}
                                        placeholder="Digite seu email"
                                        name="email"
                                    />
                                    {errors.email?.message && (
                                        <p>{errors.email.message}</p>
                                    )}
                                    <Input
                                        label="Senha"
                                        register={register}
                                        placeholder="Digite sua senha"
                                        name="password"
                                    />
                                    {errors.password?.message && (
                                        <p>{errors.password.message}</p>
                                    )}
                                    <Styles.Button
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="loader"></span>
                                        ) : (
                                            "Registrar"
                                        )}
                                    </Styles.Button>
                                </form>
                            </>
                        )}
                        {isRegister ? (
                            <div className="text-footer">
                                <p>Não possui uma conta?</p>
                                <a
                                    onClick={() => {
                                        setIsRegister(!isRegister);
                                        reset(clearValues);
                                    }}
                                >
                                    Criar conta
                                </a>
                            </div>
                        ) : (
                            <div className="text-footer">
                                <p>Já possui uma conta?</p>
                                <a
                                    onClick={() => {
                                        setIsRegister(!isRegister);
                                        reset(clearValues);
                                    }}
                                >
                                    Entrar
                                </a>
                            </div>
                        )}
                    </Styles.Container>
                </Styles.BoxForm>
            </Styles.Home>
            <Toaster />
        </>
    );
}

export default Login;
