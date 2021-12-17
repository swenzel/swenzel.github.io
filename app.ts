var contentElement = document.getElementById("content") as HTMLDivElement;

const supportedLanguages = [
    "C",
    "C#",
    "C++",
    "CSS",
    "Diff",
    "Go",
    "HTML, XML",
    "JSON",
    "Java",
    "JavaScript",
    "Kotlin",
    "Less",
    "Lua",
    "Makefile",
    "Markdown",
    "Objective-C",
    "PHP",
    "PHP Template",
    "Perl",
    "Plain text",
    "Python",
    "Python REPL",
    "R",
    "Ruby",
    "Rust",
    "SCSS",
    "SQL",
    "Shell Session",
    "Swift",
    "TOML, also INI",
    "TypeScript",
    "Visual Basic .NET",
    "YAML"
]

function main() {
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get("code")
    if (code === null) {
        createTextArea();
    } else {
        createCodeArea(code, urlParams.get("language"));
    }
}

function createTextArea() {
    let form = document.createElement("form") as HTMLFormElement;
    form.action=window.location.pathname;

    let textArea = document.createElement("textarea") as HTMLTextAreaElement;
    textArea.innerText = "Put your code Here";
    textArea.rows = 50;
    textArea.cols = 120;
    textArea.name = "code"
    form.appendChild(textArea);

    let submitButton = document.createElement("input") as HTMLInputElement;
    submitButton.value = "Submit";
    submitButton.type = "submit";
    form.appendChild(submitButton);

    contentElement.appendChild(form);
}

function createCodeArea(code: string, language: undefined | string) {
    let form = document.createElement("form") as HTMLFormElement;
    form.action=window.location.pathname;

    let submitButton = document.createElement("input") as HTMLInputElement;
    submitButton.value = "Create New Code";
    submitButton.type = "submit";
    form.appendChild(submitButton);

    contentElement.appendChild(form);

    let preElement = document.createElement("pre");

    let codeElement = document.createElement("code");
    var text = document.createTextNode(code);
    codeElement.appendChild(text);

    preElement.appendChild(codeElement);

    contentElement.appendChild(preElement);
}

main();