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
	"class": "scarlab scarlab-minimaize-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM6.00012 13C6.00012 12.4477 6.44784 12 7.00012 12H11C11.5523 12 12 12.4477 12 13L12.0001 17C12.0001 17.5523 11.5524 18 11.0002 18C10.4479 18 10.0001 17.5523 10.0001 17L10 14H7.00012C6.44784 14 6.00012 13.5523 6.00012 13ZM14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7V11C12 11.2652 12.1054 11.5196 12.2929 11.7071C12.4804 11.8946 12.7348 12 13 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H14V7Z"})
  ]))
}
