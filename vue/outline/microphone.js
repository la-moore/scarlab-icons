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
	"class": "scarlab scarlab-microphone",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 3C14.4705 3 15 3.5295 15 6L15 12C15 14.4705 14.4705 15 12 15C9.5295 15 9 14.4705 9 12L9 6C9 3.5295 9.5295 3 12 3Z"}), 
	_createElementVNode("path", {"d":"M7 21H17"}), 
	_createElementVNode("path", {"d":"M12 15L12 21"}), 
	_createElementVNode("path", {"d":"M6.25464 15C7.51958 16.8135 9.6212 18 11.9999 18C14.3787 18 16.4803 16.8135 17.7453 15"})
  ]))
}
