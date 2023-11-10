import Header from "./Header";
import SearchBar from "./SearchBar";
import InfoContent from "./InfoContent";
import "../index.css";
import { useContext } from "react";
import { AppContext } from "./Context";
import NotFound from "./NotFound";
import Footer from "./Footer";

export default function App() {
  const { data } = useContext(AppContext);
  return (
    <>
      <NotFound />
      <Header />
      <SearchBar />
      {Object.keys(data).length == 0 ? null : <InfoContent />}
      <Footer />
    </>
  );
}
