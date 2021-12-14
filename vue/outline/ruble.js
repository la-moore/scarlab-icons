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
	"class": "scarlab scarlab-ruble",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M11 8V17"}), 
	_createElementVNode("path", {"d":"M9 15H15"}), 
	_createElementVNode("path", {"d":"M11 8H13.5C16.5 8 16.5 12 13.5 12H9"})
  ]))
}