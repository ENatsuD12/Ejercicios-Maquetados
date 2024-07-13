const videojuegos = [
    {
        "id": "zelda_breath_of_the_wild",
        "title": "The Legend of Zelda: Breath of the Wild",
        "image": "TheLegendofZeldaBreathoftheWild.jpg",
        "description": "Un juego de acción y aventura en un mundo abierto que permite a los jugadores explorar a su propio ritmo. Sigue a Link mientras intenta salvar a Hyrule de la calamidad, enfrentándose a enemigos y resolviendo acertijos.",
        "price": "$59.99"
    },
    {
        "id": "super_mario_odyssey",
        "title": "Super Mario Odyssey",
        "image": "SuperMarioOdyssey.jpg",
        "description": "Acompaña a Mario en su viaje por diferentes mundos mientras intenta rescatar a la Princesa Peach de Bowser. Este juego combina plataformas clásicas con mecánicas innovadoras como el uso de su gorra.",
        "price": "$49.99"
    },
    {
        "id": "red_dead_redemption_2",
        "title": "Red Dead Redemption 2",
        "image": "red_dead_redemption_2.jpg",
        "description": "Un épico juego de acción y aventura ambientado en el viejo oeste, donde los jugadores asumen el papel de Arthur Morgan, un forajido que debe lidiar con las consecuencias de sus decisiones en un mundo en cambio.",
        "price": "$59.99"
    },
    {
        "id": "god_of_war",
        "title": "God of War",
        "image": "god_of_war.jpg",
        "description": "Sigue la historia de Kratos, quien ahora vive en el mundo nórdico. Junto a su hijo Atreus, se embarca en un viaje para esparcir las cenizas de su esposa mientras enfrenta a dioses y criaturas mitológicas.",
        "price": "$49.99"
    },
    {
        "id": "last_of_us_part_2",
        "title": "The Last of Us Part II",
        "image": "last_of_us_part_2.jpg",
        "description": "Una emocionante y emotiva historia de supervivencia y venganza en un mundo post-apocalíptico. Sigue a Ellie mientras enfrenta la brutalidad de un mundo lleno de peligros y decisiones difíciles.",
        "price": "$59.99"
    },
    {
        "id": "fifa_22",
        "title": "FIFA 22",
        "image": "fifa_22.jpg",
        "description": "El último título de la famosa serie de fútbol, ofreciendo gráficos mejorados, mecánicas de juego más realistas y una amplia selección de equipos y ligas.",
        "price": "$59.99"
    },
    {
        "id": "animal_crossing_new_horizons",
        "title": "Animal Crossing: New Horizons",
        "image": "animal_crossing_new_horizons.jpg",
        "description": "Crea y personaliza tu propia isla, interactúa con adorables aldeanos y disfruta de la vida en este relajante juego de simulación social que cambia con las estaciones.",
        "price": "$59.99"
    },
    {
        "id": "hollow_knight",
        "title": "Hollow Knight",
        "image": "hollow_knight.jpg",
        "description": "Un juego de plataformas y aventuras en un mundo subterráneo lleno de misterios. Combina exploración, combate desafiante y una hermosa estética dibujada a mano.",
        "price": "$14.99"
    },
    {
        "id": "sekiro_shadows_die_twice",
        "title": "Sekiro: Shadows Die Twice",
        "image": "sekiro_shadows_die_twice.jpg",
        "description": "Un desafiante juego de acción y sigilo en el Japón feudal. Los jugadores deben dominar el combate basado en la postura para derrotar a enemigos poderosos.",
        "price": "$59.99"
    },
    {
        "id": "persona_5_royal",
        "title": "Persona 5 Royal",
        "image": "persona_5_royal.jpg",
        "description": "Un RPG que combina la vida estudiantil con la lucha contra demonios. Los jugadores exploran el mundo, establecen relaciones y luchan en un sistema de combate por turnos.",
        "price": "$59.99"
    },
    {
        "id": "cyberpunk_2077",
        "title": "Cyberpunk 2077",
        "image": "cyberpunk_2077.jpg",
        "description": "Un RPG en un mundo abierto futurista y distópico. Los jugadores pueden personalizar su personaje y tomar decisiones que afectan la historia y el mundo que los rodea.",
        "price": "$59.99"
    },
    {
        "id": "overwatch",
        "title": "Overwatch",
        "image": "overwatch.jpg",
        "description": "Un juego de disparos en equipo con héroes únicos, cada uno con habilidades especiales. Los jugadores deben trabajar juntos para completar objetivos en partidas competitivas.",
        "price": "$39.99"
    },
    {
        "id": "elden_ring",
        "title": "Elden Ring",
        "image": "elden_ring.jpg",
        "description": "Un juego de rol y acción desarrollado por FromSoftware y George R. R. Martin. Embárcate en una aventura épica en un mundo vasto y lleno de desafíos, criaturas míticas y secretos por descubrir.",
        "price": "$59.99"
    },
    {
        "id": "final_fantasy_vii_remake",
        "title": "Final Fantasy VII Remake",
        "image": "final_fantasy_vii_remake.jpg",
        "description": "La reimaginación del clásico RPG, ahora con gráficos modernos y un sistema de combate en tiempo real. Sigue la historia de Cloud Strife y su lucha contra Shinra.",
        "price": "$59.99"
    },
    {
        "id": "dark_souls_iii",
        "title": "Dark Souls III",
        "image": "dark_souls_iii.jpg",
        "description": "Un desafiante RPG de acción conocido por su dificultad. Los jugadores deben explorar un mundo oscuro y peligroso, enfrentándose a jefes y enemigos letales.",
        "price": "$39.99"
    },
    {
        "id": "ghost_of_tsushima",
        "title": "Ghost of Tsushima",
        "image": "ghost_of_tsushima.jpg",
        "description": "Un juego de acción y aventura en un mundo abierto, ambientado en el Japón feudal. Juega como Jin Sakai, un samurái que lucha contra los invasores mongoles.",
        "price": "$59.99"
    },
    {
        "id": "hades",
        "title": "Hades",
        "image": "hades.jpg",
        "description": "Un roguelike de acción donde juegas como Zagreus, el hijo de Hades, tratando de escapar del inframundo. Combina elementos de RPG con una narrativa rica.",
        "price": "$24.99"
    },
    {
        "id": "control",
        "title": "Control",
        "image": "control.jpg",
        "description": "Un juego de acción y aventura en tercera persona con elementos de ciencia ficción. Sigue a Jesse Faden mientras busca respuestas en un misterioso edificio gubernamental.",
        "price": "$39.99"
    },
    {
        "id": "assassins_creed_valhalla",
        "title": "Assassin's Creed Valhalla",
        "image": "assassins_creed_valhalla.jpg",
        "description": "Un juego de rol y acción que te lleva a la era de los vikingos. Juega como Eivor, un guerrero vikingo que busca establecer una nueva vida en Inglaterra.",
        "price": "$59.99"
    },
    {
        "id": "battlefield_2042",
        "title": "Battlefield 2042",
        "image": "battlefield_2042.jpg",
        "description": "Un juego de disparos en primera persona que ofrece grandes batallas multijugador en un futuro cercano. Los jugadores pueden experimentar combates a gran escala en diversos entornos.",
        "price": "$59.99"
    },
    {
        "id": "hitman_3",
        "title": "Hitman 3",
        "image": "hitman_3.jpg",
        "description": "Un juego de sigilo donde los jugadores asumen el papel del Agente 47. Viaja por el mundo y realiza eliminaciones estratégicas en varios entornos.",
        "price": "$59.99"
    },
    {
        "id": "mortal_kombat_11",
        "title": "Mortal Kombat 11",
        "image": "mortal_kombat_11.jpg",
        "description": "Un juego de lucha que continúa la saga Mortal Kombat con nuevos personajes, escenarios y un sistema de combate mejorado que incluye movimientos especiales y fatalities.",
        "price": "$59.99"
    },
    {
        "id": "the_witcher_3_wild_hunt",
        "title": "The Witcher 3: Wild Hunt",
        "image": "the_witcher_3_wild_hunt.jpg",
        "description": "Un RPG de mundo abierto donde los jugadores asumen el papel de Geralt de Rivia, un cazador de monstruos en busca de su hija adoptiva en un mundo lleno de decisiones morales.",
        "price": "$39.99"
    },
    {
        "id": "divinity_original_sin_2",
        "title": "Divinity: Original Sin 2",
        "image": "divinity_original_sin_2.jpg",
        "description": "Un RPG de fantasía donde los jugadores pueden crear su propio personaje y tomar decisiones que afectan la historia. Combina combate por turnos con una rica narrativa.",
        "price": "$44.99"
    },
    {
        "id": "fallout_76",
        "title": "Fallout 76",
        "image": "fallout_76.jpg",
        "description": "Un juego de rol multijugador en línea ambientado en un mundo post-apocalíptico. Los jugadores pueden explorar el mapa, construir refugios y completar misiones juntos.",
        "price": "$39.99"
    },
    {
        "id": "the_legend_of_zelda_link's_awakening",
        "title": "The Legend of Zelda: Link's Awakening",
        "image": "zelda_links_awakening.jpg",
        "description": "Un remake del clásico juego de Zelda. Ayuda a Link a despertar a la Gran Diosa mientras resuelve acertijos y enfrenta enemigos en una encantadora isla.",
        "price": "$49.99"
    },
    {
        "id": "minecraft",
        "title": "Minecraft",
        "image": "minecraft.jpg",
        "description": "Un juego de construcción y aventuras donde los jugadores pueden explorar mundos infinitos y construir desde las casas más sencillas hasta los castillos más grandiosos. La creatividad es el límite.",
        "price": "$26.95"
    },
    {
        "id": "stardew_valley",
        "title": "Stardew Valley",
        "image": "stardew_valley.jpg",
        "description": "Un juego de simulación de granja donde los jugadores pueden cultivar, criar animales y explorar un mundo lleno de secretos y aventuras.",
        "price": "$14.99"
    },
    {
        "id": "plague_tale_innocence",
        "title": "A Plague Tale: Innocence",
        "image": "plague_tale_innocence.jpg",
        "description": "Un juego de acción y aventura que sigue a dos hermanos en su lucha por sobrevivir en un mundo devastado por la peste. Enfréntate a enemigos y resuelve acertijos en un entorno histórico.",
        "price": "$39.99"
    },
    {
        "id": "days_gone",
        "title": "Days Gone",
        "image": "days_gone.jpg",
        "description": "Un juego de acción y aventura en un mundo abierto post-apocalíptico, donde los jugadores deben sobrevivir en un entorno hostil lleno de criaturas y otros supervivientes.",
        "price": "$49.99"
    },
    {
        "id": "ghostrunner",
        "title": "Ghostrunner",
        "image": "ghostrunner.jpg",
        "description": "Un juego de acción en primera persona que combina parkour y combate. Los jugadores asumen el papel de un ciber-guerrero en un mundo futurista lleno de desafíos.",
        "price": "$29.99"
    },
    {
        "id": "the_division_2",
        "title": "Tom Clancy's The Division 2",
        "image": "the_division_2.jpg",
        "description": "Un juego de disparos en tercera persona con elementos RPG, ambientado en un Washington D.C. post-apocalíptico donde los jugadores luchan por restaurar el orden.",
        "price": "$39.99"
    },
    {
        "id": "forza_horizon_4",
        "title": "Forza Horizon 4",
        "image": "forza_horizon_4.jpg",
        "description": "Un juego de carreras en un mundo abierto que ofrece diversas condiciones climáticas y estaciones. Compite con otros jugadores y personaliza tu coche.",
        "price": "$59.99"
    },
    {
        "id": "final_fantasy_xv",
        "title": "Final Fantasy XV",
        "image": "final_fantasy_xv.jpg",
        "description": "Un RPG de mundo abierto que sigue la historia de Noctis y su viaje para reclamar su trono. Ofrece un sistema de combate en tiempo real y una rica narrativa.",
        "price": "$39.99"
    }
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    videojuegos.forEach(videojuego => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => showInfo(videojuego.id);
        
        productDiv.innerHTML = `
            <img src="${videojuego.image}" alt="${videojuego.title}">
            <h2>${videojuego.title}</h2>
            <p>Precio: ${videojuego.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function showInfo(videojuegoId) {
    const videojuego = videojuegos.find(v => v.id === videojuegoId);
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const image = document.getElementById('modal-image');
    const description = document.getElementById('modal-description');
    const price = document.getElementById('modal-price');

    title.textContent = videojuego.title;
    image.src = videojuego.image;
    description.textContent = videojuego.description;
    price.textContent = `Precio: ${videojuego.price}`;

    modal.style.display = 'block';
}

function hideInfo() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredVideojuegos = videojuegos.filter(videojuego => 
        videojuego.title.toLowerCase().includes(searchInput)
    );

    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    filteredVideojuegos.forEach(videojuego => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => showInfo(videojuego.id);
        
        productDiv.innerHTML = `
            <img src="${videojuego.image}" alt="${videojuego.title}">
            <h2>${videojuego.title}</h2>
            <p>Precio: ${videojuego.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

window.onload = loadProducts;
