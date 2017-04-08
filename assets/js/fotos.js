var arrFotos= [{name:"Fiorella Quispe", url:"img/1.png"},
             {name:"Lourdes Vilchez", url:"img/2.png"},
             {name:"Leydi Maldonado", url:"img/3.png"},
             {name:"Miriam Mendoza", url:"img/5.png"},
             {name:"Elizabeth Condori", url:"img/6.png"},
             {name:"Arantza Burga", url:"img/7.png"},
             {name:"Grecia Rayme", url:"img/8.png"},
             {name:"Janine Vega", url:"img/9.png"},
             {name:"Rosario Felix", url:"img/10.png"},
             {name:"Jenny Velasquez", url:"img/12.png"},
                        {name:"Nadia Cuadros", url:"img/13.png"},
                        {name:"Michell More", url:"img/14.png"},
                        {name:"Marilu Llamoca", url:"img/15.png"},
                        {name:"Mariel Garcia", url:"img/16.png"},
                        {name:"Fiorella Cisneros", url:"img/17.png"},
                        {name:"Geraldine Chauca", url:"img/18.png"},
                        {name:"Yelitza Choque", url:"img/19.png"},
                        {name:"Stephanie Hiyagon", url:"img/20.png"},
                        {name:"Rocio Emma Tapia", url:"img/21.png"},
                        {name:"Danna Franco", url:"img/22.png"},
                        {name:"Flor Retamozo", url:"img/23.png"},
                        {name:"Nathaly Pacheco", url:"img/24.png"},
                        {name:"Erika Vidal", url:"img/25.png"},
                        {name:"Katherine Ortega", url:"img/26.png"},
                        {name:"Brilly Majuan", url:"img/27.png"},
                        {name:"Flor de cantuta Tello", url:"img/28.png"},
                        {name:"Leslie Avendaño", url:"img/29.png"},
                        {name:"Cindy Mendoza", url:"img/30.png"},
                        {name:"Annia Flores", url:"img/31.png"},
                        {name:"Betzi Loayza", url:"img/32.png"},
                        {name:"Aida Sulca", url:"img/33.png"},
                        {name:"Mimi Gutierrez", url:"img/34.png"},
                        {name:"Nakarid Jave", url:"img/35.png"},
                        {name:"Angie Condor", url:"img/36.png"},
                        {name:"Maia Rojas", url:"img/37.png"},
                        {name:"Ariana Cabana", url:"img/38.png"},
                        {name:"Flor Condori", url:"img/39.png"},
                        {name:"Mitchell Rodriguez", url:"img/40.png"},
                        {name:"Naomi Villanueva", url:"img/41.png"},
                        {name:"Mary Catillo", url:"img/42.png"},
                        {name:"Miriam Peralta", url:"img/43.png"},
                        {name:"Karin Alejo", url:"img/44.png"},
                        {name:"Liliana Peña", url:"img/45.png"},
                        {name:"Ruth Salvador", url:"img/46.png"},
                        {name:"Wendy Reyes", url:"img/48.png"},
                        {name:"Maria Grecia", url:"img/50.png"},
                        {name:"Ana Durand", url:"img/51.png"},
                        {name:"Glisse Jorge", url:"img/52.png"},
                        {name:"Neiza Nuñez", url:"img/53.png"},
                        {name:"Sandra Solorzano", url:"img/54.png"}];

function imprimir(elem){
// for(var i = 0; i < arrFotos.length; i++) {

  var divImagen = document.createElement("div");
  divImagen.classList.add("imagen");
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  img.setAttribute("class", "img-box");
  img.setAttribute("src", elem.url);
  img.setAttribute("alt", elem.name);
  var divItem = document.createElement("div");
  divItem.setAttribute("class", "item");
  var span = document.createElement("span");
  span.innerText = elem.name;

  divItem.appendChild(span);
  figure.appendChild(img);
  figure.appendChild(divItem);
  divImagen.appendChild(figure);
  return divImagen;
 // }
}
window.addEventListener('load', function(e){
  e.preventDefault();
  var chicas = arrFotos.forEach(function(e){
    document.getElementsByClassName('grid')[0].appendChild(imprimir(e));
  })
  return chicas;
});
