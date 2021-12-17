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
	"class": "scarlab scarlab-activity",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5 12H7.75044C7.89947 12 8.03179 11.9046 8.07892 11.7632V11.7632L9.875 6.375V6.375C9.91626 6.25122 10.0918 6.25238 10.1364 6.375V6.375L13.875 16.6562L13.885 16.6837C13.9253 16.7946 14.0812 16.797 14.125 16.6875V16.6875L15.8841 12.2898V12.2898C15.9541 12.1148 16.1236 12 16.3122 12H19"})
  ]))
}
