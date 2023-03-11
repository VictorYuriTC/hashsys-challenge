import useWindowSize from "@/state/hooks/useWindowSize";

export enum MEDIA {
  XSMALL = "x-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type MediaType = MEDIA;

export default function useMedia(): MediaType {
  const windowSize = useWindowSize();

  if (windowSize.width >= 1120) {
    return MEDIA.LARGE;
  }

  if (windowSize.width < 1120 && windowSize.width >= 760) {
    return MEDIA.MEDIUM;
  }

  if (windowSize.width < 760 && windowSize.width >= 440) {
    return MEDIA.SMALL;
  }

  return MEDIA.XSMALL;
}
