function genCompoundInterest(form) {
    let deposit = form.elements['deposit'].value;
    let rate = form.elements['rate'].value;
    let years = form.elements['years'].value;

    document.getElementById('result-section').innerHTML = "<table id=\"result-table\"></table>"
    let resTable = document.getElementById('result-table');
        
    resHead = `
            <tr>
                <th>Year</th>
                <th>Starting Value</th>
                <th>Interest Earned</th>
                <th>Ending Value</th>
            </tr>
        `

    let endingVal = parseFloat(deposit);
    let startingVal = 0.0;
    let interestEarned = 0.0;

    if (years > 0) {
        
        resData = ""
        
        
        for (i = 1; i <= years; i++) {
            startingVal = endingVal;
            interestEarned = (rate/100) * startingVal;
            endingVal = startingVal + interestEarned;
            
            resData += `
                <tr>
                    <td>${i}</td>
                    <td>${startingVal}</td>
                    <td>${interestEarned}</td>
                    <td>${endingVal}</td>
                </tr>
            
            `
        }

    } else {
        resData = `
            <tr>
                No data available
            </tr>
        `
    }

    let resTableInfo = resHead + resData;
    resTable.innerHTML = resTableInfo;
}