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
	"class": "scarlab scarlab-liras",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15 17H9C9.66667 16.6667 11 15.8 11 15C11 14.2 11 10.5416 11 8.87498C11 6.37499 15 6.37502 15 8.87498"}), 
	_createElementVNode("path", {"d":"M9 11H13"}), 
	_createElementVNode("path", {"d":"M9 14H13"})
  ]))
}
