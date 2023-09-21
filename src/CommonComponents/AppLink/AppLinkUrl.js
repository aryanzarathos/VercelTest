import Url from "../../Classes/Url";

class AppLinkUrl extends Url {
  urlWithoutSubdmain() {
    let currentUrl = this.baseUrl();
    let subdomain = `${this.subdomain()}.`;
    return currentUrl.replace(subdomain, "");
  }

  mainBaseUrl(extendedUrl = null) {
    if (extendedUrl != null) {
      extendedUrl =
        extendedUrl.substring(0, 1) === "/"
          ? extendedUrl.substring(1)
          : extendedUrl;
    }
    return `${this.urlWithoutSubdmain()}${extendedUrl}`;
  }

  createSubdomain(subdomainName, extendedUrl = null) {
    if (extendedUrl != null) {
      extendedUrl =
        extendedUrl.substring(0, 1) === "/"
          ? extendedUrl.substring(1)
          : extendedUrl;
    } else {
      extendedUrl = "";
    }
    return `${this.subdomainUrlGenerator().replace(
      this.placeholder,
      subdomainName
    )}${extendedUrl}`;
  }

  reserveDomains() {
    return process.env.NEXT_PUBLIC_DOMAIN;
  }

  privateDomain(hostName) {
    if (!this.reserveDomains()) {
      return false;
    }

    let reserveDomains = undefined;
    reserveDomains = this.reserveDomains().split(",");
    if (reserveDomains && reserveDomains.length > 0) {
      return !reserveDomains.includes(this.getDomainName(hostName));
    } else {
      return false;
    }
  }
  isEditorOrPreview() {
    if (this.subdomain() === "webwiz" || this.subdomain("",true) === "preview") {
      return true;
    }
  }
  isEditor() {
    if (this.subdomain() === "webwiz") {
      return true;
    }
  }
  isPreview() {
    if (this.subdomain("",true) === "preview") {
      return true;
    }
  }
  domainSubdomainKey() {
    if (this.privateDomain()) {
      return "domain";
    } else {
      return "subdomain";
    }
  }
  domainSubdomainValue() {
    if (this.privateDomain()) {
      return this.getHost();
    } else {
      this.subdomain();
    }
  }
}

export default new AppLinkUrl();