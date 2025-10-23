// Medical Physics Areas Data
const medicalPhysicsData = {
    'radiotherapy': {
        title: 'Radiotherapy',
        description: 'Radiotherapy is a medical specialty that uses high-energy radiation to treat cancer and other diseases. It works by damaging the DNA of cancer cells, preventing them from growing and dividing. Modern radiotherapy techniques include intensity-modulated radiation therapy (IMRT), stereotactic radiosurgery, and proton therapy.',
        applications: [
            'Cancer treatment',
            'Palliative care',
            'Benign tumor treatment',
            'Pain management'
        ],
        technologies: [
            'Linear accelerators',
            'CyberKnife',
            'Gamma Knife',
            'Proton therapy'
        ]
    },
    'diagnostic-radiology': {
        title: 'Diagnostic & Interventional Radiology',
        description: 'This field combines diagnostic imaging with minimally invasive procedures. It uses various imaging modalities to visualize internal structures and guide therapeutic interventions without major surgery.',
        applications: [
            'Disease diagnosis',
            'Image-guided surgery',
            'Angioplasty',
            'Biopsy procedures'
        ],
        technologies: [
            'X-ray machines',
            'CT scanners',
            'MRI systems',
            'Ultrasound'
        ]
    },
    'nuclear-medicine': {
        title: 'Nuclear Medicine',
        description: 'Nuclear medicine uses radioactive substances (radiopharmaceuticals) to diagnose and treat diseases. It provides functional information about organs and tissues, often detecting diseases before they become apparent through other imaging methods.',
        applications: [
            'Cancer detection',
            'Heart disease diagnosis',
            'Bone scanning',
            'Thyroid treatment'
        ],
        technologies: [
            'PET scanners',
            'SPECT cameras',
            'Gamma cameras',
            'Radiopharmaceuticals'
        ]
    },
    'radiation-protection': {
        title: 'Radiation Protection',
        description: 'Radiation protection ensures the safe use of radiation in medical applications. It involves monitoring, controlling, and minimizing radiation exposure to patients, staff, and the public while maintaining the benefits of medical radiation.',
        applications: [
            'Dose monitoring',
            'Safety protocols',
            'Equipment calibration',
            'Risk assessment'
        ],
        technologies: [
            'Dosimeters',
            'Lead shielding',
            'Radiation detectors',
            'Safety systems'
        ]
    },
    'imaging': {
        title: 'Medical Imaging',
        description: 'Medical imaging encompasses all techniques used to create visual representations of the interior of the body for clinical analysis and medical intervention. It includes both anatomical and functional imaging methods.',
        applications: [
            'Disease diagnosis',
            'Treatment planning',
            'Monitoring therapy',
            'Research applications'
        ],
        technologies: [
            'MRI scanners',
            'CT machines',
            'Ultrasound systems',
            'Digital radiography'
        ]
    },
    'laser-therapy': {
        title: 'Laser Therapy',
        description: 'Laser therapy uses focused light energy for various medical treatments. Different types of lasers are used for different applications, from precise surgical procedures to therapeutic treatments.',
        applications: [
            'Laser surgery',
            'Dermatology treatments',
            'Ophthalmology',
            'Physical therapy'
        ],
        technologies: [
            'CO2 lasers',
            'Diode lasers',
            'Nd:YAG lasers',
            'Excimer lasers'
        ]
    },
    'dosimetry': {
        title: 'Dosimetry',
        description: 'Dosimetry is the measurement and calculation of radiation doses. It ensures that radiation therapy treatments are delivered accurately and safely, with precise dose calculations for optimal patient outcomes.',
        applications: [
            'Treatment planning',
            'Dose verification',
            'Quality assurance',
            'Patient safety'
        ],
        technologies: [
            'Treatment planning systems',
            'Dosimeters',
            'Monte Carlo simulations',
            'Phantom measurements'
        ]
    }
};

// DOM elements
const areaCards = document.querySelectorAll('.area-card');
const infoTitle = document.getElementById('info-title');
const infoDescription = document.getElementById('info-description');
const detailedInfo = document.getElementById('detailed-info');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all area cards
    areaCards.forEach(card => {
        card.addEventListener('click', function() {
            const area = this.getAttribute('data-area');
            showDetailedInfo(area);
            
            // Remove selected class from all cards
            areaCards.forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            this.classList.add('selected');
        });
    });

    // Add hover effects
    areaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});

// Function to show detailed information
function showDetailedInfo(area) {
    const data = medicalPhysicsData[area];
    if (!data) return;

    // Update the detailed info section
    infoTitle.textContent = data.title;
    
    let content = `
        <p><strong>Description:</strong> ${data.description}</p>
        <br>
        <p><strong>Key Applications:</strong></p>
        <ul>
            ${data.applications.map(app => `<li>${app}</li>`).join('')}
        </ul>
        <br>
        <p><strong>Technologies Used:</strong></p>
        <ul>
            ${data.technologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
    `;
    
    infoDescription.innerHTML = content;
    
    // Add smooth transition effect
    detailedInfo.style.opacity = '0';
    setTimeout(() => {
        detailedInfo.style.opacity = '1';
    }, 150);
}

// Add some interactive animations
function addParticleEffect() {
    // Create floating particles effect
    for (let i = 0; i < 20; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(102, 126, 234, 0.6)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    // Random position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => {
        particle.remove();
    };
}

// Add particle effect on page load
window.addEventListener('load', function() {
    setInterval(addParticleEffect, 5000);
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Clear selection
        areaCards.forEach(card => card.classList.remove('selected'));
        infoTitle.textContent = 'Select an area to learn more';
        infoDescription.textContent = 'Click on any of the medical physics areas above to see detailed information.';
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could add functionality here
            console.log('Swipe up detected');
        } else {
            // Swipe down - could add functionality here
            console.log('Swipe down detected');
        }
    }
}
