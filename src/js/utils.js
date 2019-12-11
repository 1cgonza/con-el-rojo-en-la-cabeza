let debounceTimer;
export function debounce(hold) {
  hold = hold || 250;
  return new Promise((resolve, reject) => {
    // trick for runing code only when resize ends
    // https://css-tricks.com/snippets/jquery/done-resizing-event/
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      resolve();
    }, hold);
  });
}
