import Router from "./router/section";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./component/GlobalStyles/GlobalStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./component/GlobalStyles/index.css"

function App() {
  return (
    <GoogleOAuthProvider clientId="384241276984-jifftc7g7orl0gjork78mkr847mpv22h.apps.googleusercontent.com">
      <BrowserRouter>
        <GlobalStyles>
          <Router />
        </GlobalStyles>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
