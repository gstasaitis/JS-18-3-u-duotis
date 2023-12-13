fetch("https://party-wedding.glitch.me/v1/wedding")
.then(res => res.json())
.then(data => { 
    console.log(data)

    data.forEach(x => {
        console.log(x.name ,x.plusOne, x.attending)
    
    const attendants = document.createElement("tr")
    attendants.innerHTML =
    `
        <tr>
            <td class"name">${x.name}</td>
            <td class="plusOne">${x.plusOne}</td>
            <td class="attending">${x.attending}</td>
        </tr>
    `

    if(x.plusOne){
        attendants.querySelector('.plusOne').innerText = '+'
    }else {
        attendants.querySelector('.plusOne').innerText = '-'
    }

    if(x.attending){
        attendants.querySelector('.attending').innerText = '+'
    }else {
        attendants.querySelector('.attending').innerText = '-'
    }

    document.querySelector('table').appendChild(attendants)
    })
})
.catch(e => console.log(e.text))