import { createContext } from "react";

interface AuthContextState {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContextState>({
  isAuth: false,
  setIsAuth: () => {},
});
