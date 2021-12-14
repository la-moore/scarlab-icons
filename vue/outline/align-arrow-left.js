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
	"class": "scarlab scarlab-align-arrow-left",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 21L21 3"}), 
	_createElementVNode("path", {"d":"M8 12L17 12"}), 
	_createElementVNode("path", {"d":"M11 9L8 12L11 15"})
  ]))
}