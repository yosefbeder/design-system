var Se=Object.defineProperty;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var V=(e,r,t)=>r in e?Se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))X.call(r,t)&&V(e,t,r[t]);if(F)for(var t of F(r))Y.call(r,t)&&V(e,t,r[t]);return e};var P=(e,r)=>{var t={};for(var n in e)X.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&F)for(var n of F(e))r.indexOf(n)<0&&Y.call(e,n)&&(t[n]=e[n]);return t};import{C as m,s as c,R as i,r as f,U as ze,j as _,H as g,a as K,b as J,c as Q,d as Z,W as ee,e as Ie,F as Ce}from"./vendor.fb45f17f.js";const Ee=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(l){if(l.ep)return;l.ep=!0;const a=t(l);fetch(l.href,a)}};Ee();const s={color:{accent:"blue",neutral:"gray"}},$=(e="2")=>m`
	margin: ${({resetMargin:r})=>`${r?"0":`var(--space-${e}) 0`}`};
`,z=m`
	font-family: var(--font-sans);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-${e=>e.theme.color.neutral}-900);
`,oe=c.h1`
	${z}
	${$("4")}
	font-size: var(--font-4xl);
`;oe.defaultProps={theme:s};const re=c.h2`
	${z}
	${$("4")}
	font-size: var(--font-3xl);
`;re.defaultProps={theme:s};const te=c.h3`
	${z}
	${$()}
	font-size: var(--font-2xl);
`;te.defaultProps={theme:s};const A=c.h4`
	${z}
	${$()}
	font-size: var(--font-xl);
`;A.defaultProps={theme:s};const Pe=c.h5`
	${z}
	${$()}
	font-size: var(--font-lg);
`;Pe.defaultProps={theme:s};const Le=c.h6`
	${z}
	${$()}
	font-size: var(--font-md);
`;Le.defaultProps={theme:s};const ae=m`
	${$()}
	line-height: 1.5;
	max-width: 60ch;
`,v=c.p`
	${ae}
`,L=c.p`
	${ae}
	font-size: var(--font-sm);
	color: var(--color-${e=>e.theme.color.neutral}-600);
`;L.defaultProps={theme:s};const le=m`
	${$()};
	margin-left: var(--space-8);
	line-height: 1.5;

	& ${v}, & ${L} {
		margin: 0;
	}
`,M=c.ul`
	${le}
`,ce=c.ol`
	${le}
`,T=c.a`
	color: var(--color-${e=>e.theme.color.accent}-400);
	text-decoration: underline;
	transition: color 100ms;

	&:hover,
	&:focus {
		color: var(--color-${e=>e.theme.color.accent}-500);
	}

	&:active {
		color: var(--color-${e=>e.theme.color.accent}-600);
	}
`;T.defaultProps={theme:s};const B=c.strong`
	font-weight: 600;
	color: var(--color-${e=>e.theme.color.neutral}-800);
`;B.defaultProps={theme:s};const ne=c.em`
	font-style: italic;
	font-weight: 200;
`,I=c.code`
	background-color: var(--color-${e=>e.theme.color.accent}-200);
	font-family: var(--font-mono);

	&::before,
	&::after {
		content: '\`';
	}
`;I.defaultProps={theme:s};const ie=c.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-${e=>e.theme.color.accent}-100);
	${$()}
	padding: var(--space-3-5) var(--space-10);
	border-radius: var(--rounded);
	quotes: '“' '”';

	color: var(--color-${e=>e.theme.color.neutral}-800);

	overflow: hidden;

	& > ${v}, & > ${L} {
		margin: 0;
		max-width: 100%;
	}

	&::before {
		content: open-quote;
		color: var(--color-${e=>e.theme.color.accent}-200);
		position: absolute;
		top: calc(var(--space-5) * -1);
		left: calc(var(--space-2-5) * -1);
		font-family: var(--font-mono);
		font-size: var(--font-8xl);
		pointer-events: none;
	}
`;ie.defaultProps={theme:s};const Be=({size:e=20,className:r})=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,className:r,viewBox:"0 0 20 20",fill:"currentColor"},i.createElement("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",clipRule:"evenodd"})),Re=({size:e=20,className:r})=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,className:r,viewBox:"0 0 20 20",fill:"currentColor"},i.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),He=e=>String(e).toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),Fe=c.a`
	position: absolute;

	width: calc(100% + 0.75em);
	margin-left: -0.75em;

	opacity: ${e=>e.isShown?"1":"0"};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`,de=e=>{const r=c(e)`
		position: relative;
	`;return({children:n,resetMargin:l})=>{const a=He(n),[d,h]=f.exports.useState(!1),[p,H]=f.exports.useState(!1);return i.createElement(r,{id:a,resetMargin:l,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1)},i.createElement(Fe,{isShown:d||p,href:`#${a}`,onFocus:()=>H(!0),onBlur:()=>H(!1)},i.createElement(Be,{size:".65em"})),n)}};function N(){var e=new Date().getTime(),r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t=="x"?n:n&3|8).toString(16)});return r}const Me=ze`
  to {
    transform: rotate(360deg);
  }
`,j=c.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${Me} 1s linear infinite;
`;j.defaultProps={theme:s};const W=(e,r)=>e?"loading":r?"disabled":"normal",q=m`
	display: flex;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--rounded);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`,se=c.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${q}

	color: var(--color-white);

	${({loading:e,disabled:r,theme:t})=>{const n=W(e,r);let l,a,d;switch(n){case"normal":l=`var(--color-${t.color.accent}-400)`,a=`var(--color-${t.color.accent}-500)`,d=`var(--color-${t.color.accent}-600)`;break;default:l=`var(--color-${t.color.accent}-300)`,a=`var(--color-${t.color.accent}-400)`}return m`
			background-color: ${l};
			border: 2px solid ${l};

			&:hover {
				background-color: ${a};
				border: 2px solid ${a};
			}

			${n==="normal"?m`
						&:focus {
							background-color: ${a};
							border: 2px solid ${a};
						}

						&:active {
							background-color: ${d};
							border: 2px solid ${d};
						}
				  `:"cursor: not-allowed;"}
		`}}
`;se.defaultProps={theme:s};const ue=c.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${q}

	background-color: var(--color-white);

	${({loading:e,disabled:r,theme:t})=>{const n=W(e,r);let l,a;switch(n){case"normal":l=`var(--color-${t.color.accent}-400)`,a=`var(--color-${t.color.accent}-500)`;break;default:l=`var(--color-${t.color.accent}-300)`}return m`
			color: ${l};
			border: 2px solid ${l};

			&:hover {
				background-color: ${l};
				color: var(--color-white);
			}

			${n==="normal"?m`
						&:focus {
							background-color: ${l};
							color: var(--color-white);
						}

						&:active {
							background-color: ${a};
							border-color: ${a};
						}
				  `:"cursor: not-allowed;"}
		`}}
`;ue.defaultProps={theme:s};const he=c.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	${q}

	border: 2px solid transparent;

	${({loading:e,disabled:r,theme:t})=>{const n=W(e,r);let l,a,d;switch(n){case"normal":a=`var(--color-${t.color.neutral}-200)`,d=`var(--color-${t.color.neutral}-300)`;break;default:l=`var(--color-${t.color.neutral}-100)`,a=`var(--color-${t.color.neutral}-200)`}return m`
			color: var(--color-${h=>h.theme.color.neutral}-700);

			&:hover {
				background-color: ${a};
				border-color: ${a};
			}

			${n==="normal"?m`
						&:focus {
							background-color: ${a};
							border-color: ${a};
						}

						&:active {
							background-color: ${d};
							border-color: ${d};
						}
				  `:m`
						background-color: ${l};
						border-color: ${l};
						cursor: not-allowed;
				  `}
		`}}
`;he.defaultProps={theme:s};const Te=c(j)`
	border: 2px solid var(--color-${e=>e.theme.color.accent}-200);
	border-left: 2px solid var(--color-white);
`,Ne=c(j)`
	border: 2px solid var(--color-${e=>e.theme.color.accent}-200);
	border-left: 2px solid var(--color-${e=>e.theme.color.accent}-400);
`,je=c(j)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-${e=>e.theme.color.neutral}-400);
`,me=c.span`
	margin-left: ${e=>e.leftSpacing?"var(--space-2)":"0"};
	margin-right: ${e=>e.rightSpacing?"var(--space-2)":"0"};
`,w=d=>{var h=d,{variant:e="primary",children:r,leftIcon:t,rightIcon:n,loading:l}=h,a=P(h,["variant","children","leftIcon","rightIcon","loading"]);const p=e==="primary"?se:e==="secondary"?ue:he;if(l){const H=e==="primary"?Te:e==="secondary"?Ne:je;return i.createElement(p,y({loading:!0},a),i.createElement(H,null),i.createElement(me,{leftSpacing:!0,rightSpacing:!!n},r),n&&n)}return i.createElement(p,y({},a),t&&t,i.createElement(me,{leftSpacing:!!t,rightSpacing:!!n},r),n&&n)},ve=c.a`
	display: inline-block;
	padding: var(--space-1) var(--space-2);
	border: 2px solid transparent;
	border-radius: var(--rounded);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${e=>e.navigatedTo?m`
					font-weight: 600;
					color: var(--color-${r=>r.theme.color.neutral}-800);
			  `:""}

	&:hover,
	&:focus {
		background-color: var(--color-${e=>e.theme.color.neutral}-200);
		border-color: var(--color-${e=>e.theme.color.neutral}-200);
	}

	&:active {
		background-color: var(--color-${e=>e.theme.color.neutral}-300);
		border-color: var(--color-${e=>e.theme.color.neutral}-300);
	}
`;ve.defaultProps={theme:s};const x=c.button.attrs(e=>({disabled:e.loading||e.disabled}))`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.25rem;
	height: 2.25rem;
	border: 2px solid transparent;
	border-radius: var(--rounded);

	&:hover {
		background-color: var(--color-${e=>e.theme.color.neutral}-200);
	}

	${e=>!e.loading&&!e.disabled&&m`
			&:focus {
				background-color: var(
					--color-${r=>r.theme.color.neutral}-200
				);
			}

			&:active {
				background-color: var(
					--color-${r=>r.theme.color.neutral}-300
				);
			}
		`}

	&:disabled {
		background-color: var(--color-${e=>e.theme.color.neutral}-100);
		color: var(--color-${e=>e.theme.color.neutral}-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-${e=>e.theme.color.neutral}-200);
	}

	transition: background-color 100ms;
`;x.defaultProps={theme:s};const Ae=c.div`
	position: relative;
	display: inline-block;
`,pe=c(L)`
	position: absolute;
	z-index: 10;
	${({position:e})=>e==="top"?m`
				bottom: calc(100% + var(--space-1));
				left: 50%;
				transform: translateX(-50%);
			`:e==="left"?m`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-1));
			`:e==="right"?m`
				top: 50%;
				transform: translateY(-50%);
				left: calc(100% + var(--space-1));
			`:m`
			top: calc(100% + var(--space-1));
			left: 50%;
			transform: translateX(-50%);
		`}
	margin: 0;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--rounded);
	background-color: var(--color-${e=>e.theme.color.neutral}-600);

	pointer-events: none;

	white-space: nowrap;
	line-height: 1;
	color: var(--color-${e=>e.theme.color.neutral}-100);

	opacity: ${e=>e.isShown?"1":"0"};
	transition: 100ms opacity;
`;pe.defaultProps={theme:s};const k=({children:e,content:r,position:t="bottom"})=>{const n=f.exports.useRef(null),[l,a]=f.exports.useState(!1),[d,h]=f.exports.useState(!1);return i.createElement(Ae,{ref:n,onPointerEnter:()=>{a(!0)},onPointerLeave:()=>{a(!1)},onFocusCapture:()=>{h(!0)},onBlurCapture:()=>{h(!1)}},e,i.createElement(pe,{position:t,isShown:l||d},r))},D=c.div`
	position: absolute;
	content: '';
	top: 50%;
	left: var(--padding);

	width: calc(var(--height) - var(--padding) * 2);
	height: calc(var(--height) - var(--padding) * 2);
	border-radius: var(--rounded-full);
	background-color: var(--color-white);

	transform: translate(0, -50%);
	pointer-events: none;

	transition: transform 100ms ease-out;
`,be=c.input.attrs(()=>({type:"checkbox"}))`
	display: block;
	width: var(--width);
	height: var(--height);
	border-radius: var(--rounded-full);
	background-color: var(--color-${e=>e.theme.color.neutral}-200);
	border: 1px solid var(--color-${e=>e.theme.color.neutral}-200);
	transition: background-color 100ms, border-color 100ms;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: var(--color-${e=>e.theme.color.neutral}-300);
		border-color: var(--color-${e=>e.theme.color.neutral}-300);
	}

	&:checked {
		background-color: var(--color-${e=>e.theme.color.accent}-400);
		border-color: var(--color-${e=>e.theme.color.accent}-400);
	}

	&:checked:hover,
	&:checked:focus {
		background-color: var(--color-${e=>e.theme.color.accent}-500);
		border-color: var(--color-${e=>e.theme.color.accent}-500);
	}

	&:disabled {
		background-color: var(--color-${e=>e.theme.color.neutral}-300);
		border-color: var(--color-${e=>e.theme.color.neutral}-300);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-${e=>e.theme.color.neutral}-400);
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}

	&:disabled:checked {
		background-color: var(--color-${e=>e.theme.color.neutral}-400);
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}

	&:disabled:checked:hover {
		background-color: var(--color-${e=>e.theme.color.neutral}-500);
		border-color: var(--color-${e=>e.theme.color.neutral}-500);
	}

	&:checked + ${D} {
		transform: translate(calc(var(--width) - 100% - var(--padding) * 2), -50%);
	}

	&:disabled + ${D} {
		background-color: var(--color-${e=>e.theme.color.neutral}-100);
	}
`;be.defaultProps={theme:s};const fe=c.div`
	--size: 1.125rem;
	--padding: var(--space-1);

	--width: calc(var(--size) * 2);
	--height: var(--size);

	position: relative;
`,We=c.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${fe} {
		margin-right: var(--space-2);
	}

	& > ${v} {
		margin: 0;
	}
`,G=i.forwardRef((d,a)=>{var h=d,{children:e,label:r,className:t,id:n}=h,l=P(h,["children","label","className","id"]);const p=N();return i.createElement(We,{className:t},i.createElement(fe,null,i.createElement(be,y({ref:a,id:p},l)),i.createElement(D,null)),i.createElement(v,{as:"label",htmlFor:p},r))}),C=c.input`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-1) var(--space-2);
	border: 1px solid var(--color-${e=>e.theme.color.neutral}-200);
	color: var(--color-${e=>e.theme.color.neutral}-700);
	border-radius: var(--rounded);
	background-color: var(--color-white);

	transition: border-color 100ms, box-shadow 100ms;

	&:disabled {
		background-color: var(--color-${e=>e.theme.color.neutral}-100);
		cursor: not-allowed;
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-${e=>e.theme.color.neutral}-200);
	}

	&:hover {
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-${e=>e.theme.color.accent}-400);
		box-shadow: 0 0 0 2px var(--color-${e=>e.theme.color.accent}-200);
	}
`;C.defaultProps={theme:s};const ge=c(Re)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`,$e=c.input.attrs(()=>({type:"checkbox"}))`
	display: block;

	width: var(--size);
	height: var(--size);
	background-color: var(--color-white);
	border-radius: var(--rounded);
	border: 1px solid var(--color-${e=>e.theme.color.neutral}-200);
	transition: border-color 100ms, background-color 100ms, box-shadow 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-${e=>e.theme.color.neutral}-100);
	}

	&:disabled + ${ge} {
		color: var(--color-${e=>e.theme.color.neutral}-100);
	}

	&:hover {
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-${e=>e.theme.color.accent}-400);
		box-shadow: 0 0 0 2px var(--color-${e=>e.theme.color.accent}-200);
	}

	&:checked {
		background-color: var(--color-${e=>e.theme.color.accent}-400);
		border-color: var(--color-${e=>e.theme.color.accent}-400);
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-${e=>e.theme.color.neutral}-200);
	}

	&:disabled:checked {
		background-color: var(--color-${e=>e.theme.color.neutral}-400);
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}
`;$e.defaultProps={theme:s};const we=c.div`
	--size: 1.125rem;

	position: relative;
`,qe=c.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${we} {
		margin-right: var(--space-2);
	}

	& > ${v} {
		margin: 0;
	}
`,O=i.forwardRef((d,a)=>{var h=d,{children:e,label:r,className:t,id:n}=h,l=P(h,["children","label","className","id"]);const p=N();return i.createElement(qe,{className:t},i.createElement(we,null,i.createElement($e,y({ref:a,id:p},l)),i.createElement(ge,{size:16})),i.createElement(v,{as:"label",htmlFor:p},r))}),xe=c.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`,ke=c.input.attrs(()=>({type:"radio"}))`
	display: block;
	width: var(--size);
	height: var(--size);
	border-radius: var(--rounded-full);
	border: 1px solid var(--color-${e=>e.theme.color.neutral}-200);
	background-color: var(--color-white);

	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:hover {
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}

	&:checked {
		background-color: var(--color-${e=>e.theme.color.accent}-400);
		border-color: var(--color-${e=>e.theme.color.accent}-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-${e=>e.theme.color.accent}-400);
		box-shadow: 0 0 0 2px var(--color-${e=>e.theme.color.accent}-200);
	}

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-${e=>e.theme.color.neutral}-100);
	}

	&:disabled + ${xe} {
		background-color: var(--color-${e=>e.theme.color.neutral}-100);
	}

	&:disabled:checked {
		background-color: var(--color-${e=>e.theme.color.neutral}-400);
		border-color: var(--color-${e=>e.theme.color.neutral}-400);
	}
`;ke.defaultProps={theme:s};const ye=c.div`
	--padding: var(--space-1);
	--size: 1.125rem;

	position: relative;
`,De=c.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${ye} {
		margin-right: var(--space-2);
	}

	& > ${v} {
		margin: 0;
	}
`,S=i.forwardRef((d,a)=>{var h=d,{children:e,label:r,className:t,id:n}=h,l=P(h,["children","label","className","id"]);const p=N();return i.createElement(De,{className:t},i.createElement(ye,null,i.createElement(ke,y({ref:a,id:p},l)),i.createElement(xe,null)),i.createElement(v,{as:"label",htmlFor:p},r))}),Ge=i.forwardRef(({name:e=N(),className:r,options:t,value:n,onChange:l},a)=>i.createElement("div",{role:"radiogroup",className:r,ref:a,onChange:d=>l(d.target.value)},t.map((d,h)=>i.createElement(S,y({key:h,name:e,defaultChecked:n===d.value},d))))),o=_.exports.jsx,u=_.exports.jsxs,R=de(re),b=de(te),Oe=c.article`
	width: 100%;
	max-width: 45rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0.05px;
	padding-bottom: var(--space-8);
`,E=c.div`
	display: flex;
	gap: var(--space-2);
	margin: var(--space-2) 0;
`,U=c.div`
	display: flex;
	gap: var(--space-2);
	max-width: calc(30rem + var(--space-2));
	margin: var(--space-2) 0;
`,Ue=[{path:"/",name:"Home"},{path:"/work",name:"Work"},{path:"/blog",name:"Blog"},{path:"/about",name:"About"}];function Xe(){const[e,r]=f.exports.useState(""),[t,n]=f.exports.useState(""),[l,a]=f.exports.useState("/");return f.exports.useEffect(()=>{console.log(t)},[t]),u(Oe,{children:[o(oe,{children:"Components"}),o(R,{children:"Typography"}),o(b,{children:"Paragraphs"}),o(v,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),o(L,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),o(b,{children:"Lists"}),u(v,{children:["Ways to declare"," ",o(T,{href:"https://en.wikipedia.org/wiki/Variable_(mathematics)",target:"_blank",children:"variables"})," ",o(ne,{children:"constants"})," in javascript:"]}),u(M,{children:[u("li",{children:[o(I,{children:"let"}),": a variable that can be changed later and"," ",o(B,{children:"function-scoped"}),"."]}),u("li",{children:[o(I,{children:"const"}),": a constant that can't be changed later and ",o(B,{children:"function-scoped"}),"."]}),u("li",{children:[u(v,{children:[o(I,{children:"var"}),": a variable that can't be changed later and ",o(B,{children:"block-scoped"}),"."]}),o(M,{children:u("li",{children:[o(v,{children:"Why shouldn't you use it?"}),u(ce,{children:[u("li",{children:["You'll face some strange behavior due to being"," ",o(B,{children:"block-scoped"})]}),o("li",{children:"It's awful."}),o("li",{children:"It's the worst."})]})]})}),o(M,{children:u("li",{children:[o(v,{children:"What should you use instead?"}),u(M,{children:[u("li",{children:[o(I,{children:"var"})," for variables (",o(T,{href:"https://www.merriam-webster.com/dictionary/mutable",children:"mutable"}),")."]}),u("li",{children:[o(I,{children:"const"})," for constants (",o(T,{href:"https://www.merriam-webster.com/dictionary/immutable",children:"immutable"}),")."]})]})]})})]})]}),u(v,{children:["Steps to declare ",o(ne,{children:"them"}),":"]}),u(ce,{children:[o("li",{children:"Think of the the name of it."}),o("li",{children:"Think whether it will change or not."})]}),o(b,{children:"Blockquote"}),o(ie,{children:o(v,{children:"Failure is better than doing nothing, because doing nothing is the ultimate failure."})}),o(R,{children:"Buttons"}),o(b,{children:"Primary Button"}),u(E,{children:[o(w,{leftIcon:o(g,{size:20}),children:"Normal"}),o(w,{leftIcon:o(g,{size:20}),loading:!0,children:"Loading"}),o(w,{leftIcon:o(g,{size:20}),disabled:!0,children:"Disabled"})]}),o(b,{children:"Secondary Button"}),u(E,{children:[o(w,{leftIcon:o(g,{size:20}),variant:"secondary",children:"Normal"}),o(w,{leftIcon:o(g,{size:20}),variant:"secondary",loading:!0,children:"Loading"}),o(w,{leftIcon:o(g,{size:20}),variant:"secondary",disabled:!0,children:"Disabled"})]}),o(b,{children:"Tertiary Button"}),u(E,{children:[o(w,{leftIcon:o(g,{size:20}),variant:"tertiary",children:"Normal"}),o(w,{leftIcon:o(g,{size:20}),variant:"tertiary",loading:!0,children:"Loading"}),o(w,{leftIcon:o(g,{size:20}),variant:"tertiary",disabled:!0,children:"Disabled"})]}),o(R,{children:"Nav Link"}),o(E,{children:Ue.map(d=>o(ve,{navigatedTo:l===d.path,as:"button",onClick:()=>a(d.path),children:d.name},d.path))}),o(R,{children:"Icon Button"}),u(E,{children:[o(k,{content:"Bottom",children:o(x,{children:o(K,{size:20})})}),o(k,{content:"Top",position:"top",children:o(x,{children:o(J,{size:20})})}),o(k,{content:"Right",position:"right",children:o(x,{children:o(Q,{size:20})})}),o(k,{content:"Left",position:"left",children:o(x,{children:o(Z,{size:20})})})]}),u(E,{children:[o(k,{content:"Bottom",children:o(x,{disabled:!0,children:o(K,{size:20})})}),o(k,{content:"Top",position:"top",children:o(x,{disabled:!0,children:o(J,{size:20})})}),o(k,{content:"Right",position:"right",children:o(x,{disabled:!0,children:o(Q,{size:20})})}),o(k,{content:"Left",position:"left",children:o(x,{disabled:!0,children:o(Z,{size:20})})})]}),o(R,{children:"Form Fields"}),o(b,{children:"Inputs"}),u(U,{children:[o(C,{placeholder:"First Name"}),o(C,{placeholder:"Last Name",disabled:!0})]}),u(U,{children:[o(C,{type:"number",placeholder:"Age",min:3,max:100}),o(C,{placeholder:"Phone number"})]}),o(U,{children:o(C,{type:"email",placeholder:"Email"})}),o(b,{children:"Switch"}),o(G,{label:"I agree to sell my privacy"}),o(G,{label:"I agree to sell my privacy",disabled:!0}),o(G,{label:"I agree to sell my privacy",disabled:!0,checked:!0}),o(b,{children:"Checkbox"}),o(O,{label:"I agree to sell my privacy"}),o(O,{label:"I agree to sell my privacy",disabled:!0}),o(O,{label:"I agree to sell my privacy",disabled:!0,checked:!0}),o(b,{children:"Radio"}),o(A,{children:"Manual (with Radio)"}),o(v,{children:"What's your favorite javascript framework?"}),u("div",{role:"radiogroup",onChange:d=>r(d.target.value),children:[o(S,{name:"favorite-framework",defaultChecked:e==="react",label:"React",value:"react"}),o(S,{name:"favorite-framework",defaultChecked:e==="vue",label:"Vue",value:"vue"}),o(S,{name:"favorite-framework",defaultChecked:e==="angular",label:"Angular",value:"angular"}),o(S,{name:"favorite-framework",defaultChecked:e==="svelte",label:"Svelte",value:"svelte"}),o(S,{name:"favorite-framework",defaultChecked:e==="next",label:"Next.js",value:"next"}),o(S,{name:"favorite-framework",defaultChecked:e==="blitz",label:"Blitz.js",value:"blitz"})]}),o(A,{children:"Automatic (with RadioGroup)"}),o(v,{children:"What's your favorite mobile brand?"}),o(Ge,{options:[{label:"Apple",value:"apple"},{label:"Samsung",value:"samsung"},{label:"Huawie",value:"huawie"},{label:"Xiaomi",value:"xiaomi"}],value:t,onChange:d=>n(d)})]})}const Ye=ee`
*:where(:not(iframe, canvas, img, svg, video, ol, ul):not(svg *)) {
	all: unset;
	display: revert;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

img {
	max-width: 100%;
}

table {
	border-collapse: collapse;
}

textarea {
	white-space: revert;
}

a,
button {
	cursor: pointer;
}

ol,
ul {
	margin: 0;
	padding: 0;
}

pre {
	white-space: pre;
}

body {
	font-family: var(--font-serif);
	font-size: var(--font-base);
  color: var(--color-${e=>e.theme?e.theme.color.neutral:s.color.neutral}-700);
}

::selection {
	color: var(--color-${e=>e.theme?e.theme.color.accent:s.color.accent}-50);
	background-color: var(--color-${e=>e.theme?e.theme.color.accent:s.color.accent}-400);
}
`,Ve=ee`
	body {
		background-color: var(--color-${e=>e.theme.color.neutral}-50);
	}
`;Ie.render(o(i.StrictMode,{children:u(Ce,{theme:{color:{accent:"red",neutral:"stone"}},children:[o(Ye,{}),o(Ve,{}),o(Xe,{})]})}),document.getElementById("root"));
