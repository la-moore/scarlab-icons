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
	"class": "scarlab scarlab-heading",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5 4L9 4"}), 
	_createElementVNode("path", {"d":"M15 4L19 4"}), 
	_createElementVNode("path", {"d":"M5 20H9"}), 
	_createElementVNode("path", {"d":"M15 20H19"}), 
	_createElementVNode("path", {"d":"M7 4V20"}), 
	_createElementVNode("path", {"d":"M17 4V20"}), 
	_createElementVNode("path", {"d":"M7 12H17"})
  ]))
}
