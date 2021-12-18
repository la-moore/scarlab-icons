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
	"class": "scarlab scarlab-hash-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M13 21L17 3"}), 
	_createElementVNode("path", {"d":"M7 21L11 3"}), 
	_createElementVNode("path", {"d":"M20 9L4 9"}), 
	_createElementVNode("path", {"d":"M4 15L20 15"})
  ]))
}
