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
	"class": "scarlab scarlab-chevron-right-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L12.5858 12L10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289C10.6834 7.90237 11.3166 7.90237 11.7071 8.29289L14.4229 11.0087C14.9704 11.5562 14.9704 12.4438 14.4229 12.9913L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071Z"})
  ]))
}
