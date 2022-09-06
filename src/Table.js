import { useContext } from "react";
import ModalOpen from "./context/open";
import Modal from "./Modal";

export default function Table() {
  const {
    state: { isOpen },
  } = useContext(ModalOpen);
  return (
    <div>
      <h3>Table</h3>
      {isOpen && <Modal />}
    </div>
  );
}
