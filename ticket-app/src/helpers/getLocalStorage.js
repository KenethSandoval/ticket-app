export const getLocalStorage = () => {
  return {
    agente: localStorage.getItem("agente"),
    escritorio: localStorage.getItem("escritorio"),
  };
};
