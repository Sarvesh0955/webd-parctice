const form = document.querySelector('#search')
const div = document.querySelector('#output')

async function serachshow(inp) {
    const res = await fetch(` https://api.tvmaze.com/search/shows?q=${inp}`);
    const data = await res.json();
    console.log(data);
    return data;
}

function appenddiv(data){
    for(let res of data){
        let img = document.createElement('IMG') 
        img.src = res.show.image.medium;
        // console.log(img);
        document.body.append(img);
    }
}

form.addEventListener('submit',async (e) => {
    e.preventDefault();
    console.log("submitted")
    let inp = document.getElementById('input').value;
    let data = await serachshow(inp);
    appenddiv(data);
})

