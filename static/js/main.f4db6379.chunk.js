(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(10),i=n.n(o),l=(n(16),n(3)),j=n(4),r=n(7),b=n(6),s=n(11),x=n(5),O=n(0),u=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={},a.handleClick=a.handleClick.bind(Object(x.a)(a)),a}return Object(j.a)(n,[{key:"handleClick",value:function(){var t=this.props,e=t.text;(0,t.onClick)(t.mathObj,e)}},{key:"render",value:function(){var t=this.props.text;return Object(O.jsx)("button",{type:"button",className:"calc-buttons",onClick:this.handleClick,children:t})}}]),n}(c.a.Component),h=n(1),m=n(9),d=n.n(m);function k(t,e,n){var a=d()(t),c=d()(e);if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("x"===n)return a.times(c).toString();if("\xf7"===n)try{return a.div(c).toString()}catch(o){return"Can't divide by 0."}if("%"===n)return a.mod(c).toString();throw Error("Unknown operation '".concat(n,"'"))}var p=function(){var t=Object(a.useState)({}),e=Object(s.a)(t,2),n=e[0],c=e[1],o=function(t,e){var n,a;c((n=t,"AC"===(a=e)?{total:null,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===n.next?{}:n.operation?n.next?Object(h.a)(Object(h.a)({},n),{},{next:n.next+a}):Object(h.a)(Object(h.a)({},n),{},{next:a}):n.next?{next:n.next+a,total:null}:{next:a,total:null}:"."===a?n.next?n.next.includes(".")?Object(h.a)({},n):Object(h.a)(Object(h.a)({},n),{},{next:"".concat(n.next,".")}):n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===a?n.next&&n.operation?{total:k(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===a?n.next?Object(h.a)(Object(h.a)({},n),{},{next:(-1*parseFloat(n.next)).toString()}):n.total?Object(h.a)(Object(h.a)({},n),{},{total:(-1*parseFloat(n.total)).toString()}):{}:n.next||!n.total||n.operation?n.operation?n.total&&!n.next?Object(h.a)(Object(h.a)({},n),{},{operation:a}):{total:k(n.total,n.next,n.operation),next:null,operation:a}:n.next?{total:n.next,next:null,operation:a}:{operation:a}:Object(h.a)(Object(h.a)({},n),{},{operation:a})))},i="0";return i=0===Object.keys(n).length||null===n.total&&null===n.next&&null===n.operation?"0":null!=n.next?n.next:n.total,Object(O.jsxs)("div",{className:"calc-body",children:[Object(O.jsx)("div",{className:"calc-screen",children:i}),Object(O.jsxs)("div",{className:"keyboard",children:[Object(O.jsxs)("div",{className:"key-digits",children:[Object(O.jsx)(u,{text:"AC",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"+/-",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"%",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"7",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"8",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"9",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"4",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"5",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"6",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"1",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"2",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"3",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"0",onClick:o,mathObj:n}),Object(O.jsx)("div",{className:"key-dot",children:Object(O.jsx)(u,{text:".",onClick:o,mathObj:n})})]}),Object(O.jsxs)("div",{className:"operators",children:[Object(O.jsx)(u,{text:"\xf7",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"x",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"-",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"+",onClick:o,mathObj:n}),Object(O.jsx)(u,{text:"=",onClick:o,mathObj:n})]})]})]})},C=(n(18),function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{})})}}]),n}(c.a.Component)),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.f4db6379.chunk.js.map