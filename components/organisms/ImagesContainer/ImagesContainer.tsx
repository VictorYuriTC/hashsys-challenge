import useMedia, { MEDIA } from "@/foundations/Medias/useMedia";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function ImagesContainer({ children }: IProps) {
  const media = useMedia();

  function getGridTemplateColumns() {
    if (media === MEDIA.LARGE) {
      return "1fr 1fr 1fr 1fr";
    }

    if (media === MEDIA.MEDIUM) {
      return "1fr 1fr 1fr";
    }

    if (media === MEDIA.SMALL) {
      return "1fr 1fr";
    }

    return "1fr";
  }
  return (
    <div
      style={{
        display: "grid",
        gap: "1em 2em",
        gridTemplateColumns: getGridTemplateColumns(),
      }}>
      {children}
    </div>
  );
}
