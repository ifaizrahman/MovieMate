// This file will be used for homepage functionality,
// such as handling search and displaying trending movies.

// The previous movie recommendation form logic has been removed
// as it is not part of the new homepage design.

// Dummy movie data
const dummyMovies = [
    {
        title: "Extraction 2",
        poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Xj_WhhZK6xXFsvSHERnaYO2Qv0RseyL9RDqQ2Xr3xhIXK_-x89yO1awALlMDwmFEwBD3LA",
        overview: "Back from the brink of death, commando Tyler Rake embarks on another deadly mission...",
        genre: "action",
        mood: "excited",
        year: 2023
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDvJ0zhGxVySz3RjLa35ukjpctxW41KzD3VQ56VzSEX2lB5WHZ0le10IjuI8ZJ9cd5CeZpA",
        overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People...",
        genre: "action",
        mood: "excited",
        year: 2023
    },
    {
        title: "The Flash",
        poster_path: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlTCLSubZKO6c7ZFrKQPRBx5-RR6OnThjbEvA2SJsht8BqyJrFE3Zu-tx-AHlKOfZEY_ji",
        overview: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes...",
        genre: "action",
        mood: "excited",
        year: 2023
    },
    {
        title: "Elemental",
        poster_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfij08n5L5v7WYqFwRfe9aC71gZkl7EBjmkmwGOc1rFc0BCv3S6K-zvhG8BJiWBBlWwEod",
        overview: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy are about to discover something elemental...",
        genre: "drama",
        mood: "thoughtful",
        year: 2023
    },
    {
        title: "Transformers: Rise of the Beasts",
        poster_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEsFNeH_1HnJrtVLrbLdsdamTUTZwn7Kj9YBsSWiUHR4shBKafAY89uQwV_A0Z3Chj_ahPIA",
        overview: "Optimus Prime and the Autobots take on their biggest challenge yet...",
        genre: "action",
        mood: "excited",
        year: 2023
    },
    {
        title: "The Little Mermaid",
        poster_path: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_ariel2023_poster_rebrand_36ca57b4.jpeg?region=0%2C0%2C540%2C810",
        overview: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs...",
        genre: "romance",
        mood: "sad",
        year: 2023
    },
    // Add more dummy movies with genre, mood, and year
    {
        title: "The Shawshank Redemption",
        poster_path: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3JNAf7VdWdhMjlkpQJ_owAL8N6ja09gDHHLZU2HCNQkbrXJ6ySLD5BRc5gO2EO8m1xehjQg",
        overview: "Two imprisoned men bond...",
        genre: "drama",
        mood: "thoughtful",
        year: 1994
    },
    {
        title: "The Dark Knight",
        poster_path: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
        overview: "When the menace known as the Joker...",
        genre: "action",
        mood: "excited",
        year: 2008
    },
    {
        title: "The Hangover",
        poster_path: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSW_QVbb_2BXCjG3AO4VXa56n0MOojFs2f2xVnNM8nDnSrsa6M4IUnbRFPQg5lqe4bcmmg9",
        overview: "Three buddies wake up...",
        genre: "comedy",
        mood: "happy",
        year: 2009
    },
    {
        title: "The Notebook",
        poster_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9XPfzYiRZklVR-H3Is9MUFdAOLvm_upwiXFTrF0e4Ew4udAPMQAB4L4hQGoSjiBSgFrYNlg",
        overview: "A poor yet passionate...",
        genre: "romance",
        mood: "sad",
        year: 2004
    },
    {
        title: "Interstellar",
        poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
        overview: "A team of explorers...",
        genre: "sci-fi",
        mood: "thoughtful",
        year: 2014
    },
     {
        title: "Get Out",
        poster_path: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6Hr-ZNlOyGfWOED_cHogpEHYv7-H4OZSy3nWlA2MvwbXivNdhkGWgWhScOenoRkknOMhm",
        overview: "A young African-American visits...",
        genre: "horror",
        mood: "excited",
        year: 2017
    }
];

// Function to create movie card HTML
function createMovieCard(movie) {
    const posterUrl = movie.poster_path ? movie.poster_path : 'https://via.placeholder.com/180x270?text=No+Image';
    return `
        <div class="movie-card">
            <img src="${posterUrl}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.overview || 'No overview available.'}</p>
            </div>
        </div>
    `;
}

// Function to render movies to a specific grid
function renderMovies(movies, elementId) {
    const gridElement = document.getElementById(elementId);
    if (gridElement) {
        if (movies.length === 0) {
            gridElement.innerHTML = '<p style="color: #ccc; text-align: center;">No movies found matching your criteria.</p>';
        } else {
             gridElement.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
        }
    }
}

// Function to filter movies based on user preferences
function getRecommendations(preferences) {
    const currentYear = new Date().getFullYear();

    return dummyMovies.filter(movie => {
        const genreMatch = preferences.genre === '' || movie.genre === preferences.genre;
        const moodMatch = preferences.mood === '' || movie.mood === preferences.mood;
        let yearMatch = true;

        if (preferences.year !== '') {
            switch(preferences.year) {
                case 'recent':
                    yearMatch = movie.year >= currentYear - 5;
                    break;
                case 'modern':
                    yearMatch = movie.year >= currentYear - 10;
                    break;
                case 'classic':
                    yearMatch = movie.year < 2000;
                    break;
                case 'any':
                    yearMatch = true;
                    break;
            }
        }

        return genreMatch && moodMatch && yearMatch;
    });
}

// Handle page load and events
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        // Code for index.html
        const allMoviesSection = document.getElementById('allMoviesSection');
        const trendingSection = document.querySelector('.trending-section');
        const popularSection = document.querySelector('.popular-section');
        const topRatedSection = document.querySelector('.top-rated-section');
        const testimonialSection = document.querySelector('.testimonial-section');

        // Initially show homepage sections and hide all movies section
        if (allMoviesSection) allMoviesSection.style.display = 'none';
        if (trendingSection) trendingSection.style.display = 'block';
        if (popularSection) popularSection.style.display = 'block';
        if (topRatedSection) topRatedSection.style.display = 'block';
        if (testimonialSection) testimonialSection.style.display = 'block';

        // Render initial dummy data for other sections
        renderMovies(dummyMovies.slice(0, 6), 'trendingMoviesGrid'); // Display a subset for trending
        renderMovies(dummyMovies.slice(6, 12), 'popularMoviesGrid'); // Display a subset for popular
        renderMovies(dummyMovies.slice(3, 9), 'topRatedMoviesGrid'); // Display a subset for top rated

        // Render all dummy movies into the all movies grid (initially hidden)
        renderMovies(dummyMovies, 'allMoviesGrid');

        // Add event listeners for slider arrows on index.html
        document.querySelectorAll('.slider-arrow').forEach(arrow => {
            arrow.addEventListener('click', function() {
                const targetGridId = this.getAttribute('data-target');
                const targetGrid = document.getElementById(targetGridId);
                const scrollAmount = 300; // Adjust scroll amount as needed

                if (this.classList.contains('left')) {
                    targetGrid.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                } else if (this.classList.contains('right')) {
                    targetGrid.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Handle 'Movies' link click in index.html navbar
        const moviesLinkIndex = document.querySelector('header nav ul li a[href="index.html"]');
        if (moviesLinkIndex) {
             moviesLinkIndex.addEventListener('click', function(e) {
                e.preventDefault();
                 // Hide other sections
                if (trendingSection) trendingSection.style.display = 'none';
                if (popularSection) popularSection.style.display = 'none';
                if (topRatedSection) topRatedSection.style.display = 'none';
                if (testimonialSection) testimonialSection.style.display = 'none';
                // Show all movies section
                if (allMoviesSection) allMoviesSection.style.display = 'block';
            });
        }

    } else if (currentPage === 'recommendations.html') {
        // Code for recommendations.html

        // Handle personalized recommendation form submission on recommendations.html
        const recommendationForm = document.getElementById('moviePreferences');
        if (recommendationForm) {
            recommendationForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const preferences = {
                    genre: document.getElementById('genre').value,
                    mood: document.getElementById('mood').value,
                    year: document.getElementById('year').value
                };

                const recommendations = getRecommendations(preferences);
                renderMovies(recommendations, 'personalizedRecommendationsGrid');
            });
        }

        // Handle 'Movies' link click in recommendations.html navbar
         const moviesLinkRecs = document.querySelector('header nav ul li a[href="index.html"]');
         if (moviesLinkRecs) {
             moviesLinkRecs.addEventListener('click', function(e) {
                 // Allow default navigation to index.html
             });
         }
    }

    // Handle TV Shows link clicks in both pages (using event delegation on the body)
    document.body.addEventListener('click', function(e) {
        if (e.target && (e.target.id === 'tvShowsLink' || e.target.id === 'tvShowsLinkRecs')) {
             e.preventDefault();
             alert('TV Shows functionality is not yet implemented.');
        }
    });

     // Handle Search icon link clicks in both pages (using event delegation on the body)
     document.body.addEventListener('click', function(e) {
         if (e.target && e.target.closest('header nav ul li a[href="index.html"] i.fas.fa-search')) {
             // Allow default navigation to index.html
         }
     });
}); 