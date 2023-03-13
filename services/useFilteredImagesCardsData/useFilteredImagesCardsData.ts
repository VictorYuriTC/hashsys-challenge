import { IImageData } from "@/components/atoms/ImageCard/ImageCard";
import { FilterContext } from "@/context/FilterProvider";
import IPromiseResponse from "@/state/interfaces/IPromiseResponse";
import { createPromiseMock } from "@/utils/funcs";
import { useContext, useEffect, useState } from "react";
import imagesMocks from "../../data/imagesMocks.json";
import { filterData } from "./handlers";

export default function useFilteredImagesCardsData(): IPromiseResponse<
  IImageData[]
> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedFilter } = useContext(FilterContext);

  useEffect(() => {
    async function fetchFilteredImagesCardsData() {
      setIsLoading(true);

      const response = await createPromiseMock(imagesMocks);

      const parsedResponse = JSON.parse(JSON.stringify(response));

      const filteredData = filterData(parsedResponse, selectedFilter) as any;

      setData(filteredData);
      setIsLoading(false);
    }

    fetchFilteredImagesCardsData();
  }, [selectedFilter]);
  return {
    data,
    isLoading,
  };
}
