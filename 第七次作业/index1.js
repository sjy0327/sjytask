const btn = document.querySelector("button");
const div = document.querySelector('div');
const input = document.querySelector("input");
btn.addEventListener("click", async (e) => {
    console.log(e.target);
    if (input.value == '') {
        alert('您未输入内容')
    } else {
        const formData = new FormData();
        formData.append("message", input.value)
        const res = await fetch('https://anonym.ink:8000/homework/fufubot_test', {
            method: "POST",
            body: formData
        });
        const text = await res.text();
        console.log(text);
    }
})


// const res = await fetch("https://anonym.ink:8000/homework/get_homework",
// { method: "POST",
// body:from-date
// });
// const text = await res.text();
// console.log(text);c