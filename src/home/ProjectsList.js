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
              <a href="https://decoder-ring-nine.vercel.app/"> check out the site itself!</a>
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
              <p>I developed a RESTful API and set up a PostgreSQL database to support an already build user interface for a movie site. Click 
                <a href="https://we-love-movies-client-2000.herokuapp.com/"> here </a>
                to see the user interface or 
                <a href="https://github.com/djfurniss/we-love-movies"> here </a>
                to view my code!
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
                <a href="https://github.com/djfurniss/thinkfulbnb"> have a look at my code!</a>
              </p>
            </div>
          </div>
        </div>

        {/* <div class="accordion-item">
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
                <a href="https://shrouded-sea-23146.herokuapp.com/dishes">heroku</a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
