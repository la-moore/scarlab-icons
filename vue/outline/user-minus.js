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
	"class": "scarlab scarlab-user-minus",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19"}), 
	_createElementVNode("path", {"d":"M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"}), 
	_createElementVNode("path", {"d":"M15 4H21"})
  ]))
}
