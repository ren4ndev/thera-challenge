import styled from 'styled-components';

const LoadingContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.quarternary};
  display: flex;
  justify-content: center;
  height: 100vh;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

const Spinner = styled.div`
  animation: spin 1s linear infinite;
  border: ${({ theme }) => `20px solid ${theme.colors.secondary}`};
  border-top: ${({ theme }) => `20px solid ${theme.colors.tertiary}`};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  z-index: 2;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
export {
  LoadingContainer,
  Spinner,
};
