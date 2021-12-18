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
	"class": "scarlab scarlab-face-id",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8.976 21C4.05476 21 3 19.9452 3 15.024"}), 
	_createElementVNode("path", {"d":"M21 15.024C21 19.9452 19.9452 21 15.024 21"}), 
	_createElementVNode("path", {"d":"M15.024 3C19.9452 3 21 4.05476 21 8.976"}), 
	_createElementVNode("path", {"d":"M8 14C8.91221 15.2144 10.3645 16 12.0004 16C13.6362 16 15.0885 15.2144 16.0007 14"}), 
	_createElementVNode("path", {"d":"M9 10.0112V10"}), 
	_createElementVNode("path", {"d":"M15 10.0112V10"}), 
	_createElementVNode("path", {"d":"M3 8.976C3 4.05476 4.05476 3 8.976 3"})
  ]))
}
