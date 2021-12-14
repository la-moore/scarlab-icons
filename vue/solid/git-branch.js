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
	"class": "scarlab scarlab-git-branch",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 7.86384 8.72523 9.42994 7 9.87398V14.126C8.40561 14.4878 9.5122 15.5944 9.87398 17H12.008C13.2201 17 14.1293 16.9373 14.82 16.7919C15.5022 16.6483 15.9041 16.4376 16.1667 16.1889C16.702 15.6818 17 14.6924 17 12.3242V9.87398C15.2748 9.42994 14 7.86384 14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 7.86384 20.7252 9.42994 19 9.87398V12.3242C19 14.63 18.7692 16.4785 17.5421 17.6409C16.9235 18.2268 16.1359 18.5587 15.232 18.749C14.3366 18.9375 13.2631 19 12.008 19H9.87398C9.42994 20.7252 7.86384 22 6 22C3.79086 22 2 20.2091 2 18C2 16.1362 3.27477 14.5701 5 14.126V9.87398C3.27477 9.42994 2 7.86384 2 6Z"})
  ]))
}
