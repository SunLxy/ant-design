"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7339],{81426:function(d,o,e){e.r(o);var u=e(2143),c=e(50250),h=e(59378),m=e(78190),p=e(74775),i=e(5937),Z=e(2068),f=e(74399),v=e(46004),A=e(35708),P=e(30138),L=e(56140),a=e(5388),E=e(49545),x=e(92169),k=e(13140),O=e(95127),j=e(74418),C=e(97119),l=e(28257),_=e(67294),t=e(13946);function s(){var r=(0,l.eL)(),n=r.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(_.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,n[1].value),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,n[2].value),(0,t.tZ)("p",null,n[3].value,(0,t.tZ)("code",null,n[4].value),n[5].value,(0,t.tZ)("code",null,n[6].value),n[7].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(a.Z,{items:[{demo:{id:"components-anchor-demo-basic"},previewerProps:{title:"Basic",filename:"components/anchor/demo/basic.tsx",jsx:`import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const App = () => (
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>The simplest usage.</p>",style:`.code-box-demo .ant-affix {
  z-index: 11;
}`}},{demo:{id:"components-anchor-demo-static"},previewerProps:{title:"Static Anchor",filename:"components/anchor/demo/static.tsx",jsx:`import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const App = () => (
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>Do not change state when page is scrolling.</p>"}},{demo:{id:"components-anchor-demo-onclick"},previewerProps:{title:"Customize the onClick event",filename:"components/anchor/demo/onClick.tsx",jsx:`import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};
const App = () => (
  <Anchor affix={false} onClick={handleClick}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>Clicking on an anchor does not record history.</p>"}},{demo:{id:"components-anchor-demo-customizehighlight"},previewerProps:{title:"Customize the anchor highlight",filename:"components/anchor/demo/customizeHighlight.tsx",jsx:`import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const getCurrentAnchor = () => '#components-anchor-demo-static';
const App = () => (
  <Anchor affix={false} getCurrentAnchor={getCurrentAnchor}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>Customize the anchor highlight.</p>"}},{demo:{id:"components-anchor-demo-targetoffset"},previewerProps:{title:"Set Anchor scroll offset",filename:"components/anchor/demo/targetOffset.tsx",jsx:`import React, { useEffect, useState } from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const App = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <Anchor targetOffset={targetOffset}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#api" title="API">
        <Link href="#anchor-props" title="Anchor Props" />
        <Link href="#link-props" title="Link Props" />
      </Link>
    </Anchor>
  );
};
export default App;
`,description:"<p>Anchor target scroll to screen center.</p>"}},{demo:{id:"components-anchor-demo-onchange"},previewerProps:{title:"Listening for anchor link change",filename:"components/anchor/demo/onChange.tsx",jsx:`import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const onChange = (link) => {
  console.log('Anchor:OnChange', link);
};
const App = () => (
  <Anchor affix={false} onChange={onChange}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>Listening for anchor link change.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"anchor-props"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#anchor-props"},(0,t.tZ)("span",{className:"icon icon-link"})),"Anchor Props"),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value),(0,t.tZ)("th",null,n[10].value),(0,t.tZ)("th",null,n[11].value),(0,t.tZ)("th",null,n[12].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value),(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value,(0,t.tZ)("code",null,n[35].value)),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value,(0,t.tZ)("code",null,n[40].value),n[41].value,(0,t.tZ)(l.rU,{to:"#components-anchor-demo-targetOffset"},n[42].value)),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null,n[49].value,(0,t.tZ)("code",null,n[50].value),n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null,n[53].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"link-props"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#link-props"},(0,t.tZ)("span",{className:"icon icon-link"})),"Link Props"),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[54].value),(0,t.tZ)("th",null,n[55].value),(0,t.tZ)("th",null,n[56].value),(0,t.tZ)("th",null,n[57].value),(0,t.tZ)("th",null,n[58].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null),(0,t.tZ)("td",null)))))))}o.default=s}}]);
