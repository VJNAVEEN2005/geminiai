(self.webpackChunkgeminiai=self.webpackChunkgeminiai||[]).push([[1694],{1145:e=>{function n(e){return e?"string"===typeof e?e:e.source:null}function a(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];return a.map((e=>n(e))).join("")}function l(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];return"("+a.map((e=>n(e))).join("|")+")"}e.exports=function(e){const n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:a(/"/,l(...n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_accesslog.2b77dfa6.chunk.js.map