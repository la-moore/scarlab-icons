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
	"class": "scarlab scarlab-anchor",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8.00004 6C8.00004 3.79086 9.7909 2 12 2C14.2092 2 16 3.79086 16 6C16 7.86384 14.7253 9.42994 13 9.87398V19.9381C16.6188 19.4868 19.4871 16.6185 19.9382 13H19C18.4478 13 18 12.5523 18 12C18 11.4477 18.4478 11 19 11H20.75C21.4366 11 22.0158 11.5628 21.9962 12.278C21.8487 17.6726 17.4299 22 12 22C6.57017 22 2.15135 17.6726 2.00384 12.278C1.98428 11.5628 2.5635 11 3.25004 11H5.00004C5.55233 11 6.00004 11.4477 6.00004 12C6.00004 12.5523 5.55233 13 5.00004 13H4.06189C4.51297 16.6185 7.38129 19.4868 11 19.9381V9.87398C9.27481 9.42994 8.00004 7.86384 8.00004 6Z"})
  ]))
}
