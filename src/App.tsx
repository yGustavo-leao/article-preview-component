import { ThemeProvider } from "styled-components";
import { Article } from "./components/Article/Article";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Article />
    </ThemeProvider>
  );
}

export default App;
