(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{18:function(e,t,n){e.exports={body404:"Page404_body404__1ODDF",container:"Page404_container__2UJEM",h2404:"Page404_h2404__2eN8n",h3404:"Page404_h3404__3aeT2",p404:"Page404_p404__zsWO1",a404:"Page404_a404__3HGZP"}},19:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2dVvt",errorInput:"SuperInputText_errorInput__3umyy",error:"SuperInputText_error__2-Oun"}},27:function(e,t,n){e.exports={default:"SuperButton_default__3HbWL",red:"SuperButton_red__1jCQv",button:"SuperButton_button__iLVpd",blink:"SuperButton_blink__31Ohe"}},31:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2Dnx4",spanClassName:"SuperCheckbox_spanClassName__qAObu"}},41:function(e,t,n){e.exports={main:"Registration_main__2XG-o"}},44:function(e,t,n){e.exports={Main:"Main_Main__2eAJM"}},51:function(e,t,n){},52:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),s=n.n(c),i=(n(51),n(52),n(3)),o=n(11),u=n(4),l=n(17),d=n.n(l),j=n(23),b=n(2),h=n(14),p=n.n(h),O=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),x=function(e){return O.post("auth/forgot",e)},S=function(e){return O.post("auth/set-new-password",e)},g={setPasswordError:"",status:"idle"},A=function(e){return{type:"SET-PASSWORD/SET-ERROR",value:e}},f=function(e){return{type:"SET-PASSWORD/SET-STATUS",value:e}},v=n(15),m=n(19),w=n.n(m),R=n(1),k=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(w.a.error," ").concat(i||""),l="".concat(w.a.input," ").concat(c?w.a.errorInput:w.a.superInput," ").concat(s);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("input",Object(b.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(R.jsx)("span",{className:u,children:c})]})},y=n(27),T=n.n(y),C=function(e){var t=e.red,n=e.className,r=Object(v.a)(e,["red","className"]),a="".concat(T.a.button," ").concat(t?T.a.red:T.a.default," ").concat(n);return Object(R.jsx)("button",Object(b.a)({className:a},r))},I=function(){var e=Object(r.useState)({password:"",resetPasswordToken:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(u.c)((function(e){return e.setPassword.status})),s=Object(u.c)((function(e){return e.setPassword.setPasswordError})),l=Object(u.b)(),b=Object(i.h)().token;return console.log(b),"succeeded"===c?(l(A("")),Object(R.jsx)(i.a,{to:{pathname:"/login"}})):Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:" IT-incubator"}),Object(R.jsx)("h2",{children:"Create new password"}),Object(R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(f("loading")),t.next=4,S(e);case 4:t.sent,n(f("succeeded")),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),n(f("failed")),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(A(r));case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(n))},children:[Object(R.jsx)(k,{type:"password",id:"password",value:n.password,onChange:function(e){return a({resetPasswordToken:b,password:e.target.value})}}),Object(R.jsx)(C,{color:"dark-blue",type:"submit",children:"send"}),Object(R.jsx)("p",{children:"Create new password and we will send you further instructions to email"}),Object(R.jsx)("div",{children:s})]})]})},K=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),F=function(e){return K.post("auth/login",e)},V={isLoggedIn:!1,status:"idle",error:null},U=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},E=function(e){return{type:"login/SET-STATUS",status:e}},q=function(e){return{type:"APP/SET-ERROR",error:e}},W=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),P=function(){return W.post("auth/me")},L=function(e){return W.put("auth/me",{name:e})},N=function(){return W.delete("auth/me")},M={data:{},initialised:!1},Q=function(e){return{type:"profile/SET-DATA",data:e}},H=n.p+"static/media/Fidget-spinner.29181c59.gif",Y=function(){return Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:H})})},D=a.a.memo((function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.value),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(R.jsx)("div",{children:a?Object(R.jsx)("input",{value:u,placeholder:"name",onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.onChange(u)}}):Object(R.jsx)("span",{onDoubleClick:function(){c(!0),l(e.value)},children:e.value})})})),B=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.profile.data.email})),n=Object(u.c)((function(e){return e.profile.data.avatar})),a=Object(u.c)((function(e){return e.profile.data.name})),c=Object(u.c)((function(e){return e.login.status})),s=Object(u.c)((function(e){return e.login.error})),o=Object(u.c)((function(e){return e.login.isLoggedIn})),l=Object(u.c)((function(e){return e.profile.initialised}));Object(r.useEffect)((function(){e((function(e){e(E("loading")),P().then((function(t){t.data&&(e(U(!0)),e(E("succeeded")),e(Q(t.data)),e({type:"profile/SET-INITIALISED",initialised:!0}))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(q(n))}))}))}),[]);var d=Object(r.useCallback)((function(t){e(function(e){return function(t){t(E("loading")),L(e).then((function(e){e.data&&(t(E("succeeded")),t(function(e){return{type:"profile/SET-NAME",name:e}}(e.data.updatedUser.name)))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(q(n))}))}}(t))}),[e]);return l?o?Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:"Personal information"}),s||"loading"===c&&Object(R.jsx)(Y,{}),Object(R.jsxs)("div",{children:[" ",n||Object(R.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUPDw8QEBAQEBUVFhAVEBUQEA8QFhYWFhUYFRUYHSghGBolGxUVITIlJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGy0mICUtLS0wLS0tLS0tLystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKcBLQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EAD8QAAIBAwIEAwUEBgoDAQAAAAECAwAEERIhBTFBUQYTYRQiMnGBQlKRoQcjYnKCsRUkM0NjorLB0eE0U3NU/8QAGwEAAgIDAQAAAAAAAAAAAAAAAAEFBgIDBAf/xAA3EQABAwIEAwYFAwIHAAAAAAABAAIDBBEFITFBElFhBhNxkaGxIoHB0fAy4fEjYhQVFjNCgpL/2gAMAwEAAhEDEQA/AKjFFFAFTyhUxToFSFNJKpUU6ySRTop0IRToFOmkimKxLlt84X8zVbxp8R6IzpaR1hD5ORqOGI+S5NJzuEXTaOI2WZ+JMzFLeMSaTgys+iAN1AOCWPyH1rVbiFz5hijS3mYD39JZEhP2Qzk7k9hvWOa8EUL+xwmZIUwZMARRHYAaz8ZyRsM1feH/AAPLhUku2U/EwhRUyTuxeRgSx+gqKrMTgpv9x/jw56bD7ld8FG+QXa3La/uqawe4lysk/kzJu0IhX3QeRBJOpfUGtl7maD3pgssQ5yxKVeMd2j3yPUHbtXcR/o+stmb2mRwMeY11MGweeNLDA9KjP4Bt/wC6nvYT3FwZV+qy6gaiGdq6PSz/AB18xc+i6XYVL/b4aeoF1zaMCAQQQRkEbgj0rJisp8HXtmumApfQgkhNoLlQTnCgnQ4GeWQew6VqWtysgJXUCp0sjKUkjcc1dTupqx0WIU9YzihcD+dVGVFLJCbOGXNZ8UYoortXMnRRiinZCMUYqWKWKLJXUcU8VICnihNQoqWKMU0lGjFSxRiki6jRTxRiiyaVFMiliiyFGniinikhRxSxU6WKEKvFAFAp1pW1SoFKpCmkmKeKVSpoRinSqQppIqFwcKflWQVX3kuTgch+ZpoRLdHkuwH41oJwuS9kQBC1rFcKsrBtLOTkMF/ZUH3v3tuVF9KUjJQZc4VB3kYhV/Miu84TYLbwpAu4jXBP325sx9SxJ+tQOOYgaeMRs1d6BSeF0olcXu0HusXEuFrJatax6YlKqFwvuoFZWGw6e7XY8Ot9CDb3m3P+wqhQZIHciunFeeVsjuEM2uT7BWSwvdOiiio5NFc74v8ADxuFN3bKPbYV3UbC8iHON+7YzpPQ7cjXRU430kGu3D6x9JOJGm3NapohIwtK8ttZ1kRZEOVcAj5Hv61nxWbjdoLbiFxAuBHLpuox91ZiwlA9PNRz/HWKvYqaYTxNkG4/n1VNnjMchZySxRipUVvstSWKMVPFLFOySWKeKMUYoSujFLFSxRihO6WKVSxSxQi6VLFSxSoQo4pkU6eKVk1DFRqeKWKLIUSKMVLFRpJqvqVFArTZbUwKdApimkgVKkKYppJ0xSp00JSthSewqqqyuh7h+VVtAWN1ALqntlPI3cZP8Oph+aivQq84vHCeXMeUM8UhPZVcav8AKTXo9UvtMD/iGHbh+uf0VkwcgwkdVJTgg9iK6iuVrf4fdXN97tgI0iT3XvpQWi1jZlgjBBmIOQWJCg99xVXfSS1Lw2IX18B4nZSb5GsF3K7orCnghyMycV4iz90aCFfoixY/HNal7wm/tB5kUv8ASMK7tC6JFehepjdAEkP7LKpP3q3Sdn6lrbtLSeWYPqAFoFWy+YKsaDVBZ8Ykv28vhaowUDzbuZXEFsxwfL0bNJNjmuRp2yd8Vbp4MmIzLxe+L/4aW0MY+SGJjj5k1qgwSpmbxGzfG9/K3usn1TGm2q5z9INm+Yb9ELxwQyRz6cFo42MbByvMqpVs43Gc96oVOdwcg9ehFdhxuy4hYQyyIRxWDypA0ZRYbxAVOD7g0TKOoCq2OWa4bg0YW2hUMHAgQahybCgZHpXoWAmdsRhlt8OhBvdV7E2sLg9u628U6dOp5RSWKMU6lQkoU8VKimhRxRipUUBChijFTooQoYoxU8UqSFDFLFTpEUJqFFSIpYoQo0sVPFKhZKtFIsAMkgAbknYAetaUvENILHSqjmScDHzqFlonnT2vXHa7FPMieOC5lz7ql2AUqOeCdzjnUfVVTKeMvd5bnwXXDAZXcI89ln/pOPSXAlaNQSZVglaIAczrC4x68q3OH8PublVkiMESSAFNWqV3B5EhCAv4mvTrDRoHlgAYA22xjoa4zjNwnDb5fLVzHdRtKLeJDIyXEbLqKIvwq4bJ5DKE9TVN/wBTVNSTHE3hdmRve2xvod972tyU23DIYzd+Y6qov7We1kWK6RF8zIjmjYtDIw3K7gFXxvg898E4NAq+41xgXds8M3DOIqkg2kWKKRonG6OFWQtlTg8q5XhN750YLbSqAJEIKsknUFTuO9T2BYlLVRltQLPb4Zj5XA8FHYhSNhIczQ+i3sUxSoqfCjUnXII71VYq4quuVwx/GmktW5hDoyHk6lfxGK7Dw7eGa1hkb4zGA/8A9E9x/wDMprieJXvkoH0F8uq4HPB7dzW/wXiphtLsxkExv5kO2QTcKPLx3/WE1XO0UIliaW/qBA/9ZKYwh5Y430Iv5Lp+Mo8ix20bFHvLiO31j4o0kP6xh6iMPXpHFeIW3CbIzOpjtrWNVCIucDIRFUdySB+ZryO2vJYCDcMZZuF3cM5cL701och2wOoRph809a9skihuocMsc8EyA4IDxyxtuNjsQdjUbhjQ2Ije/nkLemikKo3cD0WDw5xuG/tku7csYpQcal0sCpKsCO4IIq0rXtLZIUWKJEjjQYVEUKiKOgA2FbFSK5lyXCkFtxe4tk2ivLZbwIOSXCv5M5A6agYifUGutrzk8amk4pPdWlmbqKC3Fmk3nxQQ+cHMk/vMdTAHy1yqndWqx9t4rL/e8Nsx0UJLev8AVi0Y/AGtMlTFHk9wHzWTWOOgW/4i8YwWN1a2cyTF719KOiBkQ6lUat87lhyBxXnXEbRYL+9t49o0uQ6r0Tz4o5mUdhrdyB612cPi1bd5IuLi3Sa2h9ojuI1Plzws3lnylbLLLqwpQE51DBOa4SGWSV5bqZdMt1M0pTrEmAkafNY1QH1zUnhvxScTdLH9lw1xAjsdbrLUqeKMVOWUOlininUZXCjJ6U0J4rHdTrEjSSMFRBksegqsmuCcktgD1wAKw8MsLu9aKWBYxAjF0FwW/XMNlfQu4UcxkjJwccq46+tjpIjJIR0B3K6KWlfUPDRpueisoIruUa1SGBTuqy6nlK92VcBD6ZNYpuI+zsI7wLC5XUhDF45lzglNtWR1BHXrV5Jf3fD4nmurJLgKjHzbV2k8sgbeZE4BCk82UnHWsnhfhYkHtDuJZZwHkuAQTIzDIVG6RgbADYD55qlx9paphdLIQ5mwFsz0I0t1zOw3VgfhVM9vC0EHnv5dVT2l5HMNUUiyAHBKnOk9iOh+dbOKy+N7O1t19pWaOK8RSyozqHu0G7RFebZHI9Gx6507O7SZA8Tq6nqDnB7HsfSrVhGKsxCHjAsRqPqDuPZQldRmmfa9xz+6zYoxUqVSy4VHFRrJikRQmo1HFTqNIoUcUsVOo0k1T+D7WKa+1XGkw2savpbGjznLaGbO2FCk79SD0r1i5gWRGjkVZEcYZGAZWHYg868f8PAG4ngbH9ctCoJ3BZNQII67SZ/hNdR+j/jk4jW1uiJPJXSzkgT27rt5c0fNl+665yMZ715n2ip5JKt0l822sOltR89c+XJW3Dy0QtAGt/O6fErl+Ct+rVpbOYFYYySTDdY9yHVz8tvsk/DgjlirnwxwTQDcXDeddTbySnfJ7L2QclXkMZ5mtHx9dJPAlnC6NdTzxGIHOI/LcO0j4GQgUEE/tVszeKntrcvccMvw8MZL6BC9thRuRNr+H+HPpUYRLLC21g9xsSTYuA0Odjmbg21IzGYXTdrXG+2n1XSSzKpUMyKZG0qCwBdgCxCg8zgE7dBXF/pBtQk9rdKADIz20m2NalDLFk9SCj4/eq74Xw2SSYX14YzMEKwwxktDaRPgtpY7vIwA1Pgdhtz0v0lRH2SCUKSsN/E8jdI4jHKmpuw1SL+NbsGDYcRj7t1+Z2626aDxutVUOOB1x4LmBTFIVMV6rZVFQm+E47VpXR3GeYGD69jW/IuVI9K171PdB6jFNCouMfAh+7cQn/OB/vS4TYOt6tugzDM8cp3/ALNLdzIVx2LMB/FW3dsoQtINSqMkYzkggjA75xj1q94f4ZkEkUk3Ebe0vGRjHahUlYK/MPqcGQ7DOkAZGxPOoPHKiCKEtkNnOHw5E5jU5Am2myk8OY9zwQMhr81Zy2Le1pcKVC+S8UgOcsCQ0ZHfB1c/vVccAku7NSLMR3FqGP8AU5H8p4c7n2eXBAXc+4wwOhA2rViilQabjy/NHxGMsYz2I1bjIwcHl3POpz8fjsot1aWaV9MVumPMmfGeZ2VQNyx2A+gqkMqJ2EdxmcgNwR16DnlZWKRjHNJd4rpl8atj3uFcRDfdAtnGf3hNj8cVocR4leXimNlHDLdtnbzle9kTqqlfchz94MzdsHeuVNve3nvXFy8SH+4t2MESjs0o/WSH6gelC+CrXm0Ubt951MrH5s5JNSve1TmWc9rT/a0k+ZNvQrmELb8/H9guosJ7aGNYYdKRRqFVVBKqPn1+dYuIeKLSAZlnRewJAYnsAdyfkK5tvBFoedvB9IgP5Gt/hvhy3tzqjhjU91jVT9TzP41Gf5RCXcTnOPl75ro7x2gA/PJc5xviUF61zcX0ZtVi4fIliJ43ieWT3pDNGXUDXqVAqg5x03rdgJKqW5lQT88b11k8ayIY5USWNvijdQ6N8wa5Li3DvYtDW3mTQyOEFlvLcxsdx7Ox3kTbdW+Eb5xtVrwaoipyYzcA2tfMC2X8qHxGkfI0OG1/FZqdatw11ColubJobcsqmTz45WiLHSpkjX4RkgZycZ3rbAqzxTRyi7DdQUkL4yA8WukaqLicuf2egq0ufgb5VTYrata0+LJqRYs48+aKI/uu6hvyzXo0F1HaQefICIhIkZYAaYYyQoZuyAkZPQV56kbT3EUMQLGGeOWWTkkKodWCerNyA9c8q9R4bGrwFGUMralZSMqynmCOowa8+7XTtM7Wk3AAuAeZzHjZWjB43CAm1iSrDnXE8Uebh83slkqhL9WkhyMx2Lqf6w2nqpDIyr94npWzYXNzbXDWNmiX1vBGCRPIYWsy2PLh88BvM93cArkDGW3Fa3F47pbyHiF/5Xs6xvCY4FeRLFWZGEjMRqcNpIY6QF26b1X6WnjjJ4nB3ELhudydRcHQ9N8xmDn3PfxWyIscyrHgXhmOMGQ6jJJu8ze9cTH7zuf5cu2K0PFfCYoVa+tiBJAyC4VWBEkJK6hIOjqHDg88ehrd474oj8lTZ3lmWc4BDe0zle0MEe8kmdgCQB1qonsXteDNBOWN1xG4KkMQ0heZwz62HxMsKbnlkY5Yrfhzqk1UcocQ7iAAzvbe/S1vmdljUFhjcwgWsfzxUsUqeKK9bVLSop0UkKOKVSpUIUaVSNKsU1x0it7rxtpljYOjdnHf0O4Poa6qxNtxFBLJComT3XXJWWFuq61wdJ5g8iK5oVAh0cT27eXOg2P2JF+5IPtKfy5ioHE8N/xTQ+M2eNDzHIqYoqwQnhfm0+i7uw4VDBkwxKjN8TAZdvmx3P41f8dtXubKSGLGq4iEeScBUkwrt6kKWOOuMVz3B+JJcwiVNs7Mh+KOQfEp+R/2NdNwi4yug815eq153Wd41we7MtOd+nNWUBpbZuhW/GgVQo5KAB8gMCp7EMjqHjdSrIRlWUjBBHXaiiotj3MdxA5ploIsV5vx7gjcOcYLPYSNiOUks1sx5RSk/Z6Kx+R3xnCK9MkRWVo3RZI3Uq8bAMjqdiCDzFef8c8Ptw8GWIvLw/PXLzWI7OebxD73NeuRvXo2BdoGVAEMxs7Y81Xq/Di095HpyWmxwM9qqHcscmrZSCMgggjYg5BB7GtGW0YHYZFW1Qy0L6NmjOjd1Kuo6MyMHA+pXFXTWlrxFxcZjKeS6PERpnimOkBj2dQCMnltiq2tLilhHJG5MaM/lthtI1ZCnG/zqKxPDTVWex5a4Ai/Q6/su+ire4uxzbg+67+znR1/VyiUIdBcMHOpQM6iPtcs/Oqjw3F7VM14+/mFli/w7VDgY9XI1H5jtW1YkewI0Shc2gZVUBQCYs7AetZfBKgWsOOQtovzUVTKRoBe4eHvfzsrK/MjzXQgYp0UV0rFFFFFCEVQ+KvE6WCKTgySHSoOQq55s2BnSBuQN6uLufy42k0u+hS2lF1O2N8KvU+lU13a2HEVSeR4ZY4jq1NIFVMbnXkjT6hu24rYwC9yMli45WGqx+LbrzFXh6HLXIV5iOSWiMCfkXZdI9AxqFaNlOJpbi8H9nPKBGxGNVvCixxtg8gdLMP3qxX18MHcKgGSxOBjuT0FW/C6YQ04O7syqviE5lmI2GSy3l1n3V5dT3qsto5LpzFbnSinElzjKp3WP70n5Dr2rJw7h8l5hstDaH7W6y3I/Y6oh+9zPTvXX2FkAFhhQKqjAUDCqKh8Y7QNiBipznu7YeHVd9BhRdaSYZbD7rFwrhqQoIYEwM/NnY82YnmT1JrqrSDQgXn3PcnnULOzEY23Y82/49K2q83qagyn8zVkGWiruD8L9nEvva2uLmSZm06T7591ee+lQq59KsTRWvxHiEdpA91PnRGNlAy8rnZUQdWJwAPWsI431EnCMyVgSGNuoyxW9qjXMogt41GWk0KpPpsMkntzNcTd3b3twLuRDHFGpS2gbZo0b4pJB0kfA2+yoA55rG4luZBdXpLS51JBqJgsweSovIuBzfGT6CtvFeoYL2fZRWlkzf7Kr1+Jd6DHHoo4oxTxRVlUTdRxUanikRQhRpYp0Gkmo0qlSoQuXuIdJ9DWMVaOgYYNV0iFTg1yrpUbK9a0l89AWjbAmjHNkHJ1H31/MZHavQLS5BCyxMGVgGVhuGU8j8sV59W1wPinsb+XIcWkjczytpGP5RsT9Cexqt45hXejv4hnuOY5+KmcMreH+jIctj9F6xZXYkXPJhzHb/qtquXhlKkMpwRV/ZXYkG2xHMdv+q87ng4Pibp7KeWzQrEcvw6EetFFaAS03CCLrjuOeEzGTPw1Bp3MlhnSO5a2J2U/sfCemDzoLS5WQZQ8iVZSCro45q6ndWHY16hVD4j8NpdHz429nuwMeeq5WYDks6fbHr8Q6HpVzwftQYgIqrTZ3JQ9bhgk+KPVeduNz8zUJx7jfun+VQ4kLmCbyZrZVkaRFVfMGbku2kG3yAHAJXIJBGoZFQa6VonYEjQjhlIKvGyg5V1O6kY5Gr3DVQzC8bgctuXTmoCSnkj/AFhdb4Y/8G2z/wDmi/0CsHhWT2eVrB9jHkxE/wB5bE5QjuVzoPyHetvw/FotIEPNbeIfXQtZOI8JW50qxaN0cGOZNpIX5ZU9u4OxrzaKobHI6+hJ9yQVcnMJaCNVfUVSm7vLT3by2e4Qbe120ZlBHeSAe+h741CpReKrFhn2yBfR5BEw+avgg/Su+NzZRxRm46Z/x81q4gNclcUVRt4stWOiB3u5P/XbxPO34qNI+pFV/G7y+MkMLx+wRXKSsCJFkuysfl53X3Ys+YORY8+VbooXSyCNup2WEkzI2lx0C3uOcbIY2tqQ1wR77/Elop+0/wC32TmeZ2qk/oi1jALQQuw38x0WSV25lmYjLMTk5NE1zDaRaUXAB2UAszyMfxdyfqa228IcTki8/wA62SZxkWjo36sHkDKp3fuMYz161aIIYKBtn5uOuV/4CgJpJq03Zk0aZ2/CqviPEwMKQSWOEhQapJD2Vev8hW3w3w+0hE16AcEFLUHVHGehkP8AeN/lHrzp+H7ZLaTyrmOSG/ce80+C04G58iQe6yD7q8uorrrKyMhzyXqe/oKrWM47K+8TQWN9T+3QKVoMNjjHG74negWO1tWkOF5Dmegq9trdYxhR8z1J9anFEFGlRgCslUiaYyZbKXRRRTjQscD8e1aWtLiANUE2USyqrSSMEijUs7scKqgZJJ6DArg72/biE4uWDLaxf+LCRjPQ3Dr99hsoPwr6k1n47xUcRb2eLfh0Te83S/mU8vWFWH8RHYbqvTOzeBinYJ5R8R0+/wBlWcUxDiPdM+f2+6WKKdFXFQKVKmRSNYp3UcUVKkaSaiRUalQaE1GlTopJqnrHPDqHr0NZBTFcy6FVMMHB5iougIIIBBGCDuCD3qyuINW45j86ryMc6aSsPDfGDAy2s7fqmOIZSfhPSJz/AKT9K7OKQqdSnBFedTRq6lGAZWGCD1q18O8daJltLpshjphuD9vtHIfv9j9r586fjWDcN54RluOXUdOasOHYhxju5Dnsea9NsrsSDsw5jt/1W1XMRSFTqU4Iq9srsSDsw5j/AI9Ko08HB8TdPZTC2qKKxXE6xo0kjBERSzMdgqqMkn5AVzBCpeJQC84lZWWMrA5vZf2ViykP4yN/kNa/6S/AZuEe5tAVuSuGCkJ7XF1jYkECTGytj05cug/R9YsUk4jMhWW/YMqN8UNogxboexKkufV666RAwwRkGvQsOpjTU7Wb6nxOv2URK/jeSvJ+AeFLO5t0mW54hMjLjS928bIV2ZHSPSFZSCCPSui4Z+jrhxBZ7YuM7a553JPfJetW+tTw7iKuu1rxKQJIPsx3pGIpPQSAaD+0EPWu/hj0qFHQV1hoGgWBN1zo8B8O6WgHyllX+T1zL8IRlmueGRzTLa3DxSWs7m4iu/Lx5ht2lZmR1JYDcAlSMbgju+P8RFraz3LcoIJJPnpUkD8RWl4I4abbh1vC/wDaeSHkPeaT9ZIT/GzVhJCyRvC8AhAJGip+FXsU8KywFTG42wNOCNiGX7LAggjoQao/GHCRd31hG0ssS+z3h1RlQ3um32ywIxv+VWPiCxPDblr6If1G6fN0g5W05wFuVH3G2D9tm71WeKrOTiE8NtZ5eS1ilkuAJPKUwTLpWAyYOl5dBAI5KCe1V+ho30eIcI0IJB6fcX/LrrlkEsWfzC018LRx244xYTT3BtC8iRzASR3USZErRjSCDpDaHHPA5g13UEyyIsiHKOoZT0KsMg/gasPD99DdWqPCmiIroMJUK0BT3HidfsspBUj0qk/R1AEt3tmyX4fdTWu/SNG1QkZ5/qnj3qykkm5XG2zcgrC58PxXcZjuow8R3CnZg3RlYbow6EYNc3IJeGMsF05ltHYLDesAGjYn3YrnGwPRZNg3I4PP0Wte9tEmjaKVFkjkUqyMMqynmCK5aujiqo+CQeB3Hh+ZrNkjmG4XO0VTW8b2FwLCZmeGQE2k7HLMi7tBIesiDcH7S+qmrlVJOBVDqaSSnl7pwz26jYhSscge3iCaIWOBXJeJuMe0s1haORAhK3VwpwZG6wRN/qYcvhG+cZPFHHGkZuH2MhQqdNzdqcGEdYoj/wC0jmfsA98VW2tukSLHGoREGAo5AVeeznZ4AConHgPzb801g8TxHh/px6+ylFEEUIoCqoACgYCgcgBU8UU8VewLKtJUqlSpoSpVKlSQomlUiKRoTUCKDUqiaxTSNRqZqFCapxUhUalXKulMVgubfVuPi/nWcVIUwkqfGKjPCrqUcZVhgirK4t9W4+L+daRGNjzpnNLTMLe4Dx1oSttduWQnTFcnr2SU/e7N16712MUhUhlOCK8+ljDKVYBlYYIO4IrY4Jxx7ZxbTa5bfQWWXBd7ZFwD5pHOMZHvdOu3Kn4zgnDeaAZbt+328lYMPxHjtHLrzXq1ldiQdmHNf+PStCO3/pO58ge9YWsn9ZbmtzOu62w7qpwz/IL96uetJpL2Y29lIUjQ4nvU3WFSN0hPJ5SD8lzk77V6nwThsNrBHb2yBIY1woG+epJPViSSSeZJqHwzCQ2QTv8A+o+v2Hnsu2pn/wCDVYAU6KKsi4VT+KODC9tZLfOlnQ6H6xyj3o2HqHCt9K5zw6eK3lrFc/0laxGVPei/o0sYpASroT54yQwI5DlXd1WcB4b7LG8YIIa5nlGOSiaV5cfTXQhUV94bvrlPJu+JwyW7shkjTh/lPIiurlA5mbSDpwdjsTXYUUUIWKaJXUo4DKwIKkZDKdiCOoqv4FwK3sYzFax+WjOWPvM5LEADLMSSAAFHYACrWihC4XjzXHDr1ZrNIpIeJyLHLHLK0MUV8F/Vy6lVseYq6CMbsqd6tvC3DLmKW6uLvyFe7ljcRQs8iRaIli3d1UkkIvQcq3fFPCfbLOW3B0u6ZjfrHOh1ROPUOFNLwpxb2yyhuSNLyRjWv3JlJSVfo6sPpQhXFFFFCFTeKODC9tmhDaJRh4ZcZMFwm8bj5NzHUEjrXnU/i2S5hW3tVa3nKlbufGDZyqSskMRPxSZBweSjB3JFem8Z4tDZwtcXEgjjTrzLMeSqBuzE7ADnXk3D9TGad4/Ka6uZJ/K6xByNKn9rABPqTW2moIqqdrpBfhv67HoueqqXQxHhOZWWztUiQRxrpVeQ5k9yT1JO5J55rPUqWKtQFsgq+SSblFFOihJRoqVKhCjSIqVKhCVRNSNI0kKNRNTNRNIpqNBpmlSWSpqdKnXKulMVIVEVIUwkgVr367A43zzrYFSK52PKmsVUCsE8TahJGzBlBVlEjRiaFseZEzLuAwGMjlVjNZkbruO3UVrYpPja9pa7RZMeWO4gvSvBnGrOaEQWiLbNEN7MgJJF3IH2wTvrGc533rqbW6Keq9v+K8IlgVsEg6lOVcEq6HurDdT8jV3w7xVf2+B5sd3GPszgrKB2EyDf+JSfWomSgkafgzHqpOOtjP68ivcoJ1cZU/TqPnWavLOB+OpZy4j4ZdM8JUOYZYXjVmGQAzsmTjpjbbvXY8B47PcPok4fcQKBkyyPAB8tKSMc/SuMgg2K67gi4XRUUUUkIooooQiiiihCK5LwiPIvOIWW4VblbqPPLyrpdThewEyTfjXW15V4u4JxW1um4haXss0LReVLogha7igDtIoClCsoUs24AbBxvigIXqTuAMkgAcyTgD5muO4z+kK3jJislN/ONiIiBbxn/EuPhHyXU3pXALbpeKss1zPfq24M07SxH5RDCDf9mrGNAoCqAqjYKBgAegHKpSLDCc3uFumfqo2XEQMmN88vRQuGnupRcX0glkX+ziUYtrXv5anct3dt+2BtWcUqdS8UTI28LBZRckjpDxOKYp0hTrYsEUUUUkIoNFBpoUaVOihCjSNM0jSQomimaVJNRpUzSpLIKmp0UVyrpTFSoophJAqdFFNYookiDcwDRRWQQq+5RQ2F6c/nWs4kd0ggAaeeQxxhjhQ4HvFj2GCfXG1FFaqh5ZC5w1WyBgfKAV654e4OllbpbRZOndnPxSyv7zO3qefpsOlddawBFx16+pp0VXVOrNRRRTSRRRRQhFFFFCEUjRRQheb+OPDItvM4lZLpA1SXVsCFSVQMvLHnZZQBk9Hx33qmgkDqGU5DKGHTIIyOdFFS+GSOILDp/KisRjbk/dTp0UVMKLTFOiihCKKKKSEUjRRTQlSoooQlSNFFJCRpUUUFNRpUUVisgv/Z"})]}),Object(R.jsxs)("div",{children:["email: ",t,"  "]}),Object(R.jsxs)("div",{children:["name: ",Object(R.jsx)(D,{value:a,onChange:d})]}),Object(R.jsx)("button",{onClick:function(){e((function(e){e(E("loading")),N().then((function(t){t.data&&e(U(!1))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(q(n))})).finally((function(){e(E("succeeded"))}))}))},children:"LogOut"})]}):Object(R.jsx)(i.a,{to:"/login"}):Object(R.jsx)(Y,{})},Z={passwordRecoveryError:"",status:"idle"},G=function(e){return{type:"PASSWORD_RECOVERY/RECOVERY_ERROR",value:e}},z=function(e){return{type:"PASSWORD_RECOVERY/RECOVERY_STATUS",value:e}},X=n(7),J=function(){var e=Object(r.useState)({email:"",from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px;\">\n\n        <a href='https://igor-yarakhovich.github.io/cards/#/setPassword/$token$'>\n\n        Password recover link\n        </a></div>"}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(u.c)((function(e){return e.passwordRecovery.status})),s=Object(u.c)((function(e){return e.passwordRecovery.passwordRecoveryError})),i=Object(u.b)();return"succeeded"===c?(i(G("")),Object(R.jsx)("h2",{children:"Check your email and follow the link"})):Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:" IT-incubator"}),Object(R.jsx)("h2",{children:"Forgot your password?"}),Object(R.jsxs)("form",{onSubmit:function(e){i(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(z("loading")),t.next=4,x(e);case 4:n(z("succeeded")),t.next=13;break;case 7:t.prev=7,t.t0=t.catch(0),n(z("failed")),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",console.log(r),n(G(r));case 13:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n)),e.preventDefault()},children:[Object(R.jsx)(k,{type:"email",id:"email",value:n.email,onChange:function(e){return a(Object(b.a)(Object(b.a)({},n),{},{email:e.target.value}))}}),Object(R.jsx)(C,{color:"dark-blue",type:"submit",children:"send"})]}),Object(R.jsx)("p",{children:"Enter your email address and we will send you further instructions"}),Object(R.jsx)("div",{children:s}),Object(R.jsx)(X.b,{to:"/login",children:"Try logging in"})]})},_=n(41),$=n.n(_),ee={email:"",password:"",confirmPassword:"",error:"",isLoading:!1,hidePassword:"text",hideConfirmPassword:"text"},te=function(e){return{type:"Registration/SET-HidePassword",payload:{hidePassword:e}}},ne=function(e){return{type:"Registration/SET-HideConfirmPassword",payload:{hideConfirmPassword:e}}},re=function(){var e=Object(u.b)(),t=(0,u.c)((function(e){return e.registration})),n=t.email,r=t.password,a=t.confirmPassword,c=t.hidePassword,s=t.hideConfirmPassword;return Object(R.jsxs)("div",{className:$.a.main,children:[Object(R.jsx)("div",{children:Object(R.jsx)("h2",{children:"It-incubator"})}),Object(R.jsx)("div",{children:Object(R.jsx)("h3",{children:"Sign-up"})}),Object(R.jsx)("div",{children:Object(R.jsx)("input",{type:"",placeholder:"Email",value:n,onChange:function(t){e(function(e){return{type:"Registration/SET-EMAIL",payload:{email:e}}}(t.currentTarget.value))}})}),Object(R.jsxs)("div",{children:[Object(R.jsx)("input",{type:c,placeholder:"Password",value:r,onChange:function(t){e(function(e){return{type:"Registration/SET-Password",payload:{password:e}}}(t.currentTarget.value))}}),Object(R.jsx)("button",{onClick:function(){e(te("password"===c?"text":"password"))},children:"\u0433\u043b\u0430\u0437"})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("input",{type:s,placeholder:"Confirm password",value:a,onChange:function(t){e(function(e){return{type:"Registration/SET-ConfirmPassword",payload:{confirmPassword:e}}}(t.currentTarget.value))}}),Object(R.jsx)("button",{onClick:function(){e(ne("password"===s?"text":"password"))},children:"\u0433\u043b\u0430\u0437"})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("button",{disabled:!1,children:"Cancel"}),Object(R.jsx)("button",{disabled:!1,children:"Register"})]})]})},ae=n(46),ce=function(){var e=Object(u.c)((function(e){return e.login.isLoggedIn})),t=Object(u.c)((function(e){return e.login.status})),n=Object(u.c)((function(e){return e.login.error})),r=Object(u.b)(),a=Object(ae.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.password?e.password.length>15&&(t.password="Your password should be not longer then 15 characters"):t.password="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;a.resetForm(),r((t=e,function(e){e(E("loading")),F(t).then((function(t){t.data&&(e(U(!0)),e(E("succeeded")),e(Q(t.data)))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(q(n))}))}))}});return e?Object(R.jsx)(i.a,{to:"/profile"}):Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:" IT-incubator"}),Object(R.jsx)("p",{children:"Sign in"}),n||"loading"===t&&Object(R.jsx)(Y,{}),Object(R.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(R.jsx)("div",{children:Object(R.jsx)("input",Object(b.a)({type:"email",placeholder:"email"},a.getFieldProps("email")))}),a.touched.email&&a.errors.email&&Object(R.jsx)("div",{style:{color:"red"},children:a.errors.email}),Object(R.jsx)("div",{children:Object(R.jsx)("input",Object(b.a)({type:"password",placeholder:"password"},a.getFieldProps("password")))}),a.touched.password&&a.errors.password&&Object(R.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(R.jsxs)("div",{children:[Object(R.jsx)("input",{type:"checkbox"})," Remember me"]}),Object(R.jsx)("a",{href:"#/registration",children:" passwordRecovery"}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{type:"submit",disabled:"loading"===t,children:"login"})}),Object(R.jsx)("a",{href:"#/passwordRecovery",children:" Sign up"})]})]})},se=n(31),ie=n.n(se),oe=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ie.a.checkbox," ").concat(r||"");return Object(R.jsxs)("div",{children:[Object(R.jsx)("input",Object(b.a)({className:s,type:"checkbox",id:"checkbox",name:"check",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)}},c))," ",Object(R.jsx)("label",{htmlFor:"checkbox"}),a&&Object(R.jsx)("span",{className:ie.a.spanClassName,children:a})]})},ue=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{children:"SuperComponents"}),Object(R.jsx)(k,{}),Object(R.jsx)(C,{children:"click"}),Object(R.jsx)("div",{children:Object(R.jsx)(oe,{})})]})},le=n(18),de=n.n(le),je=function(){return Object(R.jsx)("div",{className:de.a.body404,children:Object(R.jsxs)("div",{className:de.a.container,children:[Object(R.jsx)("h2",{className:de.a.h2404,children:"404"}),Object(R.jsx)("h3",{className:de.a.h3404,children:"Oops, nothing here..."}),Object(R.jsx)("p",{className:de.a.p404,children:"Please Check the URL"})]})})},be=n(44),he=n.n(be),pe=function(){return Object(R.jsx)("div",{className:he.a.Main,children:Object(R.jsxs)(i.d,{children:[Object(R.jsx)(i.b,{path:"/login",element:Object(R.jsx)(ce,{})}),Object(R.jsx)(i.b,{path:"/",element:Object(R.jsx)(i.a,{to:"/profile"})}),Object(R.jsx)(i.b,{path:"/profile",element:Object(R.jsx)(B,{})}),Object(R.jsx)(i.b,{path:"/registration",element:Object(R.jsx)(re,{})}),Object(R.jsx)(i.b,{path:"/passwordRecovery",element:Object(R.jsx)(J,{})}),Object(R.jsx)(i.b,{path:"/setPassword/:token/*",element:Object(R.jsx)(I,{})}),Object(R.jsx)(i.b,{path:"/superComponents",element:Object(R.jsx)(ue,{})}),Object(R.jsx)(i.b,{path:"404",element:Object(R.jsx)(je,{})}),Object(R.jsx)(i.b,{path:"*",element:Object(R.jsx)(i.a,{to:"/404"})})]})})},Oe=n(9),xe=n.n(Oe),Se=function(){return Object(R.jsxs)("nav",{className:xe.a.nav,children:[Object(R.jsx)("div",{children:Object(R.jsx)(X.b,{to:"/profile",className:function(e){return e.isActive?xe.a.activeStyle:xe.a.item},children:"Profile"})}),Object(R.jsx)("div",{children:Object(R.jsx)(X.b,{to:"/login",className:function(e){return e.isActive?xe.a.activeStyle:xe.a.item},children:"Login"})}),Object(R.jsx)("div",{children:Object(R.jsx)(X.b,{to:"/registration",className:function(e){return e.isActive?xe.a.activeStyle:xe.a.item},children:"Registration"})}),Object(R.jsx)("div",{children:Object(R.jsx)(X.b,{to:"/passwordRecovery",className:function(e){return e.isActive?xe.a.activeStyle:xe.a.item},children:"PasswordRecovery"})}),Object(R.jsx)("div",{children:Object(R.jsx)(X.b,{to:"/superComponents",className:function(e){return e.isActive?xe.a.activeStyle:xe.a.item},children:"SuperComponents"})}),Object(R.jsx)("div",{children:Object(R.jsx)(X.b,{to:"/404",className:function(e){return e.isActive?xe.a.activeStyle:xe.a.item},children:"Page404"})})]})},ge=function(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(Se,{}),Object(R.jsx)(pe,{})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},fe=n(28),ve=n(45),me={},we={},Re=Object(fe.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"login/SET-IS-LOGGED-IN":return Object(b.a)(Object(b.a)({},e),{},{isLoggedIn:t.value});case"APP/SET-ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Registration/SET-EMAIL":var n=Object(b.a)({},e);return n.email=t.payload.email,n;case"Registration/SET-Password":var r=Object(b.a)({},e);return r.password=t.payload.password,r;case"Registration/SET-ConfirmPassword":var a=Object(b.a)({},e);return a.confirmPassword=t.payload.confirmPassword,a;case"Registration/SET-Error":var c=Object(b.a)({},e);return c.error=t.payload.error,c;case"Registration/SET-IsLoading":var s=Object(b.a)({},e);return s.isLoading=t.payload.isLoading,s;case"Registration/SET-HidePassword":var i=Object(b.a)({},e);return i.hidePassword=t.payload.hidePassword,i;case"Registration/SET-HideConfirmPassword":var o=Object(b.a)({},e);return o.hideConfirmPassword=t.payload.hideConfirmPassword,o;default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET-DATA":return Object(b.a)(Object(b.a)({},e),{},{data:t.data});case"profile/SET-NAME":return Object(b.a)(Object(b.a)({},e),{},{data:Object(b.a)(Object(b.a)({},e.data),{},{name:t.name})});case"profile/SET-INITIALISED":return Object(b.a)(Object(b.a)({},e),{},{initialised:t.initialised});default:return e}},page404:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":default:return e}},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASSWORD_RECOVERY/RECOVERY_ERROR":return Object(b.a)(Object(b.a)({},e),{},{passwordRecoveryError:t.value});case"PASSWORD_RECOVERY/RECOVERY_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.value});default:return e}},setPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PASSWORD/SET-ERROR":return Object(b.a)(Object(b.a)({},e),{},{setPasswordError:t.value});case"SET-PASSWORD/SET-STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.value});default:return e}}}),ke=Object(fe.c)(Re,Object(fe.a)(ve.a));window.store=ke,s.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(u.a,{store:ke,children:Object(R.jsx)(X.a,{children:Object(R.jsx)(ge,{})})})}),document.getElementById("root")),Ae()},9:function(e,t,n){e.exports={nav:"Navbar_nav__3Z5BO",item:"Navbar_item__1eKQk",activeStyle:"Navbar_activeStyle__1SgSb"}}},[[80,1,2]]]);
//# sourceMappingURL=main.5a4ea1e0.chunk.js.map