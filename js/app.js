
async function init(){
  try{
    const r = await fetch("data.json");
    const items = await r.json();

    const cont = document.getElementById("repuestos");
    cont.innerHTML = items.map(p => `
      <div class="card" style="margin:12px;padding:12px;border:1px solid #334; border-radius:8px;">
        <img src="${p.imagen||''}" alt="${p.descripcion||''}"
             onerror="this.src='https://via.placeholder.com/220x140/182338/fff?text=Sin+imagen'" 
             style="width:220px;height:140px;object-fit:cover">
        <h3>${p.descripcion}</h3>
        <p><b>Código:</b> ${p.codigo}</p>
        <p><b>Categoría:</b> ${p.categoria}</p>
        <p><b>Precio:</b> ₲ ${(Number(p.precio)||0).toLocaleString("es-PY")}</p>
      </div>
    `).join("");
  }catch(e){
    console.error("No se pudo cargar data.json", e);
    document.getElementById("repuestos").innerHTML = "<p>Error cargando datos</p>";
  }
}
init();


