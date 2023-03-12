import { FilterContext } from "@/context/FilterProvider";
import useTheme from "@/foundations/Theme/useTheme";
import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Input() {
  const theme = useTheme();
  const filterContext = useContext(FilterContext);

  const [filter, setFilter] = useState("");

  function handleOnKeyDownInput(e: any) {
    if (e.key === "Enter") {
      filterContext.setSelectedFilter(filter);
    }
  }
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
      }}>
      <CiSearch
        style={{
          content: "",
          translate: "10em 0.5em",
          position: "absolute",
          width: "24px",
          height: "24px",
          fill: theme.white,
        }}
      />
      <input
        style={{
          height: "3em",
          borderRadius: "44px",
          border: "0px",
          backgroundColor: theme.secondary,
          paddingLeft: "1em",
          width: "25em",
        }}
        placeholder="Pesquise aqui"
        type="text"
        value={filter}
        onKeyDown={handleOnKeyDownInput}
        onChange={({ target: { value } }) => setFilter(value)}
      />
    </div>
  );
}
