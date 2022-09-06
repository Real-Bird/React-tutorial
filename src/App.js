import { useContext, useState } from "react";
import ModalOpen from "./context/open";
import Table from "./Table";

export default function App() {
  const {
    actions: { setIsOpen },
  } = useContext(ModalOpen);
  return (
    <div>
      <Table />
      <button onClick={() => setIsOpen(true)}>열기</button>
    </div>
  );
}
