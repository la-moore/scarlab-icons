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
	"class": "scarlab scarlab-chart-pie",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.79606 2.24387C11.6528 1.82605 13 3.42223 13 4.99998V9.99998C13 10.5523 13.4477 11 14 11H19C20.5777 11 22.1739 12.3472 21.7561 14.2039C20.752 18.6661 16.7665 22 12 22C6.47715 22 2 17.5228 2 12C2 7.23347 5.33387 3.248 9.79606 2.24387Z"}), 
	_createElementVNode("path", {"d":"M21.1281 9.07899C20.6041 9.66028 19.8211 9.99995 18.9999 9.99995L16.9999 9.99995C15.3431 9.99995 13.9999 8.6568 13.9999 6.99995L13.9999 4.99995C13.9999 4.17879 14.3396 3.39574 14.9209 2.8718C15.5222 2.32979 16.3885 2.0713 17.2909 2.38373C19.3146 3.08438 20.9155 4.68525 21.6162 6.709C21.9286 7.61139 21.6701 8.47766 21.1281 9.07899Z"})
  ]))
}
