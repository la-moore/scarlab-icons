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
	"class": "scarlab scarlab-home",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M19 17.016V9.87214C19 9.316 18.7684 8.78498 18.3609 8.40655L13.3609 3.76369C12.5935 3.05114 11.4065 3.05114 10.6391 3.76369L5.6391 8.40655C5.23156 8.78498 5 9.316 5 9.87214V17.016C5 20.2968 5.70318 21 8.984 21H15.016C18.2968 21 19 20.2968 19 17.016Z"}), 
	_createElementVNode("path", {"d":"M14 20.5V16.328C14 15.2344 13.7656 15 12.672 15H11.328C10.2344 15 10 15.2344 10 16.328V20.5"})
  ]))
}
