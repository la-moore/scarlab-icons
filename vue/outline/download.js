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
	"class": "scarlab scarlab-download",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 14C20.0427 17.0763 17.58 18 12 18C6.41998 18 3.95728 17.1433 3 14.067"}), 
	_createElementVNode("path", {"d":"M12 13.5L12 6"}), 
	_createElementVNode("path", {"d":"M9 11L11.5 13.5V13.5C11.7761 13.7761 12.2239 13.7761 12.5 13.5V13.5L15 11"})
  ]))
}
