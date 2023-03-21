import styled from 'styled-components';

const PopupErrorContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  bottom: 20px;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.sans};
  justify-content: center;
  height: 60px;
  position: fixed;
  right: -450px;
  width: 450px;
  transform: ${({ show }) => {
    if (!show) return null;
    return 'translateX(-500px)';
  }};
  transition: all .4s ease;
`;

const ErrorIcon = styled.img`
  height: 20px;
  margin-right: 15px;
  width: 20px;
`;

export {
  PopupErrorContainer,
  ErrorIcon,
};
