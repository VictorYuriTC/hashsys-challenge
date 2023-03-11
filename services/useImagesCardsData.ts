import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import {
  CATEGORY,
  categoryType,
  FilterContext,
} from "@/context/FilterProvider";
import { useContext, useEffect, useState } from "react";
import imagesMocks from "../data/imagesMocks.json";

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

interface IUseImagesCardsData {
  data?: IImageData[];
  isLoading?: boolean;
  error?: Error;
}

export default function useImagesCardsData(): IUseImagesCardsData {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedFilter } = useContext(FilterContext);

  useEffect(() => {
    async function fetchImagesCardsData() {
      setIsLoading(true);

      const response = await new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve(imagesMocks);
        }, Math.floor(Math.random() * (2500 - 250) + 250));
      });

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
