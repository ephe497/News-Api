// authReducer.ts

// Define the state interface
export interface AuthState {
    isLoggedIn: boolean;
    isLoading: boolean;
    user: null | string; // Replace 'string' with your user object type
}

// Define action types
export enum AuthActionTypes {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGOUT = "LOGOUT",
    LOADING = "LOADING",
}

// Define action interfaces
interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: {
        user: string; // Replace 'string' with your user object type
    };
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}
interface LoadingAction {
    type: AuthActionTypes.LOADING;
}

type AuthAction = LoginSuccessAction | LogoutAction | LoadingAction;

// Define the initial state
export const authInitialState: AuthState = {
    isLoggedIn: false,
    user: null,
    isLoading: true,
};

// Define the reducer function
const authReducer = (state: AuthState = authInitialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                user: action.payload.user,
            };

        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                user: null,
            };
        case AuthActionTypes.LOADING:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};

export default authReducer;