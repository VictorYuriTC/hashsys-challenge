import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import { FilterContext } from "@/context/FilterProvider";
import { createPromiseMock } from "@/utils/funcs";
import { useContext, useEffect, useState } from "react";
import imagesMocks from "../data/imagesMocks.json";
import IPromiseResponse from "@/state/interfaces/IPromiseResponse";

function isValidCategory(cards: IImageData[], filter: string) {
  return filterDataByCardCategory(cards, filter).length > 0;
}

function filterDataByCardCategory(cards: IImageData[], filter: string) {
  return cards.filter(({ category }) =>
    category.toLowerCase().includes(filter.toLowerCase())
  );
}

function isValidCardName(cards: IImageData[], filter: string) {
  return filterDataByCardName(cards, filter).length > 0;
}

function filterDataByCardName(cards: IImageData[], filter: string) {
  return cards.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
}

function filterData(cards: IImageData[], filter: string) {
  if (isValidCategory(cards, filter)) {
    return filterDataByCardCategory(cards, filter);
  }

  if (isValidCardName(cards, filter)) {
    return filterDataByCardName(cards, filter);
  }

  return cards;
}

export default function useImagesCardsData(): IPromiseResponse<IImageData[]> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedFilter } = useContext(FilterContext);

  useEffect(() => {
    async function fetchImagesCardsData() {
      setIsLoading(true);

      const response = await createPromiseMock(imagesMocks);

      const parsedResponse = JSON.parse(JSON.stringify(response));

      const filteredData = filterData(parsedResponse, selectedFilter) as any;

      setData(filteredData);
      setIsLoading(false);
    }

    fetchImagesCardsData();
  }, [selectedFilter]);
  return {
    data,
    isLoading,
  };
}
