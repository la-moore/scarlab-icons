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
	"class": "scarlab scarlab-corner-left-down",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M17 8.5L14.5 8.5C12.6144 8.5 11.6716 8.5 11.0858 9.08579C10.5 9.67157 10.5 10.6144 10.5 12.5L10.5 16"}), 
	_createElementVNode("path", {"d":"M7 13.5L10 16.5V16.5C10.2761 16.7761 10.7239 16.7761 11 16.5V16.5L14 13.5"})
  ]))
}
