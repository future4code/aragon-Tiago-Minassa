import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import SignUpPage from "../pages/SignUpPage";

export default function Router() {
    return(
    <BrowserRouter>
    <Routes>
        <Route index element={<LoginPage />} />
        <Route path={"/feedPage"} element={<FeedPage />} />
        <Route path={"/post/:postId"} element={<PostDetailsPage />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"*"} element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    );
}

