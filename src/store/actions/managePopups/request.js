import Request from "../../../Classes/Request";

class ManagePopupRequest extends Request {
    constructor() {
        super();
        this.manageRequests = {
            updateManageData: super.url("/draft-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__", "commonservices")
        };
    }
}
let data = new ManagePopupRequest();
export default data;
