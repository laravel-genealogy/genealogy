webpackJsonp([59],{"+w+Z":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".has-shadow-bottom{-webkit-box-shadow:0 3px 5px -4px #d3d3d3;box-shadow:0 3px 5px -4px #d3d3d3}",""])},"00ee":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".tag[data-v-91270bf0]{padding:.2rem;height:1.3rem;font-size:1rem;margin:.1rem .2rem .1rem 0}.tag .delete[data-v-91270bf0]{margin-left:.2rem}.tag[data-v-91270bf0]:last{margin-right:auto}",""])},BYuq:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"tag is-link"},[t._v("\n    "+t._s(t.label)+"\n    "),i("a",{staticClass:"delete is-small",on:{click:function(e){t.$emit("remove")}}})])},staticRenderFns:[]}},E2Ov:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("NYxO"),s=i("QxPg"),a=i("EQBe"),o=i("wpGG"),l=i.n(o),r=i("Hc3t"),c=i.n(r),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};s.default.library.add(a._6,a._20),e.default={components:{VueSelect:l.a,VueSwitch:c.a},data:function(){return{langFile:{},originalLangFile:{},locales:[],selectedLocale:null,query:null,boxHeight:0,loading:!1,filterMissing:!1,filterCore:!0}},computed:u({},Object(n.e)("layout",["isMobile"]),Object(n.e)(["meta"]),{styleObject:function(){return{"max-height":this.boxHeight,"overflow-y":"auto","overflow-x":"hidden"}},langKeys:function(){var t=this;return this.filterMissing?Object.keys(this.originalLangFile).filter(function(e){return!t.originalLangFile[e]}):Object.keys(this.langFile)},sortedKeys:function(){return this.langKeys.sort(function(t,e){return t.toLowerCase()<e.toLowerCase()?-1:t.toLowerCase()>e.toLowerCase()?1:0})},filteredKeys:function(){if(!this.query)return this.sortedKeys;var t=this;return this.langKeys.filter(function(e){return e.toLowerCase().indexOf(t.query.toLowerCase())>-1})},isNewKey:function(){return this.selectedLocale&&this.query&&-1===this.filteredKeys.indexOf(this.query)},keysCount:function(){return this.langKeys.length},subDir:function(){return this.filterCore?"app":"enso"}}),watch:{isMobile:{handler:"setBoxHeight"},filterCore:{handler:"getLangFile"}},created:function(){this.init(),this.setBoxHeight()},methods:{init:function(){var t=this;this.loading=!0,axios.get(route("system.localisation.editTexts")).then(function(e){var i=e.data;t.loading=!1,t.locales=i}).catch(function(e){return t.handleError(e)})},getLangFile:function(){var t=this;if(!this.selectedLocale)return this.langFile={},void this.updateOriginal();this.loading=!0,axios.get(route("system.localisation.getLangFile",{subDir:this.subDir,language:this.selectedLocale})).then(function(e){var i=e.data;t.loading=!1,t.langFile=i,t.updateOriginal()}).catch(function(e){return t.handleError(e)})},saveLangFile:function(){var t=this;this.loading=!0,axios.patch(route("system.localisation.saveLangFile",{subDir:this.subDir,language:this.selectedLocale}),{langFile:this.langFile}).then(function(e){var i=e.data;t.loading=!1,t.$toastr.success(i.message)}).catch(function(e){return t.handleError(e)})},addKey:function(){this.$set(this.langFile,this.query,null),this.updateOriginal(),this.focusIt()},removeKey:function(t){this.$delete(this.langFile,t),this.updateOriginal()},focusIt:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=t||this.query,this.$nextTick(function(){document.getElementById(t).focus()})},setBoxHeight:function(){this.boxHeight=document.body.clientHeight-(this.isMobile?420:388)},updateOriginal:function(){this.originalLangFile=JSON.parse(JSON.stringify(this.langFile))},merge:function(){var t=this;axios.patch(route("system.localisation.merge")).then(function(e){var i=e.data;t.loading=!1,t.$toastr.success(i.message)}).catch(function(e){t.loading=!1,t.handleError(e)})}}}},MR9b:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"box"},[i("div",{staticClass:"columns is-multiline"},[i("div",{staticClass:"column"},[i("div",{staticClass:"columns is-multiline"},[i("div",{staticClass:"column is-half"},[i("vue-select",{attrs:{options:t.locales,placeholder:t.__("Choose language")},on:{input:function(e){t.getLangFile()}},model:{value:t.selectedLocale,callback:function(e){t.selectedLocale=e},expression:"selectedLocale"}})],1),t._v(" "),t.selectedLocale?i("div",{staticClass:"column is-half has-text-right animated fadeIn is-hidden-mobile"},[i("p",{staticClass:"has-padding-top-small"},[i("b",[t._v(t._s(t.keysCount))]),t._v(" "+t._s(t.__("keys found"))+"\n                        ")])]):t._e(),t._v(" "),t.selectedLocale?i("div",{staticClass:"column animated fadeIn"},[i("div",{staticClass:"field"},[i("p",{staticClass:"control has-icons-left"},[i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"select-on-focus",rawName:"v-select-on-focus"},{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:t.__("Search")},domProps:{value:t.query},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.isNewKey?t.addKey():t.focusIt(null)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),i("span",{staticClass:"icon is-small is-left"},[i("fa",{attrs:{icon:"search"}})],1)])])]):t._e()])]),t._v(" "),i("div",{staticClass:"column"},[i("div",{staticClass:"columns is-mobile has-text-centered"},[t.selectedLocale?i("div",{staticClass:"column is-half"},[t.isNewKey?i("button",{staticClass:"button is-success is-fullwidth",on:{click:function(e){t.addKey()}}},[t._v("\n                            "+t._s(t.__("Add Key"))+"\n                        ")]):t._e()]):t._e(),t._v(" "),t.selectedLocale||"local"!==t.meta.env?t._e():i("div",{staticClass:"column is-half"},[t.canAccess("system.localisation.merge")?i("button",{staticClass:"button is-warning",on:{click:function(e){t.merge()}}},[t._v("\n                            "+t._s(t.__("Merge all localisation files"))+"\n                        ")]):t._e()]),t._v(" "),t.selectedLocale?i("div",{staticClass:"column is-half"},[i("button",{staticClass:"button is-success is-fullwidth",class:{"is-loading":t.loading},on:{click:function(e){t.saveLangFile()}}},[t._v("\n                            "+t._s(t.__("Update"))+"\n                        ")])]):t._e()]),t._v(" "),t.selectedLocale?i("div",{staticClass:"columns is-mobile has-text-right"},[i("div",{staticClass:"column"},[i("label",{staticClass:"label"},[t._v(t._s(t.__("Core"))+"\n                            "),i("vue-switch",{staticClass:"has-margin-left-medium has-margin-right-medium",attrs:{size:"is-large"},model:{value:t.filterCore,callback:function(e){t.filterCore=e},expression:"filterCore"}}),t._v("\n                            "+t._s(t.__("App"))+"\n                        ")],1)]),t._v(" "),i("div",{staticClass:"column"},[i("label",{staticClass:"label"},[t._v(t._s(t.__("Only missing"))+"\n                            "),i("vue-switch",{staticClass:"has-margin-left-medium",attrs:{size:"is-large"},model:{value:t.filterMissing,callback:function(e){t.filterMissing=e},expression:"filterMissing"}})],1)])]):t._e()])])]),t._v(" "),t.selectedLocale?i("div",{staticClass:"box"},[i("div",{staticClass:"columns is-hidden-mobile has-shadow-bottom"},[i("div",{staticClass:"column is-half has-text-centered"},[i("h6",{staticClass:"title is-6"},[t._v(t._s(t.__("Key")))])]),t._v(" "),i("div",{staticClass:"column is-half has-text-centered"},[i("h6",{staticClass:"title is-6"},[t._v(t._s(t.__("Value")))])])]),t._v(" "),i("div",{style:t.styleObject},t._l(t.filteredKeys,function(e,n){return i("div",{key:n,staticClass:"columns"},[i("div",{staticClass:"column is-half"},[i("input",{staticClass:"input",attrs:{type:"text",readonly:""},domProps:{value:e}})]),t._v(" "),i("div",{staticClass:"column is-half"},[i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"select-on-focus",rawName:"v-select-on-focus"},{name:"model",rawName:"v-model",value:t.langFile[e],expression:"langFile[key]"}],staticClass:"input",attrs:{type:"text",id:e},domProps:{value:t.langFile[e]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.focusIt("search-input")},input:function(i){i.target.composing||t.$set(t.langFile,e,i.target.value)}}})]),t._v(" "),i("p",{staticClass:"control"},[i("a",{staticClass:"button is-outlined is-danger",on:{click:function(i){t.removeKey(e)}}},[i("span",{staticClass:"icon is-small"},[i("fa",{attrs:{icon:"trash-alt"}})],1)])])])])])}))]):t._e()])},staticRenderFns:[]}},NahY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tag",props:{label:{type:String,default:null}}}},O6On:function(t,e,i){var n=i("VU/8")(i("E2Ov"),i("MR9b"),!1,function(t){i("kHkA")},null,null);t.exports=n.exports},RVgh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("O4Lo"),s=i.n(n),a=i("T+v0"),o=i.n(a),l=i("QxPg"),r=i("EQBe"),c=i("S7e7"),u=i.n(c);l.default.library.add([r.q,r.g]),e.default={name:"VueSelect",directives:{clickOutside:o.a.directive,focus:{inserted:function(t){return t.focus()}}},components:{Tag:u.a},props:{multiple:{type:Boolean,default:!1},source:{type:String,default:null},options:{type:Array,default:function(){return[]}},trackBy:{type:String,default:"id"},label:{type:String,default:"name"},value:{type:null,default:this.multiple?[]:null},optionsLimit:{type:Number,default:100},disabled:{type:Boolean,default:!1},taggable:{type:Boolean,default:!1},disableClear:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},params:{type:Object,default:null},pivotParams:{type:Object,default:null},customParams:{type:Object,default:null},placeholder:{type:String,default:"Please choose"},labels:{type:Object,default:function(){return{select:"select",deselect:"deselect",noOptions:"No options available",noResults:"No search results found",addTag:"Add option"}}},i18n:{type:Function,default:function(t){return Object.keys(this.$options.methods).includes("__")?this.__(t):t}},debounce:{type:Number,default:300}},data:function(){return{optionList:this.options,loading:!1,query:"",dropdown:!1,position:null,route:null}},computed:{isServerSide:function(){return null!==this.source},filteredOptions:function(){var t=this;return this.query?this.optionList.filter(function(e){return e[t.label].toLowerCase().indexOf(t.query.toLowerCase())>=0}):this.optionList},hasSelection:function(){return this.multiple&&0!==this.value.length||!this.multiple&&null!==this.value},selected:function(){var t=this;return 0===this.optionList.length?null:this.multiple?this.optionList.filter(function(e){return t.value.includes(e[t.trackBy])}):this.optionList.find(function(e){return e[t.trackBy]===t.value})[this.label]}},watch:{options:{handler:function(){this.optionList=this.options},deep:!0},params:{handler:function(){this.getData()},deep:!0},pivotParams:{handler:function(){this.getData()},deep:!0},customParams:{handler:function(){this.getData()},deep:!0}},created:function(){this.setRoute(),this.getData=s()(this.getData,this.debounce),this.getData()},methods:{setRoute:function(){this.isServerSide&&(this.route="function"==typeof route?route(this.source):this.source)},getData:function(){var t=this;this.isServerSide&&(this.loading=!0,axios.get(this.route,{params:this.getParams()}).then(function(e){t.processOptions(e),t.loading=!1}).catch(function(e){return t.handleError(e)}))},getParams:function(){return{params:this.params,pivotParams:this.pivotParams,customParams:this.customParams,query:this.query,value:this.value,optionsLimit:this.optionsLimit}},processOptions:function(t){var e=t.data;this.optionList=e,this.query||this.valueIsMatched()||this.clear()},valueIsMatched:function(){var t=this;return this.multiple?this.optionList.filter(function(e){return t.value.filter(function(i){return i===e[t.trackBy]}).length>0}).length>0:this.optionList.filter(function(e){return e[t.trackBy]===t.value}).length>0},showDropdown:function(){var t=this;0===this.optionList.length||this.disabled||(this.dropdown=!0,this.$nextTick(function(){return t.$el.querySelector("input").focus()}),this.position=0)},hideDropdown:function(){this.query=null,this.dropdown=!1,this.position=null},hit:function(){if(0!==this.filteredOptions.length){var t=this.filteredOptions[this.position][this.trackBy];if(!this.multiple)return this.hideDropdown(),void this.$emit("input",t);var e=this.value,i=e.findIndex(function(e){return e===t});i>=0?e.splice(i,1):e.push(t),this.query="",this.$el.querySelector("input").focus(),this.$emit("input",e)}},clear:function(){this.$emit("input",this.multiple?[]:null)},highlight:function(t){return t.replace(new RegExp("("+this.query+")","gi"),"<b>$1</b>")},remove:function(t){var e=this.value.findIndex(function(e){return e===t});this.value.splice(e,1)},isSelected:function(t){var e=this;return this.multiple?this.value.findIndex(function(i){return i===t[e.trackBy]})>=0:null!==this.value&&this.value===t[this.trackBy]},keyDown:function(){0===this.filteredOptions.length||this.loading||this.position===this.filteredOptions.length-1||(this.position=null!==this.position?++this.position:0,this.scroll())},keyUp:function(){!this.loading&&this.position&&(this.position--,this.scroll())},scroll:function(){var t=this.dropdownSelector(),e=this.optionSelector();if(e.offsetTop<t.scrollTop)t.scrollTop-=t.scrollTop-e.offsetTop;else{var i=t.scrollTop+t.clientHeight,n=e.offsetTop+e.clientHeight;n>i&&(t.scrollTop+=n-i)}},dropdownSelector:function(){return this.$el.querySelector(".dropdown-content")},optionSelector:function(){return this.$el.querySelectorAll(".dropdown-item")[this.position]}}}},S7e7:function(t,e,i){var n=i("VU/8")(i("NahY"),i("BYuq"),!1,function(t){i("qTm7")},"data-v-91270bf0",null);t.exports=n.exports},SwVz:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideDropdown,expression:"hideDropdown"}],class:["dropdown",{"is-active":t.dropdown}]},[i("div",{class:["dropdown-trigger",{"is-danger":t.hasError}]},[i("div",{staticClass:"button",attrs:{tabindex:"0",disabled:t.disabled},on:{click:t.showDropdown,focus:t.showDropdown}},[i("div",{staticClass:"select-value"},[t.multiple?i("span",t._l(t.selected,function(e,n){return i("tag",{key:n,attrs:{label:e[t.label]},on:{remove:function(i){t.remove(e[t.trackBy])}}})})):t._e(),t._v(" "),t.dropdown||t.multiple&&t.hasSelection?t._e():i("span",[t._v("\n                    "+t._s(t.hasSelection?t.selected:t.optionList.length>0?t.i18n(t.placeholder):t.i18n(t.labels.noOptions))+"\n                ")]),t._v(" "),t.dropdown?i("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input select-input",attrs:{type:"text",placeholder:t.i18n(t.placeholder)},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},function(e){t.getData()}],keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.hideDropdown(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.keyDown(e):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.keyUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?t.hideDropdown(e):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault(),t.hit()}]}}):t._e(),t._v(" "),t.loading?i("span",{staticClass:"is-loading"}):t._e(),t._v(" "),t.disableClear||t.loading||!t.hasSelection||t.disabled?t._e():i("a",{staticClass:"delete is-small",on:{mousedown:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.clear(e)}}}),t._v(" "),i("span",{staticClass:"icon is-small angle",attrs:{"aria-hidden":t.dropdown}},[i("fa",{attrs:{icon:"angle-up"}})],1)])])]),t._v(" "),i("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[i("div",{staticClass:"dropdown-content"},[t._l(t.filteredOptions,function(e,n){return i("a",{key:n,staticClass:"dropdown-item",class:{"is-active":t.position===n},on:{mousemove:function(e){t.position=n},click:function(e){e.preventDefault(),t.hit()}}},[i("span",{domProps:{innerHTML:t._s(t.highlight(e[t.label]))}}),t._v(" "),n===t.position?i("span",{class:["label tag",t.isSelected(e)?"is-warning":"is-success"]},[t.isSelected(e)?i("span",[t._v(t._s(t.i18n(t.labels.deselect)))]):i("span",[t._v(t._s(t.i18n(t.labels.select)))])]):t.isSelected(e)?i("span",{staticClass:"icon is-small selected has-text-success"},[i("fa",{attrs:{icon:"check"}})],1):t._e()])}),t._v(" "),0===t.filteredOptions.length?i("a",{staticClass:"dropdown-item",on:{click:function(e){t.taggable&&t.$emit("add-tag",t.query)}}},[t._v("\n                "+t._s(t.i18n(t.labels.noResults))+"\n                "),t.taggable?i("span",{staticClass:"label tag is-info"},[t._v("\n                    "+t._s(t.i18n(t.labels.addTag))+"\n                ")]):t._e()]):t._e()],2)])])},staticRenderFns:[]}},kHkA:function(t,e,i){var n=i("+w+Z");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("601bb29c",n,!0,{})},qTm7:function(t,e,i){var n=i("00ee");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("1ac9600c",n,!0,{})},v89l:function(t,e,i){var n=i("xEH2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("fb435960",n,!0,{})},wpGG:function(t,e,i){var n=i("VU/8")(i("RVgh"),i("SwVz"),!1,function(t){i("v89l")},"data-v-506b08aa",null);t.exports=n.exports},xEH2:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.icon.angle[data-v-506b08aa]{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.icon.angle[aria-hidden=true][data-v-506b08aa]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.dropdown[data-v-506b08aa]{position:relative;width:100%}.dropdown .dropdown-trigger[data-v-506b08aa]{width:100%}.dropdown .dropdown-trigger.is-danger .button[data-v-506b08aa]{border-color:#e50800;border:#e50800}.dropdown .dropdown-trigger .button[data-v-506b08aa]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;min-height:2.25em;height:auto;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;padding:calc(.375em - 1px) calc(.625em - 1px)}.dropdown .dropdown-trigger .button .select-value[data-v-506b08aa]{max-width:calc(100% - 2.5em);white-space:normal;text-align:left}.dropdown .dropdown-trigger .button .select-value .select-input[data-v-506b08aa]{border:0;height:1.5em;box-shadow:unset;-webkit-box-shadow:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:unset}.dropdown .dropdown-trigger .button .select-value .angle[data-v-506b08aa]{position:absolute;top:.25rem;right:.6rem}.dropdown .dropdown-trigger .button .select-value .delete[data-v-506b08aa]{position:absolute;right:1.7rem;top:.55rem}.dropdown .dropdown-trigger .button .select-value .is-loading[data-v-506b08aa]{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:1em;position:relative;width:1em;position:absolute!important;right:1.7rem;top:.55em;z-index:4}.dropdown .control[data-v-506b08aa],.dropdown .dropdown-menu[data-v-506b08aa]{width:100%}.dropdown .dropdown-menu .dropdown-content[data-v-506b08aa]{max-height:13rem;overflow-y:auto}.dropdown .dropdown-menu .dropdown-content a.dropdown-item[data-v-506b08aa]{text-overflow:ellipsis;overflow-x:hidden;padding-right:2rem}.dropdown .dropdown-menu .dropdown-content a.dropdown-item .label.tag[data-v-506b08aa]{position:absolute;padding:.3rem;height:1.3rem;z-index:1;right:1rem}.dropdown .dropdown-menu .dropdown-content a.dropdown-item .icon.selected[data-v-506b08aa]{position:absolute;z-index:1;right:1rem}',""])}});
//# sourceMappingURL=59.js.map