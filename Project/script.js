// VERY SIMPLE JAVASCRIPT WITH LOCAL STORAGE & DEFAULT RECIPES

// Default Recipes
const defaultRecipes = [
    {
        id: "default-1",
        img: "images/spaghetti_bolognese.png",
        cat: "Dinner",
        name: "Spaghetti Bolognese",
        desc: "Classic Italian pasta with a rich, slow-cooked meat sauce.",
        time: "45",
        diff: "Easy",
        rating: "4.8",
        ings: ["400g Spaghetti", "500g Minced Beef", "1 Onion, diced", "2 cloves Garlic, minced", "400g Chopped Tomatoes", "Parmesan cheese"],
        steps: ["Boil pasta in salted water until al dente.", "Brown the beef in a pan with onions and garlic.", "Pour in chopped tomatoes and simmer for 20 minutes.", "Serve the rich sauce over the pasta and top with grated parmesan."]
    },
    {
        id: "default-2",
        img: "images/greek_salad.png",
        cat: "Lunch",
        name: "Greek Salad",
        desc: "Fresh cucumbers, tomatoes, olives and feta with olive oil dressing.",
        time: "10",
        diff: "Easy",
        rating: "4.6",
        ings: ["2 large Cucumbers", "4 Tomatoes", "1 Red Onion", "1 cup Kalamata Olives", "200g Feta Cheese", "Olive Oil & Oregano"],
        steps: ["Chop cucumbers and tomatoes into large chunks.", "Slice the red onion thinly.", "Toss vegetables in a large bowl with the olives.", "Top with large chunks of feta cheese, drizzle generously with olive oil, and sprinkle with oregano."]
    },
    {
        id: "default-3",
        img: "images/strawberry_cheesecake.png",
        cat: "Dessert",
        name: "Strawberry Cheesecake",
        desc: "Creamy no-bake cheesecake with a buttery biscuit base.",
        time: "20",
        diff: "Medium",
        rating: "4.9",
        ings: ["200g Digestive Biscuits", "100g Butter, melted", "500g Cream Cheese", "100g Icing Sugar", "1 tsp Vanilla Extract", "Fresh Strawberries"],
        steps: ["Crush the biscuits into fine crumbs and mix with melted butter.", "Press the mixture firmly into the base of a cake tin and chill.", "Beat cream cheese, icing sugar, and vanilla until smooth.", "Spread the creamy mixture over the base and chill for 4 hours. Top with fresh strawberries before serving."]
    },
    {
        id: "default-4",
        img: "images/fluffy_pancakes.png",
        cat: "Breakfast",
        name: "Fluffy Pancakes",
        desc: "Light and airy pancakes served with maple syrup and butter.",
        time: "20",
        diff: "Easy",
        rating: "4.7",
        ings: ["200g Plain Flour", "2 tbsp Sugar", "1 tbsp Baking Powder", "1 cup Milk", "1 large Egg", "Butter and Maple Syrup"],
        steps: ["Whisk flour, sugar, and baking powder in a bowl.", "In a separate bowl, whisk the milk and egg, then pour into the dry ingredients.", "Stir gently until just combined (lumps are fine!).", "Pour ladles of batter onto a hot buttered pan and cook until bubbles form, then flip.", "Serve warm with butter and maple syrup."]
    },
    {
        id: "default-5",
        img: "images/butter_chicken.png",
        cat: "Dinner",
        name: "Butter Chicken",
        desc: "Tender chicken in a creamy, spiced tomato sauce. Best with naan.",
        time: "60",
        diff: "Medium",
        rating: "4.9",
        ings: ["500g Chicken Breast", "1 cup Yogurt", "Garam Masala, Turmeric, Cumin", "1 cup Tomato Purée", "1/2 cup Heavy Cream", "Fresh Cilantro"],
        steps: ["Marinate chicken in yogurt and spices for 30 minutes.", "Cook chicken pieces in a pan until browned, then remove.", "In the same pan, cook tomato purée and remaining spices for 10 minutes.", "Stir in heavy cream and return the chicken to the pan. Simmer for 15 minutes.", "Garnish with cilantro and serve with warm naan."]
    },
    {
        id: "default-6",
        img: "images/falafel_wrap.png",
        cat: "Lunch",
        name: "Falafel Wrap",
        desc: "Crispy falafel with hummus, salad and tahini in a warm flatbread.",
        time: "30",
        diff: "Easy",
        rating: "4.5",
        ings: ["1 cup Dried Chickpeas (soaked overnight)", "1 Onion, chopped", "Fresh Parsley & Cilantro", "1 tsp Cumin", "Flatbreads", "Hummus & Tahini"],
        steps: ["Blend soaked chickpeas, onion, herbs, and cumin in a food processor until it forms a coarse meal.", "Form the mixture into small balls or patties.", "Fry the falafel in hot oil until deeply golden and crispy.", "Warm the flatbreads, spread generously with hummus, add fresh salad, top with falafel, and drizzle with tahini."]
    }
];

// Global Helper
const updateCount = () => {
    document.getElementById('recipeCount').innerText = document.querySelectorAll('.card').length;
};

// --- DATA LOGIC ---
const loadAllRecipes = () => {
    let customSaved = JSON.parse(localStorage.getItem('customRecipes')) || [];
    
    // We combine the defaults and custom (customs first)
    let allRecipes = [...customSaved, ...defaultRecipes];
    
    document.getElementById('recipeContainer').innerHTML = ''; // Clear existing
    allRecipes.forEach(recipe => {
        let card = createCardHTML(recipe);
        document.getElementById('recipeContainer').appendChild(card);
    });
    updateCount();
};

const saveRecipeToStorage = (recipe) => {
    let saved = JSON.parse(localStorage.getItem('customRecipes')) || [];
    saved.push(recipe);
    localStorage.setItem('customRecipes', JSON.stringify(saved));
};

const removeRecipeFromStorage = (id) => {
    let saved = JSON.parse(localStorage.getItem('customRecipes')) || [];
    saved = saved.filter(r => r.id !== id);
    localStorage.setItem('customRecipes', JSON.stringify(saved));
};

const createCardHTML = (recipe) => {
    let card = document.createElement('div');
    card.className = "card clickable-card";
    card.setAttribute('data-id', recipe.id); // For tracking deletions
    
    // Combine arrays to string for hidden data
    let ingStr = recipe.ings.join("||");
    let stepStr = recipe.steps.join("||");

    card.innerHTML = `
      <div class="delete-btn" title="Delete Recipe">&times;</div>
      <div class="card-img-wrapper" style="height: 220px;">
         <img src="${recipe.img}" alt="${recipe.name}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="card-body">
        <span class="card-tag">${recipe.cat}</span>
        <h3>${recipe.name}</h3>
        <p>${recipe.desc}</p>
        <div class="card-meta">
          <span class="time">⏱ ${recipe.time} min</span>
          <span class="rating">⭐ ${recipe.rating}</span>
          <span class="difficulty">${recipe.diff}</span>
        </div>
      </div>
      <div class="card-details-data" style="display:none;">
         <div class="ing-data">${ingStr}</div>
         <div class="step-data">${stepStr}</div>
      </div>
    `;
    return card;
};

// Run on load
loadAllRecipes();
// ---------------------------

// 1. Dark Mode
document.getElementById('themeToggle').onclick = () => {
    let body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        document.getElementById('themeToggle').innerText = '🌙 Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerText = '☀️ Light Mode';
    }
};

// 2. Search
document.getElementById('searchInput').oninput = (e) => {
    let term = e.target.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(term) ? 'flex' : 'none';
    });
};

// 3. Category Filter
document.querySelectorAll('.pill').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        
        let filter = btn.innerText.split(' ').pop(); 
        
        document.querySelectorAll('.card').forEach(card => {
            let category = card.querySelector('.card-tag').innerText;
            card.style.display = (filter === 'All' || category === filter) ? 'flex' : 'none';
        });
    };
});

// 4. Sort Dropdown
document.getElementById('sortSelect').onchange = (e) => {
    let cards = Array.from(document.querySelectorAll('.card'));
    let sortType = e.target.value;

    cards.sort((a, b) => {
        if (sortType === 'time') {
            let timeA = parseInt(a.querySelector('.time').innerText.match(/\d+/));
            let timeB = parseInt(b.querySelector('.time').innerText.match(/\d+/));
            return timeA - timeB; 
        } else if (sortType === 'popular') {
            let ratingA = parseFloat(a.querySelector('.rating').innerText.match(/[\d.]+/));
            let ratingB = parseFloat(b.querySelector('.rating').innerText.match(/[\d.]+/));
            return ratingB - ratingA; 
        }
    });

    cards.forEach(card => document.getElementById('recipeContainer').appendChild(card));
};

// 5. Modals (Add & View)
const showModal = (id) => document.getElementById(id).classList.add('active');
const hideModal = (id) => document.getElementById(id).classList.remove('active');

document.getElementById('addRecipeBtn').onclick = () => showModal('addRecipeModal');
document.getElementById('closeAddModal').onclick = () => hideModal('addRecipeModal');
document.getElementById('closeViewModal').onclick = () => hideModal('viewRecipeModal');

// 6. Delete & View Card Click
document.getElementById('recipeContainer').onclick = (e) => {
    let card = e.target.closest('.card');
    if (!card) return;

    // Delete
    if (e.target.className === 'delete-btn') {
        let customId = card.getAttribute('data-id');
        
        // Remove from storage if it's a custom recipe, otherwise just remove from screen
        if(!customId.startsWith('default')) {
            removeRecipeFromStorage(customId);
        }
        
        card.remove();
        updateCount();
        return;
    }

    // View
    document.getElementById('viewRecipeImg').style.backgroundImage = `url('${card.querySelector('img').src}')`;
    document.getElementById('viewRecipeCat').innerText = card.querySelector('.card-tag').innerText;
    document.getElementById('viewRecipeTitle').innerText = card.querySelector('h3').innerText;
    document.getElementById('viewRecipeDesc').innerText = card.querySelector('p').innerText;
    document.getElementById('viewRecipeTime').innerText = card.querySelector('.time').innerText;
    document.getElementById('viewRecipeRating').innerText = card.querySelector('.rating').innerText;
    document.getElementById('viewRecipeDiff').innerText = card.querySelector('.difficulty').innerText;

    let ings = card.querySelector('.ing-data').innerText.split('||');
    let steps = card.querySelector('.step-data').innerText.split('||');

    document.getElementById('viewRecipeIngList').innerHTML = ings.map(i => `<li>${i}</li>`).join('');
    document.getElementById('viewRecipeStepList').innerHTML = steps.map(s => `<li>${s}</li>`).join('');

    showModal('viewRecipeModal');
};

// 7. Submit New Recipe
document.getElementById('submitNewRecipe').onclick = () => {
    let name = document.getElementById('newRecipeName').value;
    let cat = document.getElementById('newRecipeCat').value;
    let diff = document.getElementById('newRecipeDiff').value;
    let time = document.getElementById('newRecipeTime').value || '15';
    let img = document.getElementById('newRecipeImage').value || 'https://images.unsplash.com/photo-1495195134817-a1a2880eb8e1?auto=format&fit=crop&w=800&q=80';
    let desc = document.getElementById('newRecipeDesc').value;

    if (!name || !desc) return alert("Fill Name and Description!");

    let newRecipe = {
        id: Date.now().toString(), // unique id
        name, cat, diff, time, img, desc, rating: "5.0",
        ings: ["Custom Recipe added!"],
        steps: ["Enjoy your custom meal!"]
    };

    saveRecipeToStorage(newRecipe);

    let card = createCardHTML(newRecipe);
    document.getElementById('recipeContainer').prepend(card);
    updateCount();
    hideModal('addRecipeModal');
    
    // Clear inputs
    document.getElementById('newRecipeName').value = '';
    document.getElementById('newRecipeTime').value = '';
    document.getElementById('newRecipeImage').value = '';
    document.getElementById('newRecipeDesc').value = '';
};
