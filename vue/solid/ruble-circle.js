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
	"class": "scarlab scarlab-ruble-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M10 8C10 7.44772 10.4477 7 11 7H13.5C14.4829 7 15.3104 7.33369 15.8946 7.91789C16.4694 8.49269 16.75 9.25264 16.75 10C16.75 10.7474 16.4694 11.5073 15.8946 12.0821C15.3104 12.6663 14.4829 13 13.5 13H12V14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V16H9C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14H10V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H10V8ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"}), 
	_createElementVNode("path", {"d":"M12 11V9H13.5C14.0171 9 14.3146 9.16631 14.4804 9.33211C14.6556 9.50731 14.75 9.74736 14.75 10C14.75 10.2526 14.6556 10.4927 14.4804 10.6679C14.3146 10.8337 14.0171 11 13.5 11H12Z"})
  ]))
}
