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
	"class": "scarlab scarlab-align-arrow-down",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 3L3 3"}), 
	_createElementVNode("path", {"d":"M12 16L12 7"}), 
	_createElementVNode("path", {"d":"M9 13L10.5858 14.5858C11.3668 15.3668 12.6332 15.3668 13.4142 14.5858L15 13"})
  ]))
}
