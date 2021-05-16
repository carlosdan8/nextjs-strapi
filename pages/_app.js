import Header from "components/Header";
import { jsx, ThemeProvider } from "@emotion/react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";

const theme = {
  colors: {
    primary: "#efefef",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />)
      </ThemeProvider>
    </>
  );
}

export default MyApp;
