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
	"class": "scarlab scarlab-pin",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M20 11C20 13.2685 18.8565 15.3225 17.4341 17C15.9045 18.8039 14.0525 20.1724 12.9533 20.9039C12.3717 21.2908 11.6283 21.2908 11.0467 20.9039C9.94752 20.1724 8.09548 18.8039 6.56591 17C5.14353 15.3225 4 13.2685 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z"}), 
	_createElementVNode("path", {"d":"M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"})
  ]))
}
