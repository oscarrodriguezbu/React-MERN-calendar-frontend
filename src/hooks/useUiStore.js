import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => { //para controlar el ui del store
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {//por si acaso
    isDateModalOpen ? closeDateModal() : openDateModal();
  };

  return {
    //* Propiedades
    isDateModalOpen,

    //* Métodos
    closeDateModal,
    openDateModal,
    toggleDateModal,
  };
};
