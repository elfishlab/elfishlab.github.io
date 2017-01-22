function ViewSetEst(s,g,e, val) {
    var elt = document.getElementById("est" + ViewIdString(s,g,e));
    if (elt)
        elt.innerHTML = "N̂ =" + val;
}

function ViewSetKe(s,g,e, val) {
    var elt = document.getElementById("ke" + ViewIdString(s,g,e));
    if (elt)
        elt.innerHTML = "CI/N̂ =" + val;
}

function ViewSetTe(s,g,e, val) {
    var elt = document.getElementById("te" + ViewIdString(s,g,e));
    if (elt)
        elt.innerHTML = "T/N̂ =" + val;
}

function ViewGetEst(s,g,e) {
    var elt = document.getElementById("est" + ViewIdString(s,g,e));
    if (elt)
        return elt.innerHTML;
    return 0;
}

function ViewGetKe(s,g,e) {
    var elt = document.getElementById("ke" + ViewIdString(s,g,e));
    if (elt)
        return elt.innerHTML;
    return 0;
}
function ViewGetTe(s,g,e) {
    var elt = document.getElementById("te" + ViewIdString(s,g,e));
    if (elt)
        return elt.innerHTML;
    return 0;
}



function ViewGetInputValue(sp, gr, ef) {
    var elt = ViewGetInput(sp,gr,ef);

    var retVal = NaN;
    if (elt !== null)
        retVal = elt.value;
    if (retVal === "")
        retVal = 0;
    return retVal;
}



function ViewGetEffortBox(s,g,e) {
    var effortboxId = "effort" + ViewIdString(s,g,e);
    var effortbox = document.getElementById(effortboxId);
    return effortbox;
}

function ViewAddEffortBoxClass(s,g,e,cls) {
    var eb = ViewGetEffortBox(s,g,e);
    if (!eb)
        return false;
    var lst = eb.classList;
    if (!lst.contains(cls))
        lst.add(cls);
    return true;
}

function ViewRemoveEffortBoxClass(s,g,e,cls) {
    var eb = ViewGetEffortBox(s,g,e);
    if (!eb)
        return false;
    var lst = eb.classList;
    if (lst.contains(cls))
        lst.remove(cls);
    return true;
}

function ViewSetEstClass(s,g,e,cls) {
    var idn = "est" + ViewIdString(s,g,e);
    var elt = document.getElementById(idn);
    if (!elt)
        return false;

    elt.className = cls;
    return true;
}

function ViewGetInput(s,g,e) {
    var key = "ci" + ViewIdString(s,g,e);
    return document.getElementById(key);
}

function ViewIdString(s,g,e) {
    // TODO use JQuery instead of postfix on id of dom elts
    var postfix = "-" + s + "-" + g + "-" + e;
    return postfix;
}

function ViewSetMethodDropdown(meth) {
    // Updates the method selector, reflecting the stored value.
    var methodDropdown = document.getElementsByName("method")[0];
    var methodOptions = methodDropdown.getElementsByTagName("option");
    for (var i = 0; i < methodOptions.length; i++) {
        if (methodOptions[i].value == meth)
            methodOptions[i].selected = true;
    }
}

function ViewSetSummary(elt, sp, gr, numEfforts, est, totalCatch, method) {
    if (!elt)
        return false;
    var data = "";
    data += "<p>Efforts = " + numEfforts + "</p>";
    data += "<p>N̂ = " + est + "</p>";
    data += "<p>T = " + totalCatch + "</p>";
    data += "<p>M = " + window.elfish.method + "</p>";
    elt.innerHTML = data;
    return true;
}

function ViewConfidenceFieldChanged(val) {
    setConfidence(val);
}

function ViewConfidenceRangeChanged(val) {
    setConfidence(val / 1000);
}

/**
 * @brief Update the confidence settings in the UI.
 * @details Gives new values to both the range slider as well as the free-input
 *          text box.
 *
 * @param  val - a number between and including 0.001 and 1.
 */
function ViewUpdateConfidence(val) {
    var range = document.getElementsByName("confidence-range")[0];
    var numberField = document.getElementsByName("confidence-val")[0];
    numberField.value = val;
    range.value = val * 1000;
}
