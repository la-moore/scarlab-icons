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
	"class": "scarlab scarlab-battery-charging",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 11V13"}), 
	_createElementVNode("path", {"d":"M12 8L11.8852 8.15313L9.12188 11.8375L9.07313 11.9025C9.043 11.9427 9.07166 12 9.12188 12V12H12.8107V12C12.8887 12 12.9332 12.0891 12.8864 12.1515L12.8107 12.2525L10.157 15.7907L10 16"}), 
	_createElementVNode("path", {"d":"M14 16H16V16C17.1046 16 18 15.1046 18 14V10C18 8.89543 17.1046 8 16 8V8H15"}), 
	_createElementVNode("path", {"d":"M7 16H5V16C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8V8H8"})
  ]))
}
