export const selectUser = state => state.auth.user;
export const selectLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAccessToken = state => state.auth.accessToken;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;