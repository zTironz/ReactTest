(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),s=a.n(l),o=(a(36),a(10)),i=a(11),r=a(14),m=a(13),u=a(9),h=a(1),d=a(29),g=a.n(d),v=(a(54),a(12)),E=(a(55),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLiked:!1,counter:0},e.handleClick=e.handleClick.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("\u044f \u0441\u0435\u0439\u0447\u0430\u0441 \u0431\u0443\u0434\u0443 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f")}},{key:"componentWillUnmount",value:function(){console.log("\u044f \u0431\u0443\u0434\u0443 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f (")}},{key:"handleClick",value:function(){var e=this.state,t=e.isLiked,a=e.counter;this.setState({isLiked:!t,counter:a+1})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.logo,n=e.title,l=e.text,s=this.state,o=s.isLiked,i=s.counter,r=new Date,m="".concat(r.getDate(),"/").concat(r.getMonth()+1,"/").concat(r.getFullYear());console.log(r),console.log(o);var u="message-header-button ".concat(o?"is-active":"");return c.a.createElement("div",{className:"message"},c.a.createElement("div",{className:"message-header"},c.a.createElement("img",{src:a,alt:"",className:"message-header-image"}),c.a.createElement("div",{className:"message-header-text_block"},c.a.createElement("p",{className:"message-header-title"},t),c.a.createElement("span",{className:"message-header-date"},m)),c.a.createElement("span",{className:"message-header-counter"},i),c.a.createElement("button",{className:u,onClick:this.handleClick})),c.a.createElement("div",{className:"message-body"},c.a.createElement("h2",{className:"message-body-title"},n),c.a.createElement("p",{className:"message-body-content"},l)))}}]),a}(c.a.Component)),p=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={userData:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://randomuser.me/api?results=50").then((function(t){e.setState({userData:t.data.results})}))}},{key:"render",value:function(){var e=this.state.userData;return console.log(e,"user data"),c.a.createElement(u.a,null,c.a.createElement("nav",{className:"navigation"},c.a.createElement("ul",{className:"navigation-list"},c.a.createElement("li",null,c.a.createElement(u.b,{to:"/",className:"navigation-link"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/hello",className:"navigation-link"},"Hello")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/signin",className:"navigation-link"},"Reg")))),c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",exact:!0},c.a.createElement("div",{className:"App"},e.map((function(e){var t=e.name,a=e.picture,n=e.location,l=e.id;return c.a.createElement(E,{name:"".concat(t.first," ").concat(t.last),logo:a.thumbnail,title:n.country,text:n.city,key:l.value})})))),c.a.createElement(h.a,{path:"/hello"},"Hello!"),c.a.createElement(h.a,{path:"/signin"},"Registattion!")))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.2912e0d5.chunk.js.map