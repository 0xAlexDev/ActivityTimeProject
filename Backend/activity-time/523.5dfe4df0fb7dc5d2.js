"use strict";(self.webpackChunkActivityTime=self.webpackChunkActivityTime||[]).push([[523],{523:(C,r,a)=>{a.r(r),a.d(r,{RegisterPageModule:()=>v});var c=a(895),s=a(114),e=a(256),p=a(226),g=a(313),l=a(433);let u=(()=>{class n{constructor(){this.contentOutput=new e.vpe,this.placeholder="Parent Placeholder"}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-textfield-text"]],inputs:{placeholder:"placeholder"},outputs:{contentOutput:"contentOutput"},decls:8,vars:1,consts:[["id","TextfieldContainer",1,"valid"],["id","InputField"],["type","text","required",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"h2"),e.TgZ(2,"form")(3,"div",1),e._UZ(4,"input",2),e.TgZ(5,"label"),e._uU(6),e.qZA(),e._UZ(7,"span"),e.qZA()()()),2&t&&(e.xp6(6),e.Oqu(i.placeholder))},dependencies:[l._Y,l.JL,l.F],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;outline:none;font-family:Poppins,sans-serif}.valid[_ngcontent-%COMP%]{position:relative;width:100%;padding:40px;background:white;border:3px solid cornflowerblue;border-radius:100px}#InputField[_ngcontent-%COMP%]{position:relative;height:15px;width:100%}#InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{position:absolute;background:transparent;border:none;box-shadow:none;font-size:20px;color:#6495ed;width:100%}#InputField[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:2px;left:0;color:gray;pointer-events:none;display:block;transition:.5s}#InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], #InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translateY(-30px);font-size:14px;color:#fff;background:cornflowerblue;padding:2px 6px}#InputField[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:-10px;right:0;display:block;background:grey;width:100%;height:2px}#InputField[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:cornflowerblue;transform:scaleX(0);transform-origin:right;transition:transform .5s ease-in-out}#InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus ~ span[_ngcontent-%COMP%]:before, #InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:valid ~ span[_ngcontent-%COMP%]:before{transform:scaleX(1);transform-origin:left;transition:transform .5s ease-in-out}.invalid[_ngcontent-%COMP%]{position:relative;width:100%;padding:40px;background:white;border:3px solid red;border-radius:100px}']}),n})();var m=a(60);const f=[{path:"",component:(()=>{class n{constructor(){this.nameHTML=document.getElementsByTagName("app-textfield-text")[0],this.surnameHTML=document.getElementsByTagName("app-textfield-text")[1],this.emailHTML=document.getElementsByTagName("app-textfield-email")[0],this.passwordHTML=document.getElementsByTagName("app-textfield-psw")[0]}ngOnInit(){this.nameHTML=document.getElementsByTagName("app-textfield-text")[0],this.surnameHTML=document.getElementsByTagName("app-textfield-text")[1],this.emailHTML=document.getElementsByTagName("app-textfield-email")[0],this.passwordHTML=document.getElementsByTagName("app-textfield-psw")[0]}onClickFunction(){this.validationName(),this.validationSurname(),this.validationEmail(),this.validationPassword()}validationName(){var t=this.nameHTML.getElementsByTagName("input")[0].value.toString(),i=this.nameHTML.getElementsByTagName("div")[0];return t.length>15||t.length<3||!/^[a-zA-Z\s.,]+$/.test(t)?(i.className="invalid",!1):(i.className="valid",!0)}validationSurname(){var t=this.surnameHTML.getElementsByTagName("input")[0].value.toString(),i=this.surnameHTML.getElementsByTagName("div")[0];return t.length>15||t.length<3||!/^[a-zA-Z\s.,]+$/.test(t)?(i.className="invalid",!1):(i.className="valid",!0)}validationEmail(){var t=this.emailHTML.getElementsByTagName("input")[0].value.toString(),i=this.emailHTML.getElementsByTagName("div")[0];return t.length>30||t.length<5||!t.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?(i.className="invalid",!1):(i.className="valid",!0)}validationPassword(){var t=this.passwordHTML.getElementsByTagName("input")[0].value.toString(),i=this.passwordHTML.getElementsByTagName("div")[0];return t.length>15||t.length<8?(i.className="invalid",console.log("lunghezza burtta"),!1):/^[A-Za-z0-9]*$/.test(t)?(i.className="valid",!0):(i.className="invalid",!1)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:10,vars:5,consts:[["id","LoginPageContainer"],["id","Title"],[3,"placeholder"],["id","buttonRegister",3,"buttonText","click"],["id","Redirect","routerLink","/login"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Registration"),e.qZA(),e._UZ(3,"app-textfield-text",2)(4,"app-textfield-text",2)(5,"app-textfield-email",2)(6,"app-textfield-psw",2),e.TgZ(7,"app-custom-button",3),e.NdJ("click",function(){return i.onClickFunction()}),e.qZA(),e.TgZ(8,"div",4),e._uU(9,"Permi qui per tornare al login!"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("placeholder","Insert Name"),e.xp6(1),e.Q6J("placeholder","Insert Surname"),e.xp6(1),e.Q6J("placeholder","Insert Email"),e.xp6(1),e.Q6J("placeholder","Insert Password"),e.xp6(1),e.Q6J("buttonText","Register"))},dependencies:[s.rH,p.O,g.S,u,m.x],styles:["*[_ngcontent-%COMP%]{padding-bottom:5%;width:90%}#LoginPageContainer[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:column}#Title[_ngcontent-%COMP%]{position:relative;color:#6495ed;background-color:#fff;display:flex;justify-content:center;padding-bottom:40px;font-size:40px;font-weight:700;padding-top:30px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}#Redirect[_ngcontent-%COMP%]{position:relative;color:#6495ed;display:flex;justify-content:center;font-size:15px;width:100%;font-style:bold;text-decoration:underline;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}#Redirect[_ngcontent-%COMP%]:hover{cursor:pointer}#buttonRegister[_ngcontent-%COMP%]{width:60%}@media only screen and (min-width: 700px){*[_ngcontent-%COMP%]{padding-bottom:3%;width:60%}#LoginPageContainer[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:column}#buttonRegister[_ngcontent-%COMP%]{width:40%}}@media only screen and (min-width: 1000px){*[_ngcontent-%COMP%]{padding-bottom:3%;width:35%}#LoginPageContainer[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;flex-direction:column}#buttonRegister[_ngcontent-%COMP%]{width:20%}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(f),s.Bz]}),n})();var x=a(626);let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,h,x.q]}),n})()}}]);