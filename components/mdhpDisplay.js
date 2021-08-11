import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';


const MdhpDisplay = ({pixelList, defaultClick}) => {
    const [hoverContentObj, setHoverContentObj] = useState({});
    const [clickedContentObj, setClickedContentObj] = useState({});
    const [clickedMode, setClickedMode] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (defaultClick) {
            let xClick = null;
            let yClick = null;
            try {
                const rawLocArray = defaultClick.split(',');
                xClick = rawLocArray[0];
                yClick = rawLocArray[1];
            } catch (e) {
                console.log(e);
                return;
            }
            
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext("2d");
            const pixelObj = getPixeldata(xClick, yClick);
            if (pixelObj) {
                scrollIntoView(pixelObj);
                highlightPixelblock(pixelObj, ctx);                
            }

            defaultClick = false; 
        }
    }, [pixelList])

    if (!pixelList || !pixelList.isLoaded) {
        return (<></>);
    }


    const getPixeldata = (x, y) => {
        const pixelBlockArray = pixelList.value.pixelblocks;
        const theObj = pixelBlockArray.find(mdhpObj => (
            x >= mdhpObj.x1 && x <= mdhpObj.x2
            && y >= mdhpObj.y1 && y <= mdhpObj.y2
          ));
        return theObj;
    }


    const getWindowScroll = () => {
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        return top;
    }


    const handleHover = (e) => {
        const windowScrollY = getWindowScroll();

        const x = e.clientX - e.target.offsetLeft + document.getElementById('mobileScrollzone').scrollLeft;
        const y = windowScrollY + e.clientY - e.target.offsetTop + document.getElementById('mobileScrollzone').scrollTop;
        const pixelObj = getPixeldata(x, y);
        
        if (pixelObj) {
            const hoverDiv = document.getElementById('mdhpHover');
            let hoverX = e.clientX - e.target.offsetLeft + e.target.scrollLeft;
            const hoverY = windowScrollY + e.clientY - e.target.offsetTop + e.target.scrollTop + 100;
            while ((hoverX + 150) > window.innerWidth) {
                hoverX -= 150;
            }
            
            hoverDiv.style.top = `${hoverY}px`;
            hoverDiv.style.left = `${hoverX}px`;
            
            setHoverContentObj(pixelObj);
        }
    }


    const highlightPixelblock = (pixelObj, ctx) => {
        setClickedContentObj(pixelObj);
        setClickedMode(true);
        hideHover();

        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.globalAlpha = 0.92;

        // left
        ctx.rect(0, 0, pixelObj.x1, 1000);

        //top
        ctx.rect(0, 0, 1000, pixelObj.y1);

        // right
        ctx.rect(pixelObj.x2, pixelObj.y1, 1000 - pixelObj.x2, 1000 - pixelObj.y1);

        // bottom
        ctx.rect(pixelObj.x1, pixelObj.y2, pixelObj.x2 - pixelObj.x1, 1000 - pixelObj.y1);

        ctx.fillStyle = 'grey';
        ctx.fill();
    }


    const handleClick = (e) => {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext("2d");

        if (clickedMode) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            setClickedMode(false);
            showHover();
            router.push('/');
            return;
        }

        const windowScrollY = getWindowScroll();
        const x = e.clientX - e.target.offsetLeft + document.getElementById('mobileScrollzone').scrollLeft;
        const y = windowScrollY + e.clientY - e.target.offsetTop + document.getElementById('mobileScrollzone').scrollTop;
        const pixelObj = getPixeldata(x, y);

        if (pixelObj) {
            highlightPixelblock(pixelObj, ctx);
            router.push(`/#${x},${y}`);
        }
    }


    const scrollIntoView = (pixelObj) => {
        if (clickedMode) {
            return false;
        }

        const imgWidth = pixelObj.y2  - pixelObj.y1;
        const imgHeight = pixelObj.x2  - pixelObj.x1;
        const mobileScrollzone = document.getElementById('mobileScrollzone');
        const currentViewport = {
            x1: mobileScrollzone.scrollLeft,
            x2: mobileScrollzone.scrollLeft + mobileScrollzone.offsetWidth,
            y1: mobileScrollzone.scrollTop,
            y2: mobileScrollzone.scrollTop + mobileScrollzone.offsetHeight,
        };

        if (currentViewport.y1 > pixelObj.y2 || currentViewport.y2 < pixelObj.y1) {
            let newTop = pixelObj.y1 - (imgHeight / 2);
            if (newTop < 0) {
                newTop = 0;
            }
            mobileScrollzone.scrollTo(mobileScrollzone.scrollLeft,newTop);
            console.log('')
        }

        if (currentViewport.x1 > pixelObj.x2 || currentViewport.x2 < pixelObj.x1) {
            let newLeft = pixelObj.x1 - (imgWidth / 2);
            if (newLeft < 0) {
                newLeft = 0;
            }

            mobileScrollzone.scrollTo(newLeft, mobileScrollzone.scrollTop);
        }
    }


    const showHover = () => {
        const hoverDiv = document.getElementById('mdhpHover');
        hoverDiv.style.display = 'block';
    }


    const hideHover = () => {
        const hoverDiv = document.getElementById('mdhpHover');
        hoverDiv.style.display = 'none';
    }

    return (
        <>
            <div className="mdhpDisplay" id='mdhpDisplay'>
                <div className="mobileScrollzone" id='mobileScrollzone'>
                    <canvas 
                        className='myCanvas' 
                        id="myCanvas" 
                        height='1000' 
                        width='1000'  
                        onMouseMove={handleHover}
                        onClick={handleClick}
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                    />
                 </div>
                 <div id="mdhpHover" className="text-center">
                     <div>
                        <strong>{hoverContentObj.title}</strong>
                        <br/>
                        {hoverContentObj.available ? (
                            <span className="green">Available</span>
                        ) : (
                            <span className="red">Not Available</span>
                        )}
                        {' '}/{' '}
                        {hoverContentObj.resolves ? (
                            <span className="green">Website</span>
                        ) : (
                            <span className="red">No Website</span>
                        )}
                        <div><small>...click for more info...</small></div>
                     </div>              
                 </div>
                 <div id="specificData" className={clickedMode ? 'clickShow' : 'clickHide'}>
                    <h1>{clickedContentObj.title}</h1>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = (state, props) => {
    return {
        pixelList: pixelPirateApi.selectors.getPixels(store.getState())
    };
  };
  
  export default connect(mapStateToProps)(MdhpDisplay);