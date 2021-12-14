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
	"class": "scarlab scarlab-crop",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 3V12C6 14.8284 6 16.2426 6.87868 17.1213C7.75736 18 9.17157 18 12 18H21"}), 
	_createElementVNode("path", {"d":"M18 21L18 12C18 9.17157 18 7.75736 17.1213 6.87868C16.2426 6 14.8284 6 12 6L3 6"})
  ]))
}