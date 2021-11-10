const url = 'http://localhost:3000';


const charImgBar = document.getElementById('character-bar')



const onPageLoad = () => {
  fetch(url + `/characters`)
  .then(res => res.json())
  .then(chars => {
    chars.forEach((char) => {
        let charNameSpan = document.createElement('span');
        charNameSpan.innerText = char.name;
        charNameSpan.className = 'charBtn';
        charNameSpan.id = char.id;
        charImgBar.append(charNameSpan);
    })
  })
}



onPageLoad()

document.addEventListener('click', (e) => {
    const el = e.target;
    // console.log(el.id);
    fetch(url + `/characters/` + el.id)
    .then(res => res.json())
    .then(char => {
        // console.log(char)
        const charName = document.getElementById('name');
        const charImg = document.getElementById('image');
        const voteCount = document.getElementById('vote-count');
        charName.innerText = char.name;
        charImg.src = char.image;
        voteCount.innerText = char.votes;
    })
} )

const votesForm = document.getElementById('votes');

votesForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
})




const url = 'http://localhost:3000';


const charImgBar = document.getElementById('character-bar')



// const onPageLoad = () => {
//   fetch(url + `/characters`)
//   .then(res => res.json())
//   .then(chars => {
//     chars.forEach((char) => {
//         let charNameSpan = document.createElement('span');
//         charNameSpan.innerText = char.name;
//         charNameSpan.className = 'charBtn';
//         charNameSpan.id = char.id;
//         charImgBar.append(charNameSpan);
//     })
//   })
// }



// onPageLoad()
// const buttons = document.querySelectorAll('.charBtn')
// console.log(buttons)
// buttons.forEach((button) => {
// button.addEventListener('click', (e) => {
//     const el = e.target;
//     // console.log(el.id);
//     fetch(url + `/characters/` + el.id)
//     .then(res => res.json())
//     .then(char => {
//         // console.log(char)
//         const charName = document.getElementById('name');
//         const charImg = document.getElementById('image');
//         const voteCount = document.getElementById('vote-count');
//         charName.innerText = char.name;
//         charImg.src = char.image;
//         voteCount.innerText = char.votes;
//     })
// } )
// })

// const votesForm = document.getElementById('votes');

// votesForm.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(e);
// })