!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" li.tree-node { white-space: nowrap; display: flex; flex-direction: column; } a.tree-anchor { display: inline-block; text-decoration: none; color: #343434; vertical-align: top; height: 24px; line-height: 24px; padding: 3px 6px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } a.tree-anchor:hover { background-color: #fafafa; } .tree--selected > .tree-node__content > .tree-anchor { background: #f0f0f0; } .tree-checkbox { display: inline-block; height: 30px; width: 30px; cursor: pointer; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABaCAYAAACv+ebYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAejAAAHowEwL7LFAAAAB3RJTUUH4gIDCy4HZhufyQAAAZVJREFUaN7t2U8og3EYB/DvO3pdRKR2UIiViNzsyE4yHCQiSSIHkQOSFuZPSqklDliSkhknBw4UhYPiJgebNaQtorc5rHfz6nVz0cqYdzt8n+PvOXz69TxPPfUI/pdXFXEIHeIUhAkTTmzY73/G9bVbW1iSApiZXYL3/lE7OBiUMTtnR2lJIWrNJm1gRfmAbX4NmRnp6Oxo1KbGqqpi2e6ALIfQ39eOpCSdNvCWcw8ezwOGBrqQkiLGpqvtq9t4V5SI+YPDM5ycXmB4qBtpaamxGyef7wmT04uQpMC33MXlFZw7+xgc6IRenxXbObaM9CAvNxuWMRtuXN6vd5fbi6UVB3p72lCQnxN1eYSfbiBHx+fY2NxFa0sdiosMsE4tormpBqZK46/6Qohm9XG57zC/sA5ZDsFcXYGG+qpfN6QQ7c4lSW9wub0wlpf9aRIELnuECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcL/EMmRElMTVnhubyGKIhDtnUYAwuEwCgwGjI5bE+vHvDsRJkyYMOGI8Ql68IQ9vE0/3AAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position-x: center; background-position-y: -30px; } .tree--checked > .tree-node__content > .tree-checkbox { background-position-y: 0; } .tree--indeterminate > .tree-node__content > .tree-checkbox { background-position-y: -60px; } .tree--checked > .tree-node__content > .tree-anchor { background: #dadada; } .tree-arrow { display: inline-block; height: 30px; cursor: pointer; margin-left: 30px; width: 0; } .tree--has-child > .tree-node__content > .tree-arrow { margin-left: 0; width: 30px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACCSURBVHja7JSxDkBQDEVPzYIVg/gAETaL//8NFonJKiRMwlAR78UgtOs9uU1vU1kwL4cffjcsrkTC3vecUxq8S+tFbSBnJNxMT1SnMFT0JKYw1AwEpjCUzASmMBR0xLrKKucHx7ZYmEVUFkeSMR3PU1eJ/gDFx6c9wqrq/56fgNcBAInl7e4ANk/XAAAAAElFTkSuQmCC'); background-repeat: no-repeat; transition: transform .3s; } .tree--expanded > .tree-node__content > .tree-arrow { transform: rotate(90deg); } .l-fade-enter-active, .l-fade-leave-active { transition: opacity .3s, transform .3s; transform: translateX(0); } .l-fade-enter, .l-fade-leave-to { opacity: 0; transform: translateX(-2em); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var TreeNode={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"tree-node",class:e.nodeClass},[n("div",{staticClass:"tree-node__content"},[n("i",{staticClass:"tree-arrow",on:{click:e.toggleExpand}}),e._v(" "),e.options.checkbox?n("i",{staticClass:"tree-checkbox",on:{click:e.check}}):e._e(),e._v(" "),n("a",{staticClass:"tree-anchor",attrs:{href:"javascript:void(0)"},on:{click:e.select}},[n("node-content",{attrs:{node:e.node}})],1)]),e._v(" "),n("transition",{attrs:{name:"l-fade"}},[e.hasChildren()&&e.state.expanded?n("ul",{staticClass:"tree-children"},e._l(e.node.children,function(t,o){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()})):e._e()])],1)},staticRenderFns:[],name:"Node",inject:["tree"],props:["node","options"],components:{NodeContent:{props:["node"],render:function(e){var t=this.node,n=this.node.tree.vm;return n.$scopedSlots.default?n.$scopedSlots.default({node:this.node}):e("span",{domProps:{innerHTML:t.text}})}}},data:function(){return{state:this.node.states}},computed:{nodeClass:function(){var e=this.state,t=this.hasChildren(),n={"tree--has-child":t,"tree--expanded":t&&e.expanded,"tree--selected":e.selected};return this.options.checkbox&&(n["tree--checked"]=e.checked,n["tree--indeterminate"]=e.indeterminate),n}},methods:{check:function(){this.node.checked()?this.tree.uncheck(this.node):this.tree.check(this.node)},select:function(e){if(!this.options.parentSelect&&this.hasChildren())return this.toggleExpand();this.node.selected()?e.ctrlKey?this.tree.deselect(this.node):(this.tree.deselectAll(),this.options.multiple&&this.tree.select(this.node)):this.tree.select(this.node,e.ctrlKey)},toggleExpand:function(){this.hasChildren()&&this.tree.toggleExpand(this.node)},hasChildren:function(){return this.node.hasChildren()}}},Node=function(e){this.id=e.id,this.states=e.state,this.children=e.children||[],this.parent=e.parent||null,this._data=Object.assign({},{text:e.text},e.data||{}),e.tree&&(this.tree=e.tree)},prototypeAccessors={text:{configurable:!0}};Node.prototype.$emit=function(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];(t=this.tree).$emit.apply(t,["node:"+e,this].concat(n))},prototypeAccessors.text.get=function(){return this.data("text")},prototypeAccessors.text.set=function(e){var t=this.text;this.data("text",e),this.tree.$emit("node:text:changed",e,t)},Node.prototype.data=function(e,t){return void 0===t?this._data[e]:(this._data[e]=t,this)},Node.prototype.state=function(e,t){return void 0===t?this.states[e]:(this.states[e]=t,this)},Node.prototype.refreshIndeterminateState=function(){if(this.state("indeterminate",!1),this.hasChildren()){var e=this.children.length,t=0,n=0;this.children.forEach(function(e){e.checked()&&t++,e.indeterminate()&&n++}),t==e?this.checked()||this.tree.$emit("node:checked",this.check()):this.checked()&&this.tree.$emit("node:unchecked",this.uncheck()),this.checked()||this.state("indeterminate",n>0||t>0&&t<e)}this.parent&&this.parent.refreshIndeterminateState()},Node.prototype.indeterminate=function(){return this.state("indeterminate")},Node.prototype.selectable=function(){return this.state("selectable")},Node.prototype.selected=function(){return this.state("selected")},Node.prototype.select=function(){return this.selected()?this:(this.state("selected",!0),this.$emit("selected"),this)},Node.prototype.unselect=function(){return this.selected()?(this.state("selected",!1),this.$emit("unselected"),this):this},Node.prototype.checked=function(){return this.state("checked")},Node.prototype.check=function(){return this.checked()?this:(this.state("checked",!0),this.refreshIndeterminateState(),this.$emit("checked"),this)},Node.prototype.uncheck=function(){return this.checked()?(this.state("checked",!1),this.refreshIndeterminateState(),this.$emit("unchecked"),this):this},Node.prototype.show=function(){return this.visible()?this:(this.state("visible",!0),this.$emit("shown"),this)},Node.prototype.hide=function(){return this.hidden()?this:(this.state("visible",!1),this.$emit("hidden"),this)},Node.prototype.visible=function(){return this.state("visible")},Node.prototype.hidden=function(){return!this.state("visible")},Node.prototype.enable=function(){return this.enabled()?this:(this.state("disabled",!1),this.$emit("enabled"),this)},Node.prototype.enabled=function(){return!this.state("disabled")},Node.prototype.disable=function(){return this.disabled()?this:(this.state("disabled",!0),this.$emit("disabled"),this)},Node.prototype.disabled=function(){return this.state("disabled")},Node.prototype.expanded=function(){return this.state("expanded")},Node.prototype.toggleExpand=function(){return this.toggleState("expanded")},Node.prototype.collapse=function(){return this.state("expanded",!1)},Node.prototype.expand=function(){return this.state("expanded",!0)},Node.prototype.remove=function(){return this.tree.removeNode(this)},Node.prototype.toggleState=function(e){e in this.states&&(this.states[e]=!this.states[e])},Node.prototype.hasChildren=function(){return this.children.length>0},Node.prototype.isRoot=function(){return null===this.parent},Object.defineProperties(Node.prototype,prototypeAccessors);var defaults={selected:!1,selectable:!0,checked:!1,expanded:!1,disabled:!1,visible:!0,indeterminate:!1},extend=Object.assign;function hierarchy(e,t){var n=new Node(e),o=n.states||{},r=t+1;return n.states=extend({},defaults,o),void 0===n.id&&(n.id=n.parent?n.parent.id+"."+r:""+r),n.children&&(n.children=n.children.map(function(e,t){return e.parent=n,hierarchy(e,t)})),n}function hierarchy$1(e){return e.map(hierarchy)}function s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function uuidV4(){return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()}var nodeStates={selected:!1,selectable:!0,checked:!1,expanded:!1,disabled:!1,indeterminate:!1};function merge(e){return void 0===e&&(e={}),Object.assign({},nodeStates,e)}function objectToNode(e){var t=null;return"string"==typeof e?t=new Node({text:e,state:merge(),id:uuidV4()}):Array.isArray(e)||((t=new Node(e)).states=merge(t.states),t.id||(t.id=uuidV4()),t.children.length&&(t.children=t.children.map(function(e){return(e=objectToNode(e)).parent=t,e}))),t}var List=function(e){function t(){e.call(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.empty=function(){return this.length=0,this},t.prototype.add=function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];return(e=this).push.apply(e,t),this},t.prototype.remove=function(e){return this.splice(this.indexOf(e),1),this},t.prototype.removeAll=function(e){for(;this.includes(e);)this.remove(e);return this},t.prototype.top=function(){return this[this.length-1]},t}(Array);function recurseDown(e,t){var n;return Array.isArray(e)?e.map(function(e){return recurseDown(e,t)}):(!1!==(n=t(e))&&e.hasChildren()&&(n=recurseDown(e.children,t)),n)}var Tree=function(e){this.vm=e,this.options=e.options,this.setModel(e.model)};Tree.prototype.$on=function(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];(t=this.vm).$on.apply(t,[e].concat(n))},Tree.prototype.$once=function(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];(t=this.vm).$once.apply(t,[e].concat(n))},Tree.prototype.$off=function(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];(t=this.vm).$off.apply(t,[e].concat(n))},Tree.prototype.$emit=function(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];(t=this.vm).$emit.apply(t,[e].concat(n))},Tree.prototype.setModel=function(e){var t=this;if(this.model=e,this.selectedNodes=new List,this.checkedNodes=new List,recurseDown(e,function(e){e.tree=t,e.selected()&&t.selectedNodes.add(e),e.checked()&&(t.checkedNodes.add(e),e.parent&&e.parent.refreshIndeterminateState())}),!this.options.multiple&&this.selectedNodes.length){var n=this.selectedNodes.top();this.selectedNodes.forEach(function(e){n!==e&&e.state("selected",!1)}),this.selectedNodes.empty().add(n)}},Tree.prototype.recurseDown=function(e,t){return!t&&e&&(t=e,e=this.model),recurseDown(e,t)},Tree.prototype.select=function(e,t){var n=this;if(e.selected()||!e.selectable())return!1;var o=this.findNode(e);return!!o&&(this.options.multiple&&t?this.selectedNodes.add(o):(this.selectedNodes.forEach(function(e){return n.deselect(e)}),this.selectedNodes.empty().add(o)),this.$emit("node:selected",o.select()),!0)},Tree.prototype.selectAll=function(){var e=this;return!!this.options.multiple&&(this.selectedNodes.empty(),this.recurseDown(function(t){t.select(),e.selectedNodes.add(t),e.$emit("node:selected",t)}),!0)},Tree.prototype.deselect=function(e){return!(!e.selected()||!e.selectable())&&(this.$emit("node:deselected",e.deselect()),!0)},Tree.prototype.deselectAll=function(){var e=this;return this.selectedNodes.forEach(function(t){e.deselect(t)}),this.selectedNodes.empty(),!0},Tree.prototype.check=function(e){var t=this;return!e.checked()&&(e.indeterminate()?this.uncheck(e):(e.state("indeterminate",!1),e.hasChildren()?this.recurseDown(e,function(e){t.checkedNodes.add(e),e.checked()||t.$emit("node:checked",e.check())}):(this.checkedNodes.add(e),this.$emit("node:checked",e.check())),void(e.parent&&e.parent.refreshIndeterminateState())))},Tree.prototype.uncheck=function(e){var t=this;if(!e.checked()&&!e.indeterminate())return!1;e.state("indeterminate",!1),e.hasChildren()?this.recurseDown(e,function(e){e.state("indeterminate",!1),t.checkedNodes.remove(e),e.checked()&&t.$emit("node:unchecked",e.uncheck())}):(this.checkedNodes.remove(e),this.$emit("node:unchecked",e.uncheck())),e.parent&&e.parent.refreshIndeterminateState()},Tree.prototype.expand=function(e){return!e.expanded()&&(this.$emit("node:expanded",e.expand()),!0)},Tree.prototype.collapse=function(e){return!!e.expanded()&&(this.$emit("node:collapsed",e.collapse()),!0)},Tree.prototype.toggleExpand=function(e){return!!e.hasChildren()&&(e.expanded()?this.collapse(e):this.expand(e),!0)},Tree.prototype.addToModel=function(e,t){var n=this;void 0===t&&(t=this.model.length),this.model.splice(t,0,e),this.recurseDown(e,function(e){e.tree=n})},Tree.prototype.append=function(e){return e=objectToNode(e),this.addToModel(e),e},Tree.prototype.prepend=function(e){return e=objectToNode(e),this.addToModel(e,0),e},Tree.prototype.addNode=function(e){var t=this.model.length;return e=objectToNode(e),this.model.splice(t,0,e),this.$emit("node:added",e),e},Tree.prototype.removeNode=function(e){return e.parent?e.parent.children.splice(e.parent.children.indexOf(e),1):this.model.splice(this.model.indexOf(e),1),this.selectedNodes.remove(e),this.checkedNodes.remove(e),e},Tree.prototype.findNode=function(e){if("string"==typeof e);else if(e instanceof Node)return e},Tree.parseModel=function(e){return hierarchy$1(e)};var TreeMixin={mounted:function(){this.model=Tree.parseModel(this.data),this._provided.tree=new Tree(this,this.model),this.tree=this._provided.tree},methods:{selected:function(){return this.options.multiple?this.tree.selectedNodes:this.tree.selectedNodes[0]||null},checked:function(){return this.options.checkbox?this.tree.checkedNodes:null},append:function(e){return this.tree.append(e)},prepend:function(e){return this.tree.prepend(e)},addNode:function(e){return this.tree.addNode(e)}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree { overflow: auto; } .tree-root, .tree-children { list-style: none; } .tree > .tree-root { padding: 0; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var defaults$1={multiple:!0,checkbox:!1,parentSelect:!1},TreeRoot={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree",attrs:{role:"tree"}},[n("ul",{staticClass:"tree-root"},e._l(e.model,function(t,o){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()}))])},staticRenderFns:[],name:"Tree",components:{node:TreeNode},mixins:[TreeMixin],provide:function(e){return{tree:null}},props:{data:{type:Array,default:function(e){return[]}},options:{type:Object,default:function(e){return{}}}},data:function(){for(var e in defaults$1)!1==e in this.options&&(this.options[e]=defaults$1[e]);return{model:null,tree:null}}},install=function(e){e.component(TreeRoot.name,TreeRoot)};TreeRoot.install=install,"undefined"!=typeof window&&window.Vue&&window.Vue.use(TreeRoot);export default TreeRoot;
