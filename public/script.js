function closeOverlay() {
    const player = document.getElementById('anna_sound');

    player.pause();
    document.querySelector('.DN--audio-container').classList.add('is-hidden');
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
};

function showOverlay() {    
    document.querySelector('.DN--audio-container').classList.remove('is-hidden');
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';

    const player = document.getElementById('anna_sound');

    player.play();
    player.addEventListener('ended', function() {
        closeOverlay();
        document.getElementById('Endnotes-trigger').style.display = "block";
    })
};

function hideOverlay2 () {  
    const player = document.getElementById('earthbnb');
    const container = document.getElementById('videoContainer');

    player.pause();
    container.classList.add('is-hidden');
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
};

function showOverlay2 () {
const player = document.getElementById('earthbnb');
const container = document.getElementById('videoContainer');

container.classList.remove('is-hidden');
document.documentElement.style.overflow = 'hidden';
document.documentElement.style.height = '100%';

player.play();
};



function slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
}
// This function handles the form submission event
async function submitContactForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract the values of the "name" and "email" inputs from the form
    const data = {
      title: event.target.title.value,
      slug: slugify(event.target.title.value),
      content: event.target.content.value,
      status: 'pending'
    };

    // Convert the data to JSON format
    const JSONdata = JSON.stringify(data);

    // Define the API endpoint where the form data will be sent
    const endpoint = 'https://apria-cms.artez.nl/wp-json/wp/v2/posts';

    // Set up options for the fetch request
    const options = {
      method: 'POST', // Use the POST method to send data
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
        'Authorization': 'Basic REFSX0NvbnRyaWJ1dG9yOlh1QTIgUzk4cCBNSzlWIHF5YjUgS2U2aiBwY3Fm'
      },
      body: JSONdata, // Set the request body to the JSON data
    };

    // Send the form data to the API endpoint using fetch
    const response = await fetch(endpoint, options);

    // Analyse the response data as JSON
    const result = await response.json();
};
