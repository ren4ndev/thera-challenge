import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const SectionContainer = styled.section`
  background-color: ${({ theme, color }) => theme.colors[color]};
  column-gap: 16px;
  display: grid;
  grid-template-rows: [top-border] 1rem [start] auto [middle] auto [end] 1rem [bottom-border];
  grid-template-columns: [left-border] 1rem [start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [end] 1rem [right-border];
  min-height: fit-content;
  transition: all .4s ease;

  @media screen and (min-width: ${breakpoints.small}) {
    grid-template-rows: [top-border] 2rem [start] auto [middle] auto [end] 2rem [bottom-border];
    grid-template-columns: [left-border] 2rem [start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [end] 2rem [right-border];
  }

  @media screen and (min-width: ${breakpoints.xmedium}) {
    grid-template-rows: [top-border] 2rem [start] auto [middle] auto [end] 2rem [bottom-border];
    grid-template-columns: [left-border] 3rem [start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [end] 3rem [right-border];
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    grid-template-rows: [top-border] 80px [start] 1fr [end] 80px [bottom-border];
    grid-template-columns: [left-border] 80px [start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [col-7] 1fr [col-8] 1fr [col-9] 1fr [col-10] 1fr [col-11] 1fr [col-12] 1fr [end] 80px [right-border];
  }
`;

export default SectionContainer;
