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
    _createElementVNode("path", {"d":"M17 16.5L14.5 16.5C12.6144 16.5 11.6716 16.5 11.0858 15.9142C10.5 15.3284 10.5 14.3856 10.5 12.5L10.5 9"}), 
	_createElementVNode("path", {"d":"M7 11.5L10 8.5V8.5C10.2761 8.22386 10.7239 8.22386 11 8.5V8.5L14 11.5"})
  ]))
}
