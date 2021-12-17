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
	"class": "scarlab scarlab-box",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M11.0195 2.40431C11.6283 2.06184 12.3717 2.06184 12.9805 2.40431L19.9805 6.34181C20.6103 6.69605 21 7.36241 21 8.08496V15.8296C21 16.4661 20.6634 17.0551 20.1151 17.3783L12.8867 21.6382C12.3396 21.9607 11.6604 21.9607 11.1133 21.6382L3.88495 17.3783C3.33659 17.0551 3 16.4661 3 15.8296V8.08496C3 7.36241 3.38972 6.69605 4.01948 6.34181L11.0195 2.40431ZM5.1286 8.13479C5.39937 7.65344 6.00908 7.48272 6.49044 7.75348L12.0002 10.8527L17.5099 7.75348C17.9913 7.48272 18.601 7.65344 18.8718 8.13479C19.1425 8.61615 18.9718 9.22587 18.4904 9.49663L13.0002 12.5849V19C13.0002 19.5523 12.5525 20 12.0002 20C11.4479 20 11.0002 19.5523 11.0002 19V12.5849L5.50992 9.49663C5.02856 9.22587 4.85784 8.61615 5.1286 8.13479Z"})
  ]))
}
