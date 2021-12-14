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
	"class": "scarlab scarlab-corner-left-up",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M16.476 16.476C11.5548 16.476 10.5 15.4212 10.5 10.5L10.5 9"}), 
	_createElementVNode("path", {"d":"M7.5 11.5L10.5 8.5L13.5 11.5"})
  ]))
}
