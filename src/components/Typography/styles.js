import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const Typography = styled('span').attrs(({ tag }) => ({
  as: tag,
}))`
  color: ${({ theme, color }) => {
    if (color) return theme.colors[color];
    return 'inherit';
  }
};
  font-size: ${({ theme, type }) => theme.typography.types[type].size};
  font-weight: ${({ theme, weight }) => {
    if (weight) return theme.weight[weight];
    return '400';
  }
};
  line-height: ${({ theme, type }) => theme.typography.types[type].lineHeight};
  transition: all .4s ease;
  
  @media screen and (min-width: ${breakpoints.medium}) {
  }
`;

export default Typography;
