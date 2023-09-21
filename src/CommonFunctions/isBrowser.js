export let host;
export const isBrowser = () => {
    return typeof window !== "undefined"
}

export const hostName = (host) => {
    let hostname = host?.split(':')[0]
    return hostname
}

export const serverSideHost = (host) => {
    let hostname = host.split(":")[0]
    return hostname
}
export const getFullUrl = (host, pathname, slug,) => {
    let fullUrl = `https://${host}${pathname}`
    return fullUrl
}