(this["webpackJsonpreact-ts-tutorial"]=this["webpackJsonpreact-ts-tutorial"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(25),o=n.n(i),c=(n(56),n(0)),r=n.n(c),s=(n(57),n(16)),a=n(7),l=n(6);const d="https://api.coinpaprika.com/v1/";function h(){return console.log("test"),fetch("/CryptoTracker/data/coins.json").then((e=>{if(!e.ok)return void console.log("????local");const t=e.json();return console.log(t),t}))}function p(e){return fetch(`${d}/coins/${e}`).then((e=>e.json()))}var b=n(13),j=n(2);const x=l.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,u=l.c.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,m=l.c.h1`
  color: ${e=>e.theme.accentColor};
  font-size: 48px;
`,g=l.c.ul``,f=l.c.li`
  background-color: white;
  color: ${e=>e.theme.bgColor};

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
`,O=l.c.div`
  text-align: center;
  display: block;
`,v=l.c.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;var y=function(){const{isLoading:e,data:t}=Object(b.useQuery)("allCoins",h);return Object(j.jsxs)(x,{children:[Object(j.jsx)(u,{children:Object(j.jsx)(m,{children:" Coins"})}),e?Object(j.jsx)(O,{children:' "Loading ..."'}):Object(j.jsx)(g,{children:null===t||void 0===t?void 0:t.slice(0,20).map((e=>Object(j.jsx)(f,{children:Object(j.jsxs)(s.b,{to:{pathname:`/${e.id}`,state:{name:e.name,symbol:e.symbol}},children:[Object(j.jsx)(v,{src:`https://cryptocurrencyliveprices.com/img/${e.id}.png`}),e.name," \u2192"," "]})},e.id)))})]})};var k=function(){return Object(j.jsx)("h1",{children:"price"})},w=n(42),$=n.n(w);var C=function(e){let{coinId:t}=e;const{isLoading:n,data:i}=Object(b.useQuery)(["ohlcv",t],(()=>function(e){return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${e}`).then((e=>e.json()))}(t)));return Object(j.jsx)("div",{children:n?"Loading chart...":Object(j.jsx)($.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((e=>e.close))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((e=>e.time_close))},fill:{type:"gradient",gradient:{gradientToColors:["blue"]},colors:["red"]},tooltip:{x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:e=>`$${e}`}}}}})})};const q=l.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,L=l.c.span`
  text-align: center;
  display: block;
`,I=l.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,S=l.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,M=l.c.div`
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
`,T=l.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,A=l.c.span`
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
`;var R=function(){const{coinId:e}=Object(a.g)(),{state:t}=Object(a.f)(),n=Object(a.h)("/:coinId/chart"),i=Object(a.h)("/:coinId/price"),{isLoading:o,data:c}=Object(b.useQuery)(["info",e],(()=>p(e))),{isLoading:r,data:l}=Object(b.useQuery)(["price",e],(()=>p(e)));return Object(j.jsxs)(I,{children:[Object(j.jsx)(S,{children:Object(j.jsxs)(q,{children:[" ",null!==t&&void 0!==t&&t.name?t.name:"Loading..."]})}),o||r?Object(j.jsx)(L,{children:' "Loading ..."'}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(M,{children:[Object(j.jsxs)(Q,{children:[Object(j.jsx)("span",{children:"Rank:"}),Object(j.jsx)("span",{children:null!==c&&void 0!==c&&c.rank?null===c||void 0===c?void 0:c.rank:""})]}),Object(j.jsxs)(Q,{children:[Object(j.jsx)("span",{children:"Symbol:"}),Object(j.jsx)("span",{children:null!==c&&void 0!==c&&c.symbol?"$"+(null===c||void 0===c?void 0:c.symbol):""})]}),Object(j.jsxs)(Q,{children:[Object(j.jsx)("span",{children:"Rank:"}),Object(j.jsx)("span",{children:null===l||void 0===l?void 0:l.quotes.USD})]})]}),Object(j.jsx)(z,{children:null===c||void 0===c?void 0:c.description}),Object(j.jsxs)(M,{children:[Object(j.jsxs)(Q,{children:[Object(j.jsx)("span",{children:"Total Suply:"}),Object(j.jsx)("span",{children:null===l||void 0===l?void 0:l.total_supply})]}),Object(j.jsxs)(Q,{children:[Object(j.jsx)("span",{children:"Max Suply:"}),Object(j.jsx)("span",{children:null===l||void 0===l?void 0:l.max_supply})]})]}),Object(j.jsxs)(T,{children:[Object(j.jsx)(A,{isActive:null!=n,children:Object(j.jsx)(s.b,{to:`/${e}/chart`,children:"chart"})}),Object(j.jsx)(A,{isActive:null!=i,children:Object(j.jsx)(s.b,{to:`/${e}/price`,children:"price"})})]}),Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:`/${e}/price`,children:Object(j.jsx)(k,{})}),Object(j.jsx)(a.a,{path:`/${e}/chart`,children:Object(j.jsx)(C,{coinId:e})})]})]})]})};var _=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/data/*"}),Object(j.jsx)(a.a,{path:"/:coinId",children:Object(j.jsx)(R,{})}),Object(j.jsx)(a.a,{path:"/",children:Object(j.jsx)(y,{})})]})})},B=n(43);const D=l.b`
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
`;var F=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{}),Object(j.jsx)(_,{}),Object(j.jsx)(B.ReactQueryDevtools,{initialIsOpen:!0})]})};const H=new b.QueryClient;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b.QueryClientProvider,{client:H,children:Object(j.jsx)(l.a,{theme:{bgColor:"#485460",textColor:"#d2dae2",accentColor:"#ff5e57"},children:Object(j.jsx)(F,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.9bec7f16.chunk.js.map