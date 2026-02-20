function showFilter(){
    document.getElementById("filterContent").style.display = 'block';
    document.getElementById("newContent").style.display = 'none';
}

function showAddNew(){
    document.getElementById("filterContent").style.display = 'none';
    document.getElementById("newContent").style.display = 'block';
}

function addNewArticle(){
    const newArticle = document.createElement("article");
    const newTitle = document.getElementById("inputHeader");
    newArticle.appendChild(newTitle);
    const newBody = document.getElementById("inputArticle");
    newArticle.appendChild(newBody);
    
    const element = document.getElementById("articleList");
    element.appendChild(newArticle);
}

function filterArticles(){
    
}

