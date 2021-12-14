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
	"class": "scarlab scarlab-arrow-right-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M20 12L4 12"}), 
	_createElementVNode("path", {"d":"M14 18L19.9375 12.0625L20 12L19.9375 11.9375L14 6"})
  ]))
}
