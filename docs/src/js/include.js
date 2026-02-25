(async function () {
    const nodes = document.querySelectorAll('[data-include]');

    await Promise.all([...nodes].map(async (el) => {
        const url = el.getAttribute('data-include');
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) return;
        el.innerHTML = await res.text();
    }));

    document.dispatchEvent(new Event('includes:loaded'));
})();