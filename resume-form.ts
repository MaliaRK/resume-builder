document.getElementById('form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const titleElement = document.getElementById('title') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const locationElement = document.getElementById('location') as HTMLInputElement;
    const descriptionElement = document.getElementById('description') as HTMLTextAreaElement;
    const degreeElement = document.getElementById('degree') as HTMLInputElement;
    const instituteElement = document.getElementById('institute') as HTMLInputElement;
    const yearElement = document.getElementById('year') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const languageElement = document.getElementById('language') as HTMLTextAreaElement;
    const referenceElement = document.getElementById('reference') as HTMLInputElement;

    let name = '';
    let title = '';
    let phone = '';
    let email = '';
    let location = '';
    let description = '';
    let degree = '';
    let institute = '';
    let year = '';
    let skills = '';
    let experience = '';
    let language = '';
    let reference = referenceElement.value == "" ? "will be placed on request." : referenceElement.value;

    if(nameElement && titleElement && phoneElement && emailElement && locationElement && descriptionElement && degreeElement && instituteElement && yearElement && skillsElement && experienceElement && languageElement) {
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
    } else {
        console.log("Error: something missing");
        return;
    }        

    const output = `
    <div id="editBtnDiv">
        <button id="edit">Edit</button>
    </div>
    <div id="main">
        <div id="heading">
            <h1><u>${name}</u></h1>
            <p><u>${title}</u></p>
        </div>
        <div id="separator"></div>
        <main>
                <div>
                    <div>
                        <h3>CONTACT</h3>
                        <p><img src="/images/phone.svg" alt="phone"> ${phone}</p>
                        <div id="email">
                        <img src="/images/email.svg" alt="email">
                            <p>${email}</p>
                        </div>
                        <p><img src="/images/home.svg" alt="home"> ${location}</p>
                    </div>
                    <div>
                        <h3>ABOUT ME</h3>
                        <p> ${description}</p>
                    </div>
                    <div>
                        <h3>EDUCATION</h3>
                        <div class="edu-content">
                            <h5>${degree}</h5>
                            <p>${institute}</p>
                            <p>${year}</p>
                        </div>
                    </div>
                </div>
            <div>
                    <div>
                        <h3>SKILLS</h3>
                        <p>${skills}</p>
                    </div>
                    <div>
                        <h3>EXPERIENCE</h3>
                        <p>${experience}</p>
                    </div>
                    <div>
                        <h3>LANGUAGES</h3>
                        <p>${language}</p>
                    </div>
                    <div>
                        <h3>REFERENCE</h3>
                        <p>${reference}</p>
                    </div>
            </div>
        </main>
    </div>
    `;

    const generatedOutput = document.getElementById('output');
    if(generatedOutput) {
        generatedOutput.innerHTML = output;
        //edit functionality
        const edit = document.getElementById('edit');
        if(edit) {
            edit.addEventListener('click', () => {
                const form = document.getElementById('form');
                if(form) {
                    form.style.display = 'block';
                }
                generatedOutput.style.display = 'none';
            });
        }
    } else {
        console.log("Error: something missing");
    }

    const form = document.getElementById('form');
    if(form) {
        form.style.display = 'none';
    }
    if(generatedOutput) {
        generatedOutput.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', () => {        // Initial setup    
    const form = document.getElementById('form');
    const generatedOutput = document.getElementById('output');
    if(form && generatedOutput) {
        form.style.display = 'block';
        generatedOutput.style.display = 'none';
    }
});
