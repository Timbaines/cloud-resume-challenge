const API_ENDPOINT = 'https://h2kuna5yyi.execute-api.us-east-1.amazonaws.com/visitor-count';
const TEST_MODE = false;

const SELECTORS = {
    viewCount: '.view-count',
};

const STATES = {
    LOADING: '...',
    ERROR: '---',
}

/***** FETCH VISITOR COUNT FROM LAMBDA FUNCTION *****/
async function fetchVisitorCount() {
   if (TEST_MODE) {
       console.log('TEST_MODE: Simulating API response...');
       await new Promise(resolve => setTimeout(resolve, 500));
       return Math.floor(Math.random() * 10000) + 1;
   }

   const response = await fetch(API_ENDPOINT);

   if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
   }

   const { visitorcount } = await response.json();
   return visitorcount;
}

/***** UPDATE THE COUNTER'S UI *****/
function updateCounterInterface(count) {
    const element = document.querySelector(SELECTORS.viewCount);

    if (!element) {
        console.log('Counter element not found');
        return;
    }

    element.textContent = count.toLocaleString();
    element.removeAttribute('data-loading');
}

/***** INITIALIZE THE COUNTER ON PAGE LOAD *****/
async function initializeCounter() {
    const element = document.querySelector(SELECTORS.viewCount);
    if (!element) return;

    if (!element.textContent.trim() || element.textContent === STATES.LOADING) {
        element.textContent = STATES.LOADING;
    }

    try {
        const count = await fetchVisitorCount();
        updateCounterInterface(count);
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        element.textContent = STATES.ERROR;
        element.title = 'Counter is temporarily unavailable';
    }
}

document.addEventListener('DOMContentLoaded', initializeCounter);