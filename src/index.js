import {WEBGL} from "./common/webgl";
import {materialsMain} from "./materials";

if(WEBGL.isWebGLAvailable()) {
  const canvas = document.querySelector('#c');
  materialsMain(canvas);
}
