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
	"class": "scarlab scarlab-fast-forward",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M14.4 8.8L14.1577 8.66152C13.6418 8.36676 13 8.73922 13 9.33333L13 14.6667C13 15.2608 13.6418 15.6332 14.1577 15.3385L14.4 15.2L18.6 12.8C19.219 12.4463 19.219 11.5537 18.6 11.2L14.4 8.8Z"}), 
	_createElementVNode("path", {"d":"M6.6 8L6.41333 7.88333C5.79807 7.4988 5 7.94112 5 8.66667L5 15.3333C5 16.0589 5.79807 16.5012 6.41333 16.1167L6.6 16L11.4 13C12.139 12.5381 12.139 11.4619 11.4 11L6.6 8Z"})
  ]))
}
