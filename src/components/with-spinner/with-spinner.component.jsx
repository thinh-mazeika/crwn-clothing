import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
       <SpinnerContainer />  
      </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;