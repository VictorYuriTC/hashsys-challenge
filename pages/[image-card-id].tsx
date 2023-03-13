import MainLink from "@/components/atoms/ImagePageLink/MainLink";
import Spinner from "@/components/atoms/Spinner/Spinner";
import Title from "@/components/atoms/Title/Title";
import Navbar from "@/components/organisms/Navbar/Navbar";
import useMedia, { MEDIA } from "@/foundations/Medias/useMedia";
import useTheme from "@/foundations/Theme/useTheme";
import useImageCardById from "@/services/useImageCardById/useImageCardById";
import useImagesCardsData from "@/services/useImagesCardsData/useImagesCardsData";

import useDefaultSvgSize from "@/state/hooks/useDefaultSvgSize";
import ISize from "@/state/interfaces/ISize";
import { ROUTES } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export default function KnowledgeCard() {
  const router = useRouter();
  const imageCardId = router.query[ROUTES.IMAGE_CARD_ID];
  const imageCardResponse = useImageCardById(imageCardId as string);
  const imagesCardsResponse = useImagesCardsData();
  const theme = useTheme();
  const media = useMedia();
  const defaultSvgSize = useDefaultSvgSize();

  const previousCardId =
    Number(imageCardId) === 1 ? 20 : Number(imageCardId) - 1;

  const nextCardId = Number(imageCardId) === 20 ? 1 : Number(imageCardId) + 1;

  function getImageSize(): ISize {
    if (media === MEDIA.LARGE) {
      return {
        width: "20em",
        height: "15em",
      };
    }

    if (media === MEDIA.MEDIUM) {
      return {
        width: "18em",
        height: "12em",
      };
    }

    return {
      width: "25em",
      height: "20em",
    };
  }

  function getContainerFlexDirection() {
    if (media === MEDIA.SMALL || media === MEDIA.XSMALL) {
      return { flexDirection: "column" as any };
    }

    return { flexDirection: "row" };
  }

  function getTextContainerPadding() {
    if (media === MEDIA.MEDIUM || media === MEDIA.LARGE) {
      return { padding: "0em 4em 0em 0em" };
    }

    return { padding: "0em 3em 0em 3em" };
  }

  if (imageCardResponse.isLoading)
    return (
      <div
        style={{
          backgroundColor: theme.bg,
          minHeight: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Spinner />
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        minHeight: "100dvh",
      }}>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
          paddingBottom: "5em",
          ...getContainerFlexDirection(),
        }}>
        <div>
          <Image
            src={`/${imageCardResponse.data?.image}`}
            alt={`Image and description about ${imageCardResponse.data?.name}. Part of ${imageCardResponse.data?.category} category.`}
            width="0"
            height="0"
            sizes="100vw"
            style={{
              ...getImageSize(),
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...getTextContainerPadding(),
            gap: "2em",
          }}>
          <Title
            style={{
              textAlign: "start",
            }}>
            {imageCardResponse.data?.name}
          </Title>
          <p
            style={{
              color: theme.primary,
            }}>
            {imageCardResponse.data?.text || (
              <>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                sunt, aspernatur illo animi deserunt, repudiandae numquam ipsa
                deleniti laboriosam sequi nostrum? Officiis vitae repudiandae
                blanditiis nam suscipit, debitis quasi. Porro? Vero sit, iusto
                facere, praesentium aut temporibus laudantium repudiandae
                voluptatem ducimus possimus debitis! Ab optio dolores, a facilis
                nam sint ea culpa commodi, modi eum reprehenderit cupiditate
                laboriosam tempora vero? Eum dolorum laudantium obcaecati. Ipsa,
                alias eos ut quas quos dolorum nisi explicabo! Iste, tenetur quo
                quidem vero ad molestias natus esse vitae similique amet aut
                pariatur alias quisquam deleniti.
              </>
            )}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "4em",
        }}>
        <MainLink href={`/${previousCardId}`}>
          <HiArrowLeft
            style={{
              ...defaultSvgSize,
            }}
          />

          <span>Anterior</span>
        </MainLink>

        <MainLink href={`/${nextCardId}`}>
          <span>Próximo</span>

          <HiArrowRight
            style={{
              ...defaultSvgSize,
            }}
          />
        </MainLink>
      </div>
    </div>
  );
}
