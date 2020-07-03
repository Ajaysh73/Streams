(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,n){e.exports=n(239)},239:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),i=n.n(c),o=n(12),s=n(10),u=n(109),l=n(11),m=n(2),p=n(1),d=n(8),h=n(7),f=n(24),v=n.n(f),E=n(13),b=n(38),y=n(110),g=n.n(y).a.create({baseURL:"http://localhost:3001"}),S=n(18),O=Object(S.a)(),j=function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=n(241),N=n(240),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(t){var n=t.input,a=t.label,c=t.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},n,{autoComplete:"off"})),e.renderError(c))},e.onSubmit=function(t){e.props.onSubmit(t)},e}return Object(p.a)(n,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(I.a,{name:"title",component:this.renderInput,label:"Enter the title"}),r.a.createElement(I.a,{name:"description",component:this.renderInput,label:"Enter the description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),n}(r.a.Component),w=Object(N.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a title"),t}})(k),A=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.createStream(t)},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Create a Stream"),r.a.createElement(w,{onSubmit:this.onSubmit}))}}]),n}(r.a.Component),C=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n,a){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,g.post("/streams",Object(E.a)(Object(E.a)({},e),{},{userId:r}));case 3:c=t.sent,n({type:"CREATE_STREAM",payload:c.data}),O.push("/");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(A),T=n(46),_=n.n(T),D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.editStream(e.props.match.params.id,t)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("component did mount"),this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," Edit a Stream"),r.a.createElement(w,{initialValues:this.props.stream&&_.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit}))}}]),n}(r.a.Component),R=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:j,editStream:function(e,t){return function(){var n=Object(b.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),O.push("/");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(D),x=n(23),M=function(e){return i.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(t)},className:"ui button negative"},"Delete"),r.a.createElement(x.a,{to:"/",className:"ui button"},"Cancel")))}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the strea, with title ".concat(this.props.stream.title):"Are you sure you want to delete this stream?"}},{key:"render",value:function(){return r.a.createElement("div",null,"StreamDelete",r.a.createElement(M,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return O.push("/")}}))}}]),n}(r.a.Component),L=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:j,deleteStream:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),O.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(U),P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(x.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(x.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(x.a,{to:"/streams/".concat(t.id)},r.a.createElement("h4",null,t.title)),r.a.createElement("div",{className:"description"},t.description)))}))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(x.a,{to:"/streams/new",className:"ui button primary"}," ","Create Stream"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Streams"),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),n}(r.a.Component),F=Object(o.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(P),q=n(112),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).videoRef=r.a.createRef(),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"buildPlayer",value:function(){var e=this.props.match.params.id;!this.player&&this.props.stream&&(this.player=q.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load())}},{key:"render",value:function(){if(!this.props.stream)return r.a.createElement("div",null,"Loading..");var e=this.props.stream,t=e.title,n=e.description;return r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),r.a.createElement("h1",null," ",t," "),r.a.createElement("h5",null," ",n," "))}}]),n}(r.a.Component),H=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:j})(G),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignIn=function(){e.auth.signIn()},e.onSignOut=function(){e.auth.signOut()},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"226971731321-5q1u6mg44ar6hohm6kqiqamb2gl7jtc6.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?(console.log("Signed in already"),r.a.createElement("button",{onClick:this.onSignOut,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign out")):(console.log("Signed out already"),r.a.createElement("button",{onClick:this.onSignIn,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),n}(r.a.Component),J=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(B),V=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(x.a,{to:"/",className:"item"},"Streamy"),r.a.createElement("div",{className:"right menu"},r.a.createElement(x.a,{to:"/",className:"item"},"All Streams"),r.a.createElement(J,null)))},X=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.b,{history:O},r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:F}),r.a.createElement(l.a,{path:"/streams/new",exact:!0,component:C}),r.a.createElement(l.a,{path:"/streams/edit/:id",exact:!0,component:R}),r.a.createElement(l.a,{path:"/streams/delete/:id",exact:!0,component:L}),r.a.createElement(l.a,{path:"/streams/:id",exact:!0,component:H})))))},Y=n(242),K={isSignedIn:null,userId:null},z=n(37),Q=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(E.a)(Object(E.a)({},e),{},{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(E.a)(Object(E.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},form:Y.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(E.a)(Object(E.a)({},e),_.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(E.a)(Object(E.a)({},e),{},Object(z.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return _.a.omit(e,t.payload);default:return e}}}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Z=Object(s.e)(Q,W(Object(s.a)(u.a)));i.a.render(r.a.createElement(o.a,{store:Z},r.a.createElement(X,null)),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.5eafe386.chunk.js.map