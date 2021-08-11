import Link from 'next/link';

import Page from '../components/page';


const pageTitle = 'Contact';

export default function Contact({pathUrl}) {
  return (
    <Page
      pageTitle={pageTitle}
      pathUrl={pathUrl}
    >
      <h1>Contact PixelPirate</h1>
      <div className="text-center">
        <img src="/images/pixelpirateship.png"
          id="mdhpImage"
          style={{width: '50%', margin: '20px 20px 20px 0'}}
          alt="PixelPirate shop"
        />
        </div>
      <p>
        PixelPirate.club was created in 2019 by Jon Roig
        (<a href="https://twitter.com/runnr_az" rel="noopener" target="_blank" title="Jon Roig on Twitter">@runnr_az</a>)
        /
        Domain Research Group
        (<a href="https://twitter.com/emoji_domains" rel="noopener" target="_blank" title="i❤️.ws on Twitter">@emoji_domains</a>)
      </p>
      <p>
        It was updated to Next.JS in August of 2021 and released on Github.
      </p>
    </Page>
  )
};