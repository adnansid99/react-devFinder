import Header from "./Header";
import SearchBar from "./SearchBar";
import InfoContent from "./InfoContent";
import "../index.css";
import { useContext } from "react";
import { AppContext } from "./Context";

export default function App() {
  const { data } = useContext(AppContext);
  return (
    <>
      <Header />
      <SearchBar />
      {Object.keys(data).length == 0 ? null : <InfoContent />}
    </>
  );
}
