import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import { createPromiseMock } from "@/utils/funcs";
import { useEffect, useState } from "react";
import imagesMocks from "../../data/imagesMocks.json";
import IPromiseResponse from "@/state/interfaces/IPromiseResponse";

export default function useImagesCardsData(): IPromiseResponse<IImageData[]> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchImagesCardsData() {
      setIsLoading(true);

      const response = await createPromiseMock(imagesMocks);

      const parsedResponse = JSON.parse(JSON.stringify(response));

      setData(parsedResponse);
      setIsLoading(false);
    }

    fetchImagesCardsData();
  }, []);
  return {
    data,
    isLoading,
  };
}
