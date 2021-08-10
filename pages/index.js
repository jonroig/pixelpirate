import { connect } from 'react-redux';
import Link from 'next/link';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Page from '../components/page'


const pageTitle = 'Register Expired MillionDollarHomepage domains / Steal MillionDollarHomepage pixels';

export function Index({pixelList, pathUrl}) {

  if (!pixelList || !pixelList.isLoaded) {
    return (<></>);
}

  const {totalBlockCount, totalDomains, totalAvailable} = pixelList.value;
  return (
    <Page 
      pageTitle={pageTitle}
      pathUrl={pathUrl}
    >
      <h2>Steal Internet History!</h2>
      <h3>Register expired MillionDollarHomepage domains!</h3>
      <p>
        Scroll around! Click! <strong><a href="/faq" title="PixelPirate Frequently Asked Questions">FAQ</a></strong>
      </p>
      <p>
        The <a href="http://MillionDollarHomepage.com" title="MillionDollarHomepage" target="_blank" rel="noopener">MillionDollarHomepage</a>: 
        {' '}<Link href="/status" title="Current MillionDollarHomepage status"><a>1,000,000 pixels. 
        {' '}{totalBlockCount} distinct blocks.
        {' '}{totalDomains} unique domains.</a></Link>{' '}
        At $1/pixel, the project raised 1,000,000 dollars.
      </p>
      <p>
        Immortal. Immutable. Set in stone. <strong>Perfect</strong>.
      </p>
      <p>
        The greatest moment in Internet advertising history. We know what you're thinking:
        "I wish I'd gotten in on that!"
      </p>
      <h3>All Booty, No Poop Deck</h3>
      <p>
        <strong>It's not too late!</strong>
      </p>
      <p>
        Avast ye maties and welcome aboard the SS PixelPirate. Every day,
        domains linked from the MillionDollarHomepage expire.
      </p>
      <p>
        With the help of PixelPirate's
        revolutionary
        {' '}
        <Link href="/mdhpaas" ><a title="MillionDollarHomepage As A Service (MDHPAAS) Documentation">MillionDollarHomepage As A Service (MDHPAAS)</a></Link>
        {' '}
        technology, our band of robot scallywags scour the data seas, always on the lookout
        for domains prematurely sent to Davy Jones' Locker.
      </p>
      <p>
        Capture the domain, own the Pixels. 
      </p>
      <p>
        <strong>Learn more: <Link href="/faq" ><a title="Learn more about PixelPirate">FAQ</a></Link></strong>
      </p>
      <div className="sharethis-inline-share-buttons"></div>
      <br clear="all" /><br clear="all" />
      <h3>Available Pixel Blocks</h3>
      <p>
        Our cargo holds contain <Link href="/available"><a title="Expired MillionDollarHomepage domains">{totalDomains} domains</a></Link>.
        Click on an image to zoom in on a particular Pixel Block's location.
      </p>
    </Page>
  );
}

const mapStateToProps = (state, props) => {
  return {
      pixelList: pixelPirateApi.selectors.getPixels(store.getState())
  };
};

export default connect(mapStateToProps)(Index);