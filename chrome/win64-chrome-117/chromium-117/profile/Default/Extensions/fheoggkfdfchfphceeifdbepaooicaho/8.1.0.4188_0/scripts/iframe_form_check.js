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
 */(()=>{"use strict";const e=0,o=0,t=1,s=2,n=3,r=4,a=1,i=2,c=3,l=4,d={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},u={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class m{static log(e,o=null){h(e,a,o)}static error(e,o=null){h(e,i,o)}static warn(e,o=null){h(e,c,o)}static debug(e,o=null){h(e,l,o)}}const h=(m,h,F)=>{const f=e;if(f===o)return;let g="chrome-extension:"===location.protocol?d.BACKGROUND:d.CONTENT;F&&d[F]&&(g=F);const b=new Date,w=h===i?m:`%c[${g} ${b.toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${m}`,C=u.DEFAULT;let E=u[g];if(E||(E=C),f>=s&&h===i&&console.error(m),f>=t&&h===a&&console.log(w,E,C),f>=n&&h===c){const e="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${w}`,e,E,C)}if(f>=r&&h===l){const e="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${w}`,e,E,C)}},F=(e,o,t,s,n=null)=>{if(!chrome.tabs)throw new Error('"tabs" permission not set in manifest.');return chrome.tabs.sendMessage(s,{ipcId:e,command:o,...t},{frameId:n})},f=(e,o={},t)=>(async(e,o,t={},s={})=>{try{if(s?.tabId){const{tabId:n,frameId:r}=s;return await F(e,o,t,n,r)}if(s?.broadcast){const n=await chrome.tabs.query({}),{broadcastIgnoreId:r=[]}=s;return n.filter((({id:e})=>!r.includes(e))).forEach((({id:s})=>{F(e,o,t,s)})),!0}return await chrome.runtime.sendMessage({ipcId:e,command:o,...t})}catch(e){return m.warn(`Unexpected error when calling command: "${o}", err: ${e.message}`),null}})("WA",e,o,t),g="GET_TAB_AND_FRAME_ID",b="FORM_PRE_CHECK_PASSED";(new class{constructor(){this.pingCommand="PING_IFRAME_FORM_CHECK",this.basePingListener()}basePingListener(e=null){((e,o=null,t)=>{"function"==typeof t?chrome.runtime.onMessage.addListener(((s,n,r)=>{if(n.id===chrome.runtime.id&&"object"==typeof s&&!Array.isArray(s)&&s?.ipcId===e)return t({promises:o,request:s,sender:n,sendResponse:r})})):m.error("Provided with invalid callback function")})("WA",null,(({request:o,sendResponse:t})=>{const{command:s}=o;if(s===this.pingCommand)return t({content:!0}),"function"==typeof e&&e(),!0}))}isPossibleFormPage(){let e=[...document.getElementsByTagName("input")];return e=e.filter((e=>!(e.name.toLowerCase().includes("search")||(e.ariaLabel?e.ariaLabel.toLowerCase():"").includes("search")||e.id.toLowerCase().includes("search")||e.className.toLowerCase().includes("search")||e.defaultValue.toLowerCase().includes("search")||e.value.toLowerCase().includes("search")||"hidden"===e.type.toLowerCase()||"checkbox"===e.type.toLowerCase()||"submit"===e.type.toLowerCase()||"search"===e.type.toLowerCase()||"file"===e.type.toLowerCase()||"button"===e.type.toLowerCase()))),e.length>0}async main(){const{frameId:e}=await f(g);if(this.isPossibleFormPage())f(b);else if(0===e){const e=new MutationObserver((()=>{this.isPossibleFormPage()&&(f(b),e.disconnect())})),o={childList:!0,subtree:!0};e.observe(document,o)}else setTimeout((()=>{this.isPossibleFormPage()&&f(b)}),1e3)}}).main()})();
//# sourceMappingURL=../sourceMap/chrome/scripts/iframe_form_check.js.map