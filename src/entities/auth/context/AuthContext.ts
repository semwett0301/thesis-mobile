import { createContext } from "react";

interface AuthContextState {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  isAuthLoaded: boolean;
  setIsAuthLoaded: (isLoading: boolean) => void;
}

export const AuthContext = createContext<AuthContextState>({
  isAuth: false,
  isAuthLoaded: false,
  setIsAuth: () => {},
  setIsAuthLoaded: () => {},
});
