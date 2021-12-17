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
	"class": "scarlab scarlab-minimaize",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M11 17L10.9999 13.5V13.5C10.9999 13.2239 10.7761 13 10.5 13V13L7 13"}), 
	_createElementVNode("path", {"d":"M13 7L13 10.5V10.5C13 10.7761 13.2239 11 13.5 11V11L17 11"})
  ]))
}
