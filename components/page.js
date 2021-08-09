import { Children } from 'react'
import { connect } from 'react-redux';

import Nav from './nav'
import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store'

const Page = ({pixelList, children }) => {

  if (!pixelList || !pixelList.isLoaded || pixelList.isUpdating || !pixelList.value) {
    return (
      <>
        <Nav />
        <p>
          Loading...
        </p>
      </>
    )
  }
    
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
      pixelList: pixelPirateApi.selectors.getPixels(store.getState())
  };
};

export default connect(mapStateToProps)(Page);