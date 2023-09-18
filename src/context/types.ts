import { User } from "@supabase/supabase-js";

export interface FormDataProps {
    name?: string;
    email: string;
    password: string;
}

export interface AuthContextProps {
    SignIn: (data: FormDataProps) => void;
    SignUp: (data: FormDataProps) => void;
    token: string;
    isLoading: boolean;
    user?: User;
    isSuccess: boolean;
}

export interface AuthContextProviderProps {
    children: React.ReactNode | undefined;
}
