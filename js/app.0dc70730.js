(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/M2_Projet_VueJS/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0033":function(t,e,n){"use strict";var i=n("c679"),s=n.n(i);s.a},"0b2b":function(t,e,n){"use strict";var i=n("74d0"),s=n.n(i);s.a},"1ba7":function(t,e,n){t.exports=n.p+"img/Décathlon.3a239604.png"},"381e":function(t,e,n){},4841:function(t,e,n){t.exports=n.p+"img/logo.bad1b68a.webp"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"container"},[n("router-view",{staticClass:"app-content"})],1),n("Footer")],1)])},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar navbar-light bg-light"},[i("router-link",{attrs:{to:"/"}},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[i("img",{staticClass:"d-inline-block align-top",attrs:{src:n("4841"),width:"30",height:"30",alt:""}}),t._v(" Course'Liste ")])]),i("span",{staticClass:"navbar-text"},[i("router-link",{attrs:{to:"/listing"}},[t._v("Mes courses")])],1)],1)},o=[],l=n("2877"),c={},u=Object(l["a"])(c,r,o,!1,null,null,null),m=u.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small fixed-bottom"},[n("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2020 Copyright: "),n("a",{attrs:{href:"https://github.com/DwizN/M2_Projet_VueJS"}},[t._v("Antoine OFFROY")])])])}],f=(n("fd9f"),{}),h=Object(l["a"])(f,d,p,!1,null,"4b72f88e",null),v=h.exports,g={name:"App",components:{Header:m,Footer:v}},b=g,_=Object(l["a"])(b,s,a,!1,null,null,null),C=_.exports,x=n("8c4f"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("center",[i("img",{attrs:{src:n("b808"),width:"200"}}),i("h1",{staticClass:"mb-3"},[t._v("Course'Liste")]),i("span",{staticClass:"d-block"},[t._v("Cette application a été réalisée dans le cadre du module VueJS.")]),i("span",[t._v("C'est une application qui permet de créer des listes de course et d'y ajouter des articles")])])],1)},w=[],I={},O=Object(l["a"])(I,y,w,!1,null,null,null),S=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("center",[n("h1",{staticClass:"py-4"},[t._v("Liste des courses")]),n("router-link",{attrs:{to:"/new"}},[n("el-button",{staticClass:"my-3",attrs:{type:"info",plain:""}},[t._v(" Ajouter une liste ")])],1)],1),t._l(t.listes,(function(t,e){return n("div",{key:e,staticClass:"row-liste"},[n("Liste",{attrs:{item:t}})],1)}))],2)},j=[],L=n("5530"),E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px","margin-left":"auto","margin-right":"auto"}},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-4 col-md-3"},[""!=t.item.enseigne?i("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n("9e01")("./"+t.item.enseigne+".png")}}):i("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://fakeimg.pl/200x200/?text=Course List"}})]),i("div",{staticClass:"col-7 col-md-8"},[i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),i("p",{staticClass:"card-text"},[t._v(t._s(t.item.description))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-8 col-md-6"},[i("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" "+t._s(t.item.items.length)+" article(s) ")]),i("div",{staticClass:"col-4 col-md-6 text-right px-0",staticStyle:{color:"#6c757d"}},[i("p",{staticClass:"card-text"},[i("small",{staticClass:"text-muted"},[t._v(t._s(t._f("moment")(t.item.dateCreation,"DD/MM/YYYY hh:mm")))])])])])])]),i("div",{staticClass:"col-1 col-md-1 text-center p-0"},[i("div",{staticClass:"h-50 container",staticStyle:{"background-color":"#EEE"},on:{click:function(e){return t.openList(t.item.id)}}},[i("i",{staticClass:"py-3 el-icon-s-promotion",staticStyle:{"font-size":"1.4em"}})]),i("div",{staticClass:"h-50 text-light container",staticStyle:{"background-color":"#F56C6C"},on:{click:function(e){return t.removeFromList(t.item.id)}}},[i("i",{staticClass:"py-3 el-icon-delete",staticStyle:{"font-size":"1.4em"}})])])])])},k=[],D={name:"Liste",props:["item"],data:function(){return{}},methods:{removeFromList:function(t){this.$parent.removeFromList(t)},openList:function(t){this.$parent.openList(t)}}},A=D,T=(n("0b2b"),Object(l["a"])(A,E,k,!1,null,"39405df5",null)),M=T.exports,N=n("2f62"),F={name:"Listing",components:{Liste:M},computed:Object(L["a"])({},Object(N["b"])(["listes"])),methods:{openList:function(t){this.$router.push({name:"list",params:{id:t}})},removeFromList:function(t){this.$store.commit("REMOVE_LIST",t)}}},q=F,P=Object(l["a"])(q,$,j,!1,null,null,null),z=P.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-center"},[t._v("Nouvelle liste")]),n("div",{staticClass:"row",staticStyle:{"max-width":"600px","margin-left":"auto","margin-right":"auto"}},[n("div",{staticClass:"col-12"},[n("el-select",{staticClass:"mb-3 w-100",attrs:{placeholder:"Selectionnez une enseigne"},model:{value:t.form.enseigne,callback:function(e){t.$set(t.form,"enseigne",e)},expression:"form.enseigne"}},t._l(t.enseignes,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:t}})})),1),n("el-input",{staticClass:"mb-3",attrs:{required:"",type:"text",placeholder:"Entrez le nom de la liste",maxlength:"20","show-word-limit":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[n("template",{slot:"prepend"},[t._v("Nom :")])],2),n("el-input",{attrs:{type:"text",placeholder:"Entrez une description",maxlength:"50","show-word-limit":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}},[n("template",{slot:"prepend"},[t._v("Description :")])],2),n("el-button",{staticClass:"w-100 mt-3",attrs:{type:"warning"},on:{click:t.addListe}},[t._v("Ajouter")])],1)])])},V=[],R=(n("a4d3"),n("e01a"),n("b0c0"),{name:"AddListe",data:function(){return{enseignes:["Décathlon","Auchan","Carrefour"],form:{name:"",description:"",enseigne:""}}},methods:{addListe:function(){var t=new Date,e={id:t.getTime(),name:this.form.name,description:this.form.description,enseigne:this.form.enseigne,dateCreation:t.getTime(),items:[]};""!==this.form.name&&(this.$store.commit("ADD_LIST",e),this.$router.push({name:"listing"}))}}}),Y=R,B=(n("0033"),Object(l["a"])(Y,J,V,!1,null,"51fe7270",null)),H=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" w-50 m-auto"},[0!==t.liste.length?n("div",[n("h1",{staticClass:"text-center"},[t._v(t._s(t.liste.name))]),n("div",{staticClass:"w-100 text-center"},[n("el-button",{staticClass:"my-3",attrs:{type:"warning",plain:""},nativeOn:{click:function(e){return t.openAdd(e)}}},[t._v(" Ajouter un article ")])],1),0===t.liste.items.length?n("div",{staticClass:"text-center"},[t._m(0)]):n("div",t._l(t.liste.items,(function(e,i){return n("div",{key:i,staticClass:"card my-1 m-auto"},[n("div",{staticClass:"card-body py-0 pr-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2 align-center"},[t._v(" "+t._s(e.quantite)+"x ")]),n("div",{staticClass:"col-8 text-left"},[n("label",{staticClass:"pb-0"},[t._v(t._s(e.name))])]),n("div",{staticClass:"col-2 align-center text-center",staticStyle:{"background-color":"#F56C6C",cursor:"pointer"},on:{click:function(n){return t.removeItem(e.id)}}},[n("i",{staticClass:"py-1 el-icon-delete",staticStyle:{"font-size":"1em",color:"white"}})])])])])})),0)]):t._e()])},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("i",{staticClass:"el-icon-warning"}),t._v(" Aucun élément dans la liste")])}],G={name:"DetailListe",data:function(){return{liste:[]}},mounted:function(){this.liste=this.$store.getters.getListById(this.$route.params.id)},methods:{openAdd:function(){this.$router.push({name:"addItem",params:{id:this.liste.id}})},removeItem:function(t){var e={listId:this.$route.params.id,itemId:t};this.$store.commit("REMOVE_ITEM_IN_LIST",e)}}},K=G,W=Object(l["a"])(K,U,Q,!1,null,null,null),X=W.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-50 m-auto"},[n("h1",{staticClass:"text-center py-2"},[t._v("Ajouter un article à la liste "+t._s(t.liste.name))]),n("el-input",{staticClass:"mb-3",attrs:{type:"text",placeholder:"Please input",maxlength:"20","show-word-limit":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[n("template",{slot:"prepend"},[t._v("Nom :")])],2),n("el-input",{staticClass:"mb-3",attrs:{type:"number",placeholder:"Entrez une q",max:"20",min:"0","show-word-limit":""},model:{value:t.form.quantite,callback:function(e){t.$set(t.form,"quantite",e)},expression:"form.quantite"}},[n("template",{slot:"prepend"},[t._v("Quantité :")])],2),n("el-button",{staticClass:"w-100",attrs:{type:"warning"},on:{click:t.addItem}},[t._v("Ajouter")])],1)},tt=[],et={name:"AddItem",data:function(){return{liste:[],form:{name:"",quantite:""}}},mounted:function(){this.liste=this.$store.getters.getListById(this.$route.params.id)},methods:{addItem:function(){var t=new Date,e={id:t.getTime(),name:this.form.name,quantite:this.form.quantite},n={newItem:e,listId:this.$route.params.id};this.$store.commit("ADD_ITEM_IN_LIST",n),this.$router.push({name:"listing"})}}},nt=et,it=Object(l["a"])(nt,Z,tt,!1,null,null,null),st=it.exports;i["default"].use(x["a"]);var at=new x["a"]({routes:[{path:"/",name:"home",component:S},{path:"/listing",name:"listing",component:z},{path:"/new",name:"new",component:H},{path:"/list/:id",name:"list",component:X,props:!0},{path:"/list/:id/add",name:"addItem",component:st,props:!0}]}),rt=(n("7db0"),n("c740"),n("a434"),n("a9e3"),n("53ca"));i["default"].use(N["a"]);var ot=new N["a"].Store({state:{listes:[]},getters:{listes:function(t){return t.listes},getListById:function(t,e){return function(t){return console.log(Object(rt["a"])(t)),e.listes.find((function(e){return e.id===Number(t)}))}}},mutations:{ADD_LIST:function(t,e){t.listes.push(e)},REMOVE_LIST:function(t,e){var n=t.listes.findIndex((function(t){return t.id===e}));t.listes.splice(n,1)},ADD_ITEM_IN_LIST:function(t,e){var n=t.listes.findIndex((function(t){return t.id===Number(e.listId)}));t.listes[n].items.push(e.newItem)},REMOVE_ITEM_IN_LIST:function(t,e){var n=t.listes.findIndex((function(t){return t.id===Number(e.listId)})),i=t.listes.find((function(t){return t.id===Number(e.listId)})),s=i.items.findIndex((function(t){return t.id===Number(e.itemId)}));t.listes[n].items.splice(s,1)},initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}}});ot.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}));var lt=ot,ct=n("5c96"),ut=n.n(ct),mt=(n("f9e3"),n("0fae"),n("8f86")),dt=n.n(mt);i["default"].use(ut.a,{locale:dt.a}),i["default"].use(n("2ead")),i["default"].config.productionTip=!1,new i["default"]({router:at,store:lt,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(C)}}).$mount("#app")},"74d0":function(t,e,n){},8679:function(t,e,n){t.exports=n.p+"img/Carrefour.52cb2af3.png"},"895e":function(t,e,n){t.exports=n.p+"img/Auchan.bc972d55.png"},"9e01":function(t,e,n){var i={"./Auchan.png":"895e","./Carrefour.png":"8679","./Décathlon.png":"1ba7","./logo.png":"cf05"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="9e01"},b808:function(t,e,n){t.exports=n.p+"img/caddie.0297495e.jpg"},c679:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},fd9f:function(t,e,n){"use strict";var i=n("381e"),s=n.n(i);s.a}});
//# sourceMappingURL=app.0dc70730.js.map