
import Request from "../../../Classes/Request";

class FontsRequest extends Request {
    constructor() {
        super()
        this.fontsEndpoint = {
            getGoogleFonts: super.url("/site-editor/get-fonts", "commonservices")
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FontsRequest();