(this["webpackJsonpreact-ts-tutorial"]=this["webpackJsonpreact-ts-tutorial"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(26),c=n.n(i),o=(n(60),n(0)),r=n.n(o),s=(n(61),n(17)),a=n(7),l=n(8);const d="https://api.coinpaprika.com/v1/";function h(){return fetch(`${d}/coins`).then((e=>{if(!e.ok)throw new Error(`API Error : ${e.status}`);return e.json()})).catch((e=>fetch("/CryptoTracker/data/coins.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((e=>{if(!e.ok)return;return e.json()}))))}function j(e){return fetch(`${d}/coins/${e}`).then((e=>e.json()))}var p=n(14),b=n(27),x=n(2);const u=l.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,m=l.c.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,g=l.c.h1`
  color: ${e=>e.theme.accentColor};
  font-size: 48px;
`,O=l.c.ul``,f=l.c.li`
  background-color: ${e=>e.theme.cardBgColor};
  color: ${e=>e.theme.textColor};

  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  a {
    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${e=>e.theme.accentColor};
    }
  }
`,v=l.c.div`
  text-align: center;
  display: block;
`,y=l.c.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;var k=function(){const{isLoading:e,data:t}=Object(p.useQuery)("allCoins",h);return Object(x.jsxs)(u,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)("title",{children:" Coins"})}),Object(x.jsx)(m,{children:Object(x.jsx)(g,{children:" Coins"})}),e?Object(x.jsx)(v,{children:' "Loading ..."'}):Object(x.jsx)(O,{children:null===t||void 0===t?void 0:t.slice(0,20).map((e=>Object(x.jsx)(f,{children:Object(x.jsxs)(s.b,{to:{pathname:`/${e.id}`,state:{name:e.name,symbol:e.symbol}},children:[Object(x.jsx)(y,{src:`https://cryptocurrencyliveprices.com/img/${e.id}.png`}),e.name," \u2192"," "]})},e.id)))})]})};var w=function(){return Object(x.jsx)("h1",{children:"price"})},C=n(46),$=n.n(C);var L=function(e){let{coinId:t}=e;const{isLoading:n,data:i}=Object(p.useQuery)(["ohlcv",t],(()=>function(e){return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${e}`).then((e=>e.json()))}(t)));return Object(x.jsx)("div",{children:n?"Loading chart...":Object(x.jsx)($.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((e=>e.close))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((e=>e.time_close))},fill:{type:"gradient",gradient:{gradientToColors:["blue"]},colors:["red"]},tooltip:{x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:e=>`$${e}`}}}}})})};const q=l.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,I=l.c.span`
  text-align: center;
  display: block;
`,S=l.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,M=l.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,T=l.c.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,Q=l.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`,z=l.c.p`
  margin: 20px 0px;
`,A=l.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,B=l.c.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${e=>e.isActive?e.theme.accentColor:e.theme.textColor};
  a {
    display: block;
  }
`;var E=function(){const{coinId:e}=Object(a.g)(),{state:t}=Object(a.f)(),n=Object(a.h)("/:coinId/chart"),i=Object(a.h)("/:coinId/price"),{isLoading:c,data:o}=Object(p.useQuery)(["info",e],(()=>j(e))),{isLoading:r,data:l}=Object(p.useQuery)(["price",e],(()=>j(e)),{});return Object(x.jsxs)(S,{children:[Object(x.jsx)(b.a,{children:Object(x.jsxs)("title",{children:[" ",null!==t&&void 0!==t&&t.name?t.name:"Loading..."]})}),Object(x.jsx)(M,{children:Object(x.jsxs)(q,{children:[" ",null!==t&&void 0!==t&&t.name?t.name:"Loading..."]})}),c||r?Object(x.jsx)(I,{children:' "Loading ..."'}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(T,{children:[Object(x.jsxs)(Q,{children:[Object(x.jsx)("span",{children:"Rank:"}),Object(x.jsx)("span",{children:null!==o&&void 0!==o&&o.rank?null===o||void 0===o?void 0:o.rank:""})]}),Object(x.jsxs)(Q,{children:[Object(x.jsx)("span",{children:"Symbol:"}),Object(x.jsx)("span",{children:null!==o&&void 0!==o&&o.symbol?"$"+(null===o||void 0===o?void 0:o.symbol):""})]}),Object(x.jsxs)(Q,{children:[Object(x.jsx)("span",{children:"Rank:"}),Object(x.jsx)("span",{children:null===l||void 0===l?void 0:l.quotes.USD.price.toFixed(3)})]})]}),Object(x.jsx)(z,{children:null===o||void 0===o?void 0:o.description}),Object(x.jsxs)(T,{children:[Object(x.jsxs)(Q,{children:[Object(x.jsx)("span",{children:"Total Suply:"}),Object(x.jsx)("span",{children:null===l||void 0===l?void 0:l.total_supply})]}),Object(x.jsxs)(Q,{children:[Object(x.jsx)("span",{children:"Max Suply:"}),Object(x.jsx)("span",{children:null===l||void 0===l?void 0:l.max_supply})]})]}),Object(x.jsxs)(A,{children:[Object(x.jsx)(B,{isActive:null!=n,children:Object(x.jsx)(s.b,{to:`/${e}/chart`,children:"chart"})}),Object(x.jsx)(B,{isActive:null!=i,children:Object(x.jsx)(s.b,{to:`/${e}/price`,children:"price"})})]}),Object(x.jsxs)(a.c,{children:[Object(x.jsx)(a.a,{path:`/${e}/price`,children:Object(x.jsx)(w,{})}),Object(x.jsx)(a.a,{path:`/${e}/chart`,children:Object(x.jsx)(L,{coinId:e})})]})]})]})};var F=function(){return Object(x.jsx)(s.a,{children:Object(x.jsxs)(a.c,{children:[Object(x.jsx)(a.a,{path:"/data/*.json"}),Object(x.jsx)(a.a,{path:"/:coinId",children:Object(x.jsx)(E,{})}),Object(x.jsx)(a.a,{path:"/",children:Object(x.jsx)(k,{})})]})})};const P={bgColor:"#d2dae2",cardBgColor:"white",textColor:"#2c3e50",accentColor:"#ff5e57"},R={bgColor:"#485460",cardBgColor:"#95a5a6",textColor:"white",accentColor:"#ff5e57"};var _=n(47);const D=l.b`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
 display: none;
}
body {
line-height: 1;
}
menu, ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
*{
  box-sizing : border-box;
}
body{
  font-family: "Source Sans 3", sans-serif;
  background-color:  ${e=>e.theme.bgColor};
  color:  ${e=>e.theme.textColor};
}
a{
  text-decoration: none;
  color : inherit;
}
`;var H=function(){const[e,t]=Object(o.useState)(!1);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{theme:e?R:P,children:[Object(x.jsx)("button",{onClick:()=>t((e=>!e)),children:"Toggle Mode"}),Object(x.jsx)(D,{}),Object(x.jsx)(F,{}),Object(x.jsx)(_.ReactQueryDevtools,{initialIsOpen:!0})]})})};const J=new p.QueryClient;c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(p.QueryClientProvider,{client:J,children:Object(x.jsx)(H,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.7a7234bd.chunk.js.map