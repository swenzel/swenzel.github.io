var contentElement = document.getElementById("content");

function main() {
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get("code");
    if (code === null) {
        createTextArea();
    }
    else {
        createCodeArea(code, urlParams.get("language"));
    }
}
function createTextArea() {
    var form = document.createElement("form");
    form.action = window.location.pathname;
    var textArea = document.createElement("textarea");
    textArea.innerText = "Put your code Here";
    textArea.rows = 50;
    textArea.cols = 120;
    textArea.name = "code";
    form.appendChild(textArea);
    var submitButton = document.createElement("input");
    submitButton.value = "Submit";
    submitButton.type = "submit";
    form.appendChild(submitButton);
    contentElement.appendChild(form);
}
function createCodeArea(code, language) {
    var form = document.createElement("form");
    form.action = window.location.pathname;
    var submitButton = document.createElement("input");
    submitButton.value = "Create New Code";
    submitButton.type = "submit";
    form.appendChild(submitButton);
    contentElement.appendChild(form);
    var preElement = document.createElement("pre");
    var codeElement = document.createElement("code");
    var text = document.createTextNode(code);
    codeElement.appendChild(text);
    preElement.appendChild(codeElement);
    contentElement.appendChild(preElement);
}
main();
