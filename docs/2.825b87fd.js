/*! For license information please see 2.825b87fd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(88),o=a(89),l=a(107),i=a(47),s=a.n(i);var u=function(){var e,t=Object(l.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,i=Object(o.a)().announcementBar;if(!i)return null;var u=i.content,d=i.backgroundColor,m=i.textColor,f=i.isCloseable;return!u||f&&a?null:r.a.createElement("div",{className:s.a.announcementBar,style:{backgroundColor:d,color:m},role:"banner"},r.a.createElement("div",{className:Object(c.a)(s.a.announcementBarContent,(e={},e[s.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:u}}),f?r.a.createElement("button",{type:"button",className:s.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},d=a(2),m=a(92),f=a(90),h=function(){return null},v=a(125),b=a.n(v),p=a(48),g=a.n(p),k=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(g.a.toggle,g.a.dark),style:a},t)},E=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(g.a.toggle,g.a.light),style:a},t)},O=function(e){var t=Object(o.a)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,l=t.lightIconStyle,i=Object(f.a)().isClient;return r.a.createElement(b.a,Object(d.a)({disabled:!i,icons:{checked:r.a.createElement(k,{icon:a,style:n}),unchecked:r.a.createElement(E,{icon:c,style:l})}},e))},j=a(102),y=a(94);var _=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},w=a(110),C=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),m=d[0],f=d[1],h=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]),v=Object(y.useLocation)(),b=_(v.hash),p=b[0],g=b[1];return Object(w.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<m))){if(o)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-m,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,m]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},N=a(111),S=a(112),T=a(113),I=a(49),L=a.n(I),B=a(6),x=a(96),D={default:function(){return x.a},docsVersion:function(){return a(130).default},docsVersionDropdown:function(){return a(134).default},doc:function(){return a(135).default}};function P(e){var t=e.type,a=Object(B.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=D[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var M="right";var A=function(){var e,t,a=Object(f.a)().isClient,l=Object(o.a)(),i=l.navbar,s=i.title,u=i.items,v=i.hideOnScroll,b=i.style,p=l.colorMode.disableSwitch,g=Object(n.useState)(!1),k=g[0],E=g[1],y=Object(n.useState)(!1),_=y[0],w=y[1],I=Object(j.a)(),B=I.isDarkTheme,x=I.setLightTheme,D=I.setDarkTheme,A=C(v),V=A.navbarRef,X=A.isNavbarVisible,F=Object(T.a)(),U=F.logoLink,H=F.logoLinkProps,R=F.logoImageUrl,G=F.logoAlt;Object(N.a)(k);var W=Object(n.useCallback)((function(){E(!0)}),[E]),Y=Object(n.useCallback)((function(){E(!1)}),[E]),K=Object(n.useCallback)((function(e){return e.target.checked?D():x()}),[x,D]),z=Object(S.a)();Object(n.useEffect)((function(){z===S.b.desktop&&E(!1)}),[z]);var J=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:M)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:M)}))}}(u),q=J.leftItems,Q=J.rightItems;return r.a.createElement("nav",{ref:V,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===b,"navbar--primary":"primary"===b,"navbar-sidebar--show":k},e[L.a.navbarHideable]=v,e[L.a.navbarHidden]=!X,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(m.a,Object(d.a)({className:"navbar__brand",to:U},H),null!=R&&r.a.createElement("img",{key:a,className:"navbar__logo",src:R,alt:G}),null!=s&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",(t={},t[L.a.hideLogoText]=_,t))},s)),q.map((function(e,t){return r.a.createElement(P,Object(d.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},Q.map((function(e,t){return r.a.createElement(P,Object(d.a)({},e,{key:t}))})),!p&&r.a.createElement(O,{className:L.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:B,onChange:K}),r.a.createElement(h,{handleSearchBarToggle:w,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(m.a,Object(d.a)({className:"navbar__brand",onClick:Y,to:U},H),null!=R&&r.a.createElement("img",{key:a,className:"navbar__logo",src:R,alt:G}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!p&&k&&r.a.createElement(O,{"aria-label":"Dark mode toggle in sidebar",checked:B,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(P,Object(d.a)({mobile:!0},e,{onClick:Y,key:t}))})))))))},V=a(93),X=a(50),F=a.n(X);function U(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(B.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(V.a)(t),i=Object(V.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(m.a,Object(d.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var H=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var R=function(){var e=Object(o.a)().footer,t=e||{},a=t.copyright,n=t.links,l=void 0===n?[]:n,i=t.logo,s=void 0===i?{}:i,u=Object(V.a)(s.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(U,e))}))):null)}))),(s||a)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:F.a.footerLogoLink},r.a.createElement(H,{alt:s.alt,url:u})):r.a.createElement(H,{alt:s.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null},G=a(10),W="light",Y="dark",K=function(e){return e===Y?Y:W},z=function(){return G.a.canUseDOM?K(document.documentElement.getAttribute("data-theme")):W},J=function(e){try{localStorage.setItem("theme",K(e))}catch(t){console.error(t)}},q=function(){var e=Object(o.a)().colorMode.disableSwitch,t=void 0!==e&&e,a=Object(n.useState)(z),r=a[0],c=a[1],l=Object(n.useCallback)((function(){c(W),J(W)}),[]),i=Object(n.useCallback)((function(){c(Y),J(Y)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",K(r))}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(K(e))}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?Y:W)}))}),[]),{isDarkTheme:r===Y,setLightTheme:l,setDarkTheme:i}},Q=a(109);var Z=function(e){var t=q(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(Q.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},$="docusaurus.tab.",ee=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith($))e[n.substring($.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},te="docusaurus.announcement.dismiss",ae="docusaurus.announcement.id",ne=function(){var e=Object(o.a)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(te,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(ae);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(ae,t),n&&localStorage.setItem(te,"false"),(n||"false"===localStorage.getItem(te))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},re=a(108);var ce=function(e){var t=ee(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=ne(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(re.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)},oe=a(124);function le(e){var t=e.children;return r.a.createElement(Z,null,r.a.createElement(ce,null,r.a.createElement(oe.a,null,t)))}var ie=a(103);function se(e){var t=e.language,a=e.version,n=e.tag;return r.a.createElement(ie.a,null,t&&r.a.createElement("meta",{name:"docusaurus_language",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}var ue=a(115);function de(e){var t=Object(f.a)().siteConfig,a=t.favicon,n=t.title,c=t.themeConfig,o=c.image,l=c.metadatas,i=t.url,s=t.titleDelimiter,u=e.title,m=e.description,h=e.image,v=e.keywords,b=e.permalink,p=e.searchMetadatas,g=u?u+" "+s+" "+n:n,k=h||o,E=Object(V.a)(k,{absolute:!0}),O=Object(V.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement("html",{lang:"en"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),b&&r.a.createElement("meta",{property:"og:url",content:i+b}),b&&r.a.createElement("link",{rel:"canonical",href:i+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(se,Object(d.a)({tag:ue.a,language:"en"},p)),r.a.createElement(ie.a,null,l.map((function(e,t){return r.a.createElement("meta",Object(d.a)({key:"metadata_"+t},e))}))))}a(51);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return r.a.createElement(le,null,r.a.createElement(de,e),r.a.createElement(u,null),r.a.createElement(A,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(R,null))}},102:function(e,t,a){"use strict";var n=a(0),r=a(109);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},107:function(e,t,a){"use strict";var n=a(0),r=a(108);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},109:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},110:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},111:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},112:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},113:function(e,t,a){"use strict";var n=a(102),r=a(93),c=a(95),o=a(89);t.a=function(){var e=Object(o.a)().navbar.logo,t=Object(n.a)().isDarkTheme,a=Object(r.a)(e.href||"/"),l={};e.target?l={target:e.target}:Object(c.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});var i=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(r.a)(i),logoAlt:e.alt}}},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t){var a=function(e){return e.endsWith("/")?e:e+"/"};return a(e)===a(t)}},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="default";function r(e,t){return"docs-"+e+"-"+t}},125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(126)),i=m(a(7)),s=m(a(127)),u=m(a(128)),d=a(129);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},126:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},127:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},128:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},129:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},130:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(96),i=a(91),s=a(101);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),m=Object(i.useActiveVersion)(u),f=Object(s.a)(u).preferredVersion,h=Object(i.useLatestVersion)(u),v=null!==(t=null!=m?m:f)&&void 0!==t?t:h,b=null!=a?a:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:b,to:p}))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(96),i=a(91),s=a(101),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),k=Object(s.a)(d),E=k.preferredVersion,O=k.savePreferredVersionName;var j=null!==(t=null!==(a=b.activeVersion)&&void 0!==a?a:E)&&void 0!==t?t:g,y=c?"Versions":j.label,_=c?void 0:u(j).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:y,to:_,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){O(e.name)}}})),t=[].concat(f,e,h);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},135:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(96),i=a(91),s=a(88),u=a(101);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,m=e.label,f=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),b=v.activeVersion,p=v.activeDoc,g=Object(u.a)(f).preferredVersion,k=Object(i.useLatestVersion)(f),E=null!==(t=null!=b?b:g)&&void 0!==t?t:k,O=E.docs.find((function(e){return e.id===c}));if(!O)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===O.sidebar,a)),label:null!=m?m:O.id,to:O.path}))}},96:function(e,t,a){"use strict";var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(88),i=a(92),s=a(93),u=a(94),d=a(114);function m(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:f?p:l}:Object.assign({isNavLink:!0,activeClassName:m,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function f(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),f=Object(c.useState)(!1),h=f[0],v=f[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":h})},o.a.createElement(m,Object(n.a)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:a},o.a.createElement(m,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},l)))})))):o.a.createElement(m,Object(n.a)({className:b(i)},s))}function h(e){var t=e.items,a=e.className,i=(e.position,Object(r.a)(e,["items","className","position"])),s=Object(u.useLocation)().pathname,f=Object(c.useState)((function(){var e;return null===(e=!(null==t?void 0:t.some((function(e){return Object(d.a)(e.to,s)}))))||void 0===e||e})),h=f[0],v=f[1],b=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":h})},o.a.createElement(m,Object(n.a)({role:"button",className:b(a,!0)},i,{onClick:function(){v((function(e){return!e}))}}),i.label),o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:b(a)},c,{onClick:i.onClick})))})))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(m,Object(n.a)({className:b(a)},i)))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:f;return o.a.createElement(c,n)}}}]);