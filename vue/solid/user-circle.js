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
	"class": "scarlab scarlab-user-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10ZM17.7112 16.4673C18.038 16.7776 18.0184 17.2898 17.7023 17.611C16.2511 19.0856 14.2323 20 11.9999 20C9.77874 20 7.76896 19.0948 6.31942 17.6331C6.00049 17.3115 5.98084 16.7965 6.30964 16.485C6.69204 16.1227 7.14943 15.8318 7.68836 15.6097C8.81503 15.1452 10.2541 15 11.9999 15C13.7544 15 15.2017 15.1359 16.3312 15.5954C16.8716 15.8152 17.3293 16.1048 17.7112 16.4673Z"})
  ]))
}