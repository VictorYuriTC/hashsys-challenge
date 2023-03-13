import { IImageData } from "@/components/atoms/ImageCard/ImageCard";

export function isValidCategory(cards: IImageData[], filter: string) {
  return filterDataByCardCategory(cards, filter).length > 0;
}

export function filterDataByCardCategory(cards: IImageData[], filter: string) {
  return cards.filter(({ category }) =>
    category.toLowerCase().includes(filter.toLowerCase())
  );
}

export function isValidCardName(cards: IImageData[], filter: string) {
  return filterDataByCardName(cards, filter).length > 0;
}

export function filterDataByCardName(cards: IImageData[], filter: string) {
  return cards.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
}

export function filterData(cards: IImageData[], filter: string) {
  if (isValidCategory(cards, filter)) {
    return filterDataByCardCategory(cards, filter);
  }

  if (isValidCardName(cards, filter)) {
    return filterDataByCardName(cards, filter);
  }

  return cards;
}
