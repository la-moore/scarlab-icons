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
	"class": "scarlab scarlab-chat",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 10H8.01"}), 
	_createElementVNode("path", {"d":"M12 10H12.01"}), 
	_createElementVNode("path", {"d":"M16 10H16.01"}), 
	_createElementVNode("path", {"d":"M3 10C3 4.2355 4.2355 3 10 3H14C19.7645 3 21 4.2355 21 10C21 15.7645 19.7645 17 14 17L8 21V16.9322C3.93913 16.609 3 15.0258 3 10Z"})
  ]))
}
