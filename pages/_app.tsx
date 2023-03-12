import Title from "@/components/atoms/Title/Title";
import FilterProvider from "@/context/FilterProvider";
import ThemeProvider from "@/context/ThemeProvider";
import type { AppProps } from "next/app";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FilterProvider>
        <Title
          style={{
            paddingTop: "1.5em",
          }}>
          Álbum do Conhecimento
        </Title>
        <Component {...pageProps} />
      </FilterProvider>
    </ThemeProvider>
  );
}
