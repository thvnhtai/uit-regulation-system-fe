import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
	id: string;
	name: string;
	email: string;
	role: string;
	isEmailVerified: boolean;
}

interface Token {
	token: string;
	expires: string;
}

interface AuthState {
	user: User | null;
	accessToken: Token | null;
	refreshToken: Token | null;
}

const initialState: AuthState = {
	user: null,
	accessToken: null,
	refreshToken: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (
			state,
			action: PayloadAction<{
				user: User;
				tokens: { access: Token; refresh: Token };
			}>
		) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.tokens.access;
			state.refreshToken = action.payload.tokens.refresh;
		},
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
		},
	},
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
