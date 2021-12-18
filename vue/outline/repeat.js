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
	"class": "scarlab scarlab-repeat",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M20.5 15C18.9558 18.0448 15.7622 21 12 21C7.14776 21 3.58529 17.5101 3 13"}), 
	_createElementVNode("path", {"d":"M3.5 9C4.89106 5.64934 8.0647 3 12 3C16.7819 3 20.4232 6.48993 21 11"}), 
	_createElementVNode("path", {"d":"M21 21L21 15.6C21 15.2686 20.7314 15 20.4 15V15L15 15"}), 
	_createElementVNode("path", {"d":"M9 9L3.6 9V9C3.26863 9 3 8.73137 3 8.4L3 3"})
  ]))
}
