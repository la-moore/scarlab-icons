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
	"class": "scarlab scarlab-chart-pie",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M19 12C20.1046 12 21.023 12.9068 20.7805 13.9844C19.8768 18.0002 16.2887 21 12 21C7.02944 21 3 16.9706 3 12C3 7.71127 5.99979 4.12318 10.0156 3.21949C11.0932 2.97699 12 3.89543 12 5V10C12 11.1046 12.8954 12 14 12H19Z"}), 
	_createElementVNode("path", {"d":"M20.6713 7.03621C20.0709 5.30223 18.6978 3.92908 16.9638 3.32874C15.92 2.96737 15 3.89543 15 5L15 7C15 8.10457 15.8954 9 17 9L19 9C20.1046 9 21.0326 8.07999 20.6713 7.03621Z"})
  ]))
}
