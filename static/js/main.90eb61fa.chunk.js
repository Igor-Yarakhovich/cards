(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{118:function(e,t,a){e.exports={preloader:"Preloader_preloader__3Amvd"}},121:function(e,t,a){e.exports={Main:"Main_Main__2eAJM"}},122:function(e,t,a){e.exports={search:"SearchProduct_search__ijYTl"}},123:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(41),c=a.n(s),i=(a(144),a(145),a(16)),o=a(9),l=a(11),d=a(40),u=a.n(d),j=a(15),b=a(55),p=a(46),O=a.n(p),h=a(115),f=a.n(h).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),g=function(e){return f.post("auth/forgot",e)},m=function(e){return f.post("auth/set-new-password",e)},v={setPasswordError:"",status:"idle",passwordValidate:""},x=function(e){return{type:"SET-PASSWORD/SET-ERROR",value:e}},_=function(e){return{type:"SET-PASSWORD/SET-STATUS",value:e}},w=function(e){return{type:"SET-PASSWORD/PASSWORD_VALIDATE",value:e}},P=a(56),y=a(71),R=a.n(y),N=a(1),S=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],T=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,l=Object(P.a)(e,S),d="".concat(R.a.error," ").concat(i||""),u="".concat(R.a.input," ").concat(s?R.a.errorInput:R.a.superInput," ").concat(c);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",Object(o.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:u},l)),s&&Object(N.jsx)("span",{className:d,children:s})]})},k=a(82),E=a.n(k),C=["red","className"],L=function(e){var t=e.red,a=e.className,r=Object(P.a)(e,C),n="".concat(E.a.button," ").concat(t?E.a.red:E.a.default," ").concat(a);return Object(N.jsx)("button",Object(o.a)({className:n},r))},I=function(){var e=Object(r.useState)({password:"",resetPasswordToken:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(j.c)((function(e){return e.setPassword.status})),c=Object(j.c)((function(e){return e.setPassword.setPasswordError})),d=Object(j.c)((function(e){return e.setPassword.passwordValidate})),p=Object(j.b)();Object(r.useEffect)((function(){c&&setTimeout((function(){p(x(""))}),4e3),d&&setTimeout((function(){p(w(""))}),4e3)}),[d,c,p]);var h=function(){return a.password?a.password.length>15?(p(w("Your password should be not longer then 15 characters")),!1):(p(w("")),!0):(p(w("Required password")),!1)},f=Object(i.h)().token;if("succeeded"===s)return p(x("")),Object(N.jsx)(i.a,{to:{pathname:"/login"}});(c||d)&&u.a.error;return Object(N.jsx)("div",{className:u.a.setPassword,children:Object(N.jsxs)("div",{className:u.a.setPasswordWrapper,children:[Object(N.jsx)("h2",{className:u.a.setPasswordTitle,children:" IT-incubator"}),Object(N.jsx)("h3",{className:u.a.setPasswordSubTitle,children:"Create new password"}),Object(N.jsxs)("form",{onSubmit:function(e){h()?(e.preventDefault(),p(function(e){return function(){var t=Object(b.a)(O.a.mark((function t(a){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(_("loading")),t.next=4,m(e);case 4:a(_("succeeded")),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),a(_("failed")),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",a(x(r));case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a))):n(Object(o.a)(Object(o.a)({},a),{},{password:""}))},children:[Object(N.jsx)(T,{className:u.a.passwordRecoveryPassword,placeholder:"Password",type:"password",id:"password",value:a.password,onChange:function(e){return n({resetPasswordToken:f,password:e.target.value})}}),Object(N.jsx)("p",{className:u.a.setPasswordText,children:"Create new password and we will send you further instructions to email"}),Object(N.jsx)(L,{className:u.a.setPasswordBtn,color:"dark-blue",type:"submit",children:"Create new password"}),Object(N.jsx)("div",{children:c})]})]})})},A=a.p+"static/media/avatar.ae88cd5b.png",B=function(e){return f.post("auth/login",e)},W={hidePassword:"text",isLoggedIn:!1,status:"loading",error:null},D=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},U=function(e){return{type:"login/SET-STATUS",status:e}},V=function(e){return{type:"APP/SET-ERROR",error:e}},F=function(e){return{type:"APP/SET-HidePassword",payload:{hidePassword:e}}},M=function(){return f.post("auth/me")},Y=function(e){return f.put("auth/me",{name:e})},K=function(){return f.delete("auth/me")},H={data:{},initialised:!1},z=function(e){return{type:"profile/SET-INITIALISED",initialised:e}},G=function(e){return{type:"profile/SET-DATA",data:e}},Z=n.a.memo((function(e){var t=Object(r.useState)(!1),a=Object(l.a)(t,2),n=a[0],s=a[1],c=Object(r.useState)(e.value),i=Object(l.a)(c,2),o=i[0],d=i[1];return Object(N.jsx)("div",{children:n?Object(N.jsx)("input",{value:o,placeholder:"name",onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.onChange(o)}}):Object(N.jsx)("span",{onDoubleClick:function(){s(!0),d(e.value)},children:e.value})})})),q=a(22),Q=a.n(q),J=a(227),X=a(225),$=a(92),ee=a.n($);function te(e){return"".concat(e,"\xb0C")}function ae(){var e=r.useState([20,37]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(N.jsxs)("div",{className:ee.a.sliderWrapper,children:[Object(N.jsx)("h3",{className:ee.a.sliderTitle,children:"Number of cards"}),Object(N.jsx)(J.a,{sx:{width:300,paddingLeft:1,paddingRight:3},children:Object(N.jsx)(X.a,{getAriaLabel:function(){return"Temperature range"},value:a,onChange:function(e,t){n(t)},valueLabelDisplay:"auto",getAriaValueText:te})})]})}var re=function(e){var t=e.enableBackground,a=e.backgroundStyle,r=e.backgroundOnClick,n=void 0===r?function(){}:r,s=e.width,c=e.height,i=e.modalStyle,l=e.modalOnClick,d=void 0===l?function(){}:l,u=e.show,j=e.children,b="calc(50vh - ".concat(c/2,"px)"),p="calc(50vw - ".concat(s/2,"px)");return u?Object(N.jsxs)(N.Fragment,{children:[t&&Object(N.jsx)("div",{style:Object(o.a)({position:"fixed",top:"0px",left:"0px",width:"100vw",height:"100vh",background:"black",opacity:.35,zIndex:20},a),onClick:n}),Object(N.jsx)("div",{style:Object(o.a)({position:"fixed",top:b,left:p,width:s,height:c,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",background:"lime",zIndex:21},i),onClick:d,children:j})]}):null},ne=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.profile.data.email})),a=Object(j.c)((function(e){return e.profile.data.avatar})),n=Object(j.c)((function(e){return e.profile.data.name})),s=Object(j.c)((function(e){return e.login.status})),c=Object(j.c)((function(e){return e.login.error})),o=Object(j.c)((function(e){return e.login.isLoggedIn})),d=Object(j.c)((function(e){return e.profile.initialised})),u=Object(r.useState)(!1),b=Object(l.a)(u,2),p=b[0],O=b[1],h=Object(r.useCallback)((function(t){e(function(e){return function(t){t(U("loading")),Y(e).then((function(e){e.data&&(t(U("succeeded")),t(function(e){return{type:"profile/SET-NAME",name:e}}(e.data.updatedUser.name)))})).catch((function(e){var a=e.response?e.response.data.error:e.message+", more details in the console";t(V(a))})).finally((function(){t(U("idle"))}))}}(t))}),[e]);return Object(r.useEffect)((function(){c&&setTimeout((function(){V(null)}),4e3)}),[c]),o?Object(N.jsxs)("section",{className:Q.a.profile,children:[Object(N.jsx)("div",{className:Q.a.container,children:Object(N.jsxs)("div",{className:Q.a.profileWrapper,children:[Object(N.jsxs)("div",{className:Q.a.profileLeftBox,children:[Object(N.jsxs)("div",{className:Q.a.profileLeftTop,children:[Object(N.jsx)("div",{className:Q.a.profileWrapImg,children:Object(N.jsx)("img",{className:Q.a.profileAvatarImg,src:A,alt:""})}),Object(N.jsx)("div",{className:Q.a.profileNameUser,children:Object(N.jsx)(Z,{value:n,onChange:h})}),Object(N.jsx)("div",{className:Q.a.profileUserProf,children:"Front-end developer"}),Object(N.jsx)(L,{className:Q.a.profilePersonalBtn,color:"white",type:"submit",onClick:function(){return O(!0)},children:"Edit profile"})]}),Object(N.jsx)("div",{className:Q.a.profileLeftBottom,children:Object(N.jsx)(ae,{})})]}),Object(N.jsxs)("div",{className:Q.a.profileRightBox,children:[Object(N.jsx)("h2",{children:"My packs list"}),Object(N.jsx)("form",{action:"",children:Object(N.jsx)("input",{type:"search",name:"",id:""})}),"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 Pagination"]})]})}),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(re,{enableBackground:!0,backgroundOnClick:function(){return O(!1)},width:300,height:200,modalOnClick:function(){return O(!1)},show:p,children:[Object(N.jsxs)("section",{className:Q.a.profilePersonal,children:[Object(N.jsx)("h2",{className:Q.a.profilePersonalTitle,children:"Personal information"}),c&&d?c:"loading"===s,Object(N.jsxs)("div",{children:[" ",a?Object(N.jsx)("img",{alt:"",src:a}):Object(N.jsx)("img",{alt:"",src:A})]}),Object(N.jsxs)("div",{children:["name: ",Object(N.jsx)(Z,{value:n,onChange:h})]}),Object(N.jsxs)("div",{children:["email: ",t,"  "]}),Object(N.jsxs)("div",{className:Q.a.profileBtnBox,children:[Object(N.jsx)("button",{className:Q.a.profileBtnCancel,children:"Cancel"}),Object(N.jsx)("button",{className:Q.a.profileBtnSave,children:"Save"})]})]}),Object(N.jsx)("button",{onClick:function(){return O(!1)},children:"Close"})]})})]}):Object(N.jsx)(i.a,{to:"/login"})},se=a(28),ce=a.n(se),ie={passwordRecoveryError:"",status:"idle",emailValidate:""},oe=function(e){return{type:"PASSWORD_RECOVERY/RECOVERY_ERROR",value:e}},le=function(e){return{type:"PASSWORD_RECOVERY/RECOVERY_STATUS",value:e}},de=function(e){return{type:"PASSWORD_RECOVERY/EMAIL_VALIDATE",value:e}},ue=a(26),je=a.p+"static/media/email.2c4865f1.png",be=a.p+"static/media/preloader.d8baec16.gif",pe=a(118),Oe=a.n(pe),he=function(){return Object(N.jsx)("div",{className:Oe.a.preloader,children:Object(N.jsx)("img",{alt:"",src:be})})},fe=function(){var e=Object(r.useState)({email:"",from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px;\">\n\n        <a href='https://igor-yarakhovich.github.io/cards/#/setPassword/$token$'>\n\n        Password recover link\n        </a></div>"}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(j.c)((function(e){return e.passwordRecovery.status})),c=Object(j.c)((function(e){return e.passwordRecovery.passwordRecoveryError})),i=Object(j.c)((function(e){return e.passwordRecovery.emailValidate})),d=Object(j.b)();Object(r.useEffect)((function(){c&&setTimeout((function(){d(oe(""))}),4e3),i&&setTimeout((function(){d(de(""))}),4e3)}),[i,c,d]);var u=function(){return a.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a.email)?(d(de("")),!0):(d(de("Invalid email address")),!1):(d(de("Required email")),!1)};(c||i)&&ce.a.error;return"succeeded"===s?(d(oe("")),Object(N.jsxs)("div",{className:ce.a.email,children:[Object(N.jsx)("h2",{children:"Check your email and follow the link"}),Object(N.jsx)("img",{alt:"",className:ce.a.emailPhoto,src:je})]})):"loading"===s?Object(N.jsx)(he,{}):Object(N.jsx)("div",{className:ce.a.passwordRecovery,children:Object(N.jsxs)("div",{className:ce.a.passwordRecoveryWrapper,children:[Object(N.jsx)("h2",{className:ce.a.passwordRecoveryTitle,children:"IT-incubator"}),Object(N.jsx)("h3",{className:ce.a.passwordRecoverySubTitle,children:"Forgot your password?"}),Object(N.jsxs)("form",{onSubmit:function(e){u()?(d(function(e){return function(){var t=Object(b.a)(O.a.mark((function t(a){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(le("loading")),t.next=4,g(e);case 4:a(le("succeeded")),t.next=13;break;case 7:t.prev=7,t.t0=t.catch(0),a(le("failed")),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",console.log(r),a(oe(r));case 13:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a)),e.preventDefault()):n(Object(o.a)(Object(o.a)({},a),{},{email:""}))},children:[Object(N.jsx)(T,{className:ce.a.passwordRecoveryEmail,type:"email",id:"email",placeholder:"Email",value:a.email,onChange:function(e){n(Object(o.a)(Object(o.a)({},a),{},{email:e.target.value}))}}),Object(N.jsx)("p",{className:ce.a.passwordRecoveryText,children:"Enter your email address and we will send you further instructions"})]}),Object(N.jsxs)("div",{className:ce.a.passwordRecoveryBottom,children:[Object(N.jsx)(L,{className:ce.a.passwordRecoveryButton,color:"dark-blue",type:"submit",children:"Send Instructions"}),Object(N.jsx)("p",{className:ce.a.passwordRecoveryTextButton,children:"Did you remember your password?"}),Object(N.jsx)("div",{children:c}),Object(N.jsx)(ue.b,{className:ce.a.passwordRecoveryLink,to:"/login",children:"Try logging in"})]})]})})},ge=a(21),me=a.n(ge),ve=function(e){return f.post("auth/register",e)},xe={email:"",password:"",confirmPassword:"",error:"",isLoading:!1,isRegistration:!1,hidePassword:"text",hideConfirmPassword:"text"},_e=function(e){return{type:"Registration/SET-EMAIL",payload:{email:e}}},we=function(e){return{type:"Registration/SET-Password",payload:{password:e}}},Pe=function(e){return{type:"Registration/SET-ConfirmPassword",payload:{confirmPassword:e}}},ye=function(e){return{type:"Registration/SET-Error",payload:{error:e}}},Re=function(e){return{type:"Registration/SET-IsLoading",payload:{isLoading:e}}},Ne=function(e){return{type:"Registration/SET-HidePassword",payload:{hidePassword:e}}},Se=function(e){return{type:"Registration/SET-HideConfirmPassword",payload:{hideConfirmPassword:e}}},Te=function(e){return{type:"Registration/SET-Registration",payload:{isRegistration:e}}},ke=function(){var e=Object(j.b)(),t=Object(i.g)(),a=(0,j.c)((function(e){return e.registration})),r=a.email,n=a.password,s=a.confirmPassword,c=a.hidePassword,o=a.hideConfirmPassword,l=a.error,d=a.isLoading;return a.isRegistration&&t("/login"),Object(N.jsxs)("div",{className:me.a.registration,children:[Object(N.jsxs)("div",{className:me.a.registrationWrapper,children:[Object(N.jsx)("h2",{className:me.a.registrationTitle,children:"It-incubator"}),Object(N.jsx)("h3",{className:me.a.registrationSubTitle,children:"Sign Up"}),Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:me.a.registrationEmailWrap,children:[Object(N.jsx)("label",{className:me.a.registrationLabel,children:"Email"}),Object(N.jsx)("input",{className:me.a.registrationInput,type:"",value:r,onChange:function(t){e(_e(t.currentTarget.value)),e(ye(""))}})]}),Object(N.jsxs)("div",{className:me.a.registrationPasswordWrap,children:[Object(N.jsx)("label",{className:me.a.registrationLabel,children:"Password"}),Object(N.jsx)("input",{className:me.a.registrationInput,type:c,placeholder:"",value:n,onChange:function(t){e(we(t.currentTarget.value)),e(ye(""))}}),Object(N.jsx)("button",{className:me.a.registrationPasswordControl,onClick:function(){e(Ne("password"===c?"text":"password"))},children:" "})]}),Object(N.jsxs)("div",{className:me.a.registrationPasswordWrap,children:[Object(N.jsx)("label",{className:me.a.registrationLabel,children:"Confirm password"}),Object(N.jsx)("input",{className:me.a.registrationInput,type:o,placeholder:"",value:s,onChange:function(t){e(Pe(t.currentTarget.value)),e(ye(""))}}),Object(N.jsx)("button",{className:me.a.registrationPasswordControl,onClick:function(){e(Se("password"===o?"text":"password"))},children:" "}),Object(N.jsx)("div",{style:{color:"red"},children:l}),d&&Object(N.jsx)("div",{children:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430...."})]})]}),Object(N.jsxs)("div",{className:me.a.registrationBtnBox,children:[Object(N.jsx)("button",{className:me.a.registrationBtnCancel,disabled:d,onClick:function(){return e(Te(!1)),e(ye("")),e(_e("")),e(we("")),e(Pe("")),t("/login")},children:"Cancel"}),Object(N.jsx)("button",{className:me.a.registrationBtnReg,disabled:d,onClick:function(){var t;e(r&&n&&n===s?(t={email:r,password:s},function(){var e=Object(b.a)(O.a.mark((function e(a){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(ye("")),a(Re(!0)),e.next=5,ve(t);case 5:a(Re(!1)),a(Te(!0)),a(_e("")),a(we("")),a(Pe("")),a(Te(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),a(Re(!1)),a(ye(null===(r=e.t0.response)||void 0===r?void 0:r.data.error)),a(Te(!1));case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()):ye("not valid email/password "))},children:"Register"})]})]}),Object(N.jsx)("div",{className:me.a.registrationOverlay,children:" "})]})},Ee=a(24),Ce=a.n(Ee),Le=a(127),Ie=function(){var e=Object(j.c)((function(e){return e.login.status})),t=Object(j.c)((function(e){return e.login.isLoggedIn})),a=Object(j.c)((function(e){return e.login.error})),r=Object(j.c)((function(e){return e.login.hidePassword})),n=Object(j.b)(),s=Object(Le.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.password?e.password.length>15&&(t.password="Your password should be not longer then 15 characters"):t.password="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;s.resetForm(),n((t=e,function(e){e(U("loading")),B(t).then((function(t){t.data&&(e(U("succeeded")),e(D(!0)),e(G(t.data)),e(z(!0)))})).catch((function(t){var a=t.response?t.response.data.error:t.message+", more details in the console";e(V(a))})).finally((function(){e(U("idle"))}))}))}});return t?Object(N.jsx)(i.a,{to:"/profile"}):Object(N.jsx)("div",{className:Ce.a.login,children:Object(N.jsxs)("div",{className:Ce.a.loginWrapper,children:[Object(N.jsx)("h2",{className:Ce.a.loginTitle,children:"It-incubator"}),Object(N.jsx)("h3",{className:Ce.a.loginSubtitle,children:"Sign In"}),Object(N.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(N.jsxs)("div",{className:Ce.a.loginEmailWrap,children:[Object(N.jsx)("label",{className:Ce.a.loginLabel,children:"Email"}),Object(N.jsx)("input",Object(o.a)({className:Ce.a.loginInput,type:"email",placeholder:""},s.getFieldProps("email")))]}),s.touched.email&&s.errors.email&&Object(N.jsx)("div",{style:{color:"red"},children:s.errors.email}),Object(N.jsxs)("div",{className:Ce.a.loginPasswordWrap,children:[Object(N.jsx)("label",{className:Ce.a.loginLabel,children:"Password"}),Object(N.jsx)("input",Object(o.a)({className:Ce.a.loginInput,type:r,placeholder:""},s.getFieldProps("password"))),Object(N.jsx)("button",{type:"button",className:Ce.a.loginPasswordControl,onClick:function(){n(F("password"===r?"text":"password"))},children:" "})]}),s.touched.password&&s.errors.password&&Object(N.jsx)("div",{style:{color:"red"},children:s.errors.password}),a&&a,"loading"===e&&Object(N.jsx)(he,{}),Object(N.jsx)("a",{className:Ce.a.loginLinkForgot,href:"#/passwordRecovery",children:"Forgot Password"}),Object(N.jsxs)("div",{className:Ce.a.loginBottom,children:[Object(N.jsx)("button",{className:Ce.a.loginBtn,type:"submit",disabled:"loading"===e,children:"Login"}),Object(N.jsx)("p",{className:Ce.a.loginText,children:"Don\u2019t have an account?"}),Object(N.jsx)("a",{className:Ce.a.loginLinkSignUp,href:"#/registration",children:"Sign Up"})]})]})]})})},Ae=a(96),Be=a.n(Ae),We=["type","onChange","onChangeChecked","className","spanClassName","children"],De=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),s=Object(P.a)(e,We),c="".concat(Be.a.checkbox," ").concat(r||"");return Object(N.jsxs)("div",{children:[Object(N.jsx)("input",Object(o.a)({className:c,type:"checkbox",id:"checkbox",name:"check",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)}},s))," ",Object(N.jsx)("label",{htmlFor:"checkbox"}),n&&Object(N.jsx)("span",{className:Be.a.spanClassName,children:n})]})},Ue=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"SuperComponents"}),Object(N.jsx)(T,{}),Object(N.jsx)(L,{children:"click"}),Object(N.jsx)("div",{children:Object(N.jsx)(De,{})})]})},Ve=a(61),Fe=a.n(Ve),Me=function(){return Object(N.jsx)("div",{className:Fe.a.body404,children:Object(N.jsxs)("div",{className:Fe.a.container,children:[Object(N.jsx)("h2",{className:Fe.a.h2404,children:"404"}),Object(N.jsx)("h3",{className:Fe.a.h3404,children:"Oops, nothing here..."}),Object(N.jsx)("p",{className:Fe.a.p404,children:"Please Check the URL"})]})})},Ye=a(121),Ke=a.n(Ye),He=function(e){return f.get("cards/pack",{params:{userId:e}})},ze=function(){return f.post("cards/pack",{cardsPack:{name:"4oKavoNaNa"}})},Ge=function(e){return f.delete("cards/pack",{params:{id:e}})},Ze={data:null,packUserId:""},qe=function(e){return{type:"packs/SET-PACK-USER-ID",packUserId:e}},Qe=function(e){return function(t){t(U("loading")),He(e).then((function(a){t(U("succeeded")),t({type:"packs/SET-DATA",data:a.data}),t(qe(e))})).catch((function(e){return console.log(e)})).finally((function(){t(U("idle"))}))}},Je=a(33),Xe=a.n(Je),$e=a(223);function et(){return Object(N.jsx)(J.a,{sx:{},children:Object(N.jsx)($e.a,{label:"Search",placeholder:"Product name",focused:!0,size:"small"})})}var tt=a(229),at=a(122),rt=a.n(at);function nt(){return Object(N.jsxs)("div",{className:rt.a.search,children:[Object(N.jsx)(et,{}),Object(N.jsx)(ae,{}),Object(N.jsx)(tt.a,{variant:"contained",size:"medium",children:"Search"})]})}var st=a(222);function ct(){var e=r.useState(2),t=Object(l.a)(e,2),a=t[0],n=t[1],s=r.useState(10),c=Object(l.a)(s,2),i=c[0],o=c[1];return Object(N.jsx)(st.a,{component:"div",count:100,page:a,onPageChange:function(e,t){n(t)},rowsPerPage:i,onRowsPerPageChange:function(e){o(parseInt(e.target.value,10)),n(0)}})}var it=a(123),ot=a.n(it),lt=a(124),dt=a.n(lt),ut=a(125),jt=a.n(ut),bt=function(){return Object(N.jsxs)("div",{className:ot.a.main,children:[Object(N.jsxs)("span",{children:[" ",Object(N.jsx)(dt.a,{color:"primary",fontSize:"large"})," "]}),Object(N.jsxs)("span",{children:[" ",Object(N.jsx)(jt.a,{color:"primary",fontSize:"large"})," "]})]})},pt=n.a.memo((function(){var e=Object(j.c)((function(e){return e.packs.data})),t=Object(j.c)((function(e){return e.profile.data._id})),a=Object(j.c)((function(e){return e.login.isLoggedIn})),n=Object(j.b)(),s=Object(r.useState)(!1),c=Object(l.a)(s,2),o=c[0],d=c[1];Object(r.useEffect)((function(){n(Qe(""))}),[n]);var u=Object(r.useCallback)((function(e){d(e.currentTarget.checked),n(Qe(o?"":t)),n(qe(o?"":t))}),[n,d,o,t]),b=Object(r.useCallback)((function(){n((function(e){e(U("loading")),ze().then((function(t){e(U("succeeded")),e(Qe(t.data.newCardsPack.user_id))})).catch((function(e){return console.log(e)})).finally((function(){e(U("idle"))}))}))}),[n]),p=Object(r.useCallback)((function(){var t;e&&n((t=e.cardPacks[0]._id,function(e){e(U("loading")),Ge(t).then((function(a){e(U("succeeded")),e(function(e){return{type:"packs/DELETE-PACK-USER-ID",packId:e}}(t)),e(Qe(""))})).catch((function(e){return console.log(e)})).finally((function(){e(U("idle"))}))}))}),[n,e]);return a?e?Object(N.jsxs)("div",{className:Xe.a.main,children:[Object(N.jsx)(nt,{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{type:"checkbox"})," All packs"]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{type:"checkbox",onChange:u})," My packs"]}),Object(N.jsxs)("div",{className:Xe.a.header,children:[Object(N.jsxs)("div",{className:Xe.a.sortBlock,children:["Name ",Object(N.jsx)("span",{className:Xe.a.sort,children:Object(N.jsx)(bt,{})})]}),Object(N.jsxs)("div",{className:Xe.a.sortBlock,children:["Cards ",Object(N.jsx)("span",{className:Xe.a.sort,children:Object(N.jsx)(bt,{})})]}),Object(N.jsxs)("div",{className:Xe.a.sortBlock,children:["Updated ",Object(N.jsx)("span",{className:Xe.a.sort,children:Object(N.jsx)(bt,{})})]}),Object(N.jsxs)("div",{className:Xe.a.sortBlock,children:["Created by",Object(N.jsx)("span",{className:Xe.a.sort,children:Object(N.jsx)(bt,{})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(tt.a,{variant:"contained",onClick:b,children:"Add pack"})})]}),Object(N.jsx)("div",{className:Xe.a.table,children:e.cardPacks.map((function(t,a){return Object(N.jsxs)("div",{className:Xe.a.row,children:[Object(N.jsx)("div",{children:e.cardPacks[a].name}),Object(N.jsx)("div",{children:e.cardPacks[a].cardsCount}),Object(N.jsx)("div",{children:e.cardPacks[a].created}),Object(N.jsx)("div",{children:e.cardPacks[a].updated}),Object(N.jsxs)("div",{children:[Object(N.jsx)(tt.a,{color:"success",variant:"contained",children:" Learn"}),Object(N.jsx)(tt.a,{variant:"contained",children:" Update"}),Object(N.jsx)(tt.a,{color:"error",variant:"contained",onClick:p,children:" del"})]})]},e.cardPacks[a]._id)}))}),Object(N.jsx)(ct,{})]}):Object(N.jsx)(he,{}):Object(N.jsx)(i.a,{to:"/login"})})),Ot=function(){return Object(N.jsx)("div",{className:Ke.a.Main,children:Object(N.jsxs)(i.d,{children:[Object(N.jsx)(i.b,{path:"/login",element:Object(N.jsx)(Ie,{})}),Object(N.jsx)(i.b,{path:"/",element:Object(N.jsx)(i.a,{to:"/profile"})}),Object(N.jsx)(i.b,{path:"/profile",element:Object(N.jsx)(ne,{})}),Object(N.jsx)(i.b,{path:"/registration",element:Object(N.jsx)(ke,{})}),Object(N.jsx)(i.b,{path:"/passwordRecovery",element:Object(N.jsx)(fe,{})}),Object(N.jsx)(i.b,{path:"/setPassword/:token/*",element:Object(N.jsx)(I,{})}),Object(N.jsx)(i.b,{path:"/superComponents",element:Object(N.jsx)(Ue,{})}),Object(N.jsx)(i.b,{path:"/packs",element:Object(N.jsx)(pt,{})}),Object(N.jsx)(i.b,{path:"404",element:Object(N.jsx)(Me,{})}),Object(N.jsx)(i.b,{path:"*",element:Object(N.jsx)(i.a,{to:"/404"})})]})})},ht=a(18),ft=a.n(ht),gt=a.p+"static/media/packsList.b2280a70.svg",mt=a.p+"static/media/profileIcon.36eee9e3.svg",vt=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.login.isLoggedIn}))?Object(N.jsx)("span",{onClick:function(){e((function(e){e(U("loading")),K().then((function(t){e(D(!1))})).catch((function(t){var a=t.response?t.response.data.error:t.message+", more details in the console";e(V(a))})).finally((function(){e(U("idle"))}))}))},className:ft.a.item,children:"LogOut"}):Object(N.jsx)(ue.b,{to:"/login",className:function(e){return e.isActive?ft.a.activeStyle:ft.a.item},children:"Login"});return Object(N.jsx)("nav",{className:ft.a.nav,children:Object(N.jsx)("div",{className:ft.a.container,children:Object(N.jsxs)("div",{className:ft.a.navWrapper,children:[Object(N.jsx)("div",{children:Object(N.jsx)("h2",{className:ft.a.navLogo,children:"It-incubator"})}),Object(N.jsxs)("div",{className:ft.a.navTabs,children:[Object(N.jsx)("div",{className:ft.a.navTabsItem,children:Object(N.jsxs)(ue.b,{to:"/packs",className:function(e){return e.isActive?ft.a.activeStyle:ft.a.item},children:[Object(N.jsx)("img",{className:ft.a.navTabsImg,src:gt,alt:""}),"Packs list"]})}),Object(N.jsx)("div",{className:ft.a.navTabsItem,children:Object(N.jsxs)(ue.b,{to:"/profile",className:function(e){return e.isActive?ft.a.activeStyle:ft.a.item},children:[Object(N.jsx)("img",{className:ft.a.navTabsImg,src:mt,alt:""}),"Profile"]})})]}),Object(N.jsxs)("div",{className:ft.a.navRight,children:[Object(N.jsx)("div",{className:ft.a.navTabsItem,children:t}),Object(N.jsx)("div",{className:ft.a.navTabsItem,children:Object(N.jsx)(ue.b,{to:"/registration",className:function(e){return e.isActive?ft.a.activeStyle:ft.a.item},children:"Registration"})}),Object(N.jsx)("div",{className:ft.a.navTabsItem,children:Object(N.jsx)(ue.b,{to:"/passwordRecovery",className:function(e){return e.isActive?ft.a.activeStyle:ft.a.item},children:"PasswordRecovery"})})]})]})})})},xt=function(){var e=Object(j.c)((function(e){return e.profile.initialised})),t=Object(j.b)();return Object(r.useEffect)((function(){t((function(e){e(U("loading")),M().then((function(t){t.data&&(e(D(!0)),e(U("succeeded")),e(G(t.data)),e(V(null)))})).catch((function(t){var a=t.response?t.response.data.error:t.message+", more details in the console";e(V(a))})).finally((function(){e(U("idle")),e(z(!0))}))}))}),[t]),e?Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(vt,{}),Object(N.jsx)(Ot,{})]}):Object(N.jsx)(he,{})},_t=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,232)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},wt=a(84),Pt=a(126),yt={},Rt={},Nt=Object(wt.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"login/SET-IS-LOGGED-IN":return Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:t.value});case"APP/SET-ERROR":return Object(o.a)(Object(o.a)({},e),{},{error:t.error});case"APP/SET-HidePassword":var a=Object(o.a)({},e);return a.hidePassword=t.payload.hidePassword,a;default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Registration/SET-EMAIL":var a=Object(o.a)({},e);return a.email=t.payload.email,a;case"Registration/SET-Password":var r=Object(o.a)({},e);return r.password=t.payload.password,r;case"Registration/SET-ConfirmPassword":var n=Object(o.a)({},e);return n.confirmPassword=t.payload.confirmPassword,n;case"Registration/SET-Error":var s=Object(o.a)({},e);return s.error=t.payload.error,s;case"Registration/SET-IsLoading":var c=Object(o.a)({},e);return c.isLoading=t.payload.isLoading,c;case"Registration/SET-HidePassword":var i=Object(o.a)({},e);return i.hidePassword=t.payload.hidePassword,i;case"Registration/SET-HideConfirmPassword":var l=Object(o.a)({},e);return l.hideConfirmPassword=t.payload.hideConfirmPassword,l;case"Registration/SET-Registration":var d=Object(o.a)({},e);return d.isRegistration=t.payload.isRegistration,d;default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET-DATA":return Object(o.a)(Object(o.a)({},e),{},{data:t.data});case"profile/SET-NAME":return Object(o.a)(Object(o.a)({},e),{},{data:Object(o.a)(Object(o.a)({},e.data),{},{name:t.name})});case"profile/SET-INITIALISED":return Object(o.a)(Object(o.a)({},e),{},{initialised:t.initialised});default:return e}},page404:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASSWORD_RECOVERY/RECOVERY_ERROR":return Object(o.a)(Object(o.a)({},e),{},{passwordRecoveryError:t.value});case"PASSWORD_RECOVERY/RECOVERY_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.value});case"PASSWORD_RECOVERY/EMAIL_VALIDATE":return Object(o.a)(Object(o.a)({},e),{},{emailValidate:t.value});default:return e}},setPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PASSWORD/SET-ERROR":return Object(o.a)(Object(o.a)({},e),{},{setPasswordError:t.value});case"SET-PASSWORD/SET-STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.value});case"SET-PASSWORD/PASSWORD_VALIDATE":return Object(o.a)(Object(o.a)({},e),{},{passwordValidate:t.value});default:return e}},packs:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"packs/SET-PACK-USER-ID":return Object(o.a)(Object(o.a)({},t),{},{packUserId:a.packUserId});case"packs/DELETE-PACK-USER-ID":return Object(o.a)(Object(o.a)({},t),{},{data:{cardPacks:null===(e=t.data)||void 0===e?void 0:e.cardPacks.filter((function(e){return e._id!==a.packId}))}});case"packs/SET-DATA":return Object(o.a)(Object(o.a)({},t),{},{data:a.data});default:return t}}}),St=Object(wt.c)(Nt,Object(wt.a)(Pt.a));window.store=St,c.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(j.a,{store:St,children:Object(N.jsx)(ue.a,{children:Object(N.jsx)(xt,{})})})}),document.getElementById("root")),_t()},18:function(e,t,a){e.exports={nav:"Navbar_nav__3Z5BO",container:"Navbar_container__2nGDv",navWrapper:"Navbar_navWrapper__2oHhB",navLogo:"Navbar_navLogo__3gBOH",navRight:"Navbar_navRight__2SOLo",navTabs:"Navbar_navTabs__1Bdoi",navTabsItem:"Navbar_navTabsItem__1a0YR",navTabsImg:"Navbar_navTabsImg__wibr_",item:"Navbar_item__1eKQk",activeStyle:"Navbar_activeStyle__1SgSb"}},21:function(e,t,a){e.exports={registration:"Registration_registration__UUaPN",registrationWrapper:"Registration_registrationWrapper__12nUB",registrationTitle:"Registration_registrationTitle__2xL8R",registrationSubTitle:"Registration_registrationSubTitle__K8R84",registrationInput:"Registration_registrationInput__3F69K",registrationLabel:"Registration_registrationLabel__3CXnM",registrationPasswordWrap:"Registration_registrationPasswordWrap__3QNLn",registrationPasswordControl:"Registration_registrationPasswordControl__2BqWE",registrationBtnBox:"Registration_registrationBtnBox__3d9hL",registrationBtnCancel:"Registration_registrationBtnCancel__2q74Y",registrationBtnReg:"Registration_registrationBtnReg__3kYCC"}},22:function(e,t,a){e.exports={profile:"Profile_profile__2k3lE",container:"Profile_container__2arr8",profileWrapper:"Profile_profileWrapper__1SbwQ",profileLeftBox:"Profile_profileLeftBox__2wC7R",profileLeftTop:"Profile_profileLeftTop__2W404",profileWrapImg:"Profile_profileWrapImg__3zGz_",profileNameUser:"Profile_profileNameUser__bPAkn",profileUserProf:"Profile_profileUserProf__1adsL",profilePersonalBtn:"Profile_profilePersonalBtn__3PJp8",profileRightBox:"Profile_profileRightBox__9ndwE",profilePersonal:"Profile_profilePersonal__2Cq-n",profilePersonalTitle:"Profile_profilePersonalTitle__3Yfeo",profileBtnBox:"Profile_profileBtnBox__3stTa",profileBtnCancel:"Profile_profileBtnCancel__2NjtV",passwordRecoveryButton:"Profile_passwordRecoveryButton__3xGQA",profileBtnSave:"Profile_profileBtnSave__29A_X"}},24:function(e,t,a){e.exports={login:"Login_login__2mqH2",loginWrapper:"Login_loginWrapper__tXurm",loginTitle:"Login_loginTitle__iv6EC",loginSubtitle:"Login_loginSubtitle__3L4G1",loginInput:"Login_loginInput__1Mk5v",loginLabel:"Login_loginLabel__2eoJf",loginCheckbox:"Login_loginCheckbox__tDjCu",loginEmailWrap:"Login_loginEmailWrap__3kmfr",loginPasswordWrap:"Login_loginPasswordWrap__3ovPw",loginPasswordControl:"Login_loginPasswordControl__2R5LK",loginLinkForgot:"Login_loginLinkForgot__3uymc",loginBottom:"Login_loginBottom__1XGTA",loginBtn:"Login_loginBtn__xEWcl",animate:"Login_animate__ILZUN",btn:"Login_btn__WTCLf",loginText:"Login_loginText__2Ph6x",loginLinkSignUp:"Login_loginLinkSignUp__2xTPr"}},28:function(e,t,a){e.exports={passwordRecovery:"PasswordRecovery_passwordRecovery___9m5-",passwordRecoveryWrapper:"PasswordRecovery_passwordRecoveryWrapper__AcShL",passwordRecoveryTitle:"PasswordRecovery_passwordRecoveryTitle__1WDNK",passwordRecoverySubTitle:"PasswordRecovery_passwordRecoverySubTitle__3fAZc",passwordRecoveryEmail:"PasswordRecovery_passwordRecoveryEmail__3lwaL",passwordRecoveryText:"PasswordRecovery_passwordRecoveryText__30svz",passwordRecoveryBottom:"PasswordRecovery_passwordRecoveryBottom__2Q_cM",passwordRecoveryButton:"PasswordRecovery_passwordRecoveryButton__3uTQ3",passwordRecoveryTextButton:"PasswordRecovery_passwordRecoveryTextButton__3CRfk",passwordRecoveryLink:"PasswordRecovery_passwordRecoveryLink__3TIXa"}},33:function(e,t,a){e.exports={main:"Packs_main__3z8jD",header:"Packs_header__m8sGr",sort:"Packs_sort__1E8gU",sortBlock:"Packs_sortBlock__3ldNQ",table:"Packs_table__x_FNF",row:"Packs_row__3bTRS"}},40:function(e,t,a){e.exports={setPassword:"setPassword_setPassword__39uOB",setPasswordWrapper:"setPassword_setPasswordWrapper__2Xf0k",setPasswordTitle:"setPassword_setPasswordTitle__CCicB",setPasswordSubTitle:"setPassword_setPasswordSubTitle__1YEEu",passwordRecoveryPassword:"setPassword_passwordRecoveryPassword__1m-By",setPasswordText:"setPassword_setPasswordText__1RyNH",setPasswordBtn:"setPassword_setPasswordBtn__2rmwm"}},61:function(e,t,a){e.exports={body404:"Page404_body404__1ODDF",container:"Page404_container__2UJEM",h2404:"Page404_h2404__2eN8n",h3404:"Page404_h3404__3aeT2",p404:"Page404_p404__zsWO1",a404:"Page404_a404__3HGZP"}},71:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__2dVvt",errorInput:"SuperInputText_errorInput__3umyy",error:"SuperInputText_error__2-Oun"}},82:function(e,t,a){e.exports={default:"SuperButton_default__3HbWL",red:"SuperButton_red__1jCQv",button:"SuperButton_button__iLVpd",blink:"SuperButton_blink__31Ohe"}},92:function(e,t,a){e.exports={sliderWrapper:"Slider_sliderWrapper__3d2Wa",sliderTitle:"Slider_sliderTitle__233pS"}},96:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2Dnx4",spanClassName:"SuperCheckbox_spanClassName__qAObu"}}},[[172,1,2]]]);
//# sourceMappingURL=main.90eb61fa.chunk.js.map