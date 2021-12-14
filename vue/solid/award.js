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
	"class": "scarlab scarlab-award",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9Z"}), 
	_createElementVNode("path", {"d":"M7.65995 14.4926C7.35324 14.2499 6.87342 14.3829 6.77856 14.7623L6.15594 17.2528C5.5175 19.8066 8.24285 21.8857 10.5372 20.5951L11.5097 20.0481C11.8141 19.8769 12.1858 19.8769 12.4902 20.0481L13.4627 20.5951C15.757 21.8857 18.4823 19.8066 17.8439 17.2528L17.2213 14.7623C17.1264 14.3829 16.6466 14.2499 16.3399 14.4926C15.1469 15.4365 13.6392 16 11.9999 16C10.3606 16 8.8529 15.4365 7.65995 14.4926Z"})
  ]))
}