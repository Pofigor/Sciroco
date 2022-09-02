const btn = document.querySelector('#downloadcsv');

btn.addEventListener('click', () => {
  $('#table').table2csv();
});
