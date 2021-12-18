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
	"class": "scarlab scarlab-contrast",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM14.3373 6.47256C13.4346 6.09047 12.5449 6.3293 11.9307 6.8712C11.3428 7.38993 11 8.17867 11 9V15C11 15.8213 11.3428 16.6101 11.9307 17.1288C12.5449 17.6707 13.4346 17.9095 14.3373 17.5274C16.488 16.6171 18 14.4863 18 12C18 9.51373 16.488 7.38292 14.3373 6.47256ZM13 9C13 8.71676 13.1224 8.48695 13.2539 8.37091C13.3152 8.31677 13.3672 8.29635 13.4023 8.28962C13.4321 8.28391 13.4801 8.28151 13.5577 8.31435C14.9948 8.92267 16 10.3451 16 12C16 13.6549 14.9948 15.0773 13.5577 15.6856C13.4801 15.7185 13.4321 15.7161 13.4023 15.7104C13.3672 15.7036 13.3152 15.6832 13.2539 15.6291C13.1224 15.5131 13 15.2832 13 15V9Z"})
  ]))
}