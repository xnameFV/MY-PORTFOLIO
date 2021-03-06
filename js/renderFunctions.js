

// section render
function renderHeroSection(infor) {
    let {name , avataLink, email, phone, address, job, socialLinks} = infor;
    let socialIcons = document.querySelectorAll('.hero-panel__social-icons a');

    document.querySelector('.hero-panel__name').innerText = name;
    document.querySelector('.hero-panel__email').innerText = email;
    document.querySelector('.hero-panel__phone').innerText = phone;
    document.querySelector('.hero-panel__address').innerText = address;
    document.querySelector('.hero-panel__job').innerText = job;
    document.querySelector('.avata__bg').style.backgroundImage = `url(${avataLink})`;
    socialIcons.forEach(s => s.style.href=socialLinks);
}



// aboute render
function renderAboutSection(data) {
    let {about, tags} = data;
    let listTags = '';
    tags.forEach(tag => {
        listTags += `<span class="border mr-2" style="font-size: .75rem">${tag}</span>`;
    });

    document.querySelector('.about__text').innerText = about;
    document.querySelector('.about__tags-container').innerHTML = listTags;
}



// what to do render
function renderWhatToDoSection(data) {
    let cards = document.querySelectorAll('.what-i-do .card');
    for (let i = 0; i < cards.length; i++) {
        let container = cards[i],
            h4 = cards[i].querySelector('h5'),
            cardBody = cards[i].querySelector('.what-i-do .card__body');
        h4.innerText = data[i].title;
        cardBody.innerText = data[i].text;
    }
}



// skill render
function renderSkillSection(data) {
    let {technical, professional} = data;
    let techContainer = document.querySelector('.skills__technical-container');
    let projessionalContainer = document.querySelector('.skills__professional-container');
    let techData = '';
    let proData = '';
    technical.forEach(t => {
        techData +=     `<div class="skill">
                            <i class="far fa-check-square skill__box"></i>
                            <div class="skill__content">${t}</div>
                        </div> `
    });
    professional.forEach(p => {
        proData += `<div class="skill">
                        <i class="far fa-check-square skill__box"></i>
                        <div class="skill__content">${p}</div>
                    </div> `
    });
    techContainer.innerHTML += techData;
    projessionalContainer.innerHTML += proData;
}



// experience render
function renderExperienceSection(data) {
    data.forEach(exp => {
        let type = exp.type,
            title = exp.title,
            time = exp.time,
            text = exp.text;
        if (type === 'education') {
           document.querySelector('.experience__education-container').innerHTML +=
           `<div class="card mb-4">
                <div class="card__head">
                    <h4>
                    ${title}
                    </h4>
                </div>
                <div class="card__body">
                    <div class="green mt-2 mb-2">${time}</div>
                    <div>
                        ${text}
                    </div>
                </div>
            </div>`;
            
        }else if (type = 'work') {
            // do something
            document.querySelector('.experience__work-container').innerHTML +=
                `<div class="card mb-4">
                    <div class="card__head">
                        <h4>
                            ${title}
                        </h4>
                    </div>
                    <div class="card__body">
                        <div class="green mt-2 mb-2">${time}</div>
                        <div>
                          ${text}
                        </div>
                    </div>
                </div>`;
        }
    });
}




// project render
function renderProjectSection(data) {
    let {type, projects} = data;
    let tabs = document.querySelector('.project-tabs');
    let projectContainer = document.getElementById('all-projects');
    type.forEach(t => {
        let id = t.id,
            name = t.name;
        tabs.innerHTML += 
        `<div class="nav__item--green" data-category-condition="${id}">${name}</div>`;
    });
    projects.forEach(p => {
        let idP = p.id,
            typeText = 'all-' + p.typeId.join('-'),
            name = p.name,
            imageUrl = p.imageUrl,
            tech = p.tech,
            previewUrl = p.previewUrl;
        
        projectContainer.innerHTML += 
        `
        <div class="grid-item col-4 " data-category-value="${typeText}">
            <div class="project" data-preview-url="${previewUrl}">
                <img class="lozad project__image" data-src="${imageUrl}" alt="#">
                <div class="project__mask"></div>
                <div class="project__title">
                    <div class="h3">${name}</div>
                    <div class="h4">${tech}</div>
                    <div class="mt-1 mb-1">
                        <i class="fas fa-eye h4 pointer"></i>
                    </div>
                </div>
            </div>           
        </div>        
        `;
    });


}



// newest post render
function renderPostSection(data) {
    let postContainer = document.querySelector('#featured-posts .row');
    let {description, created_at, id} = data;
    postContainer.innerHTML +=
    `<div class="col-4">
        <div class="card mb-4" data-id="${id}">
            <div class="card__head">
                <i class="far fa-clone green h4"></i>
                <h5 class="mt-2 mb-2">${description}</h5>
                <div class="mb-1">Post on <span class="green">${created_at.slice(0,10)}</span></div>
            </div>
            <div class="card__body">
                <div class="button--square mt-2 mb-2">View Now.</div>
            </div>
        </div>
    </div>`;
}
