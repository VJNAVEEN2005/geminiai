(self.webpackChunkgeminiai=self.webpackChunkgeminiai||[]).push([[8948],{5695:e=>{function n(e){return function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.map((e=>function(e){return e?"string"===typeof e?e:e.source:null}(e))).join("")}("(?=",e,")")}function a(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.variants=e,n}e.exports=function(e){const t="[A-Za-z0-9_$]+",i=a([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),r={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},s=a([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),l=a([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"});return{name:"Groovy",keywords:{built_in:"this super",literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.SHEBANG({binary:"groovy",relevance:10}),i,l,r,s,{className:"class",beginKeywords:"class interface trait enum",end:/\{/,illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:t+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[i,l,r,s,"self"]},{className:"symbol",begin:"^[ \t]*"+n(t+":"),excludeBegin:!0,end:t+":",relevance:0}],illegal:/#|<\//}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_groovy.96470e01.chunk.js.map