const callApiBtn = selectElementById("CallApi");
const abortApiBtn = selectElementById("AbortApi");
let abortController;
let signal;
const makeApiCall = () => {
  abortController = new AbortController()
  signal = abortController.signal
  fetch("https://jsonplaceholder.typicode.com/comments", { signal })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
const abortApiCall = ()=>{
    abortController?.abort()
}
attachEventListener("click", "CallApi",makeApiCall);
attachEventListener('click',"AbortApi",abortApiCall)
