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
	"class": "scarlab scarlab-contrast",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"}), 
	_createElementVNode("path", {"d":"M17 12C17 14.0706 15.7414 15.8472 13.9475 16.6065C12.9303 17.0371 12 16.1046 12 15V9C12 7.89543 12.9303 6.96289 13.9475 7.39346C15.7414 8.15279 17 9.92941 17 12Z"})
  ]))
}