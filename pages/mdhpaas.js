import Link from 'next/link';

import Page from '../components/page';


const pageTitle = 'MillionDollarHomepage-As-A-Service (MDHPAAS)';

export default function Mdhpaas({pathUrl}) {
  return (
    <Page
      pageTitle={pageTitle}
      pathUrl={pathUrl}
      pageDescription='MillionDollarHomepage-As-A-Service (MDHPAAS) JSON API'
    >
        <h1>JSON API</h1>
        <h2>
          MillionDollarHomepage-As-A-Service (MDHPAAS)
        </h2>
        <p>
          PixelPirate&rsquo;s revolutionary MillionDollarHomepage-As-A-Service (MDHPAAS) technology
          enables rapid surveillance of the volatile MillionDollarHomepage Pixel Aftermarket.
        </p>
        <p>
          Using Open Standards, The MDHPAAS JSON API
          facilitates seamless integration into existing business processes via REST.
          MDHPAAS is compatible with all major CRM platforms, including SAP, TerraData and RedPoint.
        </p>
        <p>
          The MDHPAAS JSON API is available free for non-commercial, educational, and commercially
          educational uses. For an enterprise license please
          <Link href="/contact"><a title="Contact PixelPirate">contact us for rates</a></Link>.
        </p>
        <h3>MDHPAAS JSON API</h3>
        <ul>
          <li>
            All Pixel Blocks:{' '}
            <Link href="/api/pixels">
              <a
              target="_blank"
              title="All MillionDollarHomepage Pixel Blocks">/api/pixels</a>
            </Link>
          </li>
          <li>
            Available Pixel Blocks:{' '}
            <Link href="/api/available">
              <a
              target="_blank"
              title="Available MillionDollarHomepage Pixel Blocks">/api/available</a>
            </Link>
          </li>
          <li>
            Unavailable Pixel Blocks:{' '}
            <Link href="/api/unavailable">
              <a
              target="_blank"
              title="Unvailable MillionDollarHomepage Pixel Blocks">/api/unavailable</a>
            </Link>
          </li>
          <li>
            Pixel Block by ID:{' '}
            <Link href="/api/id/666">
              <a
              target="_blank"
              title="MillionDollarHomepage Pixel Block 666">/api/id/666</a>
            </Link>
          </li>
          <li>
            Pixel Block by Location (0-1000):{' '}
            <Link href="/api/loc/666,666">
              <a
              target="_blank"
              title="MillionDollarHomepage Pixel Block By Location 666,">/api/loc/666,666</a>
            </Link>
            
          </li>
        </ul>
    </Page>
  )
};

