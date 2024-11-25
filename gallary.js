document.querySelectorAll('.facility').forEach(facility => {
    facility.addEventListener('mouseover', () => {
        facility.style.transform = 'scale(1.05)';
        facility.style.transition = 'transform 0.3s ease';
    });

    facility.addEventListener('mouseout', () => {
        facility.style.transform = 'scale(1)';
    });
});