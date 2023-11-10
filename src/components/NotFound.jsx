import { Modal } from "@mui/material";
import notfound from "../assets/404notfound.svg";
import { useContext } from "react";
import { AppContext } from "./Context";

export default function NotFound() {
  const { isError, setIsError } = useContext(AppContext);
  function handleClose() {
    setIsError(false);
  }
  return (
    <Modal className="notFound" open={isError} onClose={handleClose}>
      <img src={notfound} alt="" />
    </Modal>
  );
}
