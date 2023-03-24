const input = document.getElementById('input');
const btn = document.getElementById('btn');
const jadval = document.getElementById('jadval')
const forma = document.getElementById("form")
forma.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
  fetchData(input.value)
  input.value = ""
})


async function fetchData(region) {
  const res = await fetch(`https://islomapi.uz/api/present/day?region=${region}`)
  const data = await res.json()
  console.log(data);
  generate(data)
}

function generate(arr) {
  jadval.innerHTML = `  
  <div class="row">
    <div class="col s12 m6 c-row">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${arr.region}</span>
          <p>Hafta kuni: ${arr.weekday}</p>
          <p>Sana: ${arr.date}</p>
        </div>
        <div class="card-action">
        <p>Saharlik: ${arr.times.tong_saharlik}</p>
        <p>Shom iftorlik: ${arr.times.shom_iftor}</p>
        <hr>
        <p>Bomdod: ${arr.times.quyosh}</p>
        <p>Peshin: ${arr.times.peshin}</p>
        <p>Asr: ${arr.times.asr}</p>
        <p>Hufton: ${arr.times.hufton}</p>
        </div>
      </div>
    </div>
  </div>
  `
}