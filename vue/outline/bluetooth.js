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
	"class": "scarlab scarlab-bluetooth",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 8L14 13.3333L15.7713 14.5142C16.8837 15.2558 16.9693 16.8589 15.9423 17.7148L12.0273 20.9773V20.9773C12.0164 20.9863 12 20.9786 12 20.9645V3.02551C12 3.01538 12.0118 3.00984 12.0196 3.01633V3.01633L15.9423 6.28524C16.9693 7.1411 16.8837 8.74421 15.7713 9.48579L14 10.6667L6 16"})
  ]))
}
