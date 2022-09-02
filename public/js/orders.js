const tableDiv = document.querySelector('.tableDiv');
// console.log(tableDiv);

tableDiv.addEventListener('click', async (event) => {
  if (event.target.tagName === 'BUTTON') {
    // console.log('КНОПКА=>', event.target.id, event.target.tagName);
    const { id } = event.target;
    const response = await fetch(`/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    console.log(response);
    if (response.status === 200) {
      const order = event.target.parentNode.parentNode;
      console.log(order);
      order.remove();
    }
  }
});
