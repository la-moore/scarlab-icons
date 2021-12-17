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
	"class": "scarlab scarlab-percent",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M16 8L8 16"}), 
	_createElementVNode("path", {"d":"M9 9.01001L9 9.00001"}), 
	_createElementVNode("path", {"d":"M15 15.01L15 15"})
  ]))
}
