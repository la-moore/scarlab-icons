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
	"class": "scarlab scarlab-rewind",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.6 8.8L9.84234 8.66152C10.3582 8.36676 11 8.73922 11 9.33333L11 14.6667C11 15.2608 10.3582 15.6332 9.84234 15.3385L9.6 15.2L5.4 12.8C4.78099 12.4463 4.78099 11.5537 5.4 11.2L9.6 8.8Z"}), 
	_createElementVNode("path", {"d":"M17.4 8L17.5867 7.88333C18.2019 7.4988 19 7.94112 19 8.66667L19 15.3333C19 16.0589 18.2019 16.5012 17.5867 16.1167L17.4 16L12.6 13C11.861 12.5381 11.861 11.4619 12.6 11L17.4 8Z"})
  ]))
}
