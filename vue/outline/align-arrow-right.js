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
	"class": "scarlab scarlab-align-arrow-right",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 3L3 21"}), 
	_createElementVNode("path", {"d":"M16 12L7 12"}), 
	_createElementVNode("path", {"d":"M13 15L16 12L13 9"})
  ]))
}
