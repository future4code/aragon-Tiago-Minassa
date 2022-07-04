
export const goToFeedPage = (navigate) => {
    navigate("/");
};

export const goToLoginPage = (navigate) => {
    navigate("/login");
};

export const goToSignUpPage = (navigate) => {
    navigate("/signUp");
};

export const goToPostDetailsPage = (navigate, postId) => {
    navigate(`/post/${postId}`);
};