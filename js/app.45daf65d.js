(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/M2_Projet_VueJS/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0418":function(t,e,i){"use strict";var n=i("c5ef"),s=i("ad21"),a=i("2877"),r=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"0fc5":function(t,e,i){},"1ba7":function(t,e,i){t.exports=i.p+"img/Décathlon.3a239604.png"},3594:function(t,e,i){"use strict";var n=i("f712"),s=i.n(n);s.a},4841:function(t,e,i){t.exports=i.p+"img/logo.bad1b68a.webp"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"app"}},[i("Header"),i("div",{staticClass:"container"},[i("router-view",{staticClass:"app-content"})],1),i("Footer")],1)])},a=[],r=i("0418"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"page-footer font-small fixed-bottom"},[i("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2020 Copyright: "),i("a",{attrs:{href:"https://github.com/DwizN/M2_Projet_VueJS"}},[t._v("Antoine OFFROY")])])])}],c=(i("58d3"),i("2877")),u={},d=Object(c["a"])(u,o,l,!1,null,"5be3c467",null),m=d.exports,p={name:"App",components:{Header:r["default"],Footer:m}},f=p,v=Object(c["a"])(f,s,a,!1,null,null,null),h=v.exports,g=i("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("center",[n("img",{attrs:{src:i("b808"),width:"200"}}),n("h1",{staticClass:"mb-3"},[t._v("Course'Liste")]),n("span",{staticClass:"d-block"},[t._v("Cette application a été réalisée dans le cadre du module VueJS.")]),n("span",[t._v("C'est une application qui permet de créer des listes de course et d'y ajouter des articles")])])],1)},b=[],C={},x=Object(c["a"])(C,_,b,!1,null,null,null),y=x.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("center",[i("h1",{staticClass:"py-4"},[t._v("Liste des courses")]),i("router-link",{attrs:{to:"/new"}},[i("el-button",{staticClass:"my-3",attrs:{type:"info",plain:""}},[t._v(" Ajouter une liste ")])],1)],1),i("div",{staticClass:"listing"},[0===t.listes.length?i("h3",{staticClass:"text-center"},[i("i",{staticClass:"el-icon-warning"}),t._v(" Aucune liste créée")]):t._e(),t._l(t.listes,(function(t,e){return i("div",{key:e,staticClass:"row-liste"},[i("Liste",{attrs:{item:t}})],1)}))],2)],1)},I=[],S=i("5530"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px","margin-left":"auto","margin-right":"auto"}},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-4 col-md-3"},[""!=t.item.enseigne?n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("9e01")("./"+t.item.enseigne+".png")}}):n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://fakeimg.pl/200x200/?text=Course List"}})]),n("div",{staticClass:"col-7 col-md-8"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.item.description))]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-10 pr-0"},[n("i",{staticClass:"el-icon-shopping-cart-2"}),n("el-tooltip",{attrs:{placement:"right-end"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._l(t.item.items,(function(e,i){return n("ul",{key:i,staticClass:"pl-2 pb-0",staticStyle:{"margin-bottom":"0px!important"}},[n("li",[n("span",{staticClass:"pr-3"},[t._v(t._s(e.quantite)+"x")]),n("span",{staticClass:"pr-3"},[t._v(t._s(e.name))]),n("span",[t._v(" "+t._s(e.prix)+"€ ")])])])})),0===t.item.items.length?n("span",[t._v("Aucun produit dans ce panier")]):t._e()],2),n("span",{staticClass:"articles pl-1",on:{click:function(e){return t.openList(t.item.id)}}},[t._v(t._s(t.item.items.length)+" article(s)")])]),n("span",{staticClass:"pl-1"},[t._v("- "+t._s(t.getPrice)+"€")])],1),n("div",{staticClass:"col-2 text-right px-0",staticStyle:{color:"#6c757d"}},[n("p",{staticClass:"card-text"},[n("small",{staticClass:"text-muted"},[t._v(t._s(t._f("moment")(t.item.dateCreation,"hh:mm")))])])])])])]),n("div",{staticClass:"col-1 col-md-1 text-center p-0"},[n("div",{staticClass:"h-50 container",staticStyle:{"background-color":"#EEE"},on:{click:function(e){return t.openList(t.item.id)}}},[n("i",{staticClass:"py-3 el-icon-s-promotion",staticStyle:{"font-size":"1.4em"}})]),n("div",{staticClass:"h-50 text-light container",staticStyle:{"background-color":"#F56C6C"},on:{click:function(e){return t.removeFromList(t.item.id)}}},[n("i",{staticClass:"py-3 el-icon-delete",staticStyle:{"font-size":"1.4em"}})])])])])},$=[],j=(i("13d5"),i("b680"),{name:"Liste",props:["item"],computed:{getPrice:function(){return 0===this.item.items.length?0:parseFloat(this.item.items.reduce((function(t,e){return t+parseFloat(e.prix)}),0).toFixed(2))}},methods:{removeFromList:function(t){this.$store.commit("REMOVE_LIST",t)},openList:function(t){this.$router.push({name:"list",params:{id:t}})}}}),k=j,E=(i("80ff"),Object(c["a"])(k,O,$,!1,null,"56035e90",null)),L=E.exports,A=i("2f62"),T={name:"Listing",components:{Liste:L},computed:Object(S["a"])({},Object(A["b"])(["listes"]))},D=T,N=(i("7f28"),Object(c["a"])(D,w,I,!1,null,"7059d815",null)),M=N.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"text-center"},[t._v("Nouvelle liste")]),i("div",{staticClass:"row",staticStyle:{"max-width":"600px","margin-left":"auto","margin-right":"auto"}},[i("div",{staticClass:"col-12"},[i("el-select",{staticClass:"mb-3 w-100",attrs:{placeholder:"Selectionnez une enseigne"},model:{value:t.form.enseigne,callback:function(e){t.$set(t.form,"enseigne",e)},expression:"form.enseigne"}},t._l(t.enseignes,(function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})})),1),i("el-input",{staticClass:"mb-3",attrs:{required:"",type:"text",placeholder:"Entrez le nom de la liste",maxlength:"20","show-word-limit":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[i("template",{slot:"prepend"},[t._v("Nom :")])],2),i("el-input",{attrs:{type:"text",placeholder:"Entrez une description",maxlength:"50","show-word-limit":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}},[i("template",{slot:"prepend"},[t._v("Description :")])],2),i("el-button",{staticClass:"w-100 mt-3",attrs:{type:"warning"},on:{click:t.addListe}},[t._v("Ajouter")])],1)])])},P=[],q=(i("a4d3"),i("e01a"),i("b0c0"),{name:"AddListe",data:function(){return{enseignes:["Décathlon","Auchan","Carrefour"],form:{name:"",description:"",enseigne:""}}},methods:{addListe:function(){var t=new Date,e={id:t.getTime(),name:this.form.name,description:this.form.description,enseigne:this.form.enseigne,dateCreation:t.getTime(),items:[]};""!==this.form.name&&(this.$store.commit("ADD_LIST",e),this.$router.push({name:"listing"}))}}}),z=q,J=(i("3594"),Object(c["a"])(z,F,P,!1,null,"3ab4e97f",null)),V=J.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"max-width":"540px","margin-left":"auto","margin-right":"auto"}},[0!==t.liste.length?i("div",[i("h1",{staticClass:"text-center"},[t._v(t._s(t.liste.name))]),i("div",{staticClass:"w-100 text-center"},[i("el-button",{staticClass:"my-3",attrs:{type:"warning",plain:""},nativeOn:{click:function(e){return t.openAdd(e)}}},[t._v(" Ajouter un article ")])],1),0===t.liste.items.length?i("div",{staticClass:"text-center"},[t._m(0)]):i("div",t._l(t.liste.items,(function(e,n){return i("div",{key:n,staticClass:"card my-2"},[i("div",{staticClass:"card-body py-0 pr-0"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-2 align-center"},[t._v(" "+t._s(e.quantite)+"x ")]),i("div",{staticClass:"col-6 text-left"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"col-2 text-right pl-0"},[t._v(" "+t._s(e.prix)+"€ ")]),i("div",{staticClass:"col-2 align-center text-center",staticStyle:{"background-color":"#F56C6C",cursor:"pointer"},on:{click:function(i){return t.removeItem(e.id)}}},[i("i",{staticClass:"pt-1 el-icon-delete",staticStyle:{"font-size":"0.8em",color:"white"}})])])])])})),0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-center"},[i("router-link",{attrs:{to:"/listing"}},[t._v("Retour")])],1)])]):t._e()])},B=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[i("i",{staticClass:"el-icon-warning"}),t._v(" Aucun élément dans la liste")])}],H={name:"DetailListe",data:function(){return{liste:[]}},mounted:function(){this.liste=this.$store.getters.getListById(this.$route.params.id)},methods:{openAdd:function(){this.$router.push({name:"addItem",params:{id:this.liste.id}})},removeItem:function(t){var e={listId:this.$route.params.id,itemId:t};this.$store.commit("REMOVE_ITEM_IN_LIST",e)}}},U=H,Q=Object(c["a"])(U,R,B,!1,null,null,null),Y=Q.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"text-center py-2"},[t._v("Ajouter un article à la liste "),i("b",[i("br"),t._v(t._s(t.liste.name))])]),i("div",{staticClass:"row",staticStyle:{"max-width":"600px","margin-left":"auto","margin-right":"auto"}},[i("div",{staticClass:"col-12"},[i("el-input",{staticClass:"mb-3",attrs:{type:"text",placeholder:"Entrez un nom",maxlength:"30","show-word-limit":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[i("template",{slot:"prepend"},[t._v("Nom :")])],2)],1),i("div",{staticClass:"col-6"},[t._v(" Quantité: "),i("el-input-number",{staticClass:"mb-3",attrs:{min:0,max:1e4},model:{value:t.form.quantite,callback:function(e){t.$set(t.form,"quantite",e)},expression:"form.quantite"}})],1),i("div",{staticClass:"col-6 text-right"},[t._v(" Prix: "),i("el-input-number",{attrs:{label:"prix",sclass:"mb-3",precision:2,min:.1},model:{value:t.form.prix,callback:function(e){t.$set(t.form,"prix",e)},expression:"form.prix"}})],1),i("div",{staticClass:"col-12"},[i("el-button",{staticClass:"w-100",attrs:{type:"warning"},on:{click:t.addItem}},[t._v("Ajouter")])],1)])])},K=[],W=(i("a9e3"),{name:"AddItem",data:function(){return{liste:[],form:{name:"",quantite:1,prix:1}}},mounted:function(){this.liste=this.$store.getters.getListById(this.$route.params.id)},methods:{addItem:function(){if(""!==this.form.name){var t=new Date,e={id:t.getTime(),name:this.form.name,quantite:Number(this.form.quantite),prix:parseFloat(this.form.prix).toFixed(2)},i={newItem:e,listId:this.$route.params.id};this.$store.commit("ADD_ITEM_IN_LIST",i),this.$router.push({name:"listing"})}}}}),X=W,Z=Object(c["a"])(X,G,K,!1,null,null,null),tt=Z.exports;n["default"].use(g["a"]);var et=new g["a"]({routes:[{path:"/",name:"home",component:y},{path:"/listing",name:"listing",component:M},{path:"/new",name:"new",component:V},{path:"/list/:id",name:"list",component:Y,props:!0},{path:"/list/:id/add",name:"addItem",component:tt,props:!0}]}),it=(i("7db0"),i("c740"),i("a434"),i("53ca"));n["default"].use(A["a"]);var nt=new A["a"].Store({state:{listes:[]},getters:{listes:function(t){return t.listes},getListById:function(t,e){return function(t){return console.log(Object(it["a"])(t)),e.listes.find((function(e){return e.id===Number(t)}))}}},mutations:{ADD_LIST:function(t,e){t.listes.push(e)},REMOVE_LIST:function(t,e){var i=t.listes.findIndex((function(t){return t.id===e}));t.listes.splice(i,1)},ADD_ITEM_IN_LIST:function(t,e){var i=t.listes.findIndex((function(t){return t.id===Number(e.listId)}));t.listes[i].items.push(e.newItem)},REMOVE_ITEM_IN_LIST:function(t,e){var i=t.listes.findIndex((function(t){return t.id===Number(e.listId)})),n=t.listes.find((function(t){return t.id===Number(e.listId)})),s=n.items.findIndex((function(t){return t.id===Number(e.itemId)}));t.listes[i].items.splice(s,1)},initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}}});nt.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}));var st=nt,at=i("5c96"),rt=i.n(at),ot=(i("f9e3"),i("0fae"),i("8f86")),lt=i.n(ot);n["default"].use(rt.a,{locale:lt.a}),n["default"].use(i("2ead")),n["default"].config.productionTip=!1,new n["default"]({router:et,store:st,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(h)}}).$mount("#app")},"58d3":function(t,e,i){"use strict";var n=i("0fc5"),s=i.n(n);s.a},"7f28":function(t,e,i){"use strict";var n=i("d92e"),s=i.n(n);s.a},"80ff":function(t,e,i){"use strict";var n=i("ff43"),s=i.n(n);s.a},8679:function(t,e,i){t.exports=i.p+"img/Carrefour.52cb2af3.png"},"895e":function(t,e,i){t.exports=i.p+"img/Auchan.bc972d55.png"},"9e01":function(t,e,i){var n={"./Auchan.png":"895e","./Carrefour.png":"8679","./Décathlon.png":"1ba7","./logo.png":"cf05"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="9e01"},ad21:function(t,e,i){"use strict";var n=i("e504"),s=i.n(n);e["default"]=s.a},b808:function(t,e,i){t.exports=i.p+"img/caddie.0297495e.jpg"},c5ef:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light bg-light"},[n("router-link",{attrs:{to:"/"}},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:i("4841"),width:"30",height:"30",alt:""}}),t._v(" Course'Liste ")])]),n("span",{staticClass:"navbar-text"},[n("router-link",{attrs:{to:"/listing"}},[t._v("Mes courses")])],1)],1)},s=[]},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d92e:function(t,e,i){},e504:function(t,e){},f712:function(t,e,i){},ff43:function(t,e,i){}});
//# sourceMappingURL=app.45daf65d.js.map