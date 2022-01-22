var ue=Object.defineProperty;var R=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var X=(r,t,n)=>t in r?ue(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,x=(r,t)=>{for(var n in t||(t={}))G.call(t,n)&&X(r,n,t[n]);if(R)for(var n of R(t))U.call(t,n)&&X(r,n,t[n]);return r};var z=(r,t)=>{var n={};for(var a in r)G.call(r,a)&&t.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&R)for(var a of R(r))t.indexOf(a)<0&&U.call(r,a)&&(n[a]=r[a]);return n};import{C as h,s as l,R as i,r as p,U as he,v as H,j as Y,H as m,a as V,b as _,c as K,d as J,e as ve}from"./vendor.6cdb3462.js";const be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};be();const f=(r="2")=>h`
	margin: ${({resetMargin:t})=>`${t?"0":`var(--space-${r}) 0`}`};
`,S=h`
	font-family: var(--font-sans);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-gray-900);
`,ge=l.h1`
	${S}
	${f("4")}
	font-size: var(--font-4xl);
`,pe=l.h2`
	${S}
	${f("4")}
	font-size: var(--font-3xl);
`,me=l.h3`
	${S}
	${f()}
	font-size: var(--font-2xl);
`,Q=l.h4`
	${S}
	${f()}
	font-size: var(--font-xl);
`;l.h5`
	${S}
	${f()}
	font-size: var(--font-lg);
`;l.h6`
	${S}
	${f()}
	font-size: var(--font-md);
`;const Z=h`
	${f()}
	line-height: 1.5;
	max-width: 60ch;
`,v=l.p`
	${Z}
`,F=l.p`
	${Z}
	font-size: var(--font-sm);
	color: var(--color-gray-600);
`,ee=h`
	${f()};
	margin-left: var(--space-8);
	line-height: 1.5;

	& ${v}, & ${F} {
		margin: 0;
	}
`,M=l.ul`
	${ee}
`,re=l.ol`
	${ee}
`,j=l.a`
	color: var(--color-blue-400);
	text-decoration: underline;
	transition: color 100ms;

	&:hover,
	&:focus {
		color: var(--color-blue-500);
	}

	&:active {
		color: var(--color-blue-600);
	}
`,N=l.strong`
	font-weight: 600;
	color: var(--color-gray-800);
`,oe=l.em`
	font-style: italic;
	font-weight: 200;
`,C=l.code`
	background-color: var(--color-blue-200);
	font-family: var(--font-mono);

	&::before,
	&::after {
		content: '\`';
	}
`,fe=l.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-blue-100);
	${f()}
	padding: var(--space-3-5) var(--space-10);
	border-radius: var(--rounded);
	quotes: '“' '”';

	color: var(--color-gray-800);

	overflow: hidden;

	& > ${v}, & > ${F} {
		margin: 0;
		max-width: 100%;
	}

	&::before {
		content: open-quote;
		color: var(--color-blue-200);
		position: absolute;
		top: calc(var(--space-5) * -1);
		left: calc(var(--space-2-5) * -1);
		font-family: var(--font-mono);
		font-size: var(--font-8xl);
		pointer-events: none;
	}
`,ye=({size:r=20,className:t})=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,className:t,viewBox:"0 0 20 20",fill:"currentColor"},i.createElement("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",clipRule:"evenodd"})),ke=({size:r=20,className:t})=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,className:t,viewBox:"0 0 20 20",fill:"currentColor"},i.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})),we=r=>String(r).toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),$e=l.a`
	position: absolute;

	width: calc(100% + 0.75em);
	margin-left: -0.75em;

	opacity: ${r=>r.isShown?"1":"0"};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`,ae=r=>{const t=l(r)`
		position: relative;
	`;return({children:a,resetMargin:o})=>{const c=we(a),[u,s]=p.exports.useState(!1),[b,B]=p.exports.useState(!1);return i.createElement(t,{id:c,resetMargin:o,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},i.createElement($e,{isShown:u||b,href:`#${c}`,onFocus:()=>B(!0),onBlur:()=>B(!1)},i.createElement(ye,{size:".65em"})),a)}},xe=he`
  to {
    transform: rotate(360deg);
  }
`,A=l.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${xe} 1s linear infinite;
`,P=(r,t)=>r?"loading":t?"disabled":"normal",q=h`
	display: flex;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--rounded);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`,Se=l.button.attrs(r=>({disabled:r.loading||r.disabled}))`
	${q}

	color: var(--color-white);

	${({loading:r,disabled:t})=>{const n=P(r,t);let a,o,c;switch(n){case"loading":a="var(--color-blue-300)",o="var(--color-blue-400)";break;case"disabled":a="var(--color-gray-400)",o="var(--color-gray-500)";break;default:a="var(--color-blue-400)",o="var(--color-blue-500)",c="var(--color-blue-600)"}return h`
			background-color: ${a};
			border: 2px solid ${a};

			&:hover {
				background-color: ${o};
				border: 2px solid ${o};
			}

			${n==="normal"?h`
						&:focus {
							background-color: ${o};
							border: 2px solid ${o};
						}

						&:active {
							background-color: ${c};
							border: 2px solid ${c};
						}
				  `:"cursor: not-allowed;"}
		`}}
`,Ie=l.button.attrs(r=>({disabled:r.loading||r.disabled}))`
	${q}

	background-color: var(--color-white);

	${({loading:r,disabled:t})=>{const n=P(r,t);let a,o;switch(n){case"loading":a="var(--color-blue-300)";break;case"disabled":a="var(--color-gray-400)";break;default:a="var(--color-blue-400)",o="var(--color-blue-500)"}return h`
			color: ${a};
			border: 2px solid ${a};

			&:hover {
				background-color: ${a};
				color: var(--color-white);
			}

			${n==="normal"?h`
						&:focus {
							background-color: ${a};
							color: var(--color-white);
						}

						&:active {
							background-color: ${o};
							border-color: ${o};
						}
				  `:"cursor: not-allowed;"}
		`}}
`,ze=l.button.attrs(r=>({disabled:r.loading||r.disabled}))`
	${q}

	border: 2px solid transparent;

	${({loading:r,disabled:t})=>{const n=P(r,t);let a,o,c;switch(n){case"loading":a="var(--color-gray-100)",o="var(--color-gray-200)";break;case"disabled":a="var(--color-gray-100)",o="var(--color-gray-200)";break;default:o="var(--color-gray-200)",c="var(--color-gray-300)"}return h`
			&:hover {
				background-color: ${o};
				border-color: ${o};
			}

			${n==="normal"?h`
						&:focus {
							background-color: ${o};
							border-color: ${o};
						}

						&:active {
							background-color: ${c};
							border-color: ${c};
						}
				  `:h`
						background-color: ${a};
						border-color: ${a};
						cursor: not-allowed;
				  `}
		`}}
`,Ce=l(A)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`,Ee=l(A)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`,Le=l(A)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`,te=l.span`
	margin-left: ${r=>r.leftSpacing?"var(--space-2)":"0"};
	margin-right: ${r=>r.rightSpacing?"var(--space-2)":"0"};
`,y=u=>{var s=u,{variant:r="primary",children:t,leftIcon:n,rightIcon:a,loading:o}=s,c=z(s,["variant","children","leftIcon","rightIcon","loading"]);const b=r==="primary"?Se:r==="secondary"?Ie:ze;if(o){const B=r==="primary"?Ce:r==="secondary"?Ee:Le;return i.createElement(b,x({loading:!0},c),i.createElement(B,null),i.createElement(te,{leftSpacing:!0,rightSpacing:!!a},t),a&&a)}return i.createElement(b,x({},c),n&&n,i.createElement(te,{leftSpacing:!!n,rightSpacing:!!a},t),a&&a)},Be=l.a`
	display: inline-block;
	padding: var(--space-1) var(--space-2);
	border: 2px solid transparent;
	border-radius: var(--rounded);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${r=>r.navigatedTo?h`
					font-weight: 600;
					color: var(--color-gray-800);
			  `:""}

	&:hover,
	&:focus {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	&:active {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}
`,k=l.button.attrs(r=>({disabled:r.loading||r.disabled}))`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.25rem;
	height: 2.25rem;
	border: 2px solid transparent;
	border-radius: var(--rounded);

	&:hover {
		background-color: var(--color-gray-200);
	}

	${r=>!r.loading&&!r.disabled&&h`
			&:focus {
				background-color: var(--color-gray-200);
			}

			&:active {
				background-color: var(--color-gray-300);
			}
		`}

	&:disabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-gray-200);
	}

	transition: background-color 100ms;
`,Re=l.div`
	position: relative;
	display: inline-block;
`,He=l(F)`
	position: absolute;
	z-index: 10;
	${({position:r})=>r==="top"?h`
				bottom: calc(100% + var(--space-1));
				left: 50%;
				transform: translateX(-50%);
			`:r==="left"?h`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-1));
			`:r==="right"?h`
				top: 50%;
				transform: translateY(-50%);
				left: calc(100% + var(--space-1));
			`:h`
			top: calc(100% + var(--space-1));
			left: 50%;
			transform: translateX(-50%);
		`}
	margin: 0;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--rounded);
	background-color: var(--color-gray-600);

	pointer-events: none;

	white-space: nowrap;
	line-height: 1;
	color: var(--color-gray-100);

	opacity: ${r=>r.isShown?"1":"0"};
	transition: 100ms opacity;
`,w=({children:r,content:t,position:n="bottom"})=>{const a=p.exports.useRef(null),[o,c]=p.exports.useState(!1),[u,s]=p.exports.useState(!1);return i.createElement(Re,{ref:a,onPointerEnter:()=>{c(!0)},onPointerLeave:()=>{c(!1)},onFocusCapture:()=>{s(!0)},onBlurCapture:()=>{s(!1)}},r,i.createElement(He,{position:n,isShown:o||u},t))},W=l.div`
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
`,Fe=l.input.attrs(()=>({type:"checkbox"}))`
	display: block;
	width: var(--width);
	height: var(--height);
	border-radius: var(--rounded-full);
	background-color: var(--color-gray-200);
	border: 1px solid var(--color-gray-200);
	transition: background-color 100ms, border-color 100ms;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:checked:hover,
	&:checked:focus {
		background-color: var(--color-blue-500);
		border-color: var(--color-blue-500);
	}

	&:disabled {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}

	&:disabled:checked:hover {
		background-color: var(--color-gray-500);
		border-color: var(--color-gray-500);
	}

	&:checked + ${W} {
		transform: translate(calc(var(--width) - 100% - var(--padding) * 2), -50%);
	}

	&:disabled + ${W} {
		background-color: var(--color-gray-100);
	}
`,le=l.div`
	--size: 1.125rem;
	--padding: var(--space-1);

	--width: calc(var(--size) * 2);
	--height: var(--size);

	position: relative;
`,Me=l.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${le} {
		margin-right: var(--space-2);
	}

	& > ${v} {
		margin: 0;
	}
`,D=i.forwardRef((u,c)=>{var s=u,{children:r,label:t,className:n,id:a}=s,o=z(s,["children","label","className","id"]);const b=H();return i.createElement(Me,{className:n},i.createElement(le,null,i.createElement(Fe,x({ref:c,id:b},o)),i.createElement(W,null)),i.createElement(v,{as:"label",htmlFor:b},t))}),ne=h`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-1) var(--space-2);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--rounded);
	background-color: var(--color-white);

	transition: border-color 100ms, box-shadow 100ms;

	&:disabled {
		background-color: var(--color-gray-100);
		cursor: not-allowed;
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-gray-200);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-blue-400);
		box-shadow: 0 0 0 2px var(--color-blue-200);
	}
`,E=l.input`
	${ne}
`,ce=l(ke)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`,Ne=l.input.attrs(()=>({type:"checkbox"}))`
	display: block;

	width: var(--size);
	height: var(--size);
	background-color: var(--color-white);
	border-radius: var(--rounded);
	border: 1px solid var(--color-gray-200);
	transition: border-color 100ms, background-color 100ms, box-shadow 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${ce} {
		color: var(--color-gray-100);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-blue-400);
		box-shadow: 0 0 0 2px var(--color-blue-200);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-gray-200);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`,ie=l.div`
	--size: 1.125rem;

	position: relative;
`,Te=l.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${ie} {
		margin-right: var(--space-2);
	}

	& > ${v} {
		margin: 0;
	}
`,O=i.forwardRef((u,c)=>{var s=u,{children:r,label:t,className:n,id:a}=s,o=z(s,["children","label","className","id"]);const b=H();return i.createElement(Te,{className:n},i.createElement(ie,null,i.createElement(Ne,x({ref:c,id:b},o)),i.createElement(ce,{size:16})),i.createElement(v,{as:"label",htmlFor:b},t))}),de=l.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`,je=l.input.attrs(()=>({type:"radio"}))`
	display: block;
	width: var(--size);
	height: var(--size);
	border-radius: var(--rounded-full);
	border: 1px solid var(--color-gray-200);
	background-color: var(--color-white);

	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-blue-400);
		box-shadow: 0 0 0 2px var(--color-blue-200);
	}

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${de} {
		background-color: var(--color-gray-100);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`,se=l.div`
	--padding: var(--space-1);
	--size: 1.125rem;

	position: relative;
`,Ae=l.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${se} {
		margin-right: var(--space-2);
	}

	& > ${v} {
		margin: 0;
	}
`,$=i.forwardRef((u,c)=>{var s=u,{children:r,label:t,className:n,id:a}=s,o=z(s,["children","label","className","id"]);const b=H();return i.createElement(Ae,{className:n},i.createElement(se,null,i.createElement(je,x({ref:c,id:b},o)),i.createElement(de,null)),i.createElement(v,{as:"label",htmlFor:b},t))}),Pe=i.forwardRef(({name:r=H(),disabled:t,className:n,options:a,value:o,onChange:c},u)=>i.createElement("div",{role:"radiogroup",className:n,ref:u},a.map((s,b)=>i.createElement($,{key:b,name:r,label:s.label,value:s.value,checked:o===s.value,onChange:()=>c(s.value),disabled:t||s.disabled})))),qe=l.textarea`
	${ne}
`,e=Y.exports.jsx,d=Y.exports.jsxs,L=ae(pe),g=ae(me),We=l.article`
	width: 100%;
	max-width: 45rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0.05px;
	padding-bottom: var(--space-8);
`,I=l.div`
	display: flex;
	gap: var(--space-1);
	margin: var(--space-2) 0;
`,T=l.div`
	display: flex;
	gap: var(--space-1);
	max-width: calc(30rem + var(--space-1));
	margin: var(--space-2) 0;
`,De=[{path:"/",name:"Home"},{path:"/work",name:"Work"},{path:"/blog",name:"Blog"},{path:"/about",name:"About"}];function Oe(){const[r,t]=p.exports.useState(""),[n,a]=p.exports.useState(""),[o,c]=p.exports.useState("/");return p.exports.useEffect(()=>{console.log(n)},[n]),d(We,{children:[e(ge,{children:"Components"}),e(L,{children:"Typography"}),e(g,{children:"Paragraphs"}),e(v,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),e(F,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea."}),e(g,{children:"Lists"}),d(v,{children:["Ways to declare"," ",e(j,{href:"https://en.wikipedia.org/wiki/Variable_(mathematics)",target:"_blank",children:"variables"})," ",e(oe,{children:"constants"})," in javascript:"]}),d(M,{children:[d("li",{children:[e(C,{children:"let"}),": a variable that can be changed later and"," ",e(N,{children:"function-scoped"}),"."]}),d("li",{children:[e(C,{children:"const"}),": a constant that can't be changed later and ",e(N,{children:"function-scoped"}),"."]}),d("li",{children:[d(v,{children:[e(C,{children:"var"}),": a variable that can't be changed later and ",e(N,{children:"block-scoped"}),"."]}),e(M,{children:d("li",{children:[e(v,{children:"Why shouldn't you use it?"}),d(re,{children:[d("li",{children:["You'll face some strange behavior due to being"," ",e(N,{children:"block-scoped"})]}),e("li",{children:"It's awful."}),e("li",{children:"It's the worst."})]})]})}),e(M,{children:d("li",{children:[e(v,{children:"What should you use instead?"}),d(M,{children:[d("li",{children:[e(C,{children:"var"})," for variables (",e(j,{href:"https://www.merriam-webster.com/dictionary/mutable",children:"mutable"}),")."]}),d("li",{children:[e(C,{children:"const"})," for constants (",e(j,{href:"https://www.merriam-webster.com/dictionary/immutable",children:"immutable"}),")."]})]})]})})]})]}),d(v,{children:["Steps to declare ",e(oe,{children:"them"}),":"]}),d(re,{children:[e("li",{children:"Think of the the name of it."}),e("li",{children:"Think whether it will change or not."})]}),e(g,{children:"Blockquote"}),e(fe,{children:e(v,{children:"Failure is better than doing nothing, because doing nothing is the ultimate failure."})}),e(L,{children:"Buttons"}),e(g,{children:"Primary Button"}),d(I,{children:[e(y,{leftIcon:e(m,{size:20}),children:"Normal"}),e(y,{leftIcon:e(m,{size:20}),loading:!0,children:"Loading"}),e(y,{leftIcon:e(m,{size:20}),disabled:!0,children:"Disabled"})]}),e(g,{children:"Secondary Button"}),d(I,{children:[e(y,{leftIcon:e(m,{size:20}),variant:"secondary",children:"Normal"}),e(y,{leftIcon:e(m,{size:20}),variant:"secondary",loading:!0,children:"Loading"}),e(y,{leftIcon:e(m,{size:20}),variant:"secondary",disabled:!0,children:"Disabled"})]}),e(g,{children:"Tertiary Button"}),d(I,{children:[e(y,{leftIcon:e(m,{size:20}),variant:"tertiary",children:"Normal"}),e(y,{leftIcon:e(m,{size:20}),variant:"tertiary",loading:!0,children:"Loading"}),e(y,{leftIcon:e(m,{size:20}),variant:"tertiary",disabled:!0,children:"Disabled"})]}),e(L,{children:"Nav Link"}),e(I,{children:De.map(u=>e(Be,{navigatedTo:o===u.path,as:"button",onClick:()=>c(u.path),children:u.name},u.path))}),e(L,{children:"Icon Button"}),d(I,{children:[e(w,{content:"Bottom",children:e(k,{children:e(V,{size:20})})}),e(w,{content:"Top",position:"top",children:e(k,{children:e(_,{size:20})})}),e(w,{content:"Right",position:"right",children:e(k,{children:e(K,{size:20})})}),e(w,{content:"Left",position:"left",children:e(k,{children:e(J,{size:20})})})]}),d(I,{children:[e(w,{content:"Bottom",children:e(k,{disabled:!0,children:e(V,{size:20})})}),e(w,{content:"Top",position:"top",children:e(k,{disabled:!0,children:e(_,{size:20})})}),e(w,{content:"Right",position:"right",children:e(k,{disabled:!0,children:e(K,{size:20})})}),e(w,{content:"Left",position:"left",children:e(k,{disabled:!0,children:e(J,{size:20})})})]}),e(L,{children:"Form Fields"}),e(g,{children:"Inputs"}),d(T,{children:[e(E,{placeholder:"First Name"}),e(E,{placeholder:"Last Name",disabled:!0})]}),d(T,{children:[e(E,{type:"number",placeholder:"Age",min:3,max:100}),e(E,{placeholder:"Phone number"})]}),e(T,{children:e(E,{type:"email",placeholder:"Email"})}),e(T,{children:e(qe,{placeholder:"Description",disabled:!0})}),e(g,{children:"Switch"}),e(D,{label:"I agree to sell my privacy"}),e(D,{label:"I agree to sell my privacy",disabled:!0}),e(D,{label:"I agree to sell my privacy",disabled:!0,checked:!0}),e(g,{children:"Checkbox"}),e(O,{label:"I agree to sell my privacy"}),e(O,{label:"I agree to sell my privacy",disabled:!0}),e(O,{label:"I agree to sell my privacy",disabled:!0,checked:!0}),e(g,{children:"Radio"}),e(Q,{children:"Manual (with Radio)"}),e(v,{children:"What's your favorite javascript framework?"}),d("div",{role:"radiogroup",onChange:u=>t(u.target.value),children:[e($,{name:"favorite-framework",defaultChecked:r==="react",label:"React",value:"react"}),e($,{name:"favorite-framework",defaultChecked:r==="vue",label:"Vue",value:"vue"}),e($,{name:"favorite-framework",defaultChecked:r==="angular",label:"Angular",value:"angular"}),e($,{name:"favorite-framework",defaultChecked:r==="svelte",label:"Svelte",value:"svelte"}),e($,{name:"favorite-framework",defaultChecked:r==="next",label:"Next.js",value:"next"}),e($,{name:"favorite-framework",defaultChecked:r==="blitz",label:"Blitz.js",value:"blitz"})]}),e(Q,{children:"Automatic (with RadioGroup)"}),e(v,{children:"What's your favorite mobile brand?"}),e(Pe,{options:[{label:"Apple",value:"apple"},{label:"Samsung",value:"samsung"},{label:"Huawie",value:"huawie"},{label:"Xiaomi",value:"xiaomi"}],value:n,onChange:u=>a(u)})]})}ve.render(e(i.StrictMode,{children:e(Oe,{})}),document.getElementById("root"));
