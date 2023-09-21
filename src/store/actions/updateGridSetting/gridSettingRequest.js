import Request from "../../../Classes/Request";

class GridSettingRequest extends Request {
  constructor() {
    super();
    this.gridSettings = {
      updateGridSettings:super.url( "/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__",
        "commonservices")
    };
  }
}
let data = new GridSettingRequest();
export default data;
