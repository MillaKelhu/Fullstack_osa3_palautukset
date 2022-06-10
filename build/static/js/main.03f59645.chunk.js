(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var o=t(19),c=t.n(o),r=t(9),a=t(3),u=t(2),l=t(5),s=t.n(l),i="http://localhost:3001/api/persons",d=function(e){return e.then((function(e){return e.data}))},b=function(){var e=s.a.get(i);return d(e)},j=function(e){var n=s.a.post(i,e);return d(n)},f=function(e){var n=s.a.delete("".concat(i,"/").concat(e));return d(n)},m=function(e,n){var t=s.a.put("".concat(i,"/").concat(e),n);return d(t)},h=t(0),p=function(e){var n=e.person,t=e.deletePerson;return Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]})},v=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return Object(h.jsx)(p,{person:e,deletePerson:t},e.name)}))},O=function(e){var n=e.query;return Object(h.jsxs)("div",{children:[n.name," ",Object(h.jsx)("input",{value:n.value,onChange:n.handler})]})},g=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"message",children:n})},x=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],o=n[1],c=Object(u.useState)(""),l=Object(a.a)(c,2),s=l[0],i=l[1],d=Object(u.useState)(""),p=Object(a.a)(d,2),w=p[0],y=p[1],N=Object(u.useState)(""),k=Object(a.a)(N,2),S=k[0],C=k[1],D=Object(u.useState)(null),P=Object(a.a)(D,2),q=P[0],A=P[1],E=Object(u.useState)(null),I=Object(a.a)(E,2),J=I[0],L=I[1],T=function(){console.log("effect is being used"),b().then((function(e){console.log("persons fetched"),o(e)}))};Object(u.useEffect)(T,[]),console.log("render",t.length,"persons");var B=function(){j({name:s,number:w}).then((function(e){o(t.concat(e)),i(""),y("")})),A("Added ".concat(s)),G()},U=function(){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var e=t.find((function(e){return e.name===s}));console.log("update number of ".concat(e.id));var n=Object(r.a)(Object(r.a)({},e),{},{number:w});m(e.id,n).then((function(n){o(t.map((function(t){return t.id!==e.id?t:n}))),i(""),y(""),A("Updated ".concat(e.name,"'s number")),G()})).catch((function(e){L("Information of ".concat(s," has already been removed from the server")),H()})).then(T)}else console.log("don't update anything")},z=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})),F=[{name:"name",value:s,handler:function(e){console.log(e.target.value),i(e.target.value)}},{name:"number",value:w,handler:function(e){console.log(e.target.value),y(e.target.value)}}],G=function(){setTimeout((function(){return A(null)}),3e3)},H=function(){setTimeout((function(){return L(null)}),3e3)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(g,{message:q}),Object(h.jsx)(x,{message:J}),Object(h.jsxs)("form",{children:["show names with",Object(h.jsx)("input",{value:S,onChange:function(e){console.log(e.target.value),C(e.target.value)}})]}),Object(h.jsx)("h2",{children:"Add a new contact"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("submit clicked",e.target);var n=t.every((function(e){return s!==e.name}));console.log("No name duplicates:",n);var o=t.every((function(e){return w!==e.number}));console.log("No number duplicates:",o),n&&o?B():!1===n?(console.log("Name",s,"is a duplicate"),U()):(console.log("Number",w,"is a duplicate"),window.alert("Number ".concat(w," is already added to the phonebook")))},children:[F.map((function(e){return Object(h.jsx)(O,{query:e},e.name)})),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(v,{persons:z,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))?(console.log("Delete person ".concat(e.id)),f(e.id).then(T),A("Deleted ".concat(e.name)),G()):console.log("Delete no one")}})]})};t(49);c.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.03f59645.chunk.js.map