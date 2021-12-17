import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "currentColor", 
	"stroke": "none", 
	"fill-rule": "evenodd", 
	"clip-rule": "evenodd", 
	"class": "scarlab scarlab-cone",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.2425 3.89539C10.2815 1.47107 13.7184 1.47106 14.7574 3.89539L20.7243 17.8182C21.5727 19.7978 20.1206 22 17.9669 22H6.03302C3.87927 22 2.42718 19.7978 3.27558 17.8182L9.2425 3.89539ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H16C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13H8ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16H7Z"})
  ]))
}
