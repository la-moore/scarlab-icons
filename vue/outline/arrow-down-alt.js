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
	"class": "scarlab scarlab-arrow-down-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 20L12 4"}), 
	_createElementVNode("path", {"d":"M6 14L11.9375 19.9375L12 20L12.0625 19.9375L18 14"})
  ]))
}
