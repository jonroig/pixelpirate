import { connect } from 'react-redux';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Pixelblock from '../components/pixelblock';
import Page from '../components/page';


const pageTitle = 'All MillionDollarHomepage Pixelblocks';

export function Pixelblocks({ pixelList, pathUrl }) {
    if (!pixelList || !pixelList.isLoaded) {
        return (<></>);
    }

    return (
        <Page 
            pageTitle={pageTitle}
            pathUrl={pathUrl}
        >
            <h1>All MillionDollarHomepage Pixelblocks</h1>
            {pixelList.value.pixelblocks.map(pixelObj => 
                Pixelblock(pixelObj)
            )}
        </Page>
    );
};

const mapStateToProps = (state, props) => {
    return {
        pixelList: pixelPirateApi.selectors.getPixels(store.getState())
    };
  };

  export default connect(mapStateToProps)(Pixelblocks);