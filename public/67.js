webpackJsonp([67],{"0Ibm":function(t,e,n){var o=n("VU/8")(n("cQ2G"),n("PoI1"),!1,function(t){n("FmSw")},null,null);t.exports=o.exports},"11RZ":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".has-lateral-borders{border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2)}.stat-value{font-size:2em;padding-top:12px}.stat-key{font-size:1.4em;font-weight:200;padding-bottom:8px}.level.user-controls{margin-bottom:0}.individual-content{-webkit-transition:all 1s ease;transition:all 1s ease}",""])},FmSw:function(t,e,n){var o=n("11RZ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("318042cf",o,!0,{})},PoI1:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.notes,function(e){return n("li",{key:e.id},[n("a",{attrs:{href:"/notes/"+e.id}},[t._v("\n            "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n            ")])])}))])},staticRenderFns:[]}},cQ2G:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("QxPg"),r=n("EQBe");o.library.add([r._20,r._23,r._7,r.F,r.J,r._2,r._0]),e.default={components:{},data:function(){return{notes:null}},mounted:function(){var t=this;axios.get(route(this.$route.name,this.$route.params.id)).then(function(e){t.notes=e.data}).catch(function(e){return t.handleError(e)})}}}});
//# sourceMappingURL=67.js.map