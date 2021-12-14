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
	"class": "scarlab scarlab-align-arrow-up",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 21L21 21"}), 
	_createElementVNode("path", {"d":"M12 8L12 17"}), 
	_createElementVNode("path", {"d":"M15 11L12 8L9 11"})
  ]))
}
