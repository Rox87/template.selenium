/*!
 * 
 *     MCAFEE RESTRICTED CONFIDENTIAL
 *     Copyright (c) 2023 McAfee, LLC
 *
 *     The source code contained or described herein and all documents related
 *     to the source code ("Material") are owned by McAfee or its
 *     suppliers or licensors. Title to the Material remains with McAfee
 *     or its suppliers and licensors. The Material contains trade
 *     secrets and proprietary and confidential information of McAfee or its
 *     suppliers and licensors. The Material is protected by worldwide copyright
 *     and trade secret laws and treaty provisions. No part of the Material may
 *     be used, copied, reproduced, modified, published, uploaded, posted,
 *     transmitted, distributed, or disclosed in any way without McAfee's prior
 *     express written permission.
 *
 *     No license under any patent, copyright, trade secret or other intellectual
 *     property right is granted to or conferred upon you by disclosure or
 *     delivery of the Materials, either expressly, by implication, inducement,
 *     estoppel or otherwise. Any license under such intellectual property rights
 *     must be expressed and approved by McAfee in writing.
 *
 */(()=>{"use strict";const o="PING_IFRAME_BLOCK",e=0,t=0,n=1,r=2,i=3,s=4,c=1,l=2,a=3,u=4,d={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},F={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class g{static log(o,e=null){m(o,c,e)}static error(o,e=null){m(o,l,e)}static warn(o,e=null){m(o,a,e)}static debug(o,e=null){m(o,u,e)}}const m=(o,g,m)=>{const h=e;if(h===t)return;let f="chrome-extension:"===location.protocol?d.BACKGROUND:d.CONTENT;m&&d[m]&&(f=m);const T=new Date,b=g===l?o:`%c[${f} ${T.toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${o}`,p=F.DEFAULT;let E=F[f];if(E||(E=p),h>=r&&g===l&&console.error(o),h>=n&&g===c&&console.log(b,E,p),h>=i&&g===a){const o="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${b}`,o,E,p)}if(h>=s&&g===u){const o="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${b}`,o,E,p)}};class h{constructor(o){this.pingCommand=o,this.basePingListener()}basePingListener(o=null){((o,e=null,t)=>{"function"==typeof t?chrome.runtime.onMessage.addListener(((n,r,i)=>{if(r.id===chrome.runtime.id&&"object"==typeof n&&!Array.isArray(n)&&n?.ipcId===o)return t({promises:e,request:n,sender:r,sendResponse:i})})):g.error("Provided with invalid callback function")})("WA",null,(({request:e,sendResponse:t})=>{const{command:n}=e;if(n===this.pingCommand)return g.debug(`File Injection [pinged]: Received ${n} command`),t({content:!0}),"function"==typeof o&&o(),!0}))}}(new class extends h{constructor(){super(o),this.routeToBP=this.routeToBlockPage.bind(this)}main(){this.basePingListener(this.routeToBP)}getIFrameBlockPageUrl(){return chrome.runtime.getURL("html/iframe_block_page.html")}routeToBlockPage(){const o=this.getIFrameBlockPageUrl();window.location.replace(o)}}).main()})();
//# sourceMappingURL=../sourceMap/chrome/scripts/iframe_block.js.map