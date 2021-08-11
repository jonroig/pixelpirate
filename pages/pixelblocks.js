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

    const pixelblocks = pixelList.value.pixelblocks;

    return (
        <Page 
            pageTitle={pageTitle}
            pathUrl={pathUrl}
        >
            <h1>All MillionDollarHomepage Pixelblocks</h1>
            {pixelblocks.map(pixelObj => (
                <div className='specificData' key={`pixel${pixelObj.id}`}>
                    <Pixelblock pixelObj={pixelObj} />
                    <br/><hr/>
                </div>
            ))}
        </Page>
    );
};

const mapStateToProps = (state, props) => {
    return {
        pixelList: pixelPirateApi.selectors.getPixels(store.getState())
    };
  };

  export default connect(mapStateToProps)(Pixelblocks);