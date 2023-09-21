import Request from "../../../Classes/Request";

class AppearanceSettingRequest extends Request {
  constructor() {
    super();
    this.appearanceSetting = {
      updateAppearance: super.url(
        "crup-site-editor/main-container-edit/__PAGEID__?mcon=__MAINCONTAINERID__",
        "commonservices"
      ),
      updateBlockElements: super.url(
        "/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__",
        "commonservices"
      ),
      createNewSlide: super.url(
        "/crup-site-editor/createSlider/__GRIDID__",
        "commonservices"
      ),
      deleteSlide: super.url(
        "/crup-site-editor/deleteSlider/__GRIDID__",
        "commonservices"
      ),
      updateSlide: super.url(
        "/crup-site-editor/editSlider/__SLIDERID__?grid=__GRIDID__",
        "commonservices"
      ),
      updateSliderGrid: super.url(
        "/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__",
        "commonservices"
      ),
      changeLayout: super.url(
        "/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__",
        "commonservices"
      ),
      sectionUpdate: super.url(
        "crup-site-editor/section-edit/__PAGEID__?sec=__SECTIONID__",
        "commonservices"
      ),
      section_gridEdit: super.url(
        "crup-site-editor/section-grid-edit/__PAGEID__?sec=__SECTIONID__",
        "commonservices"
      ),
      updateGridStyle: super.url(
        "/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__",
        "commonservices"
      ),
    };
  }
}
let data = new AppearanceSettingRequest();
export default data;
