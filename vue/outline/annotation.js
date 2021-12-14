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
	"class": "scarlab scarlab-annotation",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M7 9L17 9"}), 
	_createElementVNode("path", {"d":"M7 12L13 12"}), 
	_createElementVNode("path", {"d":"M21 11V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H9C6.17157 3 4.75736 3 3.87868 3.87868C3 4.75736 3 6.17157 3 9V11C3 13.8284 3 15.2426 3.87868 16.1213C4.75736 17 6.17157 17 9 17H9.02322C9.31982 17 9.5955 17.1528 9.75269 17.4043L11.864 20.7824C11.9268 20.8829 12.0732 20.8829 12.136 20.7824L14.2945 17.3288C14.4223 17.1242 14.6465 17 14.8877 17H15C17.8284 17 19.2426 17 20.1213 16.1213C21 15.2426 21 13.8284 21 11Z"})
  ]))
}
