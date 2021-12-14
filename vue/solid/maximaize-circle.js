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
	"class": "scarlab scarlab-maximaize-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8 11C8.55228 11 9 11.4477 9 12V15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16V12C7 11.4477 7.44772 11 8 11ZM14.9999 12C14.9999 12.5523 15.4476 13 15.9998 13C16.5521 13 16.9999 12.5523 16.9999 12L17 8.00003C17 7.73481 16.8947 7.48045 16.7071 7.2929C16.5196 7.10536 16.2652 7 16 7L11.9999 7C11.4476 7 10.9999 7.44772 10.9999 8C10.9999 8.55228 11.4476 9 11.9999 9H15L14.9999 12Z"})
  ]))
}
