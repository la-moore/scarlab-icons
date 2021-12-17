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
	"class": "scarlab scarlab-printer",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 7V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V7"}), 
	_createElementVNode("path", {"d":"M7 17V17C5.11438 17 4.17157 17 3.58579 16.4142C3 15.8284 3 14.8856 3 13V11C3 9.11438 3 8.17157 3.58579 7.58579C4.17157 7 5.11438 7 7 7H17C18.8856 7 19.8284 7 20.4142 7.58579C21 8.17157 21 9.11438 21 11V13C21 14.8856 21 15.8284 20.4142 16.4142C19.8284 17 18.8856 17 17 17V17"}), 
	_createElementVNode("path", {"d":"M7 17C7 15.1144 7 14.1716 7.58579 13.5858C8.17157 13 9.11438 13 11 13H13C14.8856 13 15.8284 13 16.4142 13.5858C17 14.1716 17 15.1144 17 17C17 18.8856 17 19.8284 16.4142 20.4142C15.8284 21 14.8856 21 13 21H11C9.11438 21 8.17157 21 7.58579 20.4142C7 19.8284 7 18.8856 7 17Z"})
  ]))
}
