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
	"class": "scarlab scarlab-duplicate",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 15.9615C3.92665 15.7245 3 14.3107 3 9.5C3 4.14725 4.14725 3 9.5 3C14.3107 3 15.7245 3.92665 15.9615 8"}), 
	_createElementVNode("path", {"d":"M8 14.5C8 9.14725 9.14725 8 14.5 8C19.8527 8 21 9.14725 21 14.5C21 19.8527 19.8527 21 14.5 21C9.14725 21 8 19.8527 8 14.5Z"})
  ]))
}
