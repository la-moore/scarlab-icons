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
	"class": "scarlab scarlab-link",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15 8H17C20.294 8 21 8.706 21 12C21 15.294 20.294 16 17 16H15"}), 
	_createElementVNode("path", {"d":"M9 8H7C3.706 8 3 8.706 3 12C3 15.294 3.706 16 7 16H9"}), 
	_createElementVNode("path", {"d":"M8 12H16"})
  ]))
}
