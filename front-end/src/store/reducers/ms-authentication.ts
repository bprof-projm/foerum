/* eslint-disable import/no-anonymous-default-export */
import axios from "../../axios";
import { IUser } from "src/models/user.model";
import { loginRequest } from "src/ms-auth-config";
import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";

export const ACTION_TYPES = {
  LOGIN: "ms-authentication/login",
  LOGOUT: "ms-authentication/logout",
};

const AUTH_TOKEN_KEY = "token";

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  account: {} as IUser,
  errorMessage: null as unknown as string,
  idToken: null as unknown as string,
};

export type MSAuthenticationState = Readonly<typeof initialState>;

export default (
  state: MSAuthenticationState = initialState,
  action: any
): MSAuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
      return { ...state, loading: true };

    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        errorMessage: action.payload,
        loginError: true,
      };

    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        loading: false,
        loginError: false,
        loginSuccess: true,
      };
    default:
      return state;
  }
};

export const login = (instance: any) => {
  instance
    .loginPopup(loginRequest)
    .then((res: any) => {
      console.log(res);
      setLoginState(res);
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const setLoginState = (data: any) => ({
  type: ACTION_TYPES.LOGIN,
  payload: axios
    .post("/auth/microsoft", {
      Name: data.idTokenClaims.name,
      uniqueName: data.idTokenClaims.upn,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err)),
});

export const logout = (instance: any) => {
  instance
    .logoutPopup()
    .then((res: any) => console.log(res))
    .catch((e: any) => {
      console.error(e);
    });
};
