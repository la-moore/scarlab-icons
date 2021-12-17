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
	"class": "scarlab scarlab-percent-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289ZM9 10.01C8.44772 10.01 8 9.56229 8 9.01001V9.00001C8 8.44772 8.44772 8.00001 9 8.00001C9.55228 8.00001 10 8.44772 10 9.00001L10 9.01001C10 9.56229 9.55228 10.01 9 10.01ZM14 15.01C14 15.5623 14.4477 16.01 15 16.01C15.5523 16.01 16 15.5623 16 15.01V15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15V15.01ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"})
  ]))
}
