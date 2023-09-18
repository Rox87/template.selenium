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
 */(()=>{"use strict";const e="FOCUS_OR_CREATE_TAB",n="SHOW_SIDEBAR_MAIN",o="PING_CONTENT_SITE_LISTENER",t=0,r=23,s=24,i=0,c=0,a=0,l=1,d=2,u=3,m=4,f=1,g=2,F=3,h=4,E={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},p={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class b{static log(e,n=null){w(e,f,n)}static error(e,n=null){w(e,g,n)}static warn(e,n=null){w(e,F,n)}static debug(e,n=null){w(e,h,n)}}const w=(e,n,o)=>{const t=c;if(t===a)return;let r="chrome-extension:"===location.protocol?E.BACKGROUND:E.CONTENT;o&&E[o]&&(r=o);const s=new Date,i=n===g?e:`%c[${r} ${s.toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${e}`,b=p.DEFAULT;let w=p[r];if(w||(w=b),t>=d&&n===g&&console.error(e),t>=l&&n===f&&console.log(i,w,b),t>=u&&n===F){const e="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${i}`,e,w,b)}if(t>=m&&n===h){const e="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${i}`,e,w,b)}};class T{constructor(e){this.pingCommand=e,this.basePingListener()}basePingListener(e=null){((e,n=null,o)=>{"function"==typeof o?chrome.runtime.onMessage.addListener(((t,r,s)=>{if(r.id===chrome.runtime.id&&"object"==typeof t&&!Array.isArray(t)&&t?.ipcId===e)return o({promises:n,request:t,sender:r,sendResponse:s})})):b.error("Provided with invalid callback function")})("WA",null,(({request:n,sendResponse:o})=>{const{command:t}=n;if(t===this.pingCommand)return b.debug(`File Injection [pinged]: Received ${t} command`),o({content:!0}),"function"==typeof e&&e(),!0}))}}const A=(e,n,o,t,r=null)=>{if(!chrome.tabs)throw new Error('"tabs" permission not set in manifest.');return chrome.tabs.sendMessage(t,{ipcId:e,command:n,...o},{frameId:r})},N=(e,n={},o)=>(async(e,n,o={},t={})=>{try{if(t?.tabId){const{tabId:r,frameId:s}=t;return await A(e,n,o,r,s)}if(t?.broadcast){const r=await chrome.tabs.query({}),{broadcastIgnoreId:s=[]}=t;return r.filter((({id:e})=>!s.includes(e))).forEach((({id:t})=>{A(e,n,o,t)})),!0}return await chrome.runtime.sendMessage({ipcId:e,command:n,...o})}catch(e){return b.warn(`Unexpected error when calling command: "${n}", err: ${e.message}`),null}})("WA",e,n,o);(new class extends T{constructor(){super(o)}main(){window.addEventListener("message",(o=>{if(!o)return;const{data:c}=o;if(!c)return;const{request_type:a,payload:l}=c;if(void 0!==a&&void 0!==l){if(a!==t||l.done||window.postMessage({request_type:i,payload:{done:!0}},o.origin),a===r){const n=chrome.runtime.getURL("html/settings.html");N(e,{url:n})}a===s&&N(n)}}),!1)}}).main()})();
//# sourceMappingURL=../sourceMap/chrome/scripts/content_site_listener.js.map