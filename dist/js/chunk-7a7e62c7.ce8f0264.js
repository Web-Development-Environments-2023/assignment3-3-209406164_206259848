(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a7e62c7"],{"0f21":function(e,t,s){"use strict";var a=s("70a9"),i=s.n(a);i.a},"6ab5":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("RecipeViewerList",{attrs:{title:"Favorites Page",recipes:e.favoritesRecipes,isPreview:!0,show_ing_and_serv:!1}})],1)},i=[],n=s("c7eb"),r=s("2909"),c=s("1da1"),o=s("02de"),u={name:"FavoritesPage",components:{RecipeViewerList:o["a"]},data:function(){return{favoritesRecipes:[]}},methods:{getFavoritesRecipes:function(){var e=this;return Object(c["a"])(Object(n["a"])().mark((function t(){var s,a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,t.next=4,e.axios.get("https://foodisgood.cs.bgu.ac.il/users/getFavorites");case 4:a=t.sent,e.axios.defaults.withCredentials=!1,console.log(a),e.favoritesRecipes=[],(s=e.favoritesRecipes).push.apply(s,Object(r["a"])(a.data)),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},mounted:function(){this.getFavoritesRecipes()}},p=u,l=(s("0f21"),s("2877")),f=Object(l["a"])(p,a,i,!1,null,"a7b0aa92",null);t["default"]=f.exports},"70a9":function(e,t,s){}}]);
//# sourceMappingURL=chunk-7a7e62c7.ce8f0264.js.map