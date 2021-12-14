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
	"class": "scarlab scarlab-more-horizontal",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 12H8.01"}), 
	_createElementVNode("path", {"d":"M12 12H12.01"}), 
	_createElementVNode("path", {"d":"M16 12H16.01"})
  ]))
}
