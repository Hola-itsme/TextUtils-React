(this.webpackJsonputility=this.webpackJsonputility||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})})}function d(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{background:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"mybox",rows:"12"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to upperCase!","Success")},children:"Convet To Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to lowerCase!","Success")},children:"Convet To Lowercase "}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){s(""),e.showAlert("Text is Cleared!","Success")},children:"Clear Text "}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("ExtraSpaces  removed!","Success")},children:"Remove Extra Space "})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[" ",c.split(" ").length," words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").length," Minutes Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Enter something in the textbox Above to Preview here "})]})]})}i.defaultProps={title:"set title here",aboutText:"about "};var b=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),":",e.alert.msg]})};var h=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Textutils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.background="#042743",u(" Dark Mode has been Enabled"," success"),document.title="TextUtils-Dark Mode"):(c("light"),document.body.style.background="white",u(" Light Mode has been Enabled","success"),document.title="TextUtils-Light Mode")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3 ",children:Object(o.jsx)(d,{showAlert:u,heading:"Enter Your Text To Analyze Below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.53d7a3df.chunk.js.map