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
	"class": "scarlab scarlab-refresh",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M11 4L9.66751 6.66489L9.59591 6.80807C9.53994 6.92002 9.56977 7.05585 9.66751 7.13404V7.13404L12 9"}), 
	_createElementVNode("path", {"d":"M6 13.61C6.3377 15.2224 7.33412 16.6896 8.87305 17.5781C11.7428 19.235 15.4123 18.2518 17.0692 15.382C18.7261 12.5122 17.7428 8.8427 14.8731 7.18584C13.3341 6.29734 11.5652 6.16806 10 6.68179"})
  ]))
}
