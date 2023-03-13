import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import IPromiseResponse from "@/state/interfaces/IPromiseResponse";
import { createPromiseMock } from "@/utils/funcs";
import { useEffect, useState } from "react";
import imagesMock from "../../data/imagesMocks.json";

export default function useImageCardById(
  id: string
): IPromiseResponse<IImageData> {
  const [data, setData] = useState<IImageData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchImagesCardsData() {
      setIsLoading(true);

      const response = await createPromiseMock(imagesMock);

      const parsedResponse: IImageData[] = JSON.parse(JSON.stringify(response));

      const foundImageData = parsedResponse.find(
        (card) => card.id === Number(id)
      ) as IImageData;

      setData(foundImageData);
      setIsLoading(false);
    }

    fetchImagesCardsData();
  }, []);
  return {
    data,
    isLoading,
  };
}
