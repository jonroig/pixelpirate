import { Provider } from 'react-redux'
import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store'


export default function App({ Component, pageProps }) {

  // grab the data from the api
  const pixelList = pixelPirateApi.selectors.getPixels(store.getState());
  if (!pixelList || (!pixelList.isLoaded && !pixelList.isUpdating)) {
    store.dispatch(pixelPirateApi.actionCreators.getPixels());
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
