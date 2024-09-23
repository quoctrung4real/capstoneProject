import Router from "./router/section";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./component/GlobalStyles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <Router />
      </GlobalStyles>
    </BrowserRouter>
  );
}

export default App;
