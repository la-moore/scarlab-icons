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
	"class": "scarlab scarlab-gauge",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8 12C8 9.79086 9.79086 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C8.68629 6 6 8.68629 6 12C6 12.5523 6.44772 13 7 13C7.55228 13 8 12.5523 8 12ZM10 12C10 10.8954 10.8954 10 12 10C12.1792 10 12.3528 10.0236 12.518 10.0677L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"})
  ]))
}
