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
	"class": "scarlab scarlab-euro-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 10.5H13"}), 
	_createElementVNode("path", {"d":"M8 13.5H12"}), 
	_createElementVNode("path", {"d":"M15 8C14.3732 7.37209 13.5941 7 12.7498 7C10.6788 7 9 9.23858 9 12C9 14.7614 10.6788 17 12.7498 17C13.5941 17 14.3732 16.6279 15 16"}), 
	_createElementVNode("path", {"d":"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"})
  ]))
}