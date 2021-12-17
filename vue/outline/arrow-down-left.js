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
	"class": "scarlab scarlab-arrow-down-left",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.5 14.5L15 9"}), 
	_createElementVNode("path", {"d":"M14 15L9.32833 15C9.147 15 9 14.853 9 14.6716L9 10"})
  ]))
}
