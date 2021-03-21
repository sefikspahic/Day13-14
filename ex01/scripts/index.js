function openModal(element) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("content").data = element+".html";
}

function closeModal() {
    document.getElementById('modal').style.display='none';
}