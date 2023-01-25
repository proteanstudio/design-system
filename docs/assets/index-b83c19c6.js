import{V as h,O as _,a as u,b as o,e as a,w as t,F as f,c as v,d as s,r as m,o as g,t as b,_ as w}from"./index-9fab0c87.js";import{C as x}from"./index-299da39d.js";var k=Object.defineProperty,y=Object.getOwnPropertyDescriptor,T=(d,c,l,n)=>{for(var r=n>1?void 0:n?y(c,l):c,i=d.length-1,e;i>=0;i--)(e=d[i])&&(r=(n?e(c,l,r):e(r))||r);return n&&r&&k(c,l,r),r};let p=class extends h{};p=T([_({components:{CodeSnippet:x}})],p);const S=v('<h1>CSS variables</h1><p> CSS variables (a.k.a. custom properties) play a vital role for this design system in propagating styles to the otherwise unreachable elements and in reducing repetition of style declarations. </p><p> High level variables, i.e., globally relevant items and element variables, are declared on the <code>:root</code> node; others can be set on more specific nodes or locally scoped, if appropriate. The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noreferrer">MDN web docs</a> provide great detail about how to use these properties. </p><section><h2 data-in-page-anchor="var-approach">Our approach</h2><section><h3>General usage</h3><p> CSS variables are incredibly flexible; this can lead to their greatest benefits and their largest pitfalls. Their versatility allows for nearly infinite configuration points on how a particular item is styled. While this is a useful tool to have available, it is not always practical to enable such granular configuration for three primary reasons: </p><ul><li>It is often not necessary, useful, or leveraged.</li><li> All additional items add potential points of design language inconsistency. </li><li> An over-abundance of configuration points can muddle the API of an item in terms of the mental model users can keep and with the code underneath that must accommodate for every permutation. </li></ul><p> To be clear, this does not mean that additional variables will not be added in the future - new variables will added when use cases are presented and evaluated for them . </p></section><section><h3>Relationships between variables</h3><p>It is important to recognize how variables are connected to one another. This is most noticeable when working to maintain readable color contrast (per <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast" target="_blank" rel="noreferrer">WCAG 2.0</a>). If mutation of a foreground color is allowed, mutation of the background color must also be allowed and vice versa. Otherwise, an incompatible color pairing may occur.</p><p>Relationships can also surface in other ways, e.g., how border-width and border-radius affect spacing. A pattern that we use is setting border colors and icon strokes to the <code>currentColor</code>. This allows us to set fewer top level variables to switch color schemes while maintaining deeper configurability when necessary.</p></section><section><h3>Separation of concerns</h3><p> A key driver of the organization of our variables is the context in which they are used. Element variables are namespaced: each of those variables is prefixed by the element name and shared element variables have more generic prefixes that include <code>--protean</code>. No elements are internally reliant on variables declared in the <code>protean-styles</code> package. </p></section></section>',4),C=o("h2",{"data-in-page-anchor":"var-list"},"Variable list",-1),z=o("h3",null,"Protean styles variables",-1),O={class:"prop-list stacked"},V={class:"prop-item"},A=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--font-family"),o("div",{class:"prop-desc"}," The font used throughout the design system. ")],-1),N={class:"prop-example"},P={class:"prop-item"},D=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--body-text-color"),o("div",{class:"prop-desc"}," The text color used throughout the design system. ")],-1),G={class:"prop-example"},I={class:"prop-item"},R=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--body-background-color"),o("div",{class:"prop-desc"},"The main background color.")],-1),W={class:"prop-example"},$={class:"prop-item"},B=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--body-font-size"),o("div",{class:"prop-desc"},"The standard font size.")],-1),E={class:"prop-example"},j={class:"prop-list stacked"},F={class:"prop-item"},H=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--brand-color-1"),o("div",{class:"prop-desc"}," The first of our three brand colors to be leveraged when color contrast allows. ")],-1),U={class:"prop-example"},L={class:"prop-item"},M=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--brand-color-2"),o("div",{class:"prop-desc"}," The second of our three brand colors to be leveraged when color contrast allows. ")],-1),Q={class:"prop-example"},q={class:"prop-item"},J=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--brand-color-3"),o("div",{class:"prop-desc"}," The third of our three brand colors to be leveraged when color contrast allows. ")],-1),K={class:"prop-example"},X={class:"prop-list stacked"},Y={class:"prop-item"},Z=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--action-color"),o("div",{class:"prop-desc"}," The color used as a default for action elements such as buttons or checkboxes. ")],-1),oo={class:"prop-example"},so={class:"prop-item"},eo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--action-contrast-color"),o("div",{class:"prop-desc"},[s(" The color used to contrast the "),o("code",null,"--action-color"),s(" as a foreground or background. ")])],-1),ao={class:"prop-example"},to={class:"prop-item"},ro=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--action-hover-color"),o("div",{class:"prop-desc"}," The color used as a default for the hover state of action elements such as buttons. ")],-1),co={class:"prop-example"},no={class:"prop-item"},lo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--action-hover-contrast-color"),o("div",{class:"prop-desc"},[s(" The color used to contrast the "),o("code",null,"--action-hover-color"),s(" as a foreground or background. ")])],-1),io={class:"prop-example"},po={class:"prop-list stacked"},ho={class:"prop-item"},_o=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--link-color"),o("div",{class:"prop-desc"},"The color of text links.")],-1),uo={class:"prop-example"},fo={class:"prop-item"},vo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--link-hover-color"),o("div",{class:"prop-desc"}," The color of text links while hovered. ")],-1),mo={class:"prop-example"},go={class:"prop-item"},bo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--link-underline-color"),o("div",{class:"prop-desc"}," The color of the line underneath text links. ")],-1),wo={class:"prop-example"},xo={class:"prop-item"},ko=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--touch-zone-size"),o("div",{class:"prop-desc"}," The minimum size of an interaction element to allow for consistent presses when using a touch screen device. ")],-1),yo={class:"prop-example"},To={class:"prop-item"},So=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--disabled-opacity"),o("div",{class:"prop-desc"}," The opacity of an interaction element while it is in a disabled state. ")],-1),Co={class:"prop-example"},zo={class:"prop-item"},Oo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"}," --code-background-color"),o("div",{class:"prop-desc"},[s(" The background color of "),o("code",null,"code"),s(" elements. ")])],-1),Vo={class:"prop-example"},Ao=o("h3",null,"Generic element variables",-1),No={class:"prop-list stacked"},Po={class:"prop-item"},Do=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-info"),o("div",{class:"prop-desc"}," The color used for informational statuses. ")],-1),Go={class:"prop-example"},Io={class:"prop-item"},Ro=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-info-contrast"),o("div",{class:"prop-desc"}," The color used as a contrasting foreground or background for informational statuses. ")],-1),Wo={class:"prop-example"},$o={class:"prop-item"},Bo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-success"),o("div",{class:"prop-desc"}," The color used for success statuses. ")],-1),Eo={class:"prop-example"},jo={class:"prop-item"},Fo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-success-contrast"),o("div",{class:"prop-desc"}," The color used as a contrasting foreground or background for success statuses. ")],-1),Ho={class:"prop-example"},Uo={class:"prop-item"},Lo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-warning"),o("div",{class:"prop-desc"}," The color used for warning statuses. ")],-1),Mo={class:"prop-example"},Qo={class:"prop-item"},qo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-warning-contrast"),o("div",{class:"prop-desc"}," The color used as a contrasting foreground or background for warning statuses. ")],-1),Jo={class:"prop-example"},Ko={class:"prop-item"},Xo=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-error"),o("div",{class:"prop-desc"}," The color used for error statuses. ")],-1),Yo={class:"prop-example"},Zo={class:"prop-item"},os=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-status-error-contrast"),o("div",{class:"prop-desc"}," The color used as a contrasting foreground or background for error statuses. ")],-1),ss={class:"prop-example"},es={class:"prop-list stacked"},as={class:"prop-item"},ts=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"}," --protean-dropdown-background-color "),o("div",{class:"prop-desc"}," The background color of a dropdown. ")],-1),rs={class:"prop-example"},cs={class:"prop-item"},ns=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-dropdown-text-color"),o("div",{class:"prop-desc"}," The text color of content within a dropdown. ")],-1),ls={class:"prop-example"},is={class:"prop-item"},ds=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-dropdown-border-color"),o("div",{class:"prop-desc"}," The border color of a dropdown. ")],-1),ps={class:"prop-example"},hs={class:"prop-item"},_s=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"},"--protean-dropdown-box-shadow"),o("div",{class:"prop-desc"}," The box shadow style of a dropdown. ")],-1),us={class:"prop-example"},fs={class:"prop-item"},vs=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"}," --protean-dropdown-hover-background-color "),o("div",{class:"prop-desc"}," The background color of a dropdown item when hovered or active. ")],-1),ms={class:"prop-example"},gs={class:"prop-item"},bs=o("div",{class:"prop-info"},[o("h4",{class:"prop-name"}," --protean-dropdown-hover-text-color "),o("div",{class:"prop-desc"}," The text color of a dropdown item when hovered or active. ")],-1),ws={class:"prop-example"},xs=o("h2",{"data-in-page-anchor":"var-light-mode"},"Light mode",-1),ks=o("p",null,[s("CSS variables also allow for simple implementations of new color schemes, e.g. light or dark mode. Our basic color choices led us to bind several colors together and further simplified the process of implementing a light mode. Establishing relationships between variables and using CSS values such as "),o("code",null,"currentColor"),s(" and "),o("code",null,"inherit"),s(" are valuable here.")],-1),ys=o("p",null,"Our light mode SCSS is the below:",-1);function Ts(d,c,l,n,r,i){const e=m("code-snippet");return g(),u(f,null,[S,o("section",null,[C,o("section",null,[z,o("ul",O,[o("li",V,[A,o("div",N,[a(e,{language:"css"},{default:t(()=>[s(" --font-family: 'Quicksand', 'Heiti SC', sans-serif; ")]),_:1})])]),o("li",P,[D,o("div",G,[a(e,{language:"css"},{default:t(()=>[s(" --body-text-color: #fafafa; ")]),_:1})])]),o("li",I,[R,o("div",W,[a(e,{language:"css"},{default:t(()=>[s(" --body-background-color: #1a1a1a; ")]),_:1})])]),o("li",$,[B,o("div",E,[a(e,{language:"css"},{default:t(()=>[s(" --body-font-size: 1rem; ")]),_:1})])])]),o("ul",j,[o("li",F,[H,o("div",U,[a(e,{language:"css"},{default:t(()=>[s(" --brand-color-1: #f72585; ")]),_:1})])]),o("li",L,[M,o("div",Q,[a(e,{language:"css"},{default:t(()=>[s(" --brand-color-2: #7209b7; ")]),_:1})])]),o("li",q,[J,o("div",K,[a(e,{language:"css"},{default:t(()=>[s(" --brand-color-3: #ff5f40; ")]),_:1})])])]),o("ul",X,[o("li",Y,[Z,o("div",oo,[a(e,{language:"css"},{default:t(()=>[s(" --action-color: #c7b5fb; ")]),_:1})])]),o("li",so,[eo,o("div",ao,[a(e,{language:"css"},{default:t(()=>[s(" --action-contrast-color: #000000; ")]),_:1})])]),o("li",to,[ro,o("div",co,[a(e,{language:"css"},{default:t(()=>[s(" --action-hover-color: #7b57e4; ")]),_:1})])]),o("li",no,[lo,o("div",io,[a(e,{language:"css"},{default:t(()=>[s(" --action-hover-contrast-color: #ffffff; ")]),_:1})])])]),o("ul",po,[o("li",ho,[_o,o("div",uo,[a(e,{language:"css"},{default:t(()=>[s(" --link-color: inherit; ")]),_:1})])]),o("li",fo,[vo,o("div",mo,[a(e,{language:"css"},{default:t(()=>[s(" --link-hover-color: inherit; ")]),_:1})])]),o("li",go,[bo,o("div",wo,[a(e,{language:"css"},{default:t(()=>[s(" --link-underline-color: var(--brand-color-1); ")]),_:1})])]),o("li",xo,[ko,o("div",yo,[a(e,{language:"css"},{default:t(()=>[s(" --touch-zone-size: 42px; ")]),_:1})])]),o("li",To,[So,o("div",Co,[a(e,{language:"css"},{default:t(()=>[s(" --disabled-opacity: 0.4; ")]),_:1})])]),o("li",zo,[Oo,o("div",Vo,[a(e,{language:"css"},{default:t(()=>[s(" --code-background-color: #393939; ")]),_:1})])])])]),o("section",null,[Ao,o("ul",No,[o("li",Po,[Do,o("div",Go,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-info: #0965b7; ")]),_:1})])]),o("li",Io,[Ro,o("div",Wo,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-info-contrast: #ffffff; ")]),_:1})])]),o("li",$o,[Bo,o("div",Eo,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-success: #1d820f; ")]),_:1})])]),o("li",jo,[Fo,o("div",Ho,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-success-contrast: #ffffff; ")]),_:1})])]),o("li",Uo,[Lo,o("div",Mo,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-warning: #e6c400; ")]),_:1})])]),o("li",Qo,[qo,o("div",Jo,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-warning-contrast: #1a1a1a; ")]),_:1})])]),o("li",Ko,[Xo,o("div",Yo,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-error: #ab0000; ")]),_:1})])]),o("li",Zo,[os,o("div",ss,[a(e,{language:"css"},{default:t(()=>[s(" --protean-status-error-contrast: #ffffff; ")]),_:1})])])]),o("ul",es,[o("li",as,[ts,o("div",rs,[a(e,{language:"css"},{default:t(()=>[s(" --protean-dropdown-background-color: var(--body-background-color); ")]),_:1})])]),o("li",cs,[ns,o("div",ls,[a(e,{language:"css"},{default:t(()=>[s(" --protean-dropdown-text-color: var(--body-text-color); ")]),_:1})])]),o("li",is,[ds,o("div",ps,[a(e,{language:"css"},{default:t(()=>[s(" --protean-dropdown-border-color: currentColor; ")]),_:1})])]),o("li",hs,[_s,o("div",us,[a(e,{language:"css"},{default:t(()=>[s(" --protean-dropdown-box-shadow: 0 3px 5px -2px rgba(255, 255, 255, 0.7); ")]),_:1})])]),o("li",fs,[vs,o("div",ms,[a(e,{language:"css"},{default:t(()=>[s(" --protean-dropdown-hover-background-color: #353535; ")]),_:1})])]),o("li",gs,[bs,o("div",ws,[a(e,{language:"css"},{default:t(()=>[s(" --protean-dropdown-hover-text-color: #353535; ")]),_:1})])])])])]),o("section",null,[xs,ks,ys,a(e,{language:"css"},{default:t(()=>[s(b(`:root {
            /* The variables listed above are here */

            &.light {
                --body-text-color: #1a1a1a;
                --body-background-color: #fdfdfd;

                --action-color: var(--brand-color-2);
                --action-contrast-color: #ffffff;
                --action-hover-color: #5a0d8d;
        
                --link-underline-color: var(--brand-color-2);

                --code-background-color: #f2f2f2;
        
                --protean-message-background-color: #f7f7f7;
                --protean-message-text-color: #000000;
                --protean-message-border-color: #dadada;
        
                --protean-button-icon-hover-background-color: rgba(114, 9, 183, 0.2);
        
                --protean-dropdown-box-shadow: 0 3px 5px -2px rgba(0, 0, 0, 0.5);
                --protean-dropdown-hover-background-color: #efefef;
        
                --protean-select-separator-color: #dadada;
        
                --protean-checkbox-toggle-path-color: #979797;
        
                --protean-tab-container-separator-color: #cdcdcd;
                --protean-tab-container-hover-background-color: #efefef;
            }
        }`),1)]),_:1})])],64)}const zs=w(p,[["render",Ts]]);export{zs as default};