'use strict';

// All content below is fictional sample data. Replace it only with approved profiles.
const developers = [
  {id:'amina',name:'Amina Yusuf',focus:'Frontend',role:'Junior frontend developer',skills:['React','JavaScript','CSS'],background:'From customer service to thoughtful interfaces. I like making everyday tasks feel a little simpler.',experience:'Three years in customer service taught me to listen carefully, explain clearly and stay calm when a problem needs solving.',project:'Neighbourhood Pantry',projectSummary:'A community food-sharing interface that makes local collection information easier to find.',contribution:'Built the listing cards and category filters, created responsive layouts and added keyboard-friendly form validation.',learning:'Learned to separate presentation from filtering logic and to test an interface with longer content and smaller screens.',color:'#eee6dc',ink:'#795a3f',preference:'London · Hybrid',availability:'Full-time roles'},
  {id:'daniel',name:'Daniel Okafor',focus:'Full-stack',role:'Junior full-stack developer',skills:['JavaScript','Node.js','PostgreSQL'],background:'A former logistics coordinator who enjoys turning complicated workflows into useful, straightforward tools.',experience:'Coordinated daily delivery schedules and worked with drivers and customers to resolve problems as priorities changed.',project:'Shift Together',projectSummary:'A shift-planning application for a small volunteer team.',contribution:'Designed the shift database, built the availability API and connected it to a calendar interface with clear error states.',learning:'Explored validation on both the client and server, and how database constraints help prevent double bookings.',color:'#dfe8f0',ink:'#476783',preference:'London · Hybrid or remote',availability:'Full-time roles'},
  {id:'priya',name:'Priya Shah',focus:'Frontend',role:'Junior frontend developer',skills:['JavaScript','HTML','Accessibility'],background:'Bringing a teaching background and a habit of asking: can someone understand this on their first try?',experience:'Planned learning activities and adapted explanations for different levels of confidence and experience.',project:'Small Steps Learning',projectSummary:'A study planner that helps learners break a weekly goal into manageable tasks.',contribution:'Implemented the task editor, accessible progress labels and local saving, then refined the layout using peer feedback.',learning:'Practised semantic HTML, focus management and explaining technical choices during a team review.',color:'#e8e0ef',ink:'#795c8d',preference:'London · Hybrid',availability:'Full-time or part-time roles'},
  {id:'leo',name:'Leo Martins',focus:'Backend',role:'Junior backend developer',skills:['Node.js','SQL','REST APIs'],background:'Curious about what happens behind the screen. I enjoy organising data and tracing a problem to its source.',experience:'Hospitality work gave me experience prioritising tasks and communicating with a team during busy shifts.',project:'Borrow Library API',projectSummary:'An API for a community tool library to track equipment and loans.',contribution:'Created loan and inventory endpoints, documented request formats and wrote checks for overdue and unavailable items.',learning:'Learned to design consistent error responses and to use database transactions for related changes.',color:'#e1e8d6',ink:'#5b7042',preference:'London · Remote or hybrid',availability:'Full-time roles'},
  {id:'sara',name:'Sara Haddad',focus:'Full-stack',role:'Junior full-stack developer',skills:['React','Express','PostgreSQL'],background:'A practical problem-solver with an operations background and an interest in tools that help communities.',experience:'Supported a community centre with event coordination, booking records and volunteer communication.',project:'Community Calendar',projectSummary:'An events directory with a simple organiser workflow.',contribution:'Connected the event form to a validated API, modelled categories in SQL and added date and location filters.',learning:'Worked through date-handling edge cases and learned to keep team changes small and easy to review.',color:'#f0dfd8',ink:'#925e49',preference:'London · Hybrid',availability:'Full-time roles'},
  {id:'james',name:'James Chen',focus:'Frontend',role:'Junior frontend developer',skills:['React','TypeScript','CSS'],background:'Detail-oriented, curious and happiest when a small improvement makes a product easier for someone to use.',experience:'Retail experience developed my patience, attention to detail and ability to understand what a customer actually needs.',project:'Clear Budget',projectSummary:'A personal spending interface designed around clear summaries and simple categories.',contribution:'Built reusable form components, typed the transaction model and made summary charts understandable through text alternatives.',learning:'Learned to model empty states and use TypeScript to catch inconsistent data before rendering.',color:'#dce9e6',ink:'#45766d',preference:'London · Hybrid or remote',availability:'Full-time roles'},
  {id:'maya',name:'Maya Thompson',focus:'Full-stack',role:'Junior full-stack developer',skills:['JavaScript','Node.js','React'],background:'A career changer who enjoys teamwork, useful feedback and building things with a clear purpose.',experience:'Administrative work involved keeping records accurate and helping colleagues navigate unfamiliar processes.',project:'Repair & Share',projectSummary:'A booking prototype for a neighbourhood repair cafe.',contribution:'Built the booking journey, added server-side validation and wrote a setup guide so teammates could run the project.',learning:'Developed a clearer approach to debugging requests across the browser and server.',color:'#eadfcf',ink:'#81683f',preference:'London · Hybrid',availability:'Full-time or part-time roles'},
  {id:'omar',name:'Omar Ali',focus:'Backend',role:'Junior backend developer',skills:['Python','SQL','Git'],background:'I like breaking down a large problem, understanding the data and finding a solution I can explain.',experience:'Worked in warehouse operations, checking inventory and spotting discrepancies between systems and physical stock.',project:'Stockroom Insights',projectSummary:'A small data tool for checking stock records and summarising low inventory.',contribution:'Wrote a CSV import with validation, designed the stock tables and added repeatable reports for missing and duplicate records.',learning:'Practised handling incomplete input and writing useful error messages without silently dropping data.',color:'#e0e4f1',ink:'#5b6689',preference:'London · Remote or hybrid',availability:'Full-time roles'},
  {id:'elena',name:'Elena Petrova',focus:'Frontend',role:'Junior frontend developer',skills:['JavaScript','React','Responsive design'],background:'Bringing a visual eye and a research mindset to interfaces that work for different people and devices.',experience:'Volunteer communications work gave me practice simplifying information and responding to feedback from a varied audience.',project:'Local Routes',projectSummary:'A searchable directory of local walking routes with practical accessibility information.',contribution:'Created route cards and combined filters, designed mobile navigation and checked colour contrast and keyboard use.',learning:'Learned to balance concise cards with the detail someone needs to make a decision.',color:'#eadfe5',ink:'#885a73',preference:'London · Hybrid',availability:'Full-time roles'},
  {id:'ben',name:'Ben Williams',focus:'Full-stack',role:'Junior full-stack developer',skills:['React','Node.js','SQL'],background:'From solving practical problems in support roles to building software that helps others solve their own.',experience:'Frontline support work taught me to investigate carefully, document what I tried and ask for help with useful context.',project:'Team Helpdesk',projectSummary:'A simple issue tracker for a small community organisation.',contribution:'Built the ticket creation flow, database relationships and status updates, including validation for incomplete requests.',learning:'Practised reviewing pull requests and connecting acceptance criteria to meaningful checks.',color:'#dce8d9',ink:'#53744e',preference:'London · Hybrid or remote',availability:'Full-time roles'}
];

const grid = document.querySelector('#developer-grid');
const search = document.querySelector('#search');
let currentFilter = 'all';
let enquiryType = 'feedback';
let lastDialogTrigger = null;
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const initials = name => name.split(' ').map(part => part[0]).join('');
const tags = skills => skills.map(skill => `<span class="tag">${escapeHtml(skill)}</span>`).join('');
const portraitAssets = {amina:'./assets/amina.png',daniel:'./assets/daniel.png',priya:'./assets/priya.png'};
const avatarMarkup = person => portraitAssets[person.id] ? `<img src="${portraitAssets[person.id]}" alt="" width="74" height="74" loading="lazy">` : initials(person.name);
function renderDevelopers() {
  const query = search.value.trim().toLowerCase();
  const filtered = developers.filter(person => (currentFilter === 'all' || person.focus === currentFilter) && [person.name, person.role, ...person.skills, person.project, person.background].join(' ').toLowerCase().includes(query));
  grid.innerHTML = filtered.map(person => `<article class="developer-card"><div class="card-main"><div class="card-top"><div class="avatar" style="--avatar:${person.color};--avatar-ink:${person.ink}" aria-hidden="true">${avatarMarkup(person)}</div><div class="card-identity"><h3>${person.name}</h3><p class="role">${person.focus} developer</p><p class="location">${person.preference}</p></div></div><p class="card-description">${person.background}</p><div class="tags">${tags(person.skills)}</div><div class="card-project"><span class="project-icon" aria-hidden="true">&lt;/&gt;</span><span><span class="project-label">FEATURED PROJECT</span>${person.project}</span></div></div><div class="card-footer"><span>Fictional example</span><button class="profile-button" data-profile="${person.id}" aria-label="View ${person.name}'s example profile">View profile <span aria-hidden="true">↗</span></button></div></article>`).join('');
  document.querySelector('#results-count').textContent = `${filtered.length} example developer${filtered.length === 1 ? '' : 's'}`;
  document.querySelector('#empty-state').hidden = filtered.length !== 0;
}
function openDialog(id) {
  const active = document.querySelector('dialog[open]');
  if (!active) lastDialogTrigger = document.activeElement;
  if (active) active.close();
  document.querySelector(`#${id}`).showModal();
  document.body.style.overflow = 'hidden';
}
function openProfile(id) {
  const person = developers.find(item => item.id === id);
  if (!person) return;
  document.querySelector('#profile-content').innerHTML = `<p class="eyebrow">FICTIONAL EXAMPLE · NOT A REAL CANDIDATE</p><div class="profile-heading"><div class="avatar" style="--avatar:${person.color};--avatar-ink:${person.ink}" aria-hidden="true">${avatarMarkup(person)}</div><div><h2 id="profile-title">${person.name}</h2><p class="role-detail">${person.role}</p></div></div><div class="profile-meta"><span><strong>LOCATION & WORK STYLE</strong>${person.preference}</span><span><strong>LOOKING FOR</strong>${person.availability}</span></div><div class="tags">${tags(person.skills)}</div><p class="profile-summary">${person.background}</p><section class="profile-section"><h3>Experience I bring</h3><p>${person.experience}</p></section><section class="profile-section"><h3>A closer look at my work</h3><article class="project-detail"><p class="eyebrow">ILLUSTRATIVE LEARNING PROJECT</p><h3>${person.project}</h3><p>${person.projectSummary}</p><h4>My contribution</h4><p>${person.contribution}</p><h4>What I learned</h4><p>${person.learning}</p><p class="sample-note">This project is an example. Approved real profiles will include their own code and demo links.</p></article></section><div class="profile-actions"><button class="button button-dark" data-action="interview" data-person="${person.id}">Request an interview <span aria-hidden="true">↗</span></button><button class="button button-pale" data-action="feedback" data-person="${person.id}">Offer feedback <span aria-hidden="true">↗</span></button></div><p class="profile-footnote">Discuss the pilot with the organiser. This profile is fictional; emails are sent only when you choose to send them.</p>`;
  openDialog('profile-dialog');
}
function openEnquiry(type, id) {
  enquiryType = type;
  const person = developers.find(item => item.id === id);
  document.querySelector('#enquiry-title').textContent = type === 'interview' ? 'Request an interview' : 'Offer project feedback';
  const message = document.querySelector('#enquiry-message');
  document.querySelector('#enquiry-message-label').firstChild.textContent = type === 'interview' ? 'Tell us about the opportunity' : 'What could you offer?';
  message.placeholder = type === 'interview' ? 'Role, skills, salary range, location and what the interview would involve.' : 'Tell us what you would like to review and how much time you can offer.';
  document.querySelector('#enquiry-developer').value = person ? person.name + ' (fictional example)' : 'Any suitable developer';
  openDialog('enquiry-dialog');
}
document.querySelector('#enquiry-developer').insertAdjacentHTML('beforeend', developers.map(person => `<option>${person.name} (fictional example)</option>`).join(''));
document.addEventListener('click', event => {
  const profileButton = event.target.closest('[data-profile]');
  if (profileButton) openProfile(profileButton.dataset.profile);
  const actionButton = event.target.closest('[data-action]');
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === 'join') openDialog('join-dialog');
    else if (action === 'about') openDialog('about-dialog');
    else openEnquiry(action, actionButton.dataset.person);
  }
  const closeButton = event.target.closest('[data-close]');
  if (closeButton) closeButton.closest('dialog').close();
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  renderDevelopers();
}));
search.addEventListener('input', renderDevelopers);
document.querySelector('#reset-filters').addEventListener('click', () => { search.value = ''; document.querySelector('[data-filter="all"]').click(); search.focus(); });
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => {
    const form = dialog.querySelector('form');
    if (form) { form.reset(); dialog.querySelector('.form-status').textContent = ''; }
    if (!document.querySelector('dialog[open]')) { document.body.style.overflow = ''; if (lastDialogTrigger?.isConnected) lastDialogTrigger.focus(); }
  });
});
function downloadDraft(filename, content) {
  const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a'); link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const contactEmail = 'thejuniordeveloperacademy@gmail.com';
function enquiryDraft() {
  const data = Object.fromEntries(new FormData(document.querySelector('#enquiry-form')));
  return {subject:`JDA pilot — ${enquiryType === 'interview' ? 'Interview enquiry' : 'Project feedback'}`,body:`Hello,\n\nI would like to discuss ${enquiryType === 'interview' ? 'an interview opportunity' : 'offering project feedback'} for the Junior Developer Academy pilot. I understand the current profiles are fictional examples.\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nProfile of interest: ${data.developer}\n\n${data.message}\n`};
}
function profileDraft() {
  const data = Object.fromEntries(new FormData(document.querySelector('#join-form')));
  return {subject:'JDA pilot — Volunteer profile',body:`Hello,\n\nI am interested in volunteering a profile for the Junior Developer Academy pilot. This is a draft for discussion, not permission to publish.\n\nDisplay name: ${data.name}\nPreferred role: ${data.role}\nSkills: ${data.skills}\n\nMY PROJECT\n${data.project}\n\nEXPERIENCE I BRING\n${data.experience || 'Not provided'}\n`};
}
function prepareEmail(draft, statusId) {
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
  document.querySelector(statusId).textContent = `We asked your email app to open a draft. Review it before sending. If it did not open, download the draft and email it to ${contactEmail}.`;
}
document.querySelector('#enquiry-form').addEventListener('submit', event => { event.preventDefault(); prepareEmail(enquiryDraft(), '#enquiry-status'); });
document.querySelector('#join-form').addEventListener('submit', event => { event.preventDefault(); prepareEmail(profileDraft(), '#join-status'); });
function downloadFormDraft(formId, draftBuilder, filename, statusId) {
  if (!document.querySelector(formId).reportValidity()) return;
  const draft = draftBuilder();
  downloadDraft(filename, `DRAFT — NOT SENT\nTo: ${contactEmail}\nSubject: ${draft.subject}\n\n${draft.body}`);
  document.querySelector(statusId).textContent = `Your draft download has started. To share it, email it to ${contactEmail}. Nothing has been sent by this website.`;
}
document.querySelector('#download-enquiry').addEventListener('click', () => downloadFormDraft('#enquiry-form', enquiryDraft, 'jda-enquiry-draft.txt', '#enquiry-status'));
document.querySelector('#download-profile').addEventListener('click', () => downloadFormDraft('#join-form', profileDraft, 'jda-profile-draft.txt', '#join-status'));
document.querySelectorAll('[data-portrait]').forEach(element => {
  const src = portraitAssets[element.dataset.portrait];
  if (!src) return;
  const label = element.querySelector('.photo-label');
  element.replaceChildren();
  const portrait = document.createElement('img');
  portrait.src = src;
  portrait.alt = '';
  portrait.width = 512;
  portrait.height = 512;
  element.appendChild(portrait);
  if (label) element.appendChild(label);
});
renderDevelopers();

// Repeat the skills visually for a seamless loop; assistive technology reads them once.
const skillsStrip = document.querySelector('.skills-strip');
const skillsTrack = document.querySelector('#skills-track');
const skillsToggle = document.querySelector('#skills-toggle');
const skillsCopy = skillsTrack.querySelector('.skills-group').cloneNode(true);
skillsCopy.setAttribute('aria-hidden', 'true');
skillsTrack.appendChild(skillsCopy);
skillsStrip.classList.add('is-animated');
skillsToggle.hidden = false;
skillsToggle.addEventListener('click', () => {
  const paused = skillsStrip.classList.toggle('is-paused');
  document.querySelector('#skills-toggle-icon').textContent = paused ? '▶' : 'Ⅱ';
  document.querySelector('#skills-toggle-label').textContent = paused ? 'Play' : 'Pause';
  skillsToggle.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} skills slideshow`);
});

// Progressive enhancement: the directory also works in browsers without WebMCP.
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const tool = {
    name: 'filter_example_developers',
    title: 'Filter example developers',
    description: 'Update the visible directory by focus and search text. Returns matching fictional profiles; these are not real candidates.',
    inputSchema: {type:'object',properties:{focus:{type:'string',enum:['all','Frontend','Full-stack','Backend']},query:{type:'string',maxLength:200}},required:['focus','query'],additionalProperties:false},
    annotations: {readOnlyHint:false,untrustedContentHint:false},
    execute(input) {
      if (!input || typeof input !== 'object' || Object.keys(input).some(key => !['focus','query'].includes(key)) || !['all','Frontend','Full-stack','Backend'].includes(input.focus) || typeof input.query !== 'string' || input.query.length > 200) throw new Error('Provide a supported focus and a search query of up to 200 characters.');
      search.value = input.query;
      document.querySelector(`[data-filter="${input.focus}"]`).click();
      const visibleIds = [...grid.querySelectorAll('[data-profile]')].map(button => button.dataset.profile);
      return {fictional:true,count:visibleIds.length,developers:developers.filter(person => visibleIds.includes(person.id)).map(({id,name,role,skills}) => ({id,name,role,skills}))};
    }
  };
  try { Promise.resolve(document.modelContext.registerTool(tool, {signal:lifecycle.signal})).catch(() => {}); } catch { /* Normal UI remains available. */ }
  window.addEventListener('pagehide', event => { if (!event.persisted) lifecycle.abort(); });
}
