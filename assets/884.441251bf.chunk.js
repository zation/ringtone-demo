(self.webpackChunkringtone=self.webpackChunkringtone||[]).push([[884],{66884:(e,t,n)=>{n(7652)},7652:()=>{!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env"),n=function(e,t){if(t<0&&(t=0),3===e.nodeType){var n=e.data.length;t>n&&(t=n)}return t},i=function(e,t,i){1!==t.nodeType||t.hasChildNodes()?e.setStart(t,n(t,i)):e.setStartBefore(t)},o=function(e,t,i){1!==t.nodeType||t.hasChildNodes()?e.setEnd(t,n(t,i)):e.setEndAfter(t)},r=function(e,t,n){var r,f,a,s,d,l,c,u=function(e){return e.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@(?!.*@))(.+)$/i)}(e),g=function(e){return e.getParam("default_link_target",!1)}(e);if("A"!==e.selection.getNode().tagName){var h=e.selection.getRng().cloneRange();if(h.startOffset<5){if(!(d=h.endContainer.previousSibling)){if(!h.endContainer.firstChild||!h.endContainer.firstChild.nextSibling)return;d=h.endContainer.firstChild.nextSibling}if(l=d.length,i(h,d,l),o(h,d,l),h.endOffset<5)return;r=h.endOffset,f=d}else{if(3!==(f=h.endContainer).nodeType&&f.firstChild){for(;3!==f.nodeType&&f.firstChild;)f=f.firstChild;3===f.nodeType&&(i(h,f,0),o(h,f,f.nodeValue.length))}r=1===h.endOffset?2:h.endOffset-1-t}var C=r;do{i(h,f,r>=2?r-2:0),o(h,f,r>=1?r-1:0),r-=1,c=h.toString()}while(" "!==c&&""!==c&&160!==c.charCodeAt(0)&&r-2>=0&&c!==n);!function(e,t){return e===t||" "===e||160===e.charCodeAt(0)}(h.toString(),n)?0===h.startOffset?(i(h,f,0),o(h,f,C)):(i(h,f,r),o(h,f,C)):(i(h,f,r),o(h,f,C),r+=1),"."===(s=h.toString()).charAt(s.length-1)&&o(h,f,C-1);var m=(s=h.toString().trim()).match(u),k=function(e){return e.getParam("link_default_protocol","http","string")}(e);m&&("www."===m[1]?m[1]=k+"://www.":/@$/.test(m[1])&&!/^mailto:/.test(m[1])&&(m[1]="mailto:"+m[1]),a=e.selection.getBookmark(),e.selection.setRng(h),e.execCommand("createlink",!1,m[1]+m[2]),!1!==g&&e.dom.setAttrib(e.selection.getNode(),"target",g),e.selection.moveToBookmark(a),e.nodeChanged())}};e.add("autolink",(function(e){!function(e){var n;e.on("keydown",(function(t){if(13===t.keyCode)return function(e){r(e,-1,"")}(e)})),t.browser.isIE()?e.on("focus",(function(){if(!n){n=!0;try{e.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}})):(e.on("keypress",(function(t){if(41===t.keyCode)return function(e){r(e,-1,"(")}(e)})),e.on("keyup",(function(t){if(32===t.keyCode)return function(e){r(e,0,"")}(e)})))}(e)}))}()}}]);
//# sourceMappingURL=884.441251bf.chunk.js.map