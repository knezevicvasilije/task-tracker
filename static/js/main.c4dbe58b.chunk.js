(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(7),s=n.n(o),i=(n(15),n(9)),d=n(5),l=n(2),j=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})};j.defaultProps={color:"steelblue"};var u=j,b=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(u,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var h=b,O=n(8),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(m,{task:e,onDelete:n,onToggle:r},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(""),d=Object(l.a)(i,2),j=d[0],u=d[1],b=Object(r.useState)("false"),h=Object(l.a)(b,2),O=h[0],m=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:j,reminder:O}),s(""),u(""),m(!1)):alert("Please add a task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & Time"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})};var k=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2:30pm",reminder:!1}]),s=Object(l.a)(o,2),j=s[0],u=s[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(c.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(d.a)({id:t},e);u([].concat(Object(i.a)(j),[n]))}}),j.length>0?Object(c.jsx)(x,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No tasks to show"]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.c4dbe58b.chunk.js.map