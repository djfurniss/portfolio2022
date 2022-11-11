export default function ProjectsList() {
  return (
    <>
    <h3 className="pt-3 text-center">My Projects</h3>
        {/* <div className="card my-2">
            <p className="card-body py-1 mb-0">Decoder Ring</p>
        </div>

        <div className="card my-2">
            <p className="card-body py-1 mb-0">We Love Movies</p>
      </div> */}


      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Decoder Ring
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>This application features three unique methods of encrypting and decrypting messages. I was responsible for implementing functional JavaScript operations using efficient, readable, and DRY code.
              <a href="https://github.com/djfurniss/decoder-ring">Take a look at my code </a>
              or 
              <a href="https://decoder-ring-nine.vercel.app/"> the site itself!</a>
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              We Love Movies
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>I developed a RESTful API and set up a PostgreSQL database to support an already build user interface for a movie site. 
                <a href="https://we-love-movies-client-2000.herokuapp.com/"> View the site </a> or 
                <a href="https://github.com/djfurniss/we-love-movies"> take a peek at my code </a> !
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Thinkful BnB
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>This project focused on using complex CSS styling, styling HTML forms and their inputs, and media queries to make a responsive site. While it has no functionality, feel free to 
                <a href="https://djfurniss.github.io/thinkfulbnb/"> take a look at the page </a>
                or 
                <a href="https://github.com/djfurniss/thinkfulbnb"> my code!</a>
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Grubdash
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                This project helps restaurants keep track of their customer's orders. Implementing a CRUD design, customers can add, delete, or update orders. Verification middleware makes sure customers cannot edit an order that has already been delivered or is in the process of being deliered. 
                <a href="https://shrouded-sea-23146.herokuapp.com/dishes">Take a look at the API</a>! The front end will be deployed soon!
                <a href="https://github.com/djfurniss/grub-dash"> Here's the repository </a>that has the docs on how this API functions.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Library Project
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                I built a functioning server for a local library's front end application to make API calls. I implemented a RESTful API.
                <a href="https://local-library-seven.vercel.app/"> Take a look and the site </a>
                or 
                <a href="https://github.com/djfurniss/local-library-project"> view my code</a> !
        
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
