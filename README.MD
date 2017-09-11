# http-post-config
> A simple post config for project.


## expamle http:
```js
import nx from 'next-js-core2';
import NxAxios from 'next-axios';
const MyHttp = nx.declare({
  extends: NxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!MyHttp.instance) {
        MyHttp.instance = new MyHttp();
      }
      return MyHttp.instance;
    }
  },
  methods: {
    getBearerToken: function () {
      const {login} = AppBase.$.session;
      if (login) {
        return 'Bearer ' + login.token;
      }
      return null;
    },
    setRequestInterceptor: function () {
      this.axios.interceptors.request.use((config) => {
        const bearerToken = this.getBearerToken();
        bearerToken && nx.mix(config.headers.common, {Authorization: bearerToken});
        return config;
      });
    },
    contentType: function () {
      return 'application/x-www-form-urlencoded';
    },
    transformParam: function (inData) {
      return nx.param(inData);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    error: function (inError) {
      //todo: search error:
    }
  }
});
```


## example config:
```js
static APIS = {
  baseUrl: '/app/interface/mobile/pmall/',
  items: [
    'getWeixinShareSign_220',
    'findPostDetailInfo_300',
    'findTopReplyByPostId_300',
    'findTemplateContentById_230',
    'findForumDetailInfo_300',
    'findActivityById_220',
    'findActivityPostByPage_220',
    'findPostShareInfo_300',
    'findAuctionShareInfo_260',
    'findLotShareInfo_260',
    'findForumShareInfo_300',
    'getActivityShareInfo_260',
    'memberRegisterTime_230',
    'findLotComplex_260',
    'getAuctionLivePlayAddressM3u8_400',
  ]
}
```


## api:
```js
import httpCurdConfig from 'http-curd-config';

export default nx.declare({
  statics: {
    init () {
      httpCurdConfig(this, MyHttp, APIS);
    }
  }
});
```
