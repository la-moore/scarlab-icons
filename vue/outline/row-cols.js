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
	"class": "scarlab scarlab-row-cols",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8.976 3C4.05476 3 3 4.05476 3 8.976L3 15.024C3 19.9452 4.05476 21 8.976 21L15.024 21C19.9452 21 21 19.9452 21 15.024L21 8.976C21 4.05477 19.9452 3 15.024 3L8.976 3Z"}), 
	_createElementVNode("path", {"d":"M3 12L21 12"}), 
	_createElementVNode("path", {"d":"M12 21L12 12"})
  ]))
}
