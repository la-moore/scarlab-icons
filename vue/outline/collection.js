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
	"class": "scarlab scarlab-collection",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5 8V5.988C5 3.52738 5.52738 3 7.988 3H16.012C18.4726 3 19 3.52738 19 5.988V8"}), 
	_createElementVNode("path", {"d":"M3 12.316C3 8.76177 3.76177 8 7.316 8H16.684C20.2382 8 21 8.76177 21 12.316V16.684C21 20.2382 20.2382 21 16.684 21H7.316C3.76177 21 3 20.2382 3 16.684V12.316Z"})
  ]))
}
