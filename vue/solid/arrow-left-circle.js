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
	"class": "scarlab scarlab-arrow-left-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.37993 11.2059C7.36486 11.2209 7.35031 11.2363 7.33627 11.252C7.12998 11.4352 7 11.7024 7 12C7 12.2976 7.12998 12.5648 7.33627 12.748C7.3503 12.7637 7.36486 12.7791 7.37993 12.7941L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L10.4142 11L11.7071 9.70711Z"})
  ]))
}
