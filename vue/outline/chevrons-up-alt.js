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
	"class": "scarlab scarlab-chevrons-up-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M18 17.5L12.2907 11.7907V11.7907C12.1302 11.6302 11.8698 11.6302 11.7093 11.7907V11.7907L6 17.5"}), 
	_createElementVNode("path", {"d":"M18 12.5L12.2508 6.75078V6.75078C12.1123 6.61228 11.8877 6.61228 11.7492 6.75078V6.75078L6 12.5"})
  ]))
}
