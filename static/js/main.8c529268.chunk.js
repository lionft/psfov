(this.webpackJsonpdope_goats=this.webpackJsonpdope_goats||[]).push([[0],{291:function(e,t,c){},308:function(e,t){},331:function(e,t){},333:function(e,t){},410:function(e,t){},412:function(e,t){},445:function(e,t){},450:function(e,t){},452:function(e,t){},459:function(e,t){},472:function(e,t){},495:function(e,t){},504:function(e,t){},506:function(e,t){},582:function(e,t,c){},583:function(e,t,c){},584:function(e,t,c){},586:function(e,t,c){},587:function(e,t,c){},588:function(e,t,c){},589:function(e,t,c){},590:function(e,t,c){},593:function(e,t,c){},594:function(e,t,c){},595:function(e,t,c){},597:function(e,t,c){"use strict";c.r(t);var n,a,s,i,r,o,l,d,j,m,b,x,p,h,u,O,f=c(1),g=c(24),N=c.n(g),v=c(603),y=c(606),w=c(32),C=c.n(w),S=c(74),A=c(25),T=c(612),E=c(613),k=(c(291),[{label:"ABOUT",path:"#about"},{label:"COLLECTION",path:"#collection"},{label:"RARITY",path:"#rarity"},{label:"ROADMAP",path:"#roadmap"},{label:"FAQS",path:"#faqs"},{label:"TEAM",path:"#team"},{label:"CONTACT",path:"#contact"}]),_=c(604),D=c(2),I=function(){return Object(D.jsx)(T.a,{collapseOnSelect:!0,expand:"lg",className:"header-comp",children:Object(D.jsxs)(v.a,{children:[Object(D.jsxs)("div",{className:"header-comp-search",children:[Object(D.jsx)("input",{type:"text",className:"search-box",placeholder:"Search"}),Object(D.jsx)(_.a,{className:"search-icon"})]}),Object(D.jsx)(T.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"header-comp-toggle-custom"}),Object(D.jsx)(T.a.Collapse,{id:"responsive-navbar-nav",children:Object(D.jsx)(E.a,{className:"header-comp-items me-auto d-flex justify-content-around align-items-center",children:k.map((function(e,t){return Object(D.jsx)(E.a.Link,{className:"header-item",href:e.path,children:Object(D.jsx)("p",{className:"label",children:e.label})},t)}))})})]})})},M=c(607),R=c.p+"static/media/scrollDown.c57e7f71.gif",L=c(90),W=c(106),z=c(267),U=c(4),K={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(U.a)(Object(U.a)({},K),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(U.a)(Object(U.a)({},K),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(U.a)(Object(U.a)({},e),{},{account:t.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(U.a)(Object(U.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(U.a)(Object(U.a)({},P),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},B=Object(W.b)({blockchain:F,data:q}),Y=[z.a],G=Object(W.c)(W.a.apply(void 0,Y)),H=Object(W.d)(B,G),Q=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},J=function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,H.getState().blockchain.smartContract.methods.totalSupply().call();case 4:c=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:c}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Q("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},X=c(30),V=c(31),Z=(V.a.div(n||(n=Object(X.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),V.a.div(a||(a=Object(X.a)(["\n  height: 8px;\n  width: 8px;\n"])))),$=V.a.div(s||(s=Object(X.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ee=V.a.div(i||(i=Object(X.a)(["\n  height: 24px;\n  width: 24px;\n"]))),te=(V.a.div(r||(r=Object(X.a)(["\n  height: 32px;\n  width: 32px;\n"]))),V.a.div(o||(o=Object(X.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),ce=V.a.p(l||(l=Object(X.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ne=(V.a.p(d||(d=Object(X.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),V.a.p(j||(j=Object(X.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ae=(V.a.div(m||(m=Object(X.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),c(100)),se=c.n(ae),ie=c(272),re=c.n(ie),oe=function(e){return{type:"CONNECTION_FAILED",payload:e}},le=function(e){return function(){var t=Object(S.a)(C.a.mark((function t(c){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"UPDATE_ACCOUNT",payload:{account:e}}),c(J());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},de=c(611),je=V.a.button(b||(b=Object(X.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),me=V.a.button(x||(x=Object(X.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),be=V.a.div(p||(p=Object(X.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),xe=(V.a.img(h||(h=Object(X.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),V.a.img(u||(u=Object(X.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),V.a.a(O||(O=Object(X.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),pe=(c(582),function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e.blockchain})),c=Object(L.c)((function(e){return e.data})),n=Object(f.useState)(!1),a=Object(A.a)(n,2),s=a[0],i=a[1],r=Object(f.useState)("Click buy to mint your NFT."),o=Object(A.a)(r,2),l=o[0],d=o[1],j=Object(f.useState)(1),m=Object(A.a)(j,2),b=m[0],x=m[1],p=Object(f.useState)({CONTRACT_ADDRESS:"",OWNER_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),h=Object(A.a)(p,2),u=h[0],O=h[1],g=function(){""!==t.account&&null!==t.smartContract&&e(J(t.account))},N=function(){var e=Object(S.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,O(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(f.useEffect)((function(){N()}),[]),Object(f.useEffect)((function(){g()}),[t.account]);var w,T;return Object(D.jsxs)(v.a,{fluid:!0,className:"banner-comp",children:[Object(D.jsx)("div",{className:"banner-comp-blur-bg"}),Object(D.jsx)(y.a,{className:"banner-comp-header",children:Object(D.jsx)(I,{})}),Object(D.jsxs)(v.a,{className:"banner-comp-container d-flex flex-column justify-content-center align-items-center",children:[t.errorMsg&&de.a.info({message:"Error",description:t.errorMsg,placement:"bottomRight"}),!t.account&&Object(D.jsxs)("h1",{"data-aos":"fade-down",className:"banner-comp-title",children:["WELCOME TO",Object(D.jsx)("br",{}),'"dope goats"',Object(D.jsx)("br",{}),"COLLECTION"]}),Object(D.jsx)(y.a,{className:"banner-comp-content d-flex justify-content-center align-items-center",children:t.account?Object(D.jsx)("div",{className:"mint-connected",children:Object(D.jsx)(be,{"data-aos":"zoom-in",flex:1,style:{padding:24},test:!0,className:"mint-box",children:Object(D.jsxs)(te,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"rgba(0,0,0,.4)",padding:24,borderRadius:24},children:[Object(D.jsxs)(ce,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[c.totalSupply," / ",u.MAX_SUPPLY]}),Object(D.jsx)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(D.jsx)(xe,{target:"_blank",href:u.SCAN_LINK,children:(w=u.CONTRACT_ADDRESS,T=15,w.length>T?"".concat(w.substring(0,T),"..."):w)})}),Object(D.jsx)($,{}),Number(c.totalSupply)>=u.MAX_SUPPLY?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ce,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(D.jsxs)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",u.NFT_NAME," on"]}),Object(D.jsx)($,{}),Object(D.jsx)(xe,{target:"_blank",href:u.MARKETPLACE_LINK,children:u.MARKETPLACE})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(ce,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",u.SYMBOL," costs ",u.DISPLAY_COST," ",u.NETWORK.SYMBOL,"."]}),Object(D.jsx)(Z,{}),Object(D.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(D.jsx)($,{}),""===t.account||null===t.smartContract?Object(D.jsxs)(te,{ai:"center",jc:"center",children:[Object(D.jsxs)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",u.NETWORK.NAME," network"]}),""!==t.errorMsg?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($,{}),Object(D.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(D.jsx)(ee,{}),Object(D.jsxs)(te,{ai:"center",jc:"center",fd:"row",children:[Object(D.jsx)(me,{style:{lineHeight:.4},disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),x(e)}()},children:"-"}),Object(D.jsx)(ee,{}),Object(D.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(D.jsx)(ee,{}),Object(D.jsx)(me,{disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=b+1;e>10&&(e=10),x(e)}()},children:"+"})]}),Object(D.jsx)($,{}),Object(D.jsx)(te,{ai:"center",jc:"center",fd:"row",children:Object(D.jsx)(je,{disabled:s?1:0,onClick:function(n){n.preventDefault(),function(){var n=t.account;n=n.toUpperCase();var a=u.OWNER_ADDRESS;n==(a=a.toUpperCase())?u.WEI_COST=0:c.totalSupply>1&&c.totalSupply<2222&&(u.WEI_COST=u.WEI_COST);var s=u.WEI_COST,r=u.GAS_LIMIT,o=String(s*b),l=String(r*b);console.log("Cost: ",o),console.log("Gas limit: ",l),d("Minting your ".concat(u.NFT_NAME,"...")),i(!0),t.smartContract.methods.mint(b).send({gasLimit:String(l),to:u.CONTRACT_ADDRESS,from:t.account,value:o}).once("error",(function(e){console.log(e),d("Sorry, Try  to mint again Something is wrong."),i(!1)})).then((function(c){console.log(c),d("Your a Proud Owner Of ".concat(u.NFT_NAME,"  go Check it On Opensea.io .")),i(!1),e(J(t.account))}))}(),g()},children:s?"BUSY":"BUY"})})]})]})]})})}):Object(D.jsx)("div",{"data-aos":"fade-left",className:"banner-comp-btn d-flex flex-column justify-content-center align-items-center",children:Object(D.jsxs)("button",{onClick:function(t){t.preventDefault(),e(function(){var e=Object(S.a)(C.a.mark((function e(t){var c,n,a,s,i,r,o,l,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=e.sent,e.next=12,a.json();case 12:if(s=e.sent,i=window,!(r=i.ethereum)||!r.isMetaMask){e.next=33;break}return se.a.setProvider(r),o=new re.a(r),e.prev=18,e.next=21,r.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,r.request({method:"net_version"});case 24:e.sent==s.NETWORK.ID?(d=new se.a(n,s.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:o}}),r.on("accountsChanged",(function(e){t(le(e[0]))})),r.on("chainChanged",(function(){window.location.reload()}))):t(oe("Change network to ".concat(s.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(oe("Something went wrong."));case 31:e.next=34;break;case 33:t(oe("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),g()},className:"comp-primary-btn",children:[Object(D.jsx)("span",{className:"name",children:"MINT NOW"}),Object(D.jsx)("span",{className:"sub-text",children:"CONNECT WALLET"}),Object(D.jsx)(M.a,{className:"comp-primary-btn-icon"})]})})}),Object(D.jsx)(y.a,{className:"banner-comp-scroll",children:Object(D.jsx)("img",{src:R,alt:"dope-goats-scroll-down"})})]})]})}),he=c.p+"static/media/collectionImg1.8ed1dd5a.png",ue=c.p+"static/media/collectionImg2.a31f7aed.png",Oe=c.p+"static/media/collectionImg3.4126e409.png",fe=(c(583),[he,ue,Oe]),ge=function(){return Object(D.jsx)(v.a,{className:"about-comp",children:Object(D.jsxs)(v.a,{className:"about-comp-container",children:[Object(D.jsx)(y.a,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",className:"about-comp-title d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"ABOUT"})}),Object(D.jsx)(y.a,{className:"about-comp-items",children:Object(D.jsxs)("div",{className:"about-content-container",children:[Object(D.jsx)("div",{"data-aos":"fade-right",className:"first-paragraph content-item",children:Object(D.jsx)("p",{className:"content",children:"Dope Goats Club are a dope collection of 2,222 goats designed by upcoming artist SipTee."})}),Object(D.jsx)("div",{"data-aos":"fade-left",className:"second-paragraph content-item",children:Object(D.jsx)("p",{className:"content",children:"Not only do these cuddly goats have special abilities that can only be unlocked if you are in the club, but all holders who mint two goats will receive a free baby goat on drop day."})}),Object(D.jsx)("div",{className:"first-img",children:Object(D.jsx)("img",{"data-aos":"zoom-in",src:ue,alt:"dope-goats"})}),Object(D.jsx)("div",{className:"img-collection",children:fe.map((function(e,t){return Object(D.jsx)("img",{"data-aos":"fade-up",src:e,alt:"dope-goats"})}))}),Object(D.jsx)("div",{"data-aos":"fade-left",className:"third-paragraph content-item",children:Object(D.jsx)("p",{className:"content",children:"These will be the rarest of our collection. Stay tuned for giveaways and early."})})]})}),Object(D.jsx)(y.a,{"data-aos":"fade-up",className:"about-comp-scroll d-flex flex-column justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"scroll-img",children:Object(D.jsx)("img",{src:R,alt:"dope-goats-scroll-down"})})})]})})},Ne=c.p+"static/media/animateArrow.c43e32c3.gif",ve=(c(584),[{percent:"33%",content:"Launch DopeGoats"},{percent:"66%",content:"At this stage, we reinvest profits in marketing companies in order to maintain the dynamics of the project development and send the DopeGoats to the moon."},{percent:"99%",content:" At this stage we are preparing a special surprise for you. We\u2019ll try to amaze you. Now we can only say one thing, it will be 3D."},{percent:"100%",content:"When all these stages are completed, we want to get acquainted with the Metaverse (Decentraland, Blocktopia, The Sandbox). All DopeGoat\u2019 owners will have access to all future events that we are developing in these metaverses."}]),ye=function(){return Object(D.jsx)(v.a,{fluid:!0,className:"roadmap-comp",children:Object(D.jsxs)(v.a,{className:"roadmap-comp-container",children:[Object(D.jsx)(y.a,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",className:"roadmap-comp-title d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"Roadmap"})}),Object(D.jsx)(y.a,{className:"roadmap-comp-content",children:ve.map((function(e,t){return Object(D.jsx)("div",{"data-aos":t%2===0?"fade-left":"fade-right",className:"item-container d-flex align-items-center ".concat(t%2===0?"justify-content-start":"justify-content-end"),children:Object(D.jsxs)("div",{className:"item d-flex flex-row justify-content-center align-items-center ".concat(t%2===0?"":"content-flip"),children:[Object(D.jsx)("div",{className:"box message-body d-flex justify-content-center align-items-center text-center",children:Object(D.jsx)("p",{className:"content",children:e.content})}),Object(D.jsx)("div",{className:"circle-percent d-flex justify-content-center",children:Object(D.jsxs)("div",{className:"circle-percent-container",children:[Object(D.jsx)("div",{className:"arrow d-flex align-items-end",children:Object(D.jsx)("img",{src:Ne,alt:"dope-goats-arrow"})}),Object(D.jsx)("div",{className:"circle-border",children:Object(D.jsx)("div",{className:"circle-border-container d-flex justify-content-center align-items-center",children:Object(D.jsx)("p",{className:"percent",children:e.percent})})})]})})]})})}))}),Object(D.jsx)(y.a,{"data-aos":"fade-down",className:"roadmap-comp-scroll d-flex flex-column justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"scroll-img",children:Object(D.jsx)("img",{src:R,alt:"dope-goats-scroll-down"})})})]})})},we=[{title:"Rare",name:"dope goats",rarityScore:96.66,fileNumber:1926,rank:1,avatar:Oe},{title:"Semi rare",name:"dope goats",rarityScore:80.06,fileNumber:1926,rank:24,avatar:he},{title:"Epic",name:"dope goats",rarityScore:72.88,fileNumber:396,rank:126,avatar:ue},{title:"Hero",name:"dope goats",rarityScore:68.66,fileNumber:24,rank:314,avatar:Oe}],Ce=c(280),Se=(c(585),function(){return Object(D.jsx)(y.a,{className:"rarity-comp-score",children:we.map((function(e,t){return Object(D.jsx)("div",{"data-aos":"fade-up",className:"content-items",children:Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"header d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"header-title",children:e.title})}),Object(D.jsx)("div",{className:"avatar d-flex justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"avatar-item",children:Object(D.jsx)(Ce.a,{styles:{path:{stroke:"#6ce5e8"},trail:{stroke:"#494f56"}},value:e.rarityScore,children:Object(D.jsx)("img",{width:"100%",src:e.avatar,alt:"".concat(e.title,"-").concat(e.name)})})})}),Object(D.jsx)("div",{className:"name",children:Object(D.jsx)("p",{className:"user-name",children:e.name})}),Object(D.jsxs)("div",{className:"score",children:[Object(D.jsxs)("div",{className:"rarity-score",children:[Object(D.jsx)("p",{className:"score-title",children:"Rarity Score"}),Object(D.jsxs)("h6",{className:"desc",children:[e.rarityScore,"%"]})]}),Object(D.jsxs)("div",{className:"file-number",children:[Object(D.jsx)("p",{className:"score-title",children:"File number"}),Object(D.jsx)("h6",{className:"desc",children:e.fileNumber})]})]}),Object(D.jsxs)("div",{className:"rank",children:[Object(D.jsx)("p",{className:"rank-title",children:"RANK"}),Object(D.jsx)("h6",{className:"desc",children:e.rank})]})]})})}))})}),Ae=(c(586),function(){return Object(D.jsx)(v.a,{fluid:!0,className:"rarity-comp",children:Object(D.jsxs)(v.a,{className:"rarity-comp-container",children:[Object(D.jsx)(y.a,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",className:"rarity-comp-title d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"Rarity"})}),Object(D.jsx)(Se,{}),Object(D.jsx)(y.a,{"data-aos":"fade-down",className:"rarity-comp-scroll d-flex flex-column justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"scroll-img",children:Object(D.jsx)("img",{src:R,alt:"dope-goats-scroll-down"})})})]})})}),Te=[{question:"What makes Dope Goats so important?",answer:"We are limited to 2,222 goats only which is a small number in the NFT space. We have select variations making our items and designs rare as can be. We also offer special services in our club."},{question:"How much will Dope Goats cost?",answer:"The release date is still TBA, but we are looking to drop this project to the public in January of 2022. The presale for whitelisted members will be a day before public drop."},{question:"When is the release date?",answer:"January 20th, 2022"}],Ee=c.p+"static/media/messageBox1.38f05f7f.png",ke=c.p+"static/media/messageBox2.f3c3f609.png",_e=(c(587),function(){return Object(D.jsx)(v.a,{fluid:!0,className:"faqs-comp",children:Object(D.jsxs)(v.a,{className:"faqs-comp-container",children:[Object(D.jsx)(y.a,{"data-aos":"zoom-in",className:"faqs-comp-title d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"FAQ"})}),Object(D.jsx)(y.a,{className:"faqs-comp-content",children:Te.map((function(e,t){return Object(D.jsx)("div",{className:"item-container d-flex align-items-center ".concat(t%2!==0&&"justify-content-end"),children:Object(D.jsxs)("div",{className:"item-detail",children:[Object(D.jsxs)("div",{"data-aos":"fade-rigth",className:"item-question",children:[Object(D.jsx)("img",{src:Ee,alt:"faqs-metavs"}),Object(D.jsx)("p",{className:"question",children:e.question})]}),Object(D.jsx)("div",{className:"answer-container d-flex justify-content-end",children:Object(D.jsxs)("div",{"data-aos":"fade-left",className:"item-answer",children:[Object(D.jsx)("img",{src:ke,alt:"faqs-metavs"}),Object(D.jsx)("p",{className:"answer",style:{fontSize:t===Te.length-1&&"2.2rem"},children:e.answer})]})})]})},t)}))}),Object(D.jsx)(y.a,{className:"faqs-comp-scroll d-flex flex-column justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"scroll-img",children:Object(D.jsx)("img",{src:R,alt:"metavs-scroll-down"})})})]})})}),De=c(608),Ie=[{title:"DESIGNER",name:"QUINN ALSTON",avatar:he},{title:"ARTIST",name:"SIPTEE",avatar:ue},{title:"PROMOTION",name:"KING GREENWOOD",avatar:Oe}],Me=(c(588),function(){return Object(D.jsx)(v.a,{fluid:!0,className:"team-comp",children:Object(D.jsxs)(v.a,{className:"team-comp-container",children:[Object(D.jsx)(y.a,{"data-aos":"zoom-in-up",className:"team-comp-title d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"TEAM"})}),Object(D.jsx)(y.a,{className:"animate-line",children:Object(D.jsx)("div",{className:"line-container",children:Object(D.jsx)("div",{className:"line line-left-to-right"})})}),Object(D.jsx)(y.a,{className:"team-comp-content d-flex justify-content-center align-items-center",children:Ie.map((function(e,t){return Object(D.jsxs)(De.a,{"data-aos":t%2===0?"fade-up":"fade-down",lg:3,md:4,sm:12,className:"item",children:[Object(D.jsx)("div",{className:"ava-img",children:Object(D.jsx)("img",{src:e.avatar,alt:e.title})}),Object(D.jsxs)("div",{className:"member-title d-flex flex-column justify-content-center align-items-center",children:[Object(D.jsx)("p",{className:"name",children:e.name}),Object(D.jsx)("p",{className:"title",children:e.title})]})]},t)}))}),Object(D.jsx)(y.a,{className:"animate-line",children:Object(D.jsx)("div",{className:"line-container",children:Object(D.jsx)("div",{className:"line line-right-to-left"})})}),Object(D.jsx)(y.a,{"data-aos":"fade-down",className:"team-comp-scroll d-flex flex-column justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"scroll-img",children:Object(D.jsx)("img",{src:R,alt:"metavs-scroll-down"})})})]})})}),Re=c(609),Le=c(610),We=c.p+"static/media/footerImg.2cc267c0.svg",ze=(c(589),function(){return Object(D.jsx)(v.a,{fluid:!0,className:"footer-comp comp-height d-flex justify-content-center align-items-center",children:Object(D.jsx)(v.a,{className:"footer-comp-container",children:Object(D.jsxs)(y.a,{className:"footer-comp-content",children:[Object(D.jsxs)(De.a,{"data-aos":"fade-left",lg:6,md:6,sm:12,className:"content-left-side d-flex flex-column justify-content-center",children:[Object(D.jsx)("div",{className:"content-title",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"CONTACT"})}),Object(D.jsxs)("div",{className:"contact-desc",children:[Object(D.jsxs)("div",{className:"contact-direct",children:[Object(D.jsx)("p",{className:"contact-item",children:"If you encounter any problem,"}),Object(D.jsx)("p",{className:"contact-item",children:"contact us on: dopegoats.com"}),Object(D.jsx)("p",{className:"email-item",children:"dopegoats@gmail.com"})]}),Object(D.jsxs)("div",{className:"contact-social d-flex align-items-center",children:[Object(D.jsx)(Re.a,{}),Object(D.jsx)(Le.a,{}),Object(D.jsx)(Re.b,{}),Object(D.jsx)(Le.b,{})]})]})]}),Object(D.jsx)(De.a,{"data-aos":"fade-right",lg:6,md:6,sm:12,className:"content-right-side d-flex justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"footer-img",children:Object(D.jsx)("img",{src:We,alt:"dope-goats-footer"})})})]})})})}),Ue=(c(590),function(){return Object(D.jsx)(v.a,{fluid:!0,className:"collection-comp",children:Object(D.jsxs)(v.a,{className:"collection-comp-container",children:[Object(D.jsx)(y.a,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",className:"collection-comp-title d-flex justify-content-center align-items-center",children:Object(D.jsx)("h6",{className:"comp-primary-title",children:"Collection"})}),Object(D.jsxs)(y.a,{className:"collection-comp-content",children:[Object(D.jsx)("div",{className:"img-container",children:Object(D.jsx)("div",{"data-aos":"zoom-in",className:"item",children:Object(D.jsx)("img",{src:he,alt:"dope-goats-collections"})})}),Object(D.jsxs)("div",{className:"img-container",children:[Object(D.jsx)("div",{"data-aos":"zoom-in",className:"item",children:Object(D.jsx)("img",{src:ue,alt:"dope-goats-collections"})}),Object(D.jsx)("div",{"data-aos":"zoom-in",className:"item",children:Object(D.jsx)("img",{src:Oe,alt:"dope-goats-collections"})})]}),Object(D.jsxs)("div",{className:"img-container",children:[Object(D.jsx)("div",{"data-aos":"zoom-in",className:"item",children:Object(D.jsx)("img",{src:he,alt:"dope-goats-collections"})}),Object(D.jsx)("div",{"data-aos":"zoom-in",className:"item",children:Object(D.jsx)("img",{src:Oe,alt:"dope-goats-collections"})}),Object(D.jsx)("div",{"data-aos":"zoom-in",className:"item",children:Object(D.jsx)("img",{src:ue,alt:"dope-goats-collections"})})]})]}),Object(D.jsx)(y.a,{className:"collection-comp-btn",children:Object(D.jsx)("div",{"data-aos":"fade-down",className:"collection-comp-btn d-flex flex-column justify-content-center align-items-center",children:Object(D.jsxs)("button",{className:"comp-primary-btn",children:["MINT MORE",Object(D.jsx)(M.a,{className:"comp-primary-btn-icon"})]})})}),Object(D.jsx)(y.a,{"data-aos":"fade-down",className:"collection-comp-scroll d-flex flex-column justify-content-center align-items-center",children:Object(D.jsx)("div",{className:"scroll-img",children:Object(D.jsx)("img",{src:R,alt:"dope-goats-scroll-down"})})})]})})}),Ke=function(){return Object(D.jsxs)(v.a,{fluid:!0,className:"main-layout",style:{overflow:"hidden"},children:[Object(D.jsx)(y.a,{id:"home",children:Object(D.jsx)(pe,{})}),Object(D.jsx)(y.a,{id:"about",children:Object(D.jsx)(ge,{})}),Object(D.jsx)(y.a,{id:"collection",children:Object(D.jsx)(Ue,{})}),Object(D.jsx)(y.a,{id:"rarity",children:Object(D.jsx)(Ae,{})}),Object(D.jsx)(y.a,{id:"roadmap",children:Object(D.jsx)(ye,{})}),Object(D.jsx)(y.a,{id:"faqs",children:Object(D.jsx)(_e,{})}),Object(D.jsx)(y.a,{id:"team",children:Object(D.jsx)(Me,{})}),Object(D.jsx)(y.a,{id:"footer",children:Object(D.jsx)(ze,{})})]})};c(591),c(592),c(593),c(594);var Fe=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(Ke,{})})},Pe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,614)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},qe=c(281),Be=c.n(qe);c(595),c(596);Be.a.init(),N.a.render(Object(D.jsx)(L.a,{store:H,children:Object(D.jsx)(Fe,{})}),document.getElementById("root")),Pe()}},[[597,1,2]]]);
//# sourceMappingURL=main.8c529268.chunk.js.map