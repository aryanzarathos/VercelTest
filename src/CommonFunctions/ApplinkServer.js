const isSubdomain = (host)=>{
    if (host.includes("webneed.com") && !host.includes("webwiz")) {
        return true
    }else{
        return false
    }
}

const subdomain = (host) => {
  if (host.includes("webneed.com") && !host.includes("webwiz")) {
    var parts = full.split(".");
    return parts[0];
  } else {
    return false;
  }
};