import { connect } from 'react-redux';
import Pixelblock from '../components/pixelblock';
import Page from '../components/page';
import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store'


export function Pixelblocks(props) {
    const { pixelList } = props;

    if (!pixelList || !pixelList.isLoaded) {
        return (<></>);
    }

    return (
        <Page>
            <h1>All Pixelblocks</h1>
            {pixelList.value.pixelblocks.map(pixelObj => 
                Pixelblock(pixelObj)
            )}
        </Page>
  )
};

const mapStateToProps = (state, props) => {
    return {
        pixelList: pixelPirateApi.selectors.getPixels(store.getState())
    };
  };

  export default connect(mapStateToProps)(Pixelblocks);