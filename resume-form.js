var _a;
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var titleElement = document.getElementById('title');
    var phoneElement = document.getElementById('phone');
    var emailElement = document.getElementById('email');
    var locationElement = document.getElementById('location');
    var descriptionElement = document.getElementById('description');
    var degreeElement = document.getElementById('degree');
    var instituteElement = document.getElementById('institute');
    var yearElement = document.getElementById('year');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var languageElement = document.getElementById('language');
    var referenceElement = document.getElementById('reference');
    var name = '';
    var title = '';
    var phone = '';
    var email = '';
    var location = '';
    var description = '';
    var degree = '';
    var institute = '';
    var year = '';
    var skills = '';
    var experience = '';
    var language = '';
    var reference = referenceElement.value == "" ? "will be placed on request." : referenceElement.value;
    if (nameElement && titleElement && phoneElement && emailElement && locationElement && descriptionElement && degreeElement && instituteElement && yearElement && skillsElement && experienceElement && languageElement) {
        name = nameElement.value;
        title = titleElement.value;
        phone = phoneElement.value;
        email = emailElement.value;
        location = locationElement.value;
        description = descriptionElement.value;
        degree = degreeElement.value;
        institute = instituteElement.value;
        year = yearElement.value;
        skills = skillsElement.value;
        experience = experienceElement.value;
        language = languageElement.value;
    }
    else {
        console.log("Error: something missing");
        return;
    }
    var output = "\n    <div id=\"editBtnDiv\">\n        <button id=\"edit\">Edit</button>\n    </div>\n    <div id=\"main\">\n        <div id=\"heading\">\n            <h1><u>".concat(name, "</u></h1>\n            <p><u>").concat(title, "</u></p>\n        </div>\n        <div id=\"separator\"></div>\n        <main>\n                <div>\n                    <div>\n                        <h3>CONTACT</h3>\n                        <p><img src=\"/images/phone.svg\" alt=\"phone\"> ").concat(phone, "</p>\n                        <div id=\"email\">\n                        <img src=\"/images/email.svg\" alt=\"email\">\n                            <p>").concat(email, "</p>\n                        </div>\n                        <p><img src=\"/images/home.svg\" alt=\"home\"> ").concat(location, "</p>\n                    </div>\n                    <div>\n                        <h3>ABOUT ME</h3>\n                        <p> ").concat(description, "</p>\n                    </div>\n                    <div>\n                        <h3>EDUCATION</h3>\n                        <div class=\"edu-content\">\n                            <h5>").concat(degree, "</h5>\n                            <p>").concat(institute, "</p>\n                            <p>").concat(year, "</p>\n                        </div>\n                    </div>\n                </div>\n            <div>\n                    <div>\n                        <h3>SKILLS</h3>\n                        <p>").concat(skills, "</p>\n                    </div>\n                    <div>\n                        <h3>EXPERIENCE</h3>\n                        <p>").concat(experience, "</p>\n                    </div>\n                    <div>\n                        <h3>LANGUAGES</h3>\n                        <p>").concat(language, "</p>\n                    </div>\n                    <div>\n                        <h3>REFERENCE</h3>\n                        <p>").concat(reference, "</p>\n                    </div>\n            </div>\n        </main>\n    </div>\n    ");
    var generatedOutput = document.getElementById('output');
    if (generatedOutput) {
        generatedOutput.innerHTML = output;
        //edit functionality
        var edit = document.getElementById('edit');
        if (edit) {
            edit.addEventListener('click', function () {
                var form = document.getElementById('form');
                if (form) {
                    form.style.display = 'block';
                }
                generatedOutput.style.display = 'none';
            });
        }
    }
    else {
        console.log("Error: something missing");
    }
    var form = document.getElementById('form');
    if (form) {
        form.style.display = 'none';
    }
    if (generatedOutput) {
        generatedOutput.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var generatedOutput = document.getElementById('output');
    if (form && generatedOutput) {
        form.style.display = 'block';
        generatedOutput.style.display = 'none';
    }
});
