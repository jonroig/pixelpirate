import { connect } from 'react-redux';
import Link from 'next/link';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Page from '../components/page';


const pageTitle = 'MillionDollarHomepage Current Link Status';

export function Status({pixelList, pathUrl}) {
  if (!pixelList || !pixelList.isLoaded) {
    return (<></>);
  }

  const {totalBlockCount, totalResolves, totalDomains, totalHrefs, totalAvailable} = pixelList.value;
  return (
    <Page
      pageTitle={pageTitle}
      pathUrl={pathUrl}
    >
      <h1>MillionDollarHomepage Current Link Status</h1>
      <ul>
        <li>
          <Link href="/pixelblocks"><a title="View all Pixel Blocks">Total Pixel Blocks</a></Link>
          :{' '}
          <Link href="/pixelblocks"><a title="View all Pixel Blocks">{totalBlockCount}</a></Link></li>
        <li>Total Domains: {totalBlockCount}</li>
        <li>Total URLs: {totalHrefs}</li>
        <li>
          <Link href="/available"><a title="View available MillionDollarHomepage Pixel Blocks">Total Expired Domains</a></Link>
          :{' '}
          <Link href="/available"><a title="View expired MillionDollarHomepage domains">{totalAvailable}</a></Link>
        </li>
        <li>
          <Link href="/active"><a title="View all active Pixel Blocks">Total Active</a></Link>
          :{' '}
          <Link href="/active"><a title="View all active Pixel Blocks">{totalResolves}</a></Link></li>
      </ul>
    </Page>
  )
};

const mapStateToProps = (state, props) => {
  return {
      pixelList: pixelPirateApi.selectors.getPixels(store.getState())
  };
};

export default connect(mapStateToProps)(Status);