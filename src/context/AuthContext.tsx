import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { User } from "@supabase/gotrue-js/src/lib/types";

import { supabase } from "../services/Supabase";
import {
    AuthContextProps,
    AuthContextProviderProps,
    FormDataProps,
} from "./types";

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User>();
    const [isSuccess, setIsSuccess] = useState(false);

    async function SignIn(formData: FormDataProps) {
        setIsLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });
        if (data.session?.access_token) {
            setToken(data.session?.access_token);
            setUser(data.user);

            setIsLoading(false);
            setIsSuccess(true);
        } else if (error?.status?.toLocaleString().includes("4")) {
            toast.error("E-mail e senha incorretos");
            setIsLoading(false);
        }
    }
    async function SignUp(formData: FormDataProps) {
        setIsLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    name: formData.name,
                },
            },
        });
        if (error?.status?.toLocaleString().includes("4")) {
            toast.error("houve um erro no cadastro");
            setIsLoading(false);
        } else if (data.user !== null) {
            toast.success("Cadastro efetuado com sucesso!");
            setIsLoading(false);
            setIsSuccess(true);
        }
    }

    return (
        <AuthContext.Provider
            value={{ SignIn, SignUp, token, isLoading, user, isSuccess }}
        >
            {children}
        </AuthContext.Provider>
    );
}
