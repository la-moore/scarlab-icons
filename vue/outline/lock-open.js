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
	"class": "scarlab scarlab-lock-open",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z"}), 
	_createElementVNode("path", {"d":"M15 9C16.8856 9 17.8284 9 18.4142 9.58579C19 10.1716 19 11.1144 19 13L19 15L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L12 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 15L5 13C5 11.1144 5 10.1716 5.58579 9.58579C6.17157 9 7.11438 9 9 9L12 9L15 9Z"}), 
	_createElementVNode("path", {"d":"M9 9V5C9 3.89543 9.89543 3 11 3H13.0625C14.1326 3 15 3.86745 15 4.9375V4.9375V5"})
  ]))
}
