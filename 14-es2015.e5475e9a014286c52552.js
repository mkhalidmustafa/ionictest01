(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{c6pM:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=u("ZZ/e"),o=u("DBWA");class t{constructor(l,n,u,e){this.activatedRoute=l,this.recipesService=n,this.router=u,this.alertCtrl=e}ngOnInit(){console.log("ngOnInit"),this.activatedRoute.paramMap.subscribe(l=>{if(!l.has("recipeId"))return void this.router.navigate(["/recipes"]);const n=l.get("recipeId");this.loadedRecipe=this.recipesService.getRecipe(n)})}ionViewWillEnter(){console.log("ionViewWillEnter")}ionViewDidEnter(){console.log("ionViewDidEnter")}ionViewWillLeave(){console.log("ionViewWillLeave")}ionViewDidLeave(){console.log("ionViewDidLeave")}ngOnDestroy(){console.log("ngOnDestroy")}onDeleteRecipe(){this.alertCtrl.create({header:"Are you sure?",message:"Do you really want to delete the recipe?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.recipesService.deleteRecipe(this.loadedRecipe.id),this.router.navigate(["/recipes"])}}]}).then(l=>{l.present()})}}class r{}var b=u("pMnS"),c=u("oBZk"),a=u("SVse"),s=u("iInd"),p=e.pb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,2,"ion-item",[],null,null,null,c.C,c.l)),e.qb(1,49152,null,0,i.H,[e.h,e.k,e.x],null,null),(l()(),e.Gb(2,0,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function h(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,17,"ion-header",[],null,null,null,c.z,c.i)),e.qb(1,49152,null,0,i.B,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,c.H,c.q)),e.qb(3,49152,null,0,i.Cb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.v,c.e)),e.qb(5,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/recipes"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Cb(l,8).onClick(u)&&i),i}),c.t,c.c)),e.qb(7,49152,null,0,i.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.qb(8,16384,null,0,i.h,[[2,i.ib],i.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.rb(9,0,null,0,2,"ion-title",[],null,null,null,c.G,c.p)),e.qb(10,49152,null,0,i.Ab,[e.h,e.k,e.x],null,null),(l()(),e.Gb(11,0,["",""])),(l()(),e.rb(12,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,c.v,c.e)),e.qb(13,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDeleteRecipe()&&e),e}),c.u,c.d)),e.qb(15,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,c.A,c.j)),e.qb(17,49152,null,0,i.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(18,0,null,null,26,"ion-content",[],null,null,null,c.x,c.g)),e.qb(19,49152,null,0,i.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(20,0,null,0,24,"ion-grid",[["no-padding",""]],null,null,null,c.y,c.h)),e.qb(21,49152,null,0,i.A,[e.h,e.k,e.x],null,null),e.qb(22,16384,null,0,i.d,[e.k],null,null),(l()(),e.rb(23,0,null,0,6,"ion-row",[],null,null,null,c.F,c.o)),e.qb(24,49152,null,0,i.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(25,0,null,0,4,"ion-col",[["no-padding",""]],null,null,null,c.w,c.f)),e.qb(26,49152,null,0,i.t,[e.h,e.k,e.x],null,null),e.qb(27,16384,null,0,i.d,[e.k],null,null),(l()(),e.rb(28,0,null,0,1,"ion-img",[],null,null,null,c.B,c.k)),e.qb(29,49152,null,0,i.D,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.rb(30,0,null,0,6,"ion-row",[],null,null,null,c.F,c.o)),e.qb(31,49152,null,0,i.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(32,0,null,0,4,"ion-col",[],null,null,null,c.w,c.f)),e.qb(33,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.rb(34,0,null,0,2,"h1",[["text-center",""]],null,null,null,null,null)),e.qb(35,16384,null,0,i.d,[e.k],null,null),(l()(),e.Gb(36,null,["",""])),(l()(),e.rb(37,0,null,0,7,"ion-row",[],null,null,null,c.F,c.o)),e.qb(38,49152,null,0,i.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(39,0,null,0,5,"ion-col",[],null,null,null,c.w,c.f)),e.qb(40,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.rb(41,0,null,0,3,"ion-list",[],null,null,null,c.E,c.n)),e.qb(42,49152,null,0,i.O,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,d)),e.qb(44,278528,null,0,a.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/recipes"),l(n,8,0,"/recipes"),l(n,17,0,"trash"),l(n,29,0,u.loadedRecipe.imageUrl),l(n,44,0,u.loadedRecipe.ingredients)}),(function(l,n){var u=n.component;l(n,11,0,u.loadedRecipe.title),l(n,36,0,u.loadedRecipe.title)}))}function k(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"app-recipe-detail",[],null,null,null,h,p)),e.qb(1,245760,null,0,t,[s.a,o.a,s.m,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=e.nb("app-recipe-detail",t,k,{},{},[]),g=u("s7LF");u.d(n,"RecipeDetailPageModuleNgFactory",(function(){return q}));var q=e.ob(r,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[b.a,f]],[3,e.j],e.v]),e.Ab(4608,a.j,a.i,[e.s,[2,a.p]]),e.Ab(4608,g.c,g.c,[]),e.Ab(4608,i.b,i.b,[e.x,e.g]),e.Ab(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.Ab(4608,i.Jb,i.Jb,[i.b,e.j,e.p]),e.Ab(1073742336,a.b,a.b,[]),e.Ab(1073742336,g.b,g.b,[]),e.Ab(1073742336,g.a,g.a,[]),e.Ab(1073742336,i.Eb,i.Eb,[]),e.Ab(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),e.Ab(1073742336,r,r,[]),e.Ab(1024,s.k,(function(){return[[{path:"",component:t}]]}),[])])}))}}]);