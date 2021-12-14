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
	"class": "scarlab scarlab-scissors",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M16.5145 2.14254C16.9881 2.42668 17.1416 3.04094 16.8575 3.51452L13.1662 9.66672L15.8643 14.1636C16.2243 14.0571 16.6055 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2092 19.2091 22 17 22C14.7909 22 13 20.2092 13 18C13 16.9066 13.4388 15.9156 14.1498 15.1935L12 11.6104L9.85011 15.1935C10.5612 15.9155 11 16.9065 11 18C11 20.2092 9.20914 22 7 22C4.79086 22 3 20.2092 3 18C3 15.7909 4.79086 14 7 14C7.3945 14 7.77567 14.0571 8.13568 14.1635L10.8338 9.66672L7.14246 3.51452C6.85831 3.04094 7.01187 2.42668 7.48545 2.14254C7.95903 1.85839 8.57329 2.01195 8.85744 2.48553L12 7.72307L15.1425 2.48553C15.4266 2.01195 16.0409 1.85839 16.5145 2.14254Z"})
  ]))
}