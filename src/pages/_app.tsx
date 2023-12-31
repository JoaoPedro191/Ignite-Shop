import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
