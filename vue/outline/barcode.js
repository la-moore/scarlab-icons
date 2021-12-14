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
	"class": "scarlab scarlab-barcode",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 8L8 16"}), 
	_createElementVNode("path", {"d":"M12 8L12 16"}), 
	_createElementVNode("path", {"d":"M16 8L16 16"}), 
	_createElementVNode("path", {"d":"M8.976 21C4.05476 21 3 19.9453 3 15.024"}), 
	_createElementVNode("path", {"d":"M20.9999 15.024C20.9999 19.9453 19.9452 21 15.0239 21"}), 
	_createElementVNode("path", {"d":"M15.0239 3C19.9452 3 20.9999 4.05476 20.9999 8.976"}), 
	_createElementVNode("path", {"d":"M3 8.976C3 4.05476 4.05476 3 8.976 3"})
  ]))
}
