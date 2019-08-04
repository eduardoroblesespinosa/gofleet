var qmCurrent = "";
var qmArrow = "";

function qmShowArrow(qmCurrent)
{
if (qmCurrent.search('qmjsdataup') != -1) {
qmArrow = "<img src=\"http://app.quotemedia.com/quotetools/images/qm_up.gif\">";
}
else if (qmCurrent.search('qmjsdatadown') != -1) {
qmArrow = "<img src=\"http://app.quotemedia.com/quotetools/images/qm_down.gif\">";
}
else {
qmArrow = "<img src=\"http://app.quotemedia.com/quotetools/images/qm_nc.gif\">";
}
return qmArrow;
}