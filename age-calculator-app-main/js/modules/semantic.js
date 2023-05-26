

const htmlStructure = `
    <main class="container">
        <form id="form-input" class="form-container">
            <div class="form-group">
                <label for="dayInput">Day</label>
                <input type="text" class="day-input" id="dayInput" placeholder="DD">
                <span class="error"></span>
            </div>            
            
            <div class="form-group">
                <label for="monthInput">Month</label>
                <input type="text" class="month-input" id="monthInput" placeholder="MM">
                <span class="error"></span>
            </div>
            
            <div class="form-group">
                <label for="yearInput">Year</label>
                <input type="text" class="year-input" id="yearInput" placeholder="YYYY">
                <span class="error"></span>
            </div>
        </form>
        
        <div class="with-header">
            <span class="line">
              <hr>
            </span>
            
            <button type="button" class="btn-arrow" id="submit">
                <img src="./assets/images/icon-arrow.svg" alt="Arrow">
            </button>
        </div>

    <div class="result" id="result">
        <p class="years">
            <span id="years-number">--</span> years 
        </p>
        
        <p class="months">
            <span id="months-number">--</span> months 
        </p>
        
        <p class="days">
            <span id="days-number">--</span> days
        </p>
    </div>
    </main>
`;

export default htmlStructure;