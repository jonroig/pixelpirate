import { Children } from 'react';
import { connect } from 'react-redux';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Nav from './nav';
import PageHead from './pageHead';
import PageFooter from './PageFooter';

const name = 'Jon';
export const siteTitle = 'PixelPirate';


const Page = ({ pageDescription, pageTitle, pathUrl, pixelList, children }) => {
  
  const isLoading = (!pixelList || !pixelList.isLoaded || pixelList.isUpdating || !pixelList.value);
  return (
    <>
      <PageHead 
        pageTitle={pageTitle} 
        pageDescription={pageDescription}
        pathUrl={pathUrl}
      />
      <Nav />
      {isLoading && (
        <p>Loading...</p>
      )}
      <div className='container'>
      {children}
      </div>
      <PageFooter/>
    </>
  );
}

const mapStateToProps = (state, props) => {
  return {
      pixelList: pixelPirateApi.selectors.getPixels(store.getState())
  };
};


export default connect(mapStateToProps)(Page);


