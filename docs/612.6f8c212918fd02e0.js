"use strict";(self.webpackChunkangularexampleapp=self.webpackChunkangularexampleapp||[]).push([[612],{5612:(Q,d,a)=>{a.r(d),a.d(d,{AuthModule:()=>k});var q=a(539),g=a(6019),r=a(9133),f=a(3886),c=a(7244),l=a(9814),h=a(5551),t=a(3668),Z=a(8895),_=a(1234),p=a(6167),v=a(888),s=a(8167),T=a(138),C=a(9112),A=a(86);const b=["signupForm"];function x(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage("firstName"))}}function U(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage("lastName"))}}function P(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage("email"))}}function M(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage("password"))}}const O=["loginForm"];function N(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage("email"))}}function y(n,m){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.getErrorMessage("password"))}}const I=c.ff.routesNames.auth,S=[{path:I.signUp,component:(()=>{class n{constructor(e,o,i){this.formBuilder=e,this.authService=o,this.utilsService=i,this.firstName=new r.NI("",[r.kI.required,r.kI.maxLength(100)]),this.lastName=new r.NI("",[r.kI.required,r.kI.maxLength(100)]),this.email=new r.NI("",[r.kI.required,r.kI.email]),this.password=new r.NI("",[r.kI.required,r.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$")]),this.hide=!0,this.signUpForm=this.formBuilder.group({firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password})}ngOnInit(){}getErrorMessage(e){var o,i,u;return(null===(o=this[e])||void 0===o?void 0:o.hasError("required"))?"You must enter a value":(null===(i=this[e])||void 0===i?void 0:i.hasError("email"))?"Not a valid email":(null===(u=this[e])||void 0===u?void 0:u.hasError("pattern"))?"Not a valid password":void 0}sendForm(){if(this.signUpForm.valid){const e=this.signUpForm.value;this.authService.signUp(e.firstName,e.lastName,e.email,e.password).subscribe(o=>{o.errors?1e4===o.errors[0].code&&this.utilsService.showSnackBar("This email is not available. Try again, with a different one.","warning-snack-bar"):(this.signupForm.resetForm(),this.utilsService.showSnackBar("Cool! Now try to log in!","info-snack-bar"))})}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(Z.e),t.Y36(_.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-up-page"]],viewQuery:function(e,o){if(1&e&&t.Gf(b,5),2&e){let i;t.iGM(i=t.CRH())&&(o.signupForm=i.first)}},decls:45,vars:16,consts:[["cols","1","rows","1","rowHeight","2:1"],[1,"signup--form__box--blue"],[1,"signup--form-container"],[1,"signup--form__header-title"],[1,"example-container",3,"formGroup"],["signupForm","ngForm"],["appearance","outline"],["matInput","","placeholder","Jason",3,"formControl"],["matSuffix",""],[4,"ngIf"],["matInput","","placeholder","Bourne",3,"formControl"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],["matInput","",3,"formControl","type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"signup--form__submit-button",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-grid-list",0),t.TgZ(1,"mat-grid-tile"),t.TgZ(2,"mat-card",1),t.TgZ(3,"div",2),t.TgZ(4,"p",3),t._uU(5,"Give it a try!"),t.qZA(),t.TgZ(6,"form",4,5),t.TgZ(8,"p"),t.TgZ(9,"mat-form-field",6),t.TgZ(10,"mat-label"),t._uU(11,"First name"),t.qZA(),t._UZ(12,"input",7),t.TgZ(13,"mat-icon",8),t._uU(14,"sentiment_very_satisfied"),t.qZA(),t.YNc(15,x,2,1,"mat-error",9),t.qZA(),t.qZA(),t.TgZ(16,"p"),t.TgZ(17,"mat-form-field",6),t.TgZ(18,"mat-label"),t._uU(19,"Last name"),t.qZA(),t._UZ(20,"input",10),t.TgZ(21,"mat-icon",8),t._uU(22,"favorite"),t.qZA(),t.YNc(23,U,2,1,"mat-error",9),t.qZA(),t.qZA(),t.TgZ(24,"p"),t.TgZ(25,"mat-form-field",6),t.TgZ(26,"mat-label"),t._uU(27,"Enter your email"),t.qZA(),t._UZ(28,"input",11),t.YNc(29,P,2,1,"mat-error",9),t.qZA(),t.qZA(),t.TgZ(30,"p"),t.TgZ(31,"mat-form-field",6),t.TgZ(32,"mat-label"),t._uU(33,"Enter a password"),t.qZA(),t._UZ(34,"input",12),t.TgZ(35,"button",13),t.NdJ("click",function(){return o.hide=!o.hide}),t.TgZ(36,"mat-icon"),t._uU(37),t.qZA(),t.qZA(),t.TgZ(38,"mat-hint"),t._uU(39,"Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number"),t.qZA(),t.YNc(40,M,2,1,"mat-error",9),t.qZA(),t.qZA(),t.TgZ(41,"p"),t.TgZ(42,"button",14),t.NdJ("click",function(){return o.sendForm()}),t._uU(43),t.ALo(44,"uppercase"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.signUpForm),t.xp6(6),t.Q6J("formControl",o.firstName),t.xp6(3),t.Q6J("ngIf",o.email.invalid),t.xp6(5),t.Q6J("formControl",o.lastName),t.xp6(3),t.Q6J("ngIf",o.email.invalid),t.xp6(5),t.Q6J("formControl",o.email),t.xp6(1),t.Q6J("ngIf",o.email.invalid),t.xp6(5),t.Q6J("formControl",o.password)("type",o.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hide),t.xp6(2),t.Oqu(o.hide?"visibility_off":"visibility"),t.xp6(3),t.Q6J("ngIf",o.password.invalid),t.xp6(3),t.Oqu(t.lcZ(44,14,"Sign Up")))},directives:[p.Il,p.DX,v.a8,r._Y,r.JL,r.sg,s.KE,s.hX,T.Nt,r.Fj,r.JJ,r.oH,C.Hw,s.R9,g.O5,r.Q7,A.lW,s.bx,s.TO],pipes:[g.gd],styles:[".signup--form-container[_ngcontent-%COMP%]{text-align:center}.signup--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.signup--form-container[_ngcontent-%COMP%]   .signup--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.signup--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.signup--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.signup--form__header-title[_ngcontent-%COMP%]{font-weight:bold;font-size:20px;color:#000000de}.signup--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}"],data:{animation:[(0,l.X$)("fadeIn",[(0,l.eR)("* => *",(0,l._7)(h.K1,{params:{timing:1,delay:0}}))])]}}),n})()},{path:I.logIn,component:(()=>{class n{constructor(e,o,i,u){this.formBuilder=e,this.authService=o,this.router=i,this.utilsService=u,this.email=new r.NI("",[r.kI.required,r.kI.email]),this.password=new r.NI("",[r.kI.required]),this.hide=!0,this.logInForm=this.formBuilder.group({email:this.email,password:this.password})}ngOnInit(){}getErrorMessage(e){var o,i;return(null===(o=this[e])||void 0===o?void 0:o.hasError("required"))?"You must enter a value":(null===(i=this[e])||void 0===i?void 0:i.hasError("email"))?"Not a valid email":void 0}sendForm(){if(this.logInForm.valid){const e=this.logInForm.value;this.authService.logIn(e.email,e.password).subscribe(o=>{o.errors?11e3===o.errors[0].code&&this.utilsService.showSnackBar("Nice! Let's create some heroes","info-snack-bar"):this.router.navigate([c.ff.routes.hero.myHeroes])})}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(Z.e),t.Y36(f.F0),t.Y36(_.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-log-in-page"]],viewQuery:function(e,o){if(1&e&&t.Gf(O,5),2&e){let i;t.iGM(i=t.CRH())&&(o.loginForm=i.first)}},decls:29,vars:12,consts:[["cols","1","rows","1","rowHeight","2:1"],[1,"login--form__box--blue"],[1,"login--form-container"],[1,"login--form__header-title"],[1,"example-container",3,"formGroup"],["loginForm","ngForm"],["appearance","outline"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],[4,"ngIf"],["matInput","",3,"formControl","type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"login--form__submit-button",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-grid-list",0),t.TgZ(1,"mat-grid-tile"),t.TgZ(2,"mat-card",1),t.TgZ(3,"div",2),t.TgZ(4,"p",3),t._uU(5,"Try to log in!"),t.qZA(),t.TgZ(6,"form",4,5),t.TgZ(8,"p"),t.TgZ(9,"mat-form-field",6),t.TgZ(10,"mat-label"),t._uU(11,"Enter your email"),t.qZA(),t._UZ(12,"input",7),t.YNc(13,N,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(14,"p"),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Enter a password"),t.qZA(),t._UZ(18,"input",9),t.TgZ(19,"button",10),t.NdJ("click",function(){return o.hide=!o.hide}),t.TgZ(20,"mat-icon"),t._uU(21),t.qZA(),t.qZA(),t.TgZ(22,"mat-hint"),t._uU(23,"Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number"),t.qZA(),t.YNc(24,y,2,1,"mat-error",8),t.qZA(),t.qZA(),t.TgZ(25,"p"),t.TgZ(26,"button",11),t.NdJ("click",function(){return o.sendForm()}),t._uU(27),t.ALo(28,"uppercase"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.logInForm),t.xp6(6),t.Q6J("formControl",o.email),t.xp6(1),t.Q6J("ngIf",o.email.invalid),t.xp6(5),t.Q6J("formControl",o.password)("type",o.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hide),t.xp6(2),t.Oqu(o.hide?"visibility_off":"visibility"),t.xp6(3),t.Q6J("ngIf",o.password.invalid),t.xp6(3),t.Oqu(t.lcZ(28,10,"Log In")))},directives:[p.Il,p.DX,v.a8,r._Y,r.JL,r.sg,s.KE,s.hX,T.Nt,r.Fj,r.Q7,r.JJ,r.oH,g.O5,A.lW,s.R9,C.Hw,s.bx,s.TO],pipes:[g.gd],styles:[".login--form-container[_ngcontent-%COMP%]{text-align:center}.login--form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.login--form-container[_ngcontent-%COMP%]   .login--form__header-title[_ngcontent-%COMP%]{margin-bottom:2rem}.login--form-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.login--form__box--blue[_ngcontent-%COMP%]{padding:4rem}[_nghost-%COMP%]     .mat-form-field-flex{background:whitesmoke}.login--form__header-title[_ngcontent-%COMP%]{font-weight:bold;font-size:20px;color:#000000de}.login--form__submit-button[_ngcontent-%COMP%]{margin-top:40px}"],data:{animation:[(0,l.X$)("fadeIn",[(0,l.eR)("* => *",(0,l._7)(h.K1,{params:{timing:1,delay:0}}))])]}}),n})()},{path:"**",redirectTo:c.ff.routes.error404}];let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.Bz.forChild(S)],f.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,r.UX,q.m,J]]}),n})()}}]);