import nx from 'next-js-core2';

function httpCurdConfg(inApiContext, inHttp, inConfig){
  const { items, baseUrl } = inConfig;
  nx.each(items, (key, item) => {
    inApiContext[item] = function (inData) {
      return inHttp.post(`${baseUrl}${item}`, inData);
    };
  });
};


module.exports = httpCurdConfg;
export default httpCurdConfg;
