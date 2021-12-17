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
	"class": "scarlab scarlab-liras-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"}), 
	_createElementVNode("path", {"d":"M15 17H9.22071C9.16573 17 9.14713 16.9237 9.19528 16.8972V16.8972C9.89643 16.5108 11 15.7278 11 15C11 14.2 11 10.5416 11 8.87498C11 6.37499 15 6.37502 15 8.87498"}), 
	_createElementVNode("path", {"d":"M9 11H13"}), 
	_createElementVNode("path", {"d":"M9 14H13"})
  ]))
}
