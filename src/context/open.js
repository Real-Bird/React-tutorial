import { createContext, useState } from "react";

const ModalOpen = createContext({
  state: { isOpen: false },
  actions: {
    setIsOpen: () => {},
  },
});

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    state: { isOpen },
    actions: {
      setIsOpen,
    },
  };
  console.log("hi");
  return <ModalOpen.Provider value={value}>{children}</ModalOpen.Provider>;
};

const { Consumer: ModalConsumer } = ModalOpen;

export { ModalProvider, ModalConsumer };

export default ModalOpen;
