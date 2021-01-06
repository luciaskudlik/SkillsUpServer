(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{23:function(e,t,s){},58:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),o=s.n(a),i=s(33),r=s.n(i),c=s(4),l=s(2),h=s(3),d=s(6),p=s(5),u=(s(23),s(40),s(7)),j=s(15),b=s(14),g=s.n(b),m=new(function(){function e(){Object(l.a)(this,e),this.auth=g.a.create({baseURL:"https://skills-up-app.herokuapp.com",withCredentials:!0})}return Object(h.a)(e,[{key:"signup",value:function(e,t,s,n){return this.auth.post("/auth/signup",{username:e,img:t,email:s,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"uploadImage",value:function(e){return this.auth.post("/auth/upload",e,{withCredentials:!0}).then((function(e){return e.data}))}}]),e}()),O=o.a.createContext(),x=O.Consumer,f=O.Provider,v=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,s,n,a){m.signup(t,s,n,a).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,s){m.login(t,s).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){m.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,s=e.isLoading,a=e.user,o=this.signup,i=this.login,r=this.logout;return s?Object(n.jsx)("p",{children:"Loading"}):Object(n.jsx)(f,{value:{isLoggedIn:t,isLoading:s,user:a,signup:o,login:i,logout:r},children:this.props.children})}}]),s}(o.a.Component),k=function(e){return function(t){Object(d.a)(a,t);var s=Object(p.a)(a);function a(){return Object(l.a)(this,a),s.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)(x,{children:function(s){var a=s.isLoggedIn,o=s.isLoading,i=s.user,r=s.signup,c=s.login,l=s.logout;return Object(n.jsx)(e,Object(j.a)(Object(j.a)({},t.props),{},{isLoggedIn:a,isLoading:o,user:i,signup:r,login:c,logout:l}))}})}}]),a}(o.a.Component)},y=(s(58),k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleDayMode=function(){e.props.setDayMode()},e.handleNightMode=function(){e.props.setNightMode()},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"nav-left",children:[Object(n.jsx)(c.b,{to:"/",className:"navbar-brand",children:"SkillsUp"}),Object(n.jsx)(c.b,{to:"/private/profile",children:this.props.user?Object(n.jsx)("img",{src:this.props.user.img}):null})]}),Object(n.jsxs)("span",{id:"mode-buttons",children:[Object(n.jsx)("button",{id:"sun-btn",onClick:this.handleDayMode,children:Object(n.jsx)("i",{class:"fas fa-sun"})}),Object(n.jsx)("button",{id:"moon-btn",onClick:this.handleNightMode,children:Object(n.jsx)("i",{class:"fas fa-moon"})})]}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)(c.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"}),Object(n.jsx)(c.b,{className:"nav-link","aria-current":"page",to:"/instructions",children:"How it works"}),Object(n.jsx)(c.b,{className:"nav-link",to:"/private/profile",children:"My Profile"}),this.props.isLoggedIn?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(c.b,{onClick:this.props.logout,className:"nav-link",children:"Logout"})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.b,{className:"nav-link",to:"/login",children:"Login"}),Object(n.jsx)(c.b,{className:"nav-link",to:"/signup",children:"Signup"})]})]})})]})})}}]),s}(a.Component))),w=(s(64),function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"footer-div",children:[Object(n.jsx)("p",{id:"follow-us",children:"Follow Us"}),Object(n.jsx)("i",{className:"fab fa-instagram"}),Object(n.jsx)("i",{className:"fab fa-facebook-f"}),Object(n.jsx)("i",{className:"far fa-envelope"}),Object(n.jsx)("i",{className:"fab fa-twitter"})]})}}]),s}(a.Component));s(65);var C=function(e){return Object(n.jsx)(c.b,{style:{textDecoration:"none"},to:"/workshops/category/".concat(e.category),children:Object(n.jsx)("div",{id:e.id,className:"categoryCard",children:Object(n.jsx)("h3",{children:e.category})})})},N=s(12),S=(s(66),function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={search:""},e.handleInput=function(t){var s=t.target,n=s.value,a=s.name;e.setState(Object(N.a)({},a,n)),e.props.filterWorkshops(n)},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"search-container",children:Object(n.jsx)("input",{type:"text",className:"input search-bar",name:"search",placeholder:"What fascinates you?",value:this.state.search,onChange:this.handleInput})})}}]),s}(o.a.Component)),W=(s(67),s(68),new function e(){var t=this;Object(l.a)(this,e),this.getAllWorkshops=function(){return t.api.get("/workshops").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getUser=function(){return t.api.get("/user",{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getOneWorkshop=function(e){return t.api.get("/workshops/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.signupForWorkshop=function(e,s){return t.api.post("/workshops/signup/".concat(e),{userId:s}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getWorkshopsByCategory=function(e){return t.api.get("/workshops/category/".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.addOneWorkshop=function(e,s,n,a,o,i,r,c,l,h){return t.api.post("/workshops",{title:e,img:s,description:n,date:a,category:o,length:i,credits:r,maxParticipants:c,location:l,userId:h},{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.uploadImage=function(e){return t.api.post("/upload",e,{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.editOneWorkshop=function(e,s,n,a,o,i,r,c,l,h,d){return t.api.put("/workshops/".concat(e),{title:s,img:n,description:a,date:o,category:i,length:r,credits:c,maxParticipants:l,location:h,userId:d},{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.deleteOneWorkshop=function(e,s){return t.api.post("/workshops/".concat(e),{userId:s},{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.cancelOneWorkshop=function(e,s){return t.api.post("/workshops/cancel/".concat(e),{userId:s},{withCredentials:!0}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.api=g.a.create({baseURL:"https://skills-up-app.herokuapp.com/api",withCredentials:!0})}),I=k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={title:e.props.workshop.title,img:e.props.workshop.img,description:e.props.workshop.description,category:e.props.workshop.category,date:e.props.workshop.date,length:e.props.workshop.length,credits:e.props.workshop.credits,maxParticipants:e.props.workshop.maxParticipants,location:e.props.workshop.location},e.handleInput=function(t){var s=t.target,n=s.name,a=s.value,o=s.type;console.log(a),"checkbox"===o&&(a=!e.state[n]),"length"===n&&e.setState({credits:Math.round(a/60*10)}),e.setState(Object(N.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),console.log("Button submitted");var s=e.state,n=s.title,a=s.img,o=s.description,i=s.category,r=s.date,c=s.length,l=s.credits,h=s.maxParticipants,d=s.location,p=e.props.user._id,u=e.props.workshop._id;W.editOneWorkshop(u,n,a,o,r,i,c,l,h,d,p).then((function(t){e.props.edit()}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var s=t.target.files[0],n=new FormData;n.append("img",s),W.uploadImage(n).then((function(t){e.setState({img:t.secure_url})}))},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"edit-form",children:[Object(n.jsx)("label",{for:"title",children:"Name your workshop"}),Object(n.jsx)("input",{name:"title",type:"text",placeholder:"e.g. Cooking Class",value:this.state.title,onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{children:"Upload an Image"}),Object(n.jsx)("input",{name:"img",type:"file",onChange:this.handleFileUpload}),Object(n.jsx)("span",{children:Object(n.jsx)("img",{style:{width:"100px",marginBottom:"20px"},src:this.state.img&&this.state.img,alt:""})}),Object(n.jsx)("label",{for:"description",children:"Tell us a bit about your workshop"}),Object(n.jsx)("textarea",{id:"description-box",name:"description",type:"text",value:this.state.description,onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{children:"Pick a category"}),Object(n.jsxs)("div",{className:"category-checkboxes",children:[Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"sports",children:"Sports"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Sports",onChange:this.handleInput,required:!0})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"beauty",children:"Beauty"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Beauty",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"languages",children:"Languages"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Languages",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"creativity",children:"Creativity"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Creativity",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"food-drink",children:"Food & Drink"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Food & Drink",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"performing-arts",children:"Performing Arts"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Performing Arts",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"other",children:"Other"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Other",onChange:this.handleInput})]})]}),Object(n.jsx)("label",{for:"date",children:"What's the date and time?"}),Object(n.jsx)("input",{name:"date",type:"datetime-local",value:this.state.date,onChange:this.handleInput}),Object(n.jsx)("label",{for:"length",children:"How long will it last (in mins)? "}),Object(n.jsx)("input",{name:"length",type:"number",placeholder:"e.g 90",value:this.state.length,onChange:this.handleInput,required:!0}),Object(n.jsxs)("p",{className:"price-tag",children:["Price: ",this.state.credits]}),Object(n.jsx)("label",{for:"maxParticipants",children:"Maximum number of participants:"}),Object(n.jsx)("input",{type:"number",name:"maxParticipants",value:this.state.maxParticipants,onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{for:"location",children:"Where will it take place?"}),Object(n.jsx)("input",{type:"text",name:"location",placeholder:"e.g. Barceloneta Beach",value:this.state.location,onChange:this.handleInput,required:!0}),Object(n.jsxs)("button",{type:"submit",className:"edit-host-workshop-btn",children:[" ","Edit your workshop"," "]})]})}}]),s}(o.a.Component)),L=s(18),M=s.n(L),F=k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showEditForm:!1,host:{}},e.componentDidMount=function(){W.getOneWorkshop(e.props.workshop._id).then((function(t){e.setState({host:t.host})}))},e.handleDelete=function(){var t=e.props.user._id;e.props.user;console.log("USERID",t),W.deleteOneWorkshop(e.props.workshop._id,t).then((function(t){e.props.delete()}))},e.handleCancel=function(){var t=e.props.user._id;console.log(t),W.cancelOneWorkshop(e.props.workshop._id,t).then((function(t){e.props.cancel()}))},e.handleEdit=function(){e.setState({showEditForm:!e.state.showEditForm}),e.props.edit()},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this.props.workshop,t=M()(e.date).format("ll");return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"workshop-card",children:[Object(n.jsx)(c.b,{to:"/workshops/".concat(e._id),children:Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{className:"workshop-card-img",src:e.img,alt:""})})}),Object(n.jsxs)("div",{id:"card-information",children:[Object(n.jsxs)("div",{id:"card-top",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"far fa-clock"})," ",t]}),Object(n.jsxs)("p",{className:"credits",children:[e.credits," credits"]})]}),Object(n.jsx)(c.b,{style:{textDecoration:"none"},to:"/workshops/".concat(e._id),children:Object(n.jsx)("h3",{id:"card-title",children:e.title})}),Object(n.jsxs)("div",{id:"card-bottom",children:[this.state.host?Object(n.jsxs)("div",{class:"card-host-container",children:[Object(n.jsx)("img",{id:"workshop-card-host-img",src:this.state.host.img,alt:""}),Object(n.jsx)("p",{children:this.state.host.username})]}):Object(n.jsx)("div",{class:"card-host-container",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fas fa-user"})," hosted by",Object(n.jsx)("span",{children:" SkillsUp"})]})}),Object(n.jsxs)("div",{className:"icons",children:[Object(n.jsx)("div",{onClick:this.handleDelete,children:this.props.showBin?Object(n.jsx)("i",{className:"fas fa-trash-alt"}):null}),Object(n.jsx)("div",{onClick:this.handleEdit,children:this.props.showPen?Object(n.jsx)("i",{className:"fas fa-pen"}):null}),Object(n.jsx)("div",{onClick:this.handleCancel,children:this.props.showCross?Object(n.jsx)("div",{children:Object(n.jsx)("i",{className:"fas fa-times"})}):null})]})]})]})]}),Object(n.jsx)("div",{children:this.state.showEditForm?Object(n.jsx)(I,{workshop:e,edit:this.handleEdit}):null})]})}}]),s}(o.a.Component)),D=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={workshopList:[],filteredWorkshops:[],showErrorMessage:!1},e.componentDidMount=function(){W.getAllWorkshops().then((function(t){console.log(t),e.setState({workshopList:t}),console.log(e.state.workshopList)}))},e.filterWorkshops=function(t){var s=e.state.workshopList.filter((function(e){var s=e.title.toLowerCase(),n=t.toLowerCase();return s.includes(n)}));e.setState({filteredWorkshops:s,showErrorMessage:!1}),0===s.length&&e.setState({showErrorMessage:!0}),""===t&&e.setState({filteredWorkshops:[],showErrorMessage:!1}),console.log(e.state.filteredWorkshops)},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"banner",children:[Object(n.jsx)("h1",{children:"Try something new."}),Object(n.jsx)("p",{children:"Join SkillsUp to discover new skills and connect with others."}),Object(n.jsx)(S,{filterWorkshops:this.filterWorkshops})]}),Object(n.jsxs)("div",{id:"search-results",children:[this.state.showErrorMessage?Object(n.jsx)("p",{className:"alert alert-warning",id:"no-results-message",children:"Sorry, we couldn't match any results."}):null,this.state.filteredWorkshops.map((function(e){return Object(n.jsx)(F,{workshop:e})}))]}),Object(n.jsxs)("div",{id:"description-section",children:[Object(n.jsx)("h4",{children:'"The key to success is dedication to life-long learning."'}),Object(n.jsxs)("p",{children:["First time on our page? Click ",Object(n.jsx)(c.b,{to:"/instructions",children:"here"})," ","to see how it works."]}),Object(n.jsx)(c.b,{to:"/signup",children:Object(n.jsx)("button",{children:"Get started for free"})})]}),Object(n.jsx)("h2",{className:"category-info",children:"Find something that intrigues you."}),Object(n.jsx)("p",{className:"category-info",children:"Pick a category."}),Object(n.jsxs)("div",{id:"category-container",children:[Object(n.jsx)(C,{category:"Sports",id:"sports"}),Object(n.jsx)(C,{category:"Beauty",id:"beauty"}),Object(n.jsx)(C,{category:"Languages",id:"languages"}),Object(n.jsx)(C,{category:"Creativity",id:"creativity"}),Object(n.jsx)(C,{category:"Food & Drink",id:"food-drink"}),Object(n.jsx)(C,{category:"Performing Arts",id:"performing-arts"}),Object(n.jsx)(C,{category:"Other",id:"other"})]})]})}}]),s}(o.a.Component),P=k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={username:"",img:"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?b=1&k=6&m=1214428300&s=612x612&w=0&h=kMXMpWVL6mkLu0TN-9MJcEUx1oSWgUq8-Ny6Wszv_ms=",email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var s=e.state,n=s.username,a=s.img,o=s.email,i=s.password;e.props.signup(n,a,o,i)},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(N.a)({},n,a))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var s=t.target.files[0],n=new FormData;n.append("img",s),m.uploadImage(n).then((function(t){e.setState({img:t.secure_url})}))},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this.state,t=e.username,s=e.email,a=e.password;return Object(n.jsx)("div",{id:"signup-page",children:Object(n.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(n.jsx)("h1",{children:"Sign Up"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("img",{id:"uploaded-img",style:{width:"100px"},src:this.state.img&&this.state.img,alt:""})}),Object(n.jsx)("input",{name:"img",type:"file",onChange:this.handleFileUpload})]}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",name:"username",className:"signup-login-input",value:t,onChange:this.handleChange,placeholder:"username"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"email",name:"email",className:"signup-login-input",value:s,onChange:this.handleChange,placeholder:"email"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"password",name:"password",className:"signup-login-input",value:a,onChange:this.handleChange,placeholder:"password"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"submit",value:"Signup",className:"signup-login-button"})}),Object(n.jsxs)("p",{children:["Already have an account?",Object(n.jsx)(c.b,{to:"/login",children:" Login"})]})]})})}}]),s}(a.Component)),A=k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var s=e.state,n=s.username,a=s.password;e.props.login(n,a)},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(N.a)({},n,a))},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this.state,t=e.username,s=e.password;return Object(n.jsx)("div",{id:"login-page",children:Object(n.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,placeholder:"username",className:"signup-login-input"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"password",name:"password",value:s,onChange:this.handleChange,placeholder:"password",className:"signup-login-input"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"submit",value:"Login",className:"signup-login-button"})})]})})}}]),s}(a.Component)),U=(s(70),k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={title:"",img:"",description:"",category:"",date:"",length:0,credits:0,maxParticipants:"",location:""},e.handleInput=function(t){var s=t.target,n=s.name,a=s.value,o=s.type;console.log(a),"checkbox"===o&&(a=!e.state[n]),"length"===n&&e.setState({credits:Math.round(a/60*10)}),e.setState(Object(N.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),console.log("Button submitted");var s=e.state,n=s.title,a=s.img,o=s.description,i=s.category,r=s.date,c=s.length,l=s.credits,h=s.maxParticipants,d=s.location,p=e.props.user._id;W.addOneWorkshop(n,a,o,r,i,c,l,h,d,p).then((function(t){e.props.createWorkshop()}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var s=t.target.files[0],n=new FormData;n.append("img",s),W.uploadImage(n).then((function(t){e.setState({img:t.secure_url})}))},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,class:"edit-form",children:[Object(n.jsx)("label",{for:"title",children:"Name your workshop"}),Object(n.jsx)("input",{name:"title",type:"text",value:this.state.title,placeholder:"e.g. Cooking Class",onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{children:"Upload an Image"}),Object(n.jsx)("input",{name:"img",type:"file",onChange:this.handleFileUpload,required:!0}),Object(n.jsx)("span",{children:Object(n.jsx)("img",{style:{width:"100px",marginBottom:"20px"},src:this.state.img&&this.state.img,alt:""})}),Object(n.jsx)("label",{for:"description",children:"Tell us a bit about your workshop"}),Object(n.jsx)("textarea",{name:"description",type:"text",value:this.state.description,onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{children:"Pick a category"}),Object(n.jsxs)("div",{className:"category-checkboxes",children:[Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"sports",children:"Sports"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Sports",onChange:this.handleInput,required:!0})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"beauty",children:"Beauty"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Beauty",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"languages",children:"Languages"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Languages",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"creativity",children:"Creativity"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Creativity",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"food-drink",children:"Food & Drink"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Food & Drink",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"performing-arts",children:"Performing Arts"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Performing Arts",onChange:this.handleInput})]}),Object(n.jsxs)("div",{className:"checkbox-pair",children:[Object(n.jsx)("label",{for:"other",children:"Other"}),Object(n.jsx)("input",{id:"small-input",type:"radio",name:"category",value:"Other",onChange:this.handleInput})]})]}),Object(n.jsx)("label",{for:"date",children:"What's the date and time?"}),Object(n.jsx)("input",{name:"date",type:"datetime-local",value:this.state.date,onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{for:"length",children:"How long will it last (in mins)? "}),Object(n.jsx)("input",{name:"length",type:"number",value:this.state.length,onChange:this.handleInput,placeholder:"e.g 90",required:!0}),Object(n.jsxs)("p",{className:"price-tag",children:["Price: ",this.state.credits]}),Object(n.jsx)("label",{for:"maxParticipants",children:"Maximum number of participants:"}),Object(n.jsx)("input",{type:"number",name:"maxParticipants",value:this.state.maxParticipants,onChange:this.handleInput,required:!0}),Object(n.jsx)("label",{for:"location",children:"Where will it take place?"}),Object(n.jsx)("textarea",{type:"text",name:"location",value:this.state.location,onChange:this.handleInput,placeholder:"e.g. Barceloneta Beach",required:!0}),Object(n.jsxs)("button",{type:"submit",className:"edit-host-workshop-btn",children:[" ","Host your workshop"," "]})]})}}]),s}(o.a.Component))),B=k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={wallet:0,attendedWorkshops:[],hostedWorkshops:[],showForm:!1},e.toggleForm=function(){e.setState({showForm:!e.state.showForm})},e.addOneWorkshop=function(){W.getUser().then((function(t){console.log(t),e.setState({hostedWorkshops:t.hostedWorkshops,wallet:t.wallet})})),e.toggleForm()},e.deleteOneWorkshop=function(){W.getUser().then((function(t){console.log(t),e.setState({hostedWorkshops:t.hostedWorkshops,wallet:t.wallet})}))},e.editOneWorkshop=function(){W.getUser().then((function(t){console.log(t),e.setState({hostedWorkshops:t.hostedWorkshops,wallet:t.wallet})}))},e.cancelOneWorkshop=function(){W.getUser().then((function(t){console.log(t),e.setState({attendedWorkshops:t.attendedWorkshops,wallet:t.wallet})}))},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;W.getUser().then((function(t){console.log(t),e.setState({hostedWorkshops:t.hostedWorkshops,attendedWorkshops:t.attendedWorkshops,wallet:t.wallet})}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"profile-page",children:[Object(n.jsxs)("div",{id:"user-container",children:[Object(n.jsx)("img",{id:"profile-image",src:this.props.user.img}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{id:"welcome-message",children:["Welcome ",this.props.user&&this.props.user.username]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{class:"fas fa-coins"})," ",this.state.wallet," credits"]})]})]}),Object(n.jsx)("div",{id:"host-workshop-btn",children:Object(n.jsx)("button",{onClick:this.toggleForm,children:"Host your own workshop"})}),this.state.showForm?Object(n.jsx)(U,{createWorkshop:this.addOneWorkshop}):null,Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Your hosted workshops"}),this.state.hostedWorkshops.length>0?Object(n.jsx)("div",{className:"card-grid",children:Object(n.jsx)("div",{className:"inner-grid",children:this.state.hostedWorkshops.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)(F,{workshop:t,showBin:!0,showPen:!0,delete:e.deleteOneWorkshop,edit:e.editOneWorkshop})},t._id)})).reverse()})}):Object(n.jsx)("p",{className:"empty-message",children:"You are not hosting any workshops at the moment."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Workshops you've signed up for"}),this.state.attendedWorkshops.length>0?Object(n.jsx)("div",{className:"card-grid",children:Object(n.jsx)("div",{className:"inner-grid",children:this.state.attendedWorkshops.map((function(t){return Object(n.jsx)("div",{children:Object(n.jsx)(F,{workshop:t,showCross:!0,cancel:e.cancelOneWorkshop})},t._id)})).reverse()})}):Object(n.jsxs)("p",{className:"empty-message",children:["You have not signed up to any workshops yet. Click"," ",Object(n.jsx)(c.b,{to:"/",children:"here"})," to browse."]})]})]})}}]),s}(a.Component));var E=function(){return Object(n.jsxs)("div",{id:"instructions-page",children:[Object(n.jsx)("div",{id:"instructions-banner",children:Object(n.jsx)("h1",{children:"Start learning new skills and host your own workshop!"})}),Object(n.jsxs)("div",{id:"instructions-container",children:[Object(n.jsx)("h3",{children:"Here\u2019s all the info you need to get started:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Create an account with us to have access to all of our features and participate to awesome workshops!"}),Object(n.jsxs)("li",{children:["Once you\u2019ve signed up, you automatically have 30 credits in your workshop wallet as a gift from us that you can use to attend any workshop on our platform."," "]}),Object(n.jsx)("li",{children:"Search through the workshops and sign up to the ones you like!"}),Object(n.jsx)("li",{children:"The amount of credits each workshop costs depends on how long it lasts. By default it\u2019s 10 credits/hour."}),Object(n.jsx)("li",{children:"You can cancel your attendance at any time before the workshop and get your credits back."}),Object(n.jsx)("li",{children:"If you enjoy the workshop and wish to make a donation to your workshop host for their hard work, we\u2019re sure they would appreciate it!"}),Object(n.jsx)("li",{children:"In order to gain more credits you have to host your own workshop (which we highly encourage!)"})]}),Object(n.jsx)("h3",{children:"How to Host your own workshop:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Click on the \u2018host your own workshop\u2019 button on your profile."}),Object(n.jsx)("li",{children:"This will drop down a form which you will need to fill with all the details for this workshop."}),Object(n.jsx)("li",{children:"For every new workshop, you will be granted twice the amount of the price. (If your workshop costs 30 credits, you will receive 60 credits!)"}),Object(n.jsx)("li",{children:"After that, just do what you need to do to prepare and host your workshop! Make sure to be on time!"})]}),Object(n.jsx)("h3",{id:"have-fun",children:"And most importantly, HAVE FUN!"})]})]})},_=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={workshops:[]},e.getWorkshopsByCategory=function(){var t=e.props.match.params.category;W.getWorkshopsByCategory(t).then((function(t){e.setState({workshops:t}),console.log(e.state.workshops)}))},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getWorkshopsByCategory()}},{key:"render",value:function(){return Object(n.jsxs)("div",{id:"workshop-list",children:[Object(n.jsxs)(c.b,{style:{textDecoration:"none"},to:"/",className:"back-btn",children:[Object(n.jsx)("i",{className:"fas fa-arrow-left"})," Back to home page"]}),Object(n.jsx)("h3",{children:this.props.match.params.category}),Object(n.jsx)("div",{className:"card-grid",children:Object(n.jsx)("div",{className:"inner-grid",children:this.state.workshops.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(F,{workshop:e})},e._id)}))})})]})}}]),s}(o.a.Component),q=k(function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={wallet:0,attendedWorkshops:[],title:" ",img:" ",description:" ",category:" ",date:" ",length:0,credits:0,participants:[],maxParticipants:0,host:{},location:" ",successMessage:" ",showErrorMessage:!1,showSuccessMessage:!1,errorMessage:""},e.getSingleWorkshop=function(){var t=e.props.match.params.id;W.getOneWorkshop(t).then((function(t){var s=t,n=s.title,a=s.img,o=s.description,i=s.category,r=s.date,c=s.length,l=s.credits,h=s.participants,d=s.maxParticipants,p=s.host,u=s.location;e.setState({title:n,img:a,description:o,category:i,date:r,length:c,credits:l,participants:h,maxParticipants:d,host:p,location:u})}))},e.componentDidMount=function(){e.getSingleWorkshop(),e.props.user&&W.getUser().then((function(t){e.setState({wallet:t.wallet,attendedWorkshops:t.attendedWorkshops})}))},e.handleSubmit=function(){console.log("BUTTON CLICKED");e.props.match.params.id;if(e.props.user){var t=e.state.wallet,s=e.state.attendedWorkshops;if(console.log("attended workshop",s),console.log(t),s.filter((function(t){return t._id===e.props.match.params.id})).length>0)e.setState({showErrorMessage:!0,errorMessage:"You've already signed up for this workshop."});else if(t<e.state.credits)e.setState({showErrorMessage:!0,errorMessage:"You don't have enough credit points to sign up for this event. Host your own workshop to earn more credits."});else{var n=e.props.match.params.id,a=e.props.user._id;console.log(n),W.signupForWorkshop(n,a).then((function(t){e.setState({showSuccessMessage:!0,successMessage:"You successfully signed up for this workshop."})}))}}else e.props.history.push("/login")},e}return Object(h.a)(s,[{key:"render",value:function(){var e=M()(this.state.date).format("LLLL");return Object(n.jsxs)("div",{id:"details-container",children:[Object(n.jsxs)(c.b,{style:{textDecoration:"none"},to:"/workshops/category/".concat(this.state.category),className:"back-btn",children:[Object(n.jsx)("i",{className:"fas fa-arrow-left"})," Back to results"]}),Object(n.jsxs)("div",{id:"desktop-view",children:[Object(n.jsxs)("section",{id:"left-side-bar-desktop",children:[Object(n.jsx)("p",{id:"details-date",children:e}),Object(n.jsx)("h2",{id:"workshop-title",children:this.state.title}),Object(n.jsx)("div",{id:"details-img-container",children:Object(n.jsx)("img",{id:"details-img",src:this.state.img,alt:""})})]}),Object(n.jsxs)("section",{id:"right-side-bar-desktop",children:[Object(n.jsxs)("div",{id:"info-card",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fas fa-calendar-alt"})," ",e]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"far fa-clock"})," ",this.state.length," mins"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fas fa-coins"})," ",this.state.credits," credits"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fas fa-map-marker-alt"})," ",this.state.location]}),this.state.host?Object(n.jsxs)("div",{id:"host-div",children:[Object(n.jsx)("h4",{children:"Hosted by:"}),Object(n.jsx)("img",{className:"participant-img",src:this.state.host.img}),Object(n.jsx)("p",{children:this.state.host.username})]}):null]}),Object(n.jsx)("p",{id:"details-description",children:this.state.description}),this.state.participants.length===this.state.maxParticipants?Object(n.jsx)("p",{className:"alert alert-warning",children:"This course is fully booked."}):Object(n.jsx)("div",{id:"signup-workshop-btn",children:Object(n.jsx)("button",{type:"submit",onClick:this.handleSubmit,children:"Sign up for Workshop"})}),this.state.showErrorMessage?Object(n.jsx)("p",{className:"alert alert-warning",children:this.state.errorMessage}):null,this.state.showSuccessMessage?Object(n.jsx)("p",{className:"alert alert-success",children:this.state.successMessage}):null]})]}),this.state.participants.length>0&&Object(n.jsxs)("div",{id:"already-signed-up",children:[Object(n.jsx)("h4",{id:"attendees",children:"These people are already signed up:"}),this.state.participants.map((function(e){return Object(n.jsx)("img",{className:"participant-img",src:e.img,alt:""})}))]})]})}}]),s}(o.a.Component));var T=k((function(e){var t=e.isLoggedIn,s=e.isLoading,a=e.component,o=e.exact,i=e.path;return s?"Loading":Object(n.jsx)(u.b,{exact:o,path:i,render:function(e){return t?Object(n.jsx)(u.a,{to:"/private/profile"}):t?void 0:Object(n.jsx)(a,Object(j.a)({},e))}})}));var H=k((function(e){var t=e.isLoggedIn,s=e.isLoading,a=e.component,o=e.exact,i=e.path;return s?"Loading":Object(n.jsx)(u.b,{exact:o,path:i,render:function(e){return t?t?Object(n.jsx)(a,Object(j.a)({},e)):void 0:Object(n.jsx)(u.a,{to:"/login"})}})})),Y=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={backgroundColor:"white",color:"#262729"},e.setDayMode=function(){e.setState({backgroundColor:"white",color:"#262729"})},e.setNightMode=function(){e.setState({backgroundColor:"#262729",color:"white"})},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",style:{backgroundColor:this.state.backgroundColor,color:this.state.color},children:[Object(n.jsx)(y,{setNightMode:this.setNightMode,setDayMode:this.setDayMode}),Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/",component:D}),Object(n.jsx)(u.b,{exact:!0,path:"/instructions",component:E}),Object(n.jsx)(u.b,{exact:!0,path:"/workshops/category/:category",component:_}),Object(n.jsx)(u.b,{exact:!0,path:"/workshops/:id",component:q}),Object(n.jsx)(T,{exact:!0,path:"/signup",component:P}),Object(n.jsx)(T,{exact:!0,path:"/login",component:A}),Object(n.jsx)(H,{exact:!0,path:"/private/profile",component:B})]}),Object(n.jsx)(w,{})]})}}]),s}(a.Component);r.a.render(Object(n.jsx)(c.a,{children:Object(n.jsx)(v,{children:Object(n.jsx)(Y,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.eb2c06ae.chunk.js.map