"use strict";(self.webpackChunkActivityTime=self.webpackChunkActivityTime||[]).push([[941],{941:(L,l,o)=>{o.r(l),o.d(l,{LoginPageModule:()=>v});var d=o(895),s=o(114);class r{constructor(){this.name="alessio",this.surname="giuseppe",this.list=[],this.list.push("str1"),this.list.push("str2"),this.list.push("str3")}}var t=o(256),m=o(226),g=o(313),u=o(60);const p=[{path:"",component:(()=>{class n{constructor(){this.user=new r,this.emailHTML=document.getElementsByTagName("app-textfield-email")[0],this.passwordHTML=document.getElementsByTagName("app-textfield-psw")[0]}ngOnInit(){this.emailHTML=document.getElementsByTagName("app-textfield-email")[0],this.passwordHTML=document.getElementsByTagName("app-textfield-psw")[0]}onClickFunction(){this.validationEmail(),this.validationPassword()}validationEmail(){var e=this.emailHTML.getElementsByTagName("input")[0].value.toString(),i=this.emailHTML.getElementsByTagName("div")[0];return e.length>30||e.length<5||!e.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?(i.className="invalid",!1):(i.className="valid",!0)}validationPassword(){var e=this.passwordHTML.getElementsByTagName("input")[0].value.toString(),i=this.passwordHTML.getElementsByTagName("div")[0];return e.length>15||e.length<8?(i.className="invalid",console.log("lunghezza burtta"),!1):/^[A-Za-z0-9]*$/.test(e)?(i.className="valid",!0):(i.className="invalid",!1)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:8,vars:3,consts:[["id","LoginPageContainer"],["id","Title"],[3,"placeholder"],["id","buttonLogin",3,"buttonText","click"],["id","Redirect","routerLink","/register"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"ActivityTime"),t.qZA(),t._UZ(3,"app-textfield-email",2)(4,"app-textfield-psw",2),t.TgZ(5,"app-custom-button",3),t.NdJ("click",function(){return i.onClickFunction()}),t.qZA(),t.TgZ(6,"div",4),t._uU(7,"Se non hai ancora un account, clicca Qui"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("placeholder","Insert Email"),t.xp6(1),t.Q6J("placeholder","Insert Password"),t.xp6(1),t.Q6J("buttonText","Login"))},dependencies:[s.rH,m.O,g.S,u.x],styles:["*[_ngcontent-%COMP%]{padding-bottom:5%;width:90%}#LoginPageContainer[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:column}#Title[_ngcontent-%COMP%]{position:relative;color:#6495ed;background-color:#fff;display:flex;justify-content:center;padding-bottom:40px;font-size:40px;font-weight:700;padding-top:30px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}#Redirect[_ngcontent-%COMP%]{position:relative;color:#6495ed;font-size:15px;display:flex;justify-content:center;width:100%;font-style:bold;text-decoration:underline;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}#Redirect[_ngcontent-%COMP%]:hover{cursor:pointer}#buttonLogin[_ngcontent-%COMP%]{width:60%}@media only screen and (min-width: 700px){*[_ngcontent-%COMP%]{padding-bottom:3%;width:60%}#LoginPageContainer[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:column}#buttonLogin[_ngcontent-%COMP%]{width:40%}}@media only screen and (min-width: 1000px){*[_ngcontent-%COMP%]{padding-bottom:3%;width:35%}#LoginPageContainer[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:column}#buttonLogin[_ngcontent-%COMP%]{width:20%}}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(p),s.Bz]}),n})();var c=o(433),h=o(626);let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,f,c.UX,c.u5,h.q]}),n})()}}]);