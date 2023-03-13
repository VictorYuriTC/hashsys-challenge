import { FilterContext } from "@/context/FilterProvider";
import useTheme from "@/foundations/Theme/useTheme";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Input.module.css";

export default function Input() {
  const theme = useTheme();
  const filterContext = useContext(FilterContext);
  const router = useRouter();

  const [filter, setFilter] = useState(filterContext.selectedFilter);

  function handleOnKeyDownInput(e: any) {
    if (e.key === "Enter") {
      filterContext.setSelectedFilter(filter);
      router.push("/");
    }
  }
  return (
    <label
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}>
      <input
        className={`${styles.input}`}
        style={{
          height: "3em",
          borderRadius: "44px",
          border: "0px",
          color: theme.light,
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

      <CiSearch
        style={{
          position: "absolute",
          width: "24px",
          height: "24px",
          fill: theme.white,
          translate: "-1em 0em",
        }}
      />
    </label>
  );
}
