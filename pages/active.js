import { connect } from 'react-redux';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Pixelblock from '../components/pixelblock';
import Page from '../components/page';


const pageTitle = 'All MillionDollarHomepage Pixelblocks';

export function Active({ pixelList, pathUrl }) {
    if (!pixelList || !pixelList.isLoaded) {
        return (<></>);
    }

    const pixelblocks = pixelList.value.pixelblocks.filter(pixelObj => (
      pixelObj.resolves
    ));

    return (
        <Page 
            pageTitle={pageTitle}
            pathUrl={pathUrl}
        >
            <h1>Active MillionDollarHomepage Pixelblocks</h1>
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

  export default connect(mapStateToProps)(Active);