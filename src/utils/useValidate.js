const useValidate = () => {
  const validateEmail = (email) => {
    const patternRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return patternRegex.test(email);
  };

  return {
    validateEmail,
  };
};

export default useValidate;
