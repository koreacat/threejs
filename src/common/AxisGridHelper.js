/*
 * 축과 격자를 동시에 켜고 끕니다
 * lil-gui가 체크박스를 만들게 하려면 boolean 타입의
 * 속성을 지정해줘야 하므로, `visible` 속성에
 * getter와 setter를 지정해 lil-gui가 이 속성을
 * 바라보도록 합니다
 */
class AxisGridHelper {
  constructor(node, units = 10) {
    const axes = new THREE.AxesHelper();
    axes.material.depthTest = false;
    axes.renderOrder = 2;  // 격자 다음에 렌더링
    node.add(axes);

    const grid = new THREE.GridHelper(units, units);
    grid.material.depthTest = false;
    grid.renderOrder = 1;
    node.add(grid);

    this.grid = grid;
    this.axes = axes;
    this.visible = false;
  }
  get visible() {
    return this._visible;
  }
  set visible(v) {
    this._visible = v;
    this.grid.visible = v;
    this.axes.visible = v;
  }
}

export default AxisGridHelper;