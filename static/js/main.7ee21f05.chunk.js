(this.webpackJsonptriunvirato=this.webpackJsonptriunvirato||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(24),s=n.n(i),r=n(13),l=n(14),j=n(17),u=n(16),o=n(15),A=(n(30),n(10)),d=n(21);n(31);d.a.initializeApp({apiKey:"AIzaSyBLKDjgyS4ChX_MPyYVblV8f4CYAfS82GI",authDomain:"triunvirato-7e9c5.firebaseapp.com",projectId:"triunvirato-7e9c5",storageBucket:"triunvirato-7e9c5.appspot.com",messagingSenderId:"381051721887",appId:"1:381051721887:web:87779d678ffc50fb4eeaaa",measurementId:"G-PT46SGVJFJ"});var m=d.a,h=new m.auth.GoogleAuthProvider,b=function(e){return m.auth().signInWithPopup(e).then((function(e){return e.user})).catch((function(e){return e}))},g=n(0),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={active:!0,isSignedIn:!1},c.callbacks={signInSuccess:function(){return!1}},c.componentDidMount=function(){m.auth().onAuthStateChanged((function(e){c.setState({isSignedIn:!!e})}))},c.handleClick=c.handleClick.bind(Object(o.a)(c)),c}return Object(l.a)(n,[{key:"handleClick",value:function(e){b(e)}},{key:"render",value:function(){var e=this;return Object(g.jsx)("header",{className:"header",children:Object(g.jsxs)("nav",{className:"nav",children:[Object(g.jsx)(A.b,{className:"logo",exact:"true",to:"/",children:"Triunvirato"}),Object(g.jsx)("button",{"aria-label":this.state.active?"Abrir men\xfa":"Cerrar men\xfa",onClick:function(){return e.setState({active:!e.state.active})},className:"nav-toggle",children:Object(g.jsx)("i",{className:"fas fa-bars"})}),Object(g.jsxs)("ul",{className:this.state.active?"nav-menu":"nav-menu nav-menu_visible",children:[Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(A.b,{className:"nav-menu-link",exact:"true",to:"/unirse",children:"Unirse"})}),this.state.isSignedIn?Object(g.jsxs)("div",{className:"dropdown-container",children:[Object(g.jsx)("span",{className:"nav-menu-item cuentaButton",children:m.auth().currentUser.displayName}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(A.b,{className:"nav-menu-link",exact:"true",to:"/unirse",children:"Cuenta"})}),Object(g.jsx)("li",{className:"nav-menu-item cuentaButton",onClick:function(){return m.auth().signOut()},children:Object(g.jsx)(A.b,{className:"nav-menu-link",exact:"true",to:"/",children:"Cerrar sesion"})})]})]}):Object(g.jsx)("li",{className:"nav-menu-item cuentaButton",onClick:function(){return e.handleClick(h)},children:"Iniciar Sesi\xf3n"})]})]})})}}]),n}(c.Component),x=function(e){return Object(g.jsx)("div",{children:e.children})},p=(n(41),n(42),n.p+"static/media/logo.66259d0c.jpg"),N=n.p+"static/media/valorant.c4206a2e.png",v=function(){return Object(g.jsx)(x,{children:Object(g.jsxs)("div",{className:"main-container",children:[Object(g.jsx)("div",{className:"logo-container",children:Object(g.jsx)("img",{className:"img-logo animate__animated animate__bounce",src:p,alt:"Triunvirato"})}),Object(g.jsx)("div",{className:"caract",children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"item",children:Object(g.jsxs)("center",{children:[Object(g.jsx)("div",{className:"ico-item",children:Object(g.jsx)("i",{className:"fas fa-handshake"})}),Object(g.jsx)("div",{className:"text-item",children:"Conoce"})]})}),Object(g.jsx)("div",{className:"item",children:Object(g.jsxs)("center",{children:[Object(g.jsx)("div",{className:"ico-item",children:Object(g.jsx)("i",{className:"fas fa-gamepad"})}),Object(g.jsx)("div",{className:"text-item",children:"Juega"})]})}),Object(g.jsx)("div",{className:"item",children:Object(g.jsxs)("center",{children:[Object(g.jsx)("div",{className:"ico-item",children:Object(g.jsx)("i",{className:"fas fa-trophy"})}),Object(g.jsx)("div",{className:"text-item",children:"Compite"})]})})]})}),Object(g.jsxs)("div",{className:"juegos",children:[Object(g.jsx)("img",{src:N,className:"juego-img-valorant",alt:"Valorant"}),Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACWCAMAAADHTy5XAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMA4B9QsECQwIDwcBAL0CkiYS/6pIqFBwL2mRr8qzUUBNzztp91O7vsVuRE6dfDlNNIe0xpZcduXMsqx7T3AAARTUlEQVR42uzBMQEAAAwCIAPsXv+o1vAAAgAAAAAAAAAAAAAAAADAmL9QduxsOVEgDMPwJ9gEB4TBBVHBjWBMyCRkm/G7/xsb2wYXEjtzZFJTPidWafNb5VvY1XwjXsRXXHwfPTLGxbfhpWQ6wcX34KSUxvEUIS6+3pKl+7SPiy/nRp2I0izt9n7i4ssN0OXG7SXGt/FCculPAIRix0mEkjkwRAYlEB4AX1QSRySouJnYQCIMSL7wJ2JnkIkE6lrHE8J1MqF4+BKjuxfbsiz7xypxccg8JOCaWiPseX/63eXV29VVM+3/FiMcufvnMXC6JLuQDO6INku5YZMFJD9iE4DFykKwgVJ2Qwlt3mTYrrJMViJckytglPPNb3ERtFiycH5iOOOBdd9HxeGhJQJqif3InMdmwww7g45+zLtd/XF6Mghtm5yF2GiyFuRhH8RtsArCqKgHeQRizr3pL+YjkzMnZeU3zu25zXfiKknCQ0OsqDXBVtHmR9Z3KBnUCrCX1X8X0sBGmyakB1o2yWsABasgFkr7IH22DBjbIBE7P8sgbey497wfciwwMn002TO2nBDn5TT5kfkKUi3AE66p01IjY56SutgSn3etDMnWkuxkJ4JYMkiH8xHCe0Yng/gdDoOg2AZ5XcuA9SDw5iqs+tZSe4Kz8hv82FgVeeKhFYbUWWtGKm+qyE/qjAdHN8gsGPTI21ATJJ6xi2tG1skgS5bkhe6S7L0LghUZV3Fylvo4JyPnKZEHoBYgwZI6Xdkjp84CUp86M+x4OReOepyV1IOs9n9ZqUmu5rR/lEEe6kFW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",className:"juego-img-r6",alt:"Rainbow Six"})]}),Object(g.jsx)("div",{className:"unirte-btn",children:Object(g.jsx)(A.b,{exact:"true",to:"/unirse",children:Object(g.jsxs)("button",{className:"unete-btn",children:[Object(g.jsx)("i",{className:"fab fa-discord"}),"Unete!"]})})})]})})},B=(n(43),n(44),n.p+"static/media/logoText.fc1ed041.png"),C=function(){return Object(g.jsx)(x,{children:Object(g.jsx)("div",{className:"container-box",children:Object(g.jsxs)("div",{className:"content-box",children:[Object(g.jsx)("div",{class:"mask"}),Object(g.jsx)("div",{className:"content-left",children:Object(g.jsx)("center",{children:Object(g.jsxs)("div",{className:"glitch-img",children:[Object(g.jsx)("img",{src:B,className:"content-img op",alt:"Triunvirato"}),Object(g.jsx)("img",{src:B,className:"content-img p-a",alt:"Triunvirato"}),Object(g.jsx)("img",{src:B,className:"content-img p-a",alt:"Triunvirato"}),Object(g.jsx)("img",{src:B,className:"content-img p-a",alt:"Triunvirato"})]})})}),Object(g.jsx)("div",{className:"content-rigt",children:Object(g.jsx)("iframe",{title:"Discord",src:"https://discord.com/widget?id=612349868182077462&theme=light",className:"discord",allowtransparency:"true",frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})})]})})})},k=n.p+"static/media/404.c2994861.svg",I=(n(45),function(){return Object(g.jsx)(x,{children:Object(g.jsx)("div",{className:"container-404",children:Object(g.jsxs)("center",{children:[Object(g.jsx)("img",{src:k,alt:"404"}),Object(g.jsx)("h1",{children:"P\xe1gina no econtrada"})]})})})}),Q=n(3),E=(n(46),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"authenticate",value:function(){return new Promise((function(e){return setTimeout(e,2e3)}))}},{key:"componentDidMount",value:function(){this.authenticate().then((function(){var e=document.getElementById("ipl-progress-indicator");e&&(e.classList.add("available"),setTimeout((function(){e.outerHTML=""}),2e3))}))}},{key:"render",value:function(){return Object(g.jsxs)(A.a,{children:[Object(g.jsx)(O,{}),Object(g.jsxs)(Q.c,{children:[Object(g.jsx)(Q.a,{exact:!0,path:"/",children:Object(g.jsx)(v,{})}),Object(g.jsx)(Q.a,{path:"/unirse",children:Object(g.jsx)(C,{})}),Object(g.jsx)(Q.a,{path:"/error",children:Object(g.jsx)(I,{})}),Object(g.jsx)(Q.a,{path:"*",children:Object(g.jsx)(I,{})})]})]})}}]),n}(c.Component));s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(A.a,{children:Object(g.jsx)(E,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7ee21f05.chunk.js.map