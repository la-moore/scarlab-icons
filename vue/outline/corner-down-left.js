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
	"class": "scarlab scarlab-corner-down-left",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15.976 7.99995C15.976 12.9212 14.9212 13.976 10 13.976H8.5"}), 
	_createElementVNode("path", {"d":"M11 16.976L8 13.976L11 10.976"})
  ]))
}