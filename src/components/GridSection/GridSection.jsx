import React from 'react';

import SectionContainer from './styles';

// eslint-disable-next-line react/prop-types
function GridSection({ children, color, id }) {
  return (
    <SectionContainer color={color} id={id}>
      {children}
    </SectionContainer>
  );
}

export default GridSection;
