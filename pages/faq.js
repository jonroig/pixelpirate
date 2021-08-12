import { connect } from 'react-redux';
import Link from 'next/link';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';
import Page from '../components/page';


const pageTitle = 'Frequently Asked Questions';

export function Faq({pixelList, pathUrl}) {
  if (!pixelList || !pixelList.isLoaded) {
    return (<></>);
  }

  const {totalAvailable} = pixelList.value;
  return (
    <Page
      pageTitle={pageTitle}
      pathUrl={pathUrl}
      pageDescription='Every day, domains connected to the MillionDollarHomepage expire. Capture the domain, capture the pixels!'
    >
      <h1>PixelPirate FAQ</h1>
      <h2>What is the MillionDollarHomepage?</h2>
      <p>
        According to <a href="https://en.wikipedia.org/wiki/The_Million_Dollar_Homepage" title="Wikipedia on MillionDollarHomepage">Wikipedia</a>,
        &rdquo;The Million Dollar Homepage is a website conceived in 2005 by Alex Tew, a student from Wiltshire, England, to raise money for his university education. 
        The home page consisted of a million pixels arranged in a 1000 × 1000 pixel grid; the image-based links on it were sold for $1 per pixel in 10 × 10 blocks. 
        The purchasers of these pixel blocks provided tiny images to be displayed on them, a URL to which the images were linked, and a slogan to be displayed when hovering a cursor over the link. 
        The aim of the website was to sell all of the pixels in the image, thus generating a million dollars of income for the creator.&rdquo;
      </p>
      <h2>What is PixelPirate?</h2>
      <p>
        Every day, domains connected to the MillionDollarHomepage expire. Capture
        the domain, capture the pixels!
        The PixelPirate value proposition is simple: this is your opportunity to own a piece of Internet History.
      </p>
      <h2>What can I do with PixelPirate?</h2>
      <p>
        PixelPirate is like Google Maps, but for MillionDollarHomepage Pixels.
      </p>
      <p>
        Additional data mining enhancements include a detailed analysis of
        {' '}
        <Link href="/available"><a title="available MillionDollarHomepage Pixels">available MillionDollarHomepage Pixels</a></Link>,
        {' '}
        <Link href="/active"><a title="active MillionDollarHomepage Pixels">active MillionDollarHomepage Pixels</a></Link>,
        and a 
        {' '}<Link href="/pixelblocks" ><a title="full / comprehensive list of all known MillionDollarHomepage Pixels">full / comprehensive list of all known MillionDollarHomepage Pixels</a></Link>.
      </p>

      <h2>How many Pixel Blocks are available?</h2>
      <p>
        <Link href="/available"><a title="View all available Pixel Blocks">{totalAvailable}</a></Link>
      </p>
      <h2>Where can I see up to date statistics on the MillionDollarHomepage?</h2>
      <p>
        Up to date status information:
        {' '}<Link href="/status"><a title="View PixelPirate Status Page">/status</a></Link>
      </p>
      <h2>How does PixelPirate work?</h2>
      <p>
        The PixelPirate stack includes: Machine Learning, Hadoop, JS-XSLT,
        AWS Cloud, Node
      </p>
      <h2>Is there a MillionDollarHomepage API?</h2>
      <p>
        Yes! The proprietary PixelPirate
        {' '}<Link href="/mdhpaas"><a title="Pixelpirate MillionDollarHomepage-As-A-Service (MDHPAAS) API">MillionDollarHomepage-As-A-Service (MDHPAAS) API</a></Link>
        {' '} is available free for non-commercial, educational, and commercially educational uses. For an enterprise license please
        {' '}<Link href="/contact"><a title="Contact PixelPirate">contact us</a></Link> for rates.
      </p>
      <h2>Are MillionDollarHomepage Pixels the original blockchain?</h2>
      <p>
        Several economists have theorized that due to the immutable nature
        of the MillionDollarHomepage, MillionDollarHomepage Pixels satisfy Schroeder&rsquo;s necessary
        and sufficient conditions to serve as a basis for a globally distributed
        network and storage of value.
      </p>
      <p>
        Because of its incredible and enduring popularity, MillionDollarHomepage Pixels
        exist not just on MillionDollarHomepage.com, but as a Platonic form,
        reproducible and recognizable in any media, be it a homepage, t-shirts, songs
        or sand castles. Once conjured into the Global Consciousness, MillionDollarHomepage
        cannot be erased or destroyed. Nor can new Pixels ever be created.
      </p>
      <p>
        Because of this immutability, ubiquity and scarcity, many investors
        regard MillionDollarHomepage Pixels as
        an asset class similar to fine art, minus the trouble of moving your painting
        in and out of Free Trade zone storage. In many ways, Pixel collectors
        view their holdings as akin to owning a percentage of a Warhol or a Degas.
      </p>

      <h2>Is PixelPirate licensed by the SEC?</h2>
      <p>
        Prevailing financial headwinds have sent investment firms scouring the
        world for safe harbors. PixelPirate arbitrages digital assets for
        adventurous financial managers and institutional investors.
      </p>
      <p>
        While PixelPirate is not formally licensed by the SEC - the United States
        Government has yet to recognize MillionDollarHomepage Pixels as an investment grade asset -
        typically, this works to our clients&rsquo; advantage. There is currently
        little to no regulatory oversight over MillionDollarHomepage Pixels.
      </p>
      <h2>Are there rumors of mob involvement?</h2>
      <p>
        Batten down the hatches! Only the Law of the Sea applies.
      </p>
      <p>
        While revelations in the Panama Papers suggest that several Russian
        Oligarchs own a large percentage of the URLs linked through the MillionDollarHomepage,
        to date, there have been no reports of assault, extortion, vandalism,
        larceny, burglary, or arson associated with MillionDollarHomepage Pixels.
      </p>

      <h2>What can you tell me about SEARCH ENGINE DOMINATION?</h2>
      <p>
        Perhaps the most linked-to single page of all time, the MillionDollarHomepage
        has a nearly perfect page rank across all major
        search engines, including Google, Bing, Yandex, and DuckDuckGo.
        Internal documents leaked on the Dark Web by &rdquo;grey hat&rdquo; hackers revealed Google&rsquo;s
        internal &rdquo;Page Rank&rdquo; score for MillionDollarHomepage, 664 of a possible 666
        points.
      </p>
      <p>
        One doesn&rsquo;t have to be a Search Engine Optimization wizard to know:
        pages linked from definitive, authoritative sources like the MillionDollarHomepage
        are given special weight of their own by association. Justly so: websites
        spent a million dollars in 2005 money ($23 million in 2019) just to
        participate in the project.
      </p>
      <p>
        Three whitepapers published by preeminent journals
        document the incredible value proposition
        of MillionDollarHomepage Pixels.
        Like the current of the mighty Mississippi, the SEO backlinking power
        of the MillionDollarHomepage remains undiminished with time.
        Research suggests that millions of visitors a year explore the MillionDollarHomepage,
        including a significant
        percentage from emerging markets.
      </p>
      <h2>Is this project associated with The MillionDollarHomepage?</h2>
      <p>
        No. Pirates don&rsquo;t ask permission.
      </p>

      <h2>Is PixelPirate just an elaborate scheme to sell emoji domains?</h2>
      <p>
        No... well. <a href="https://i❤️.ws" rel="noreferrer" target="_blank" title="Register Emoji Domains!">Maybe?</a>
        <br/>
        We use
        {' '}<a href="https://github.com/jonroig/emojiurlifier" rel="noreferrer" target="_blank" title="EmojiUrlifier">EmojiUrlifier</a>
        to deliver either emoji or &rdquo;regular&rdquo; domains, as appropriate.
        {' '}<a href="https://PixelPirate.club" title="PixelPirate.club">PixelPirate.club</a>{' '}
        or {' '}<a href="https://☠☠☠☠☠.ws" title="☠☠☠☠☠.ws">☠☠☠☠☠.ws</a>, either way it&rsquo;s cool.
        <br/>
        You should listen to our theme song.
      </p>
      <h2>Is there a PixelPirate GitHub Repo</h2>
      <p>
        You betcha: <a href="https://github.com/jonroig/pixelpirate" title="Github PixelPirate Repo">Github PixelPirate Repo</a>
      </p>
    </Page>
  )
};

const mapStateToProps = (state, props) => {
  return {
      pixelList: pixelPirateApi.selectors.getPixels(store.getState())
  };
};

export default connect(mapStateToProps)(Faq);