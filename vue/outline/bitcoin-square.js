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
	"class": "scarlab scarlab-bitcoin-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 8.5H13.5C16 8.5 16 12 13.5 12H10.5"}), 
	_createElementVNode("path", {"d":"M10.5 12H13.5C16 12 16 15.5 13.5 15.5H8"}), 
	_createElementVNode("path", {"d":"M10 17V7"}), 
	_createElementVNode("path", {"d":"M13 8.5V7"}), 
	_createElementVNode("path", {"d":"M13 17V15.5"}), 
	_createElementVNode("path", {"d":"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"})
  ]))
}
