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
	"class": "scarlab scarlab-camera",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 11.316C3 8.19173 3.58862 7.22517 6.14512 7.03704C6.86635 6.98396 7.53515 6.6096 7.88913 5.97898L8.42687 5.02102C8.78085 4.3904 9.4477 4 10.1709 4H13.8291C14.5523 4 15.2191 4.3904 15.5731 5.02102L16.1109 5.97898C16.4649 6.6096 17.1336 6.98396 17.8549 7.03704C20.4114 7.22517 21 8.19173 21 11.316V15.684C21 19.2382 20.2382 20 16.684 20H7.316C3.76177 20 3 19.2382 3 15.684V11.316Z"}), 
	_createElementVNode("path", {"d":"M10 11C8.89543 12.1046 8.89543 13.8954 10 15C11.1046 16.1046 12.8954 16.1046 14 15C15.1046 13.8954 15.1046 12.1046 14 11C12.8954 9.89543 11.1046 9.89543 10 11Z"})
  ]))
}
