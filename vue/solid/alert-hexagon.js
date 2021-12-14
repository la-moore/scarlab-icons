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
	"class": "scarlab scarlab-alert-hexagon",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 8.82843V15.1716C2 15.702 2.21071 16.2107 2.58579 16.5858L7.41421 21.4142C7.78929 21.7893 8.29799 22 8.82843 22H15.1716C15.702 22 16.2107 21.7893 16.5858 21.4142L21.4142 16.5858C21.7893 16.2107 22 15.702 22 15.1716V8.82843C22 8.29799 21.7893 7.78929 21.4142 7.41421L16.5858 2.58579C16.2107 2.21071 15.702 2 15.1716 2H8.82843C8.29799 2 7.78929 2.21071 7.41421 2.58579L2.58579 7.41421C2.21071 7.78929 2 8.29799 2 8.82843ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888Z"})
  ]))
}
