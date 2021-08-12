import Image from 'next/image';
import Link from 'next/link';

import config from '../config';

const Pixelblock = ({pixelObj}) => {
    if (Object.getOwnPropertyNames(pixelObj).length === 0) {
        return (<></>);
    }

    const originalCost = `\$${pixelObj.size}.00`;
    const imageUrl = `/images/pixelblocks/${pixelObj.id}.png`;
    const imageHeight = pixelObj.x2 - pixelObj.x1;
    const imageWidth = pixelObj.y2 - pixelObj.y1;
    const locationLink = `/#${pixelObj.x1},${pixelObj.y1}`;
    const displayCost = pixelObj.available ? pixelObj.cost / 10000 : 0;

    const cjUrl = `http://www.tkqlhce.com/click-${config.cjId}-11774111?url=`;

    const godaddyUrl = 'https://www.godaddy.com/domains/searchresults.aspx?checkAvail=1&tmskey=&domainToCheck=';
    const registerUrl = cjUrl + encodeURIComponent(godaddyUrl + pixelObj.domain);
    const registerMessage = `Register ${pixelObj.domain}!`;

    return (
        <div className='pixelBlock'>
            <h1>{pixelObj.title}</h1>
            <Image src={imageUrl} alt={pixelObj.title} height={imageHeight} width={imageWidth}/>
            <br/>
            <a href={pixelObj.href} title={pixelObj.title} rel="nofollow noreferrer" target="_blank">{pixelObj.href}</a>
            <br/>
            {pixelObj.available ? (
                <span className="green">Available</span>
            ) : (
                <span className="red">Not Available</span>
            )}
            {' '}/{' '}
            {pixelObj.resolves ? (
                <span className="green">Website</span>
            ) : (
                <span className="red">No Website</span>
            )}
            <br/>
            {pixelObj.available ? (
                <>
                    <a href={registerUrl} target="_blank" rel="nofollow noreferrer" title={registerMessage}>{registerMessage}</a>
                    <br/><br/>
                </>
            ) : (<></>)}
            <div className="specificLeft">
                Original cost: {originalCost}
                <br/>
                Location: <Link href={locationLink}><a>{pixelObj.x1},{pixelObj.y1}</a></Link>
            </div>
            <div className="specificRight">
                Size: {pixelObj.size}
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default Pixelblock;