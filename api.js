


const url = 'https://pokeapi.co/api/v2/pokemon';

fetch(url)
.then((resp) => resp.json())
.then(function(data) { 
  data.results.forEach(el => {
    fetch(el.url).then((resp) => resp.json()).then(json =>{
      console.log(json);
      const start = document.createElement("div");
      start.setAttribute("class","start");
      const end = document.createElement("div");
      end.setAttribute("class","end");
      const p = document.createElement("div");

      //Nombre e imagen
      const nombre = document.createElement("span");
      nombre.setAttribute("class","nombre");
      nombre.innerHTML = json.name;
      start.appendChild(nombre);
      const img = document.createElement("img");
      img.src = json.sprites.front_default;
      img.alt = json.name;
      start.appendChild(img);
      // Ataque
      const atack = document.createElement("span");
      atack.setAttribute("class","ATA");
      const ataque = json.stats[1].base_stat;
      atack.innerHTML = `ATA:${ataque}`
      end.appendChild(atack);
      // Vida
      const hp = document.createElement("span");
      hp.setAttribute("class","VID");
      const vida = json.stats[0].base_stat;
      hp.innerHTML = `VID:${vida}`
      end.appendChild(hp);
      // Defensa
      const def = document.createElement("span");
      def.setAttribute("class","DEF");
      const defensa = json.stats[2].base_stat;
      def.innerHTML = `DEF:${defensa}`
      end.appendChild(def);
      // Velocidad
      const spd = document.createElement("span");
      spd.setAttribute("class","VEL");
      const velocidad = json.stats[5].base_stat;
      spd.innerHTML = `VEL:${velocidad}`
      end.appendChild(spd);
      // Ataque especial
      const ssa = document.createElement("span");
      ssa.setAttribute("class","SSA");
      const sataque = json.stats[3].base_stat;
      ssa.innerHTML = `SSA:${sataque}`
      end.appendChild(ssa);
      // Defensa especial
      const ssd = document.createElement("span");
      ssd.setAttribute("class","SSD");
      const sdefensa = json.stats[4].base_stat;
      ssd.innerHTML = `SSD:${sdefensa}`
      end.appendChild(ssd);

      p.appendChild(start);
      p.appendChild(end);
      document.body.appendChild(p);
      p.setAttribute("class","p")
      
    });
    
  });
  
  
})
.catch(function(error) {
  console.log(error);
});
