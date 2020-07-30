document.addEventListener("DOMContentLoaded", () => {
  fetchJobs()
  createJobEventListener()
});

function ce(element){
  return document.createElement(element)
}

function fetchJobs(){
  fetch("http://localhost:3000/api/v1/jobs")
  .then(res => res.json())
  .then(jobs => showJobs(jobs))
}

function showJobs(jobs){
  jobs.forEach(job => appendJob(job))
}

function appendJob(job){
  const div = ce("div")

  const h2 = ce("h3")
  h2.innerText = job.title

  const p = ce("p")
  p.innerText = 'Description: ' + job.description

  const a = ce("a")
  a.href = job.link
  a.append(h2)
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

  div.append(a, p, taskListDiv)
  const br = ce("br")

  const jobDiv = document.querySelector("div#job-list")
  jobDiv.append(div, br)
}

function createJobEventListener() {
  // adding a new toy
  const jobForm = document.querySelector("#add-job-form")

  jobForm.addEventListener("submit", () => {
    // event.preventDefault()
    debugger

    let title = event.target[0].value
    let description = event.target[1].value
    let link = event.target[2].value
    let company = event.target[3].value
    let roletype = event.target[4].value

    // fetch("http://localhost:3000/jobs",{
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     title,
    //     description,
    //     link, 
    //     company,
    //     roletype
    //   })
    // })


    
    // .then(res => res.json())
    // .then(newToy => {
    //   appendToy(newToy)
    //   toyForm.reset()
    //   toyFormContainer.style.display = "none"
    //   addToy = !addToy
    // })

  })
}
