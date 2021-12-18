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
	"class": "scarlab scarlab-underline",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M7 4V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V4"}), 
	_createElementVNode("path", {"d":"M5 20H19"})
  ]))
}
