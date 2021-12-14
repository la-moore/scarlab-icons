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
	"class": "scarlab scarlab-cloud-off",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8.75 3C8.75 2.44772 9.19772 2 9.75 2C13.4633 2 16.5282 4.68197 17.3077 8.22257C19.9376 8.2545 22 10.465 22 13.1111C22 13.6634 21.5523 14.1111 21 14.1111C20.4477 14.1111 20 13.6634 20 13.1111C20 11.481 18.7348 10.2222 17.25 10.2222C17.1112 10.2222 16.9753 10.233 16.8431 10.2535C16.1857 10.3557 15.5383 9.90357 15.4504 9.20732C15.0756 6.24027 12.6398 4 9.75 4C9.19772 4 8.75 3.55228 8.75 3Z"}), 
	_createElementVNode("path", {"d":"M3.64021 2.2318C3.21593 1.87824 2.58537 1.93556 2.2318 2.35984C1.87824 2.78412 1.93556 3.41468 2.35984 3.76825L3.75441 4.93038C2.65635 6.31284 2.00003 8.08016 2.00003 10C2.00003 14.3837 5.43585 18 9.75003 18H17.25C17.8745 18 18.4715 17.8756 19.0179 17.65L20.3598 18.7682C20.7841 19.1218 21.4147 19.0645 21.7682 18.6402C22.1218 18.2159 22.0645 17.5854 21.6402 17.2318L3.64021 2.2318Z"})
  ]))
}