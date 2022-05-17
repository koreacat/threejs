import { scenegraphMain } from "./scenegraph";
import {WEBGL} from "./common/webgl";

if(WEBGL.isWebGLAvailable()) {
  const canvas = document.querySelector('#c');
  scenegraphMain(canvas);
}
