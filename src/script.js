document.addEventListener('DOMContentLoaded', function(){
    southIndia();
    east();
    west();
    centralndia();
    northIndia();
});

function southIndia(){
    fetch('resources/southIndiaData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('southIndiaDataTableBody');

        data.forEach(item =>{
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.state}</td>
            <td>${item.totalSeats}</td>
            <td>${item.indiaAlliance}</td>
            <td>${item.nda}</td>
            <td>${item.others}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function east(){
    fetch('resources/eastData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('eastDataTableBody');

        data.forEach(item =>{
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.state}</td>
            <td>${item.totalSeats}</td>
            <td>${item.indiaAlliance}</td>
            <td>${item.nda}</td>
            <td>${item.others}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function west(){
    fetch('resources/westData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('westDataTableBody');

        data.forEach(item =>{
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.state}</td>
            <td>${item.totalSeats}</td>
            <td>${item.indiaAlliance}</td>
            <td>${item.nda}</td>
            <td>${item.others}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function centralndia(){
    fetch('resources/centralIndiaData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('centralIndiaDataTableBody');

        data.forEach(item =>{
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.state}</td>
            <td>${item.totalSeats}</td>
            <td>${item.indiaAlliance}</td>
            <td>${item.nda}</td>
            <td>${item.others}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function northIndia(){
    fetch('resources/northIndiaData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('northIndiaDataTableBody');

        data.forEach(item =>{
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${item.state}</td>
            <td>${item.totalSeats}</td>
            <td>${item.indiaAlliance}</td>
            <td>${item.nda}</td>
            <td>${item.others}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

function displayContent(contentId){
    var contentElements=document.getElementsByClassName('content');
    for(var i=0;i<contentElements.length;i++){
        contentElements[i].classList.remove('active');
    }

    var selectedContent=document.getElementById(contentId);
    selectedContent.classList.add('active');
}