import ImageCard from "@/components/atoms/ImageCard/ImageCard";
import Spinner from "@/components/atoms/Spinner/Spinner";
import ImagesContainer from "@/components/organisms/ImagesContainer/ImagesContainer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import useTheme, { THEME } from "@/foundations/Theme/useTheme";
import useImagesCardsData from "@/services/useImagesCardsData";

import Head from "next/head";

export default function Home() {
  const theme = useTheme();

  const imagesCardsResponse = useImagesCardsData();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundColor: theme.bg,
          padding: "2em 5em 2em 5em",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}>
        <Navbar />

        <ImagesContainer>
          {!imagesCardsResponse.isLoading &&
            imagesCardsResponse.data?.map((imageData) => (
              <ImageCard key={imageData.id} imageData={imageData} />
            ))}
        </ImagesContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {imagesCardsResponse.isLoading && <Spinner />}
        </div>
      </main>
    </>
  );
}
