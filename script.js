function search() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

function feelingLucky() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
    }
}
