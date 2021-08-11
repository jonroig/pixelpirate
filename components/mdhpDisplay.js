import { connect } from 'react-redux';
import React, { useState } from 'react';

import pixelPirateApi from '../api/pixelpirate-api';
import store from '../store';


const MdhpDisplay = ({pixelList}) => {
    const [hoverContentObj, setHoverContentObj] = useState({});
    const [clickedContentObj, setClickedContentObj] = useState({});
    const [clickedMode, setClickedMode] = useState(false);

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

    const handleClick = (e) => {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext("2d");

        if (clickedMode) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            setClickedMode(false);
            showHover();
            return;
        }

        const windowScrollY = getWindowScroll();
        const x = e.clientX - e.target.offsetLeft + document.getElementById('mobileScrollzone').scrollLeft;
        const y = windowScrollY + e.clientY - e.target.offsetTop + document.getElementById('mobileScrollzone').scrollTop;
        const pixelObj = getPixeldata(x, y);

        if (pixelObj) {
            setClickedContentObj(pixelObj);
            setClickedMode(true);
            hideHover();

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();

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