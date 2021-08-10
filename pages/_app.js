import { Provider } from 'react-redux'
import App from 'next/app'

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store'

import '../components/nav.scss';


export default function PixelPirateApp({ Component, pageProps, pathUrl }) {
  // grab the data from the api
  const pixelList = pixelPirateApi.selectors.getPixels(store.getState());
  if (!pixelList || (!pixelList.isLoaded && !pixelList.isUpdating)) {
    store.dispatch(pixelPirateApi.actionCreators.getPixels());
  }
  
  const theProps = {
    pathUrl,
    ...pageProps
  };

  return (
    <Provider store={store}>
      <Component {...theProps} />
    </Provider>
  )
}

PixelPirateApp.getInitialProps = async (ctx) => {
  return {
    pathUrl: ctx.ctx.pathname,
  }
}
