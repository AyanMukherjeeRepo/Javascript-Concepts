//fetch call with high priority

const fetchWithHighPriority = () => {
  fetch("https://jsonplaceholder.typicode.com/comments", {
    priority: "high",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}

//fetch with low priority
const fetchWithLowPriority = () => {
    fetch("https://jsonplaceholder.typicode.com/comments", {
        priority: "low",
        }).then((res) => res.json()).then((res) => console.log(res));}

attachEventListener("click", "CallApis", ()=>{
    fetchWithLowPriority()
    fetchWithHighPriority()
});    

