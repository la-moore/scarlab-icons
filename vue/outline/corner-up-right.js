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
	"class": "scarlab scarlab-corner-up-right",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 17L8 14.5C8 12.6144 8 11.6716 8.58579 11.0858C9.17157 10.5 10.1144 10.5 12 10.5L15.5 10.5"}), 
	_createElementVNode("path", {"d":"M13 7L16 10V10C16.2761 10.2761 16.2761 10.7239 16 11V11L13 14"})
  ]))
}
