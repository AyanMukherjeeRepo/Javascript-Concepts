const selectElementById = (selectorId) => {
    return document.getElementById(selectorId)
}

const attachEventListener = (event,selectorId,callBack) => {
    document.getElementById(selectorId).addEventListener(event,callBack)
}
