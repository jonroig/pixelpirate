import Reduxful from 'reduxful';
import requestAdapter from './my-request-adapter';

const upData = (data) => {
  const outputObj = {
    pixelblocks: data,
    totalBlockCount: data.length,
    totalResolves: 0,
    totalDomains: 0,
    totalHrefs: 0,
    totalAvailable: 0
  };

  // get some counts
  const tmpDomainArray = [];
  const tmpHrefArray = [];
  data.forEach((mdhpItem) => {
    if (mdhpItem.resolves) {
      outputObj.totalResolves += 1;
    }
    if (mdhpItem.available) {
      outputObj.totalAvailable += 1;
    }
    if (!tmpDomainArray.includes(mdhpItem.domain)) {
      tmpDomainArray.push(mdhpItem.domain);
      outputObj.totalDomains += 1;
    }
    if (!tmpHrefArray.includes(mdhpItem.href)) {
      tmpHrefArray.push(mdhpItem.href);
      outputObj.totalHrefs += 1;
    }
  });

  return outputObj;
}

const apiDesc = {
    getPixels: {
      url: '/api/pixels',
      dataTransform: (data) => upData(data)
    }
  };

const apiConfig = { requestAdapter };
const pixelPirateApi = new Reduxful('getPixels', apiDesc, apiConfig);

export default pixelPirateApi;
