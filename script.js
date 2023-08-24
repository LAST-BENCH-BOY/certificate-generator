document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('certificateForm');
    const certificateDisplay = document.getElementById('certificateDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipientName = document.getElementById('recipientName').value;
        const duration = document.getElementById('duration').value;
        const companyName = document.getElementById('companyName').value;
        const internshipRole = document.getElementById('internshipRole').value;
        const issuerName = document.getElementById('issuerName').value;

        const certificateHTML = `
            <div class="certificate">
                <img src="certificates/upgradx_logo.png" alt="UpgradX Logo" class="logo">
                <div class="title">Internship Certificate</div>
                <div class="subtitle">This is to certify that</div>
                <div class="name">${recipientName}</div>
                <div class="details">has successfully completed a ${duration} internship with</div>
                <div class="company">${companyName}</div>
                <div class="details">in the role of ${internshipRole}.</div>
                <div class="signature">${issuerName}</div>
            </div>
        `;

        certificateDisplay.innerHTML = certificateHTML;
    });
});
