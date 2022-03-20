tab = [];
let ajout = document.getElementById("additem");


ajout.addEventListener("click", () => {
    let titre = document.getElementById('title').value;
    let descri = document.getElementById('description').value;
    tab.push([titre, descri]); //ajouter le titre et le contenu de la descri au tab init vide
    MAJ(); //mise à jour
});


function deleted(item_index) {
    //let bouton_delete = document.getElementById("delete");
    tab.splice(item_index, 1); //modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments
    MAJ();
}

function MAJ() {
    ch = '';
    tab.forEach((element, indice) => {
        ch = ch +
            `<tr>
        <th scope="row">${indice + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="submit" class="btn btn-primary btn-sm " onclick="deleted(${indice})" >Delete</button></td>
        </tr>`
    });
    document.getElementById("interieur").innerHTML = ch;

}


