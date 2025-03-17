const url = 'https://ipinfo.io/json'
let button = document.querySelector('button')
async function  ipInfo() {
	const respone = await fetch(url);
	const result = await respone.json()
	console.log(result)

	const list = document.querySelector('.list')
	list.innerHTML = ''

const info = document.createElement('div')
info.classList.add('info');

let [kenglik, uzunlik] = result.loc.split(',')

info.innerHTML =`
	<p><b>Kenglik:</b> ${kenglik}</p>
	<p><b>Uzunlik:</b> ${uzunlik}</p>
	<p><b>Mamlakat:</b> ${result.country}</p>
	<p><b>Shahar:</b> ${result.city}</p>
	<p><b>IP Manzil:</b> ${result.ip}</p>
	<p><b>Internet provayder:</b> ${result.org}</p>
<iframe src="https://www.google.com/maps?q=${kenglik},${uzunlik}&output=embed" width="500" height="330" style="border:0;" allowfullscreen></iframe>
`

list.appendChild(info)
}

button.addEventListener('click', () => {
	ipInfo()
})

