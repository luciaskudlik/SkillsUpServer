(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{22:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),o=n.n(s),r=n(32),i=n.n(r),c=n(7),l=n(2),h=n(3),p=n(5),d=n(4),u=(n(22),n(40),n(8)),j=n(15),b=n(6),g=n.n(b),O=new(function(){function e(){Object(l.a)(this,e),this.auth=g.a.create({baseURL:"https://skills-up-app.herokuapp.com",withCredentials:!0})}return Object(h.a)(e,[{key:"signup",value:function(e,t,n,a){return this.auth.post("/auth/signup",{username:e,img:t,email:n,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),m=o.a.createContext(),f=m.Consumer,x=m.Provider,v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,a,s){O.signup(t,n,a,s).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){O.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){O.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,s=e.user,o=this.signup,r=this.login,i=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(x,{value:{isLoggedIn:t,isLoading:n,user:s,signup:o,login:r,logout:i},children:this.props.children})}}]),n}(o.a.Component),k=function(e){return function(t){Object(p.a)(s,t);var n=Object(d.a)(s);function s(){return Object(l.a)(this,s),n.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsx)(f,{children:function(n){var s=n.isLoggedIn,o=n.isLoading,r=n.user,i=n.signup,c=n.login,l=n.logout;return Object(a.jsx)(e,Object(j.a)(Object(j.a)({},t.props),{},{isLoggedIn:s,isLoading:o,user:r,signup:i,login:c,logout:l}))}})}}]),s}(o.a.Component)},y=(n(58),k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).handleDayMode=function(){e.props.setDayMode()},e.handleNightMode=function(){e.props.setNightMode()},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"nav-left",children:[Object(a.jsx)(c.b,{to:"/",className:"navbar-brand",children:"SkillsUp"}),this.props.user?Object(a.jsx)("img",{src:this.props.user.img}):null,Object(a.jsx)("button",{id:"sun-btn",onClick:this.handleDayMode,children:Object(a.jsx)("i",{class:"fas fa-sun"})}),Object(a.jsx)("button",{id:"moon-btn",onClick:this.handleNightMode,children:Object(a.jsx)("i",{class:"fas fa-moon"})})]}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(a.jsxs)("div",{className:"navbar-nav",children:[Object(a.jsx)(c.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"}),Object(a.jsx)(c.b,{className:"nav-link active","aria-current":"page",to:"/instructions",children:"How it works"}),Object(a.jsx)(c.b,{className:"nav-link",to:"/private/profile",children:"My Profile"}),this.props.isLoggedIn?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.b,{onClick:this.props.logout,className:"nav-link",children:"Logout"})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.b,{className:"nav-link",to:"/login",children:"Login"}),Object(a.jsx)("br",{}),Object(a.jsx)(c.b,{className:"nav-link",to:"/signup",children:"Signup"})]})]})})]})})}}]),n}(s.Component))),w=(n(64),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"footer-div",children:[Object(a.jsx)("p",{children:"Follow Us"}),Object(a.jsx)("i",{class:"fab fa-facebook-f"}),Object(a.jsx)("i",{class:"fab fa-instagram"}),Object(a.jsx)("i",{class:"far fa-envelope"}),Object(a.jsx)("i",{class:"fab fa-twitter"}),Object(a.jsx)("p",{id:"disclaimer",children:"disclaimer"})]})}}]),n}(s.Component));n(65);var C=function(e){return Object(a.jsx)(c.b,{to:"/workshops/category/".concat(e.category),children:Object(a.jsx)("div",{id:e.id,className:"categoryCard",children:Object(a.jsx)("h3",{children:e.category})})})},S=n(13),L=(n(66),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={search:""},e.handleInput=function(t){var n=t.target,a=n.value,s=n.name;e.setState(Object(S.a)({},s,a)),e.props.filterWorkshops(a)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"search-container",children:Object(a.jsx)("input",{type:"text",className:"input search-bar",name:"search",placeholder:"What fascinates you?",value:this.state.search,onChange:this.handleInput})})}}]),n}(o.a.Component)),I=(n(67),n(68),k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={title:e.props.workshop.title,img:e.props.workshop.img,description:e.props.workshop.description,category:e.props.workshop.category,date:e.props.workshop.date,length:e.props.workshop.length,credits:e.props.workshop.credits,maxParticipants:e.props.workshop.maxParticipants,location:e.props.workshop.location},e.handleInput=function(t){var n=t.target,a=n.name,s=n.value,o=n.type;console.log(s),"checkbox"===o&&(s=!e.state[a]),"length"===a&&e.setState({credits:Math.round(s/60*10)}),e.setState(Object(S.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault(),console.log("Button submitted");var n=e.state,a=n.title,s=n.img,o=n.description,r=n.category,i=n.date,c=n.length,l=n.credits,h=n.maxParticipants,p=n.location,d=e.props.user._id;g.a.put("".concat("https://skills-up-app.herokuapp.com","/api/workshops/").concat(e.props.workshop._id),{title:a,img:s,description:o,date:i,category:r,length:c,credits:l,maxParticipants:h,location:p,userId:d},{withCredentials:!0}).then((function(t){e.props.edit()})).catch((function(e){return console.log(e)}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("img",n),g.a.post("".concat("https://skills-up-app.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({img:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,id:"edit-form",children:[Object(a.jsx)("input",{name:"title",type:"text",placeholder:"Workshop",value:this.state.title,onChange:this.handleInput,required:!0}),Object(a.jsx)("label",{children:"Upload an Image"}),Object(a.jsx)("input",{name:"img",type:"file",onChange:this.handleFileUpload}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:this.state.img&&this.state.img,alt:""})}),Object(a.jsx)("textarea",{name:"description",type:"text",placeholder:"description",value:this.state.description,onChange:this.handleInput,required:!0}),Object(a.jsxs)("div",{id:"category-checkboxes",children:[Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"sports",children:"Sports"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"sports",value:"Sports",onChange:this.handleInput,required:!0})]}),Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"beauty",children:"Beauty"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"beauty",value:"Beauty",onChange:this.handleInput})]}),Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"languages",children:"Languages"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"languages",value:"Languages",onChange:this.handleInput})]}),Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"creativity",children:"Creativity"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"creativity",value:"Creativity",onChange:this.handleInput})]}),Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"food-drink",children:"Food & Drink"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"food-drink",value:"Food & Drink",onChange:this.handleInput})]}),Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"performing-arts",children:"Performing Arts"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"performing-arts",value:"Performing Arts",onChange:this.handleInput})]}),Object(a.jsxs)("div",{className:"checkbox-pair",children:[Object(a.jsx)("label",{for:"other",children:"Other"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"other",value:"Other",onChange:this.handleInput})]})]}),Object(a.jsx)("input",{name:"date",type:"date",value:this.state.date,onChange:this.handleInput}),Object(a.jsx)("input",{name:"length",type:"number",placeholder:"duration",value:this.state.length,onChange:this.handleInput,required:!0}),Object(a.jsxs)("p",{children:["Price: ",this.state.credits]}),Object(a.jsx)("input",{type:"number",name:"maxParticipants",placeholder:"max number of participants",value:this.state.maxParticipants,onChange:this.handleInput,required:!0}),Object(a.jsx)("textarea",{type:"text",name:"location",placeholder:"location",value:this.state.location,onChange:this.handleInput,required:!0}),Object(a.jsx)("button",{type:"submit",children:" Edit your workshop "})]})}}]),n}(o.a.Component))),W=k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={showEditForm:!1},e.handleDelete=function(){var t=e.props.user._id;e.props.user;console.log("USERID",t),g.a.post("".concat("https://skills-up-app.herokuapp.com","/api/workshops/").concat(e.props.workshop._id),{userId:t},{withCredentials:!0}).then((function(t){console.log("SUCCESSFULLY DELETED"),e.props.delete()})).catch((function(e){return console.log(e)}))},e.handleCancel=function(){var t=e.props.user._id;console.log(t),g.a.post("".concat("https://skills-up-app.herokuapp.com","/api/workshops/cancel/").concat(e.props.workshop._id),{userId:t},{withCredentials:!0}).then((function(t){console.log("SUCCESSFULLY CANCELLED"),e.props.cancel()})).catch((function(e){return console.log(e)}))},e.handleEdit=function(){e.setState({showEditForm:!e.state.showEditForm}),e.props.edit()},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.workshop;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"workshop-card",children:[Object(a.jsxs)("div",{className:"card-left",children:[Object(a.jsx)("div",{className:"card-image",children:Object(a.jsx)("img",{className:"workshop-card-img",src:e.img,alt:""})}),Object(a.jsx)("div",{className:"workshop-info",children:Object(a.jsxs)("div",{className:"card-center",children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsxs)("p",{className:"credits",children:[e.credits," credits"]})]})})]}),Object(a.jsxs)("div",{className:"icons",children:[Object(a.jsx)("div",{onClick:this.handleDelete,children:this.props.showBin?Object(a.jsx)("i",{className:"fas fa-trash-alt"}):null}),Object(a.jsx)("div",{onClick:this.handleEdit,children:this.props.showPen?Object(a.jsx)("i",{className:"fas fa-pen"}):null}),Object(a.jsx)("div",{onClick:this.handleCancel,children:this.props.showCross?Object(a.jsx)("i",{className:"fas fa-times"}):null}),Object(a.jsx)(c.b,{to:"/workshops/".concat(e._id),children:Object(a.jsx)("button",{children:"Learn More"})})]})]}),Object(a.jsx)("div",{children:this.state.showEditForm?Object(a.jsx)(I,{workshop:e,edit:this.handleEdit}):null})]})}}]),n}(o.a.Component)),N=(new function e(){var t=this;Object(l.a)(this,e),this.getAllWorkshops=function(){return t.api.get("/workshops").then((function(e){t.setState({workshopList:e.data})})).catch((function(e){return console.log(e)}))},this.api=g.a.create({baseURL:"http://localhost:5000/api",withCredentials:!0})},function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={workshopList:[],filteredWorkshops:[],showErrorMessage:!1},e.componentDidMount=function(){g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/workshops")).then((function(t){e.setState({workshopList:t.data})})).catch((function(e){return console.log(e)})),console.log("workshop LIIISTTTTTT",e.state.workshopList)},e.filterWorkshops=function(t){var n=e.state.workshopList.filter((function(e){var n=e.title.toLowerCase(),a=t.toLowerCase();return n.includes(a)}));0===n.length&&e.setState({showErrorMessage:!0}),e.setState({filteredWorkshops:n}),""===t&&e.setState({filteredWorkshops:[],showErrorMessage:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"banner",children:[Object(a.jsx)("h1",{children:"Try something new."}),Object(a.jsx)("p",{children:"Join SkillsUp to discover new skills and connect with others."}),Object(a.jsx)(L,{filterWorkshops:this.filterWorkshops})]}),this.state.showErrorMessage?Object(a.jsx)("p",{children:"Sorry, we couldn't match any results."}):null,this.state.filteredWorkshops.map((function(e){return Object(a.jsx)(W,{workshop:e})})),Object(a.jsxs)("div",{id:"description-section",children:[Object(a.jsx)("h4",{children:'"The key to success is dedication to life-long learning."'}),Object(a.jsxs)("p",{children:["First time on our page? Click ",Object(a.jsx)(c.b,{to:"/instructions",children:"here"})," ","to see how it works."]}),Object(a.jsx)(c.b,{to:"/signup",children:Object(a.jsx)("button",{children:"Get started for free"})})]}),Object(a.jsx)("h2",{className:"category-info",children:"Find something that intrigues you."}),Object(a.jsx)("p",{className:"category-info",children:"Pick a category."}),Object(a.jsx)(C,{category:"Sports",id:"sports"}),Object(a.jsx)(C,{category:"Beauty",id:"beauty"}),Object(a.jsx)(C,{category:"Languages",id:"languages"}),Object(a.jsx)(C,{category:"Creativity",id:"creativity"}),Object(a.jsx)(C,{category:"Food & Drink",id:"food-drink"}),Object(a.jsx)(C,{category:"Performing Arts",id:"performing-arts"}),Object(a.jsx)(C,{category:"Other",id:"other"})]})}}]),n}(o.a.Component)),M=k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={username:"",img:"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?b=1&k=6&m=1214428300&s=612x612&w=0&h=kMXMpWVL6mkLu0TN-9MJcEUx1oSWgUq8-Ny6Wszv_ms=",email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.img,o=n.email,r=n.password;e.props.signup(a,s,o,r)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(S.a)({},a,s))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("img",n),g.a.post("".concat("https://skills-up-app.herokuapp.com","/auth/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({img:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,s=e.password;return Object(a.jsxs)("div",{id:"signup-page",children:[Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("img",{id:"uploaded-img",style:{width:"100px"},src:this.state.img&&this.state.img,alt:""})}),Object(a.jsx)("input",{name:"img",type:"file",onChange:this.handleFileUpload})]}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,placeholder:"username"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"email",name:"email",value:n,onChange:this.handleChange,placeholder:"email"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"password",name:"password",value:s,onChange:this.handleChange,placeholder:"password"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",value:"Signup",id:"signup-button"})})]}),Object(a.jsx)("p",{children:"Already have an account?"}),Object(a.jsx)(c.b,{to:"/login",children:" Login"})]})}}]),n}(s.Component)),F=k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;e.props.login(a,s)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(S.a)({},a,s))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsx)("div",{id:"login-page",children:Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,placeholder:"username"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,placeholder:"password"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",value:"Login",id:"login-btn"})})]})})}}]),n}(s.Component)),E=k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={title:"",img:"",description:"",category:"",date:"",length:0,credits:0,maxParticipants:"",location:""},e.handleInput=function(t){var n=t.target,a=n.name,s=n.value,o=n.type;console.log(s),"checkbox"===o&&(s=!e.state[a]),"length"===a&&e.setState({credits:Math.round(s/60*10)}),e.setState(Object(S.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault(),console.log("Button submitted");var n=e.state,a=n.title,s=n.img,o=n.description,r=n.category,i=n.date,c=n.length,l=n.credits,h=n.maxParticipants,p=n.location,d=e.props.user._id;g.a.post("".concat("https://skills-up-app.herokuapp.com","/api/workshops"),{title:a,img:s,description:o,date:i,category:r,length:c,credits:l,maxParticipants:h,location:p,userId:d},{withCredentials:!0}).then((function(t){e.props.createWorkshop()})).catch((function(e){return console.log(e)}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("img",n),g.a.post("".concat("https://skills-up-app.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({img:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{name:"title",type:"text",placeholder:"Workshop",value:this.state.title,onChange:this.handleInput,required:!0}),Object(a.jsx)("label",{children:"Upload an Image"}),Object(a.jsx)("input",{name:"img",type:"file",onChange:this.handleFileUpload,required:!0}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:this.state.img&&this.state.img,alt:""})}),Object(a.jsx)("textarea",{name:"description",type:"text",placeholder:"description",value:this.state.description,onChange:this.handleInput,required:!0}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"sports",children:"Sports"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"sports",value:"Sports",onChange:this.handleInput,required:!0}),Object(a.jsx)("label",{for:"beauty",children:"Beauty"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"beauty",value:"Beauty",onChange:this.handleInput}),Object(a.jsx)("label",{for:"languages",children:"Languages"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"languages",value:"Languages",onChange:this.handleInput}),Object(a.jsx)("label",{for:"creativity",children:"Creativity"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"creativity",value:"Creativity",onChange:this.handleInput}),Object(a.jsx)("label",{for:"food-drink",children:"Food & Drink"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"food-drink",value:"Food & Drink",onChange:this.handleInput}),Object(a.jsx)("label",{for:"performing-arts",children:"Performing Arts"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"performing-arts",value:"Performing Arts",onChange:this.handleInput}),Object(a.jsx)("label",{for:"other",children:"Other"}),Object(a.jsx)("input",{type:"radio",name:"category",id:"other",value:"Other",onChange:this.handleInput})]}),Object(a.jsx)("input",{name:"date",type:"date",value:this.state.date,onChange:this.handleInput,required:!0}),Object(a.jsx)("input",{name:"length",type:"number",placeholder:"duration",value:this.state.length,onChange:this.handleInput,required:!0}),Object(a.jsxs)("p",{children:["Price: ",this.state.credits]}),Object(a.jsx)("input",{type:"number",name:"maxParticipants",placeholder:"max number of participants",value:this.state.maxParticipants,onChange:this.handleInput,required:!0}),Object(a.jsx)("textarea",{type:"text",name:"location",placeholder:"location",value:this.state.location,onChange:this.handleInput,required:!0}),Object(a.jsx)("button",{type:"submit",children:" Host your workshop "})]})}}]),n}(o.a.Component)),D=k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={wallet:0,attendedWorkshops:[],hostedWorkshops:[],showForm:!1},e.toggleForm=function(){e.setState({showForm:!e.state.showForm})},e.addOneWorkshop=function(){g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){e.setState({hostedWorkshops:t.data.hostedWorkshops,wallet:t.data.wallet})})).catch((function(e){return console.log(e)})),e.toggleForm()},e.deleteOneWorkshop=function(){g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){e.setState({hostedWorkshops:t.data.hostedWorkshops,wallet:t.data.wallet})})).catch((function(e){return console.log(e)}))},e.editOneWorkshop=function(){g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){e.setState({hostedWorkshops:t.data.hostedWorkshops,wallet:t.data.wallet})})).catch((function(e){return console.log(e)}))},e.cancelOneWorkshop=function(){g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){e.setState({attendedWorkshops:t.data.attendedWorkshops,wallet:t.data.wallet})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){e.setState({hostedWorkshops:t.data.hostedWorkshops,attendedWorkshops:t.data.attendedWorkshops,wallet:t.data.wallet})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"profile-page",children:[Object(a.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.username]}),Object(a.jsx)("img",{id:"profile-image",src:this.props.user.img}),Object(a.jsxs)("p",{children:["Your Wallet: ",this.state.wallet," "]}),Object(a.jsx)("button",{onClick:this.toggleForm,children:"Host your own workshop"}),this.state.showForm?Object(a.jsx)(E,{createWorkshop:this.addOneWorkshop}):null,Object(a.jsx)("h2",{children:"Your hosted workshops"}),this.state.hostedWorkshops.map((function(t){return Object(a.jsx)("div",{children:Object(a.jsx)(W,{workshop:t,showBin:!0,showPen:!0,delete:e.deleteOneWorkshop,edit:e.editOneWorkshop,cancel:e.cancelOneWorkshop})},t._id)})).reverse(),Object(a.jsx)("h2",{children:"Your upcoming workshops"}),this.state.attendedWorkshops.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(W,{workshop:e,showCross:!0})},e._id)})).reverse()]})}}]),n}(s.Component));var P=function(){return Object(a.jsxs)("div",{id:"instructions-page",children:[Object(a.jsx)("div",{id:"instructions-banner",children:Object(a.jsx)("h1",{children:"Start learning new skills and host your own workshop!"})}),Object(a.jsxs)("div",{id:"instructions-container",children:[Object(a.jsx)("h3",{children:"Here\u2019s all the info you need to get started:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Create an account with us to have access to all of our features and participate to awesome workshops!"}),Object(a.jsxs)("li",{children:["Once you\u2019ve signed up, you automatically have 50 credits in your workshop wallet as a gift from us that you can use to attend any workshop on our platform."," "]}),Object(a.jsx)("li",{children:"Search through the workshops and sign up to the ones you like!"}),Object(a.jsx)("li",{children:"The amount of credits each workshop costs depends on how long it lasts. By default it\u2019s 10 credits/hour."}),Object(a.jsx)("li",{children:"you can cancel you attendance at any time before the workshop and get your credits back."}),Object(a.jsx)("li",{children:"If you enjoy the workshop and wish to make a donation to your workshop host for their hard work, we\u2019re sure they would appreciate it!"}),Object(a.jsx)("li",{children:"In order to gain more credit you have to host your own workshop (which we highly encourage!)"})]}),Object(a.jsx)("h3",{children:"How to Host you own workshop:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Click on one of the \u2018host your own workshop\u2019 buttons"}),Object(a.jsx)("li",{children:"This will drop down a form which you will need to fill with all the details for this workshop."}),Object(a.jsx)("li",{children:"For every new workshop, you will be granted 30 credits/hour of the duration of the workshop. (If your workshop lasts 90min, you will receive 45 credits!)"}),Object(a.jsx)("li",{children:"After that, just do what you need to do to prepare and host your workshop! Make sure to be on time!"})]}),Object(a.jsx)("h3",{children:"And most importantly, HAVE FUN!"})]})]})},A=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={workshops:[]},e.getWorkshopsByCategory=function(){var t=e.props.match.params.category;g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/workshops/category/").concat(t)).then((function(t){e.setState({workshops:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getWorkshopsByCategory()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"WorkshopList Page"}),this.state.workshops.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(W,{workshop:e})},e._id)}))]})}}]),n}(o.a.Component),U=n(34),T=n.n(U),_=k(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={wallet:0,attendedWorkshops:[],title:" ",img:" ",description:" ",category:" ",date:" ",length:0,credits:0,participants:[],maxParticipants:0,host:" ",location:" ",successMessage:" ",showErrorMessage:!1,errorMessage:""},e.getSingleWorkshop=function(){var t=e.props.match.params.id;g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/workshops/").concat(t)).then((function(t){var n=t.data,a=n.title,s=n.img,o=n.description,r=n.category,i=n.date,c=n.length,l=n.credits,h=n.participants,p=n.maxParticipants,d=n.host,u=n.location;e.setState({title:a,img:s,description:o,category:r,date:i,length:c,credits:l,participants:h,maxParticipants:p,host:d,location:u})})).catch((function(e){return console.log(e)}))},e.handleSubmit=function(){console.log("BUTTON CLICKED");e.props.match.params.id;if(e.props.user){var t=e.state.wallet,n=e.state.attendedWorkshops;if(console.log("attendedn workshop",n),console.log(t),n.filter((function(t){return t._id===e.props.match.params.id})).length>0)e.setState({showErrorMessage:!0,errorMessage:"You've already signed up for this workshop."});else if(t<e.state.credits)e.setState({showErrorMessage:!0,errorMessage:"You don't have enough credit points to sign up for this event. Host your own workshop to earn more credits."});else{var a=e.props.match.params.id,s=e.props.user._id;console.log(a),g.a.post("".concat("https://skills-up-app.herokuapp.com","/api/workshops/signup/").concat(a),{userId:s}).then((function(t){console.log(t),e.setState({successMessage:"You successfully signed up for this workshop."})})).catch((function(e){return console.log("ERROR ",e)}))}}else e.props.history.push("/login")},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getSingleWorkshop(),g.a.get("".concat("https://skills-up-app.herokuapp.com","/api/user"),{withCredentials:!0}).then((function(t){e.setState({wallet:t.data.wallet,attendedWorkshops:t.data.attendedWorkshops})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=T()(this.state.date).format("LLLL");return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"WorkshopDetails Page"}),Object(a.jsx)("h2",{children:this.state.title}),Object(a.jsx)("img",{src:this.state.img,alt:""}),Object(a.jsx)("p",{children:this.state.description}),Object(a.jsx)("p",{children:e}),Object(a.jsxs)("p",{children:[this.state.length," mins"]}),Object(a.jsxs)("p",{children:["price: ",this.state.credits," credits"]}),Object(a.jsx)("p",{children:this.state.location}),Object(a.jsx)("h4",{children:"These event is hosted by:"}),Object(a.jsx)("h4",{children:"These people are already signed up:"}),this.state.participants.map((function(e){return Object(a.jsx)("img",{className:"participant-img",src:e.img,alt:""})})),this.state.participants.length===this.state.maxParticipants?Object(a.jsx)("p",{children:"this course is full!!!!!"}):Object(a.jsx)("button",{type:"submit",onClick:this.handleSubmit,children:"Sign up for Workshop!"}),this.state.showErrorMessage?Object(a.jsx)("p",{children:this.state.errorMessage}):null,Object(a.jsx)("p",{children:this.state.successMessage})]})}}]),n}(o.a.Component));var q=k((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,o=e.exact,r=e.path;return n?"Loading":Object(a.jsx)(u.b,{exact:o,path:r,render:function(e){return t?Object(a.jsx)(u.a,{to:"/private/profile"}):t?void 0:Object(a.jsx)(s,Object(j.a)({},e))}})}));var B=k((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,o=e.exact,r=e.path;return n?"Loading":Object(a.jsx)(u.b,{exact:o,path:r,render:function(e){return t?t?Object(a.jsx)(s,Object(j.a)({},e)):void 0:Object(a.jsx)(u.a,{to:"/login"})}})})),H=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={backgroundColor:"white",color:"#262729"},e.setDayMode=function(){e.setState({backgroundColor:"white",color:"#262729"})},e.setNightMode=function(){e.setState({backgroundColor:"#262729",color:"white"})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",style:{backgroundColor:this.state.backgroundColor,color:this.state.color},children:[Object(a.jsx)(y,{setNightMode:this.setNightMode,setDayMode:this.setDayMode}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",component:N}),Object(a.jsx)(u.b,{exact:!0,path:"/instructions",component:P}),Object(a.jsx)(u.b,{exact:!0,path:"/workshops/category/:category",component:A}),Object(a.jsx)(u.b,{exact:!0,path:"/workshops/:id",component:_}),Object(a.jsx)(q,{exact:!0,path:"/signup",component:M}),Object(a.jsx)(q,{exact:!0,path:"/login",component:F}),Object(a.jsx)(B,{exact:!0,path:"/private/profile",component:D})]}),Object(a.jsx)(w,{})]})}}]),n}(s.Component);i.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(v,{children:Object(a.jsx)(H,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.49bf4e2a.chunk.js.map