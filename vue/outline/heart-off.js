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
	"class": "scarlab scarlab-heart-off",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M4.79501 5C4.62688 5.13993 4.46746 5.29304 4.31803 5.45838C3.90017 5.92074 3.56869 6.46964 3.34255 7.07374C3.1164 7.67785 3 8.32532 3 8.9792C3 9.63308 3.1164 10.2806 3.34255 10.8847C3.56869 11.4888 3.90017 12.0377 4.31803 12.5L10.5162 19.3582C11.3103 20.2368 12.6897 20.2368 13.4838 19.3582L16.1691 16.3869"}), 
	_createElementVNode("path", {"d":"M3 3L19 19"}), 
	_createElementVNode("path", {"d":"M9.22217 4.37901C9.76813 4.62924 10.2642 4.99601 10.6821 5.45837V5.45837C11.3874 6.23883 12.6127 6.23883 13.3181 5.45837V5.45837C14.162 4.52459 15.3066 4 16.5001 4C17.6935 4 18.8381 4.52459 19.682 5.45837C20.526 6.39215 21.0001 7.65863 21.0001 8.97919C21.0001 10.2998 20.526 11.5662 19.682 12.5L18.7783 13.5"})
  ]))
}
