document.addEventListener("DOMContentLoaded", () => {
  const jobDiv = document.querySelector("div#job-list")

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

    const h2 = ce("h2")
    h2.innerText = job.title


    const p = ce("p")
    p.innerText = job.description

    const a = ce("a")
    a.href = job.link

    div.append(h2,p,a)

    jobDiv.append(div)
  }

  fetchJobs()
});
