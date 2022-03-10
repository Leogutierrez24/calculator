const putValue = (key) => {
    let preContent = toShow.textContent;
    let newContent = preContent + key;
    toShow.innerHTML = newContent;
}

nana.addEventListener('click', putValue);