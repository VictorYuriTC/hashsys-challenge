import { formatStringToUrl } from "@/utils/stringFuncs";
import Image from "next/image";
import Link from "next/link";

export interface IImageData {
  id: number;
  image: string;
  name: string;
  category: string;
  text: string;
}

interface IProps {
  imageData: IImageData;
}

export default function ImageCard({ imageData }: IProps) {
  return (
    <Link href={`/${formatStringToUrl(imageData.name)}`}>
      <Image
        src={`/${imageData.image}`}
        alt={`${imageData.name} image, included on ${imageData.category} category. Image nº ${imageData.id}`}
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Link>
  );
}
