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
	"class": "scarlab scarlab-terminal",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M13 15H16"}), 
	_createElementVNode("path", {"d":"M8 15L11 12L8 9"}), 
	_createElementVNode("path", {"d":"M3 12C3 5.412 4.412 4 11 4H13C19.588 4 21 5.412 21 12C21 18.588 19.588 20 13 20H11C4.412 20 3 18.588 3 12Z"})
  ]))
}
