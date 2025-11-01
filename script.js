// Highlight Differences Button Interaction
const highlightBtn = document.getElementById('highlightBtn');
let isHighlighted = false;

highlightBtn.addEventListener('click', function() {
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    
    if (!isHighlighted) {
        // Add highlight to different values in each row
        tableRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const values = Array.from(cells).slice(1).map(cell => cell.textContent.trim());
            
            // Highlight cells that are unique in the row
            const uniqueIndices = [];
            values.forEach((value, index) => {
                const duplicates = values.filter(v => v === value);
                if (duplicates.length === 1) {
                    uniqueIndices.push(index + 1); // +1 because first column is header
                }
            });
            
            uniqueIndices.forEach(index => {
                if (cells[index]) {
                    cells[index].classList.add('highlight-difference');
                }
            });
        });
        
        highlightBtn.textContent = 'Remove Highlight';
        isHighlighted = true;
    } else {
        // Remove highlight
        tableRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            cells.forEach(cell => {
                cell.classList.remove('highlight-difference');
            });
        });
        
        highlightBtn.textContent = 'Highlight Differences';
        isHighlighted = false;
    }
});

// Card click interaction for smooth animations
const careerCards = document.querySelectorAll('.career-card');

careerCards.forEach(card => {
    card.addEventListener('click', function() {
        // Add a subtle bounce effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add entrance animations when page loads
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.career-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// Smooth scroll for any internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle hover effect to table rows
const tableRows = document.querySelectorAll('.comparison-table tbody tr');
tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

console.log('Career Paths Comparison - Page Loaded Successfully!');
