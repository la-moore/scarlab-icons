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
	"class": "scarlab scarlab-doge-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M11 7C9.34315 7 8 8.34315 8 10V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H8V14C8 15.6569 9.34315 17 11 17H12.5C14.0894 17 15.3521 16.384 16.2057 15.4085C17.0421 14.4526 17.4375 13.2089 17.4375 12C17.4375 10.7911 17.0421 9.54742 16.2057 8.5915C15.3521 7.616 14.0894 7 12.5 7H11ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"}), 
	_createElementVNode("path", {"d":"M10 13V14C10 14.5523 10.4477 15 11 15H12.5C13.5356 15 14.2416 14.616 14.7005 14.0915C15.1766 13.5474 15.4375 12.7911 15.4375 12C15.4375 11.2089 15.1766 10.4526 14.7005 9.9085C14.2416 9.384 13.5356 9 12.5 9H11C10.4477 9 10 9.44772 10 10V11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H10Z"})
  ]))
}
