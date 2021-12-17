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
	"class": "scarlab scarlab-corner-up-left",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15.5 17L15.5 14.5C15.5 12.6144 15.5 11.6716 14.9142 11.0858C14.3284 10.5 13.3856 10.5 11.5 10.5L8 10.5"}), 
	_createElementVNode("path", {"d":"M10.5 7L7.5 10V10C7.22386 10.2761 7.22386 10.7239 7.5 11V11L10.5 14"})
  ]))
}
