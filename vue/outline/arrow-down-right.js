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
	"class": "scarlab scarlab-arrow-down-right",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M14.8285 14.8285L9.17163 9.17163"}), 
	_createElementVNode("path", {"d":"M10.5857 14.8285L14.5 14.8285L14.8284 14.8285L14.8284 14.5L14.8284 10.5858"})
  ]))
}