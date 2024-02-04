document.addEventListener('DOMContentLoaded', function(){
    fetch('resources/southIndiaData.json')
    .then(response => response.json())
    .then(data =>{
        const tableBody = document.getElementById('tableBody');

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
});

function displayContent(contentId){
    var contentElements=document.getElementsByClassName('content');
    for(var i=0;i<contentElements.length;i++){
        contentElements[i].classList.remove('active');
    }

    var selectedContent=document.getElementById(contentId);
    selectedContent.classList.add('active');
}