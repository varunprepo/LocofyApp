import { useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PropertyDetails from "./pages/PropertyDetails";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(undefined)
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const authToken = cookies.AuthToken;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {authToken && <Route path="/" element={<Homepage />} />}
      {authToken && <Route path="/property-details" element={<PropertyDetails />} />}
      <Route path="/sign-up-page" element={<SignUpPage />} />
      {!authToken && <Route path="/sign-in-page" element={<SignInPage />} />}
    </Routes>
  );
}
export default App;
