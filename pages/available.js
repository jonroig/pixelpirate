import { connect } from 'react-redux';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Pixelblock from '../components/pixelblock';
import Page from '../components/page';


const pageTitle = 'All MillionDollarHomepage Pixelblocks';

export function Available({ pixelList, pathUrl }) {
    if (!pixelList || !pixelList.isLoaded) {
        return (<></>);
    }

    const compareNumbers = (a, b) => {
        return b.size - a.size;
    }

    const pixelblocks = pixelList.value.pixelblocks
        .filter(pixelObj => (
            pixelObj.available
        ))
        .sort(compareNumbers);

    return (
        <Page 
            pageTitle={pageTitle}
            pathUrl={pathUrl}
            pageDescription='Expired MillionDollarHomepage domains available for registration'
        >
            <h1>Expired MillionDollarHomepage Pixelblocks</h1>
            {pixelblocks.map(pixelObj => (
                <div className='specificData' key={`pixel${pixelObj.id}`}>
                    <Pixelblock pixelObj={pixelObj} />
                    <br/><hr/><br/>
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

  export default connect(mapStateToProps)(Available);