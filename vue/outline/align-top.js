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
	"class": "scarlab scarlab-align-top",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 3L3 3"}), 
	_createElementVNode("path", {"d":"M7 10.32C7 7.58598 7.58598 7 10.32 7H13.68C16.414 7 17 7.58598 17 10.32V13.68C17 16.414 16.414 17 13.68 17H10.32C7.58598 17 7 16.414 7 13.68V10.32Z"})
  ]))
}
