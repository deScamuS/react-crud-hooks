(this["webpackJsonpreact-without-create-react"]=this["webpackJsonpreact-without-create-react"]||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/crud-operations.bb4dad1e.jpg"},34:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(7),c=n.n(r),u=(n(39),n(40),n(41),n(42),n(33)),m=n(8),o=n(5),i=(n(64),function(e){return l.a.createElement(o.g,null,l.a.createElement(o.i,null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"User Name"),l.a.createElement("th",null,"Actions "))),l.a.createElement(o.h,null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.username),l.a.createElement("td",null,l.a.createElement(o.b,{outline:!0,color:"light-blue",size:"sm",onClick:function(){e.editRow(t)},className:"button muted-button"},"edit"),l.a.createElement(o.b,{onClick:function(n){return e.deleteUser(t.id)},className:"button muted-button",outline:!0,color:"light-blue",size:"sm"},"delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No Users"))))}),s=n(10),d=n(12),E=(n(65),function(e){var t={id:null,name:"",username:""},n=Object(a.useState)(t),r=Object(m.a)(n,2),c=r[0],u=r[1],i=function(e){var t=e.target,n=t.name,a=t.value;u(Object(d.a)({},c,Object(s.a)({},n,a)))};return l.a.createElement(o.c,null,l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),c.name&&c.username&&(e.addUser(c),u(t))}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:i}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:i}),l.a.createElement(o.b,{className:".waves-effect",outline:!0,color:"light-blue",onChange:"{handleInputChange}",onClick:function(){e.addUser(c)}},"Add User")))}),f=function(e){var t=Object(a.useState)(e.currentUser),n=Object(m.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){c(e.currentUser)}),[e]);var u=function(e){var t=e.target,n=t.name,a=t.value;c(Object(d.a)({},r,Object(s.a)({},n,a)))};return l.a.createElement(o.c,null,l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(r.id,r)}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:u}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:r.username,onChange:u}),l.a.createElement(o.b,{className:".waves-effect",outline:!0,color:"primary"},"Update User"),l.a.createElement(o.b,{className:".waves-effect",outline:!0,color:"secondary",onClick:function(){return e.setEditing(!1)}},"Cancel")))},b=n(32),p=n.n(b),h=(n(66),function(){var e=Object(a.useState)([{id:0,name:"God",username:"You are so screwed..."}]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(m.a)(c,2),s=o[0],d=o[1],b=Object(a.useState)({id:null,name:"",usernamem:""}),h=Object(m.a)(b,2),v=h[0],g=h[1];return l.a.createElement("div",{className:"container"},l.a.createElement("img",{style:{opacity:".2"},src:p.a,alt:""}),l.a.createElement("h1",{style:{color:"#34495E"}}," w/ React Hooks"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},s?l.a.createElement("div",null,l.a.createElement("h2",null,"Edit User"),l.a.createElement(f,{editing:s,setEditing:d,currentUser:v,updateUser:function(e,t){d(!1),r(n.map((function(n){return n.id===e?t:n})))}})):l.a.createElement("div",null,l.a.createElement("h2",{style:{textDecoration:"underline",color:"#34495E"}},"Add user"),l.a.createElement(E,{addUser:function(e){e.id=n.length+1,r([].concat(Object(u.a)(n),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",{style:{textDecoration:"underline",color:"#34495E"}},"View users"),l.a.createElement(i,{users:n,deleteUser:function(e){d(!1),r(n.filter((function(t){return t.id!==e})))},editRow:function(e){d(!0),g({id:e.id,name:e.name,username:e.username})}}))))});c.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.eb64d412.chunk.js.map