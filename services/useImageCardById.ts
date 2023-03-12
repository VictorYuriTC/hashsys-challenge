import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import IPromiseResponse from "@/state/interfaces/IPromiseResponse";
import { ROUTES } from "@/utils/constants";
import { createPromiseMock } from "@/utils/funcs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import imagesMock from "../data/imagesMocks.json";

export default function useImageCardById(
  id: string
): IPromiseResponse<IImageData> {
  const [data, setData] = useState<IImageData>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
  }, [router.query[ROUTES.IMAGE_CARD_ID]]);
  return {
    data,
    isLoading,
  };
}
