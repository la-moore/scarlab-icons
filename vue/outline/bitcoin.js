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
	"class": "scarlab scarlab-bitcoin",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 8.5H13.5C16 8.5 16 12 13.5 12H10.5"}), 
	_createElementVNode("path", {"d":"M10.5 12H13.5C16 12 16 15.5 13.5 15.5H8"}), 
	_createElementVNode("path", {"d":"M10 17V7"}), 
	_createElementVNode("path", {"d":"M13 8.5V7"}), 
	_createElementVNode("path", {"d":"M13 17V15.5"})
  ]))
}
