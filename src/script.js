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

        let sumTotalSeats = 0;
        let sumIndiaAlliance = 0;
        let sumNda = 0;
        let sumOthers = 0;

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

            sumTotalSeats+=parseFloat(item.totalSeats);
            sumIndiaAlliance+=parseFloat(item.indiaAlliance);
            sumNda+=parseFloat(item.nda);
            sumOthers+=parseFloat(item.others);

        });

        const totalsRow = document.createElement('tr');
        totalsRow.innerHTML=`
        <td>Total</td>
        <td>${sumTotalSeats}</td>
        <td>${sumIndiaAlliance}</td>
        <td>${sumNda}</td>
        <td>${sumOthers}</td>
        `;
        tableBody.appendChild(totalsRow);
    })
    .catch(error => console.error('Error fetching data from Table SouthIndia:', error));
}

function east(){
    fetch('resources/eastData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('eastDataTableBody');

        let sumTotalSeats = 0;
        let sumIndiaAlliance = 0;
        let sumNda = 0;
        let sumOthers = 0;

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

            sumTotalSeats+=parseFloat(item.totalSeats);
            sumIndiaAlliance+=parseFloat(item.indiaAlliance);
            sumNda+=parseFloat(item.nda);
            sumOthers+=parseFloat(item.others);
        });

        const totalsRow = document.createElement('tr');
        totalsRow.innerHTML=`
        <td>Total</td>
        <td>${sumTotalSeats}</td>
        <td>${sumIndiaAlliance}</td>
        <td>${sumNda}</td>
        <td>${sumOthers}</td>
        `;
        tableBody.appendChild(totalsRow);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function west(){
    fetch('resources/westData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('westDataTableBody');

        let sumTotalSeats = 0;
        let sumIndiaAlliance = 0;
        let sumNda = 0;
        let sumOthers = 0;

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

            sumTotalSeats+=parseFloat(item.totalSeats);
            sumIndiaAlliance+=parseFloat(item.indiaAlliance);
            sumNda+=parseFloat(item.nda);
            sumOthers+=parseFloat(item.others);

        });

        const totalsRow = document.createElement('tr');
        totalsRow.innerHTML=`
        <td>Total</td>
        <td>${sumTotalSeats}</td>
        <td>${sumIndiaAlliance}</td>
        <td>${sumNda}</td>
        <td>${sumOthers}</td>
        `;
        tableBody.appendChild(totalsRow);

    })
    .catch(error => console.error('Error fetching data:', error));
}

function centralndia(){
    fetch('resources/centralIndiaData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('centralIndiaDataTableBody');

        let sumTotalSeats = 0;
        let sumIndiaAlliance = 0;
        let sumNda = 0;
        let sumOthers = 0;

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

            sumTotalSeats+=parseFloat(item.totalSeats);
            sumIndiaAlliance+=parseFloat(item.indiaAlliance);
            sumNda+=parseFloat(item.nda);
            sumOthers+=parseFloat(item.others);

        });

        const totalsRow = document.createElement('tr');
        totalsRow.innerHTML=`
        <td>Total</td>
        <td>${sumTotalSeats}</td>
        <td>${sumIndiaAlliance}</td>
        <td>${sumNda}</td>
        <td>${sumOthers}</td>
        `;
        tableBody.appendChild(totalsRow);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function northIndia(){
    fetch('resources/northIndiaData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('northIndiaDataTableBody');

        let sumTotalSeats = 0;
        let sumIndiaAlliance = 0;
        let sumNda = 0;
        let sumOthers = 0;

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

            sumTotalSeats+=parseFloat(item.totalSeats);
            sumIndiaAlliance+=parseFloat(item.indiaAlliance);
            sumNda+=parseFloat(item.nda);
            sumOthers+=parseFloat(item.others);

        });

        const totalsRow = document.createElement('tr');
        totalsRow.innerHTML=`
        <td>Total</td>
        <td>${sumTotalSeats}</td>
        <td>${sumIndiaAlliance}</td>
        <td>${sumNda}</td>
        <td>${sumOthers}</td>
        `;
        tableBody.appendChild(totalsRow);
        
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