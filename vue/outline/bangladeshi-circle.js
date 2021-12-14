import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "none", 
	"stroke": "currentColor", 
	"stroke-width": "2", 
	"stroke-linecap": "round", 
	"stroke-linejoin": "round", 
	"class": "scarlab scarlab-bangladeshi-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9 11H15"}), 
	_createElementVNode("path", {"d":"M9 7C9.66667 7 11 7.6 11 10C11 12.4 11 14 11 14.5C11 17.5 15 17.5 15 14.5"}), 
	_createElementVNode("path", {"d":"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"})
  ]))
}
