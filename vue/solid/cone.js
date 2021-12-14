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
    _createElementVNode("path", {"d":"M9.2425 3.89539C10.2815 1.47108 13.7184 1.47106 14.7574 3.89539L20.7243 17.8182C21.5727 19.7978 20.1206 22 17.9669 22H6.03302C3.87927 22 2.42718 19.7978 3.27558 17.8182L9.2425 3.89539ZM5.99988 17C5.99988 16.4477 6.44759 16 6.99988 16H16.9999C17.5522 16 17.9999 16.4477 17.9999 17C17.9999 17.5523 17.5522 18 16.9999 18H6.99988C6.44759 18 5.99988 17.5523 5.99988 17ZM7.99988 13C7.44759 13 6.99988 13.4477 6.99988 14C6.99988 14.5523 7.44759 15 7.99988 15H15.9999C16.5522 15 16.9999 14.5523 16.9999 14C16.9999 13.4477 16.5522 13 15.9999 13H7.99988Z"})
  ]))
}
