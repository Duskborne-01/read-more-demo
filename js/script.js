function toggleReadMore() {
    const moreText = document.querySelector('.more-text');
    const btn = document.querySelector('.read-more-btn');
    const btnText = btn.querySelector('span');
    const isExpanded = moreText.classList.toggle('show');
    
    btn.classList.toggle('active', isExpanded);
    btn.setAttribute('aria-expanded', isExpanded);
    btnText.textContent = isExpanded ? 'Read Less' : 'Read More';
}
