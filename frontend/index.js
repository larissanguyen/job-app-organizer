document.addEventListener("DOMContentLoaded", () => {
  companyBtn = document.querySelector('#company-view')
  jobBtn = document.querySelector('#job-view')

  companyBtn.addEventListener("click", () => {
    fetchCompanies()
  })

  jobBtn.addEventListener("click", () => {
    fetchJobs()

  })
  
  createJobEventListener()
  createCompanyEventListener()
});

function ce(element){
  return document.createElement(element)
}

function fetchJobs(){
  document.querySelector("div#list").innerHTML = ""
  fetch("http://localhost:3000/api/v1/jobs")
  .then(res => res.json())
  .then(jobs => showJobs(jobs))
}

function showJobs(jobs){
  jobs.forEach(job => appendJob(job))
}

function appendJob(job){
  const jobLabel = ce("h3")
  jobLabel.innerText = job.title

  const companyLabel = ce("h4")
  companyLabel.innerText = job.company.name

  const p = ce("p")
  p.innerText = 'Description: ' + job.description

  const a = ce("a")
  a.href = job.link
  a.append(jobLabel)
  a.target = "_blank"

  const taskHeader = ce("h5")
  taskHeader.innerText = "Tasks"

  // ADD EVENT LISTENER FOR TASKS HERE

  const taskListDiv = ce("div")
  const ul = ce("ul")
  job.tasks.forEach(task => {
    const li = ce("li")
    li.innerText = task.name
    ul.append(li)
  })

  taskListDiv.append(taskHeader, ul)

  const deleteBtn = ce("btn")
  deleteBtn.classList.add("btn")
  deleteBtn.classList.add("btn-danger")
  deleteBtn.innerText = "Delete"

  const div = ce("div")
  const br = ce("br")
  div.append(a, companyLabel, p, taskListDiv, deleteBtn, br)
  

  const jobDiv = document.querySelector("div#list")
  jobDiv.append(div)

  deleteBtn.addEventListener("click", () => {
    fetch('http://localhost:3000/api/v1/jobs/' + job.id, {
      method: 'DELETE',
    })
    div.innerHTML = ""
  })
}

function createJobEventListener() {
  // adding a new toy
  const jobForm = document.querySelector("#add-job-form")

  jobForm.addEventListener("submit", () => {
    event.preventDefault()
    // debugger

    let title = event.target[0].value
    let description = event.target[1].value
    let link = event.target[2].value
    let company_id = event.target[3].value
    let roletype_id = event.target[4].value

    const configObj = {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        title,
        description,
        link, 
        company_id,
        roletype_id
      })
    }

    fetch("http://localhost:3000/api/v1/jobs", configObj)
    .then(res => res.json())
    .then(newJob => {
      // console.log(newJob)
      appendJob(newJob)
      jobForm.reset()
    })

  })
}

function fetchCompanies(){
  document.querySelector("div#list").innerHTML = ""
  fetch("http://localhost:3000/api/v1/companies")
  .then(res => res.json())
  .then(companies => showCompanies(companies))
}

function showCompanies(companies){
  companies.forEach(company => appendCompany(company))
}

function appendCompany(company){
  const companyLabel = ce("h3")
  companyLabel.innerText = company.name

  const p = ce("p")
  p.innerText = 'Description: ' + company.description

  const a = ce("a")
  a.href = company.link
  a.append(companyLabel)
  a.target = "_blank"

  const jobHeader = ce("h5")
  jobHeader.innerText = "Jobs"

  // ADD EVENT LISTENER FOR TASKS HERE

  const jobListDiv = ce("div")
  const ul = ce("ul")
  company.jobs.forEach(job => {
    const li = ce("li")
    li.innerText = job.title
    ul.append(li)
  })

  jobListDiv.append(jobHeader, ul)

  const deleteBtn = ce("btn")
  deleteBtn.classList.add("btn")
  deleteBtn.classList.add("btn-danger")
  deleteBtn.innerText = "Delete"

  const div = ce("div")
  const br = ce("br")
  div.append(a, p, jobListDiv, deleteBtn, br)

  const companyDiv = document.querySelector("div#list")
  companyDiv.append(div)

  deleteBtn.addEventListener("click", () => {
    fetch('http://localhost:3000/api/v1/companies/' + company.id, {
      method: 'DELETE',
    })
    div.innerHTML = ""
  })
}

function createCompanyEventListener() {
  // adding a new toy
  // debugger
  const companyForm = document.querySelector("#add-company-form")

  companyForm.addEventListener("submit", () => {
    event.preventDefault()
    debugger

    let name = event.target[0].value
    let description = event.target[1].value
    let link = event.target[2].value

    const configObj = {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name,
        description,
        link
      })
    }

    fetch("http://localhost:3000/api/v1/companies", configObj)
    .then(res => res.json())
    .then(newCompany => {
      // console.log(newJob)
      appendCompany(newCompany)
      companyForm.reset()
    })

  })
}
