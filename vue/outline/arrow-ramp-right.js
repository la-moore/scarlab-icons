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
	"class": "scarlab scarlab-arrow-ramp-right",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 3L6 11"}), 
	_createElementVNode("path", {"d":"M3 6L5.91296 3.08704V3.08704C5.96103 3.03897 6.03897 3.03897 6.08704 3.08704V3.08704L9 6"}), 
	_createElementVNode("path", {"d":"M18 7L20.913 9.91296V9.91296C20.961 9.96103 20.961 10.039 20.913 10.087V10.087L18 13"}), 
	_createElementVNode("path", {"d":"M20 10H16.5C10.701 10 6 14.701 6 20.5V21"})
  ]))
}
