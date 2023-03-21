const useParser = () => {
  const padTo2Digits = (num) => num.toString().padStart(2, '0');

  return {
    padTo2Digits,
  };
};

export default useParser;
