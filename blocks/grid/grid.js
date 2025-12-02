export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const cards = rows.flatMap((row) =>
    [...row.children].map((col) => col)
  );

  block.innerHTML = '';

  cards.forEach((card) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.appendChild(card);
    block.appendChild(wrapper);
  });
}
