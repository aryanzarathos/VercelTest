import Request from "../../../Classes/Request";

class AltTextRequest extends Request {
  constructor() {
    super();
    this.altTextSetting = {
      updateAltText: super.url(
        "crup-site-editor/__API_URL__/?business=__BUSINESS__&grid=__GRIDID__",
        "commonservices"
      ),
      updateGalleryAltText:super.url("/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__","commonservices")
    };
  }
}
let data = new AltTextRequest();
export default data;
