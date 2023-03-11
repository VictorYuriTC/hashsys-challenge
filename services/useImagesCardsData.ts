import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import imagesMocks from "../data/imagesMocks.json";

export default function useImagesCardsData(): IImageData[] {
  return JSON.parse(JSON.stringify(imagesMocks));
}
