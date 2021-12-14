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
	"class": "scarlab scarlab-git-diff",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"}), 
	_createElementVNode("path", {"d":"M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"}), 
	_createElementVNode("path", {"d":"M12.0239 6C16.9452 6 17.9999 7.05476 17.9999 11.976V15"}), 
	_createElementVNode("path", {"d":"M11.976 18C7.05476 18 6 16.9452 6 12.024V9"}), 
	_createElementVNode("path", {"d":"M15 3L12 6L15 9"}), 
	_createElementVNode("path", {"d":"M9 21L12 18L9 15"})
  ]))
}
