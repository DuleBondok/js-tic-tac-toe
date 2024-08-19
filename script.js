const rowOneDiv1 = document.getElementById("rowOneDiv1");
const rowOneDiv2 = document.getElementById("rowOneDiv2");
const rowOneDiv3 = document.getElementById("rowOneDiv3");
const rowTwoDiv1 = document.getElementById("rowTwoDiv1");
const rowTwoDiv2 = document.getElementById("rowTwoDiv2");
const rowTwoDiv3 = document.getElementById("rowTwoDiv3");
const rowThreeDiv1 = document.getElementById("rowThreeDiv1");
const rowThreeDiv2 = document.getElementById("rowThreeDiv2");
const rowThreeDiv3 = document.getElementById("rowThreeDiv3");
let row1div1Value = "";
let row1div2Value = "";
let row1div3Value = "";
let row2div1Value = "";
let row2div2Value = "";
let row2div3Value = "";
let row3div1Value = "";
let row3div2Value = "";
let row3div3Value = "";
let numberOfClicks = 0;
let numberOfX = 1;
let numberOfO = 0;




    function clicking(){
    rowOneDiv1.addEventListener("click", function isClicked() {
        console.log("You clicked row 1 div 1");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowOneDiv1.appendChild(addedDivX);
            row1div1Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowOneDiv1.appendChild(addedDivO);
            row1div1Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    
    rowOneDiv2.addEventListener("click", function isClicked() {
        console.log("You clicked row 1 div 2");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowOneDiv2.appendChild(addedDivX);
            row1div2Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowOneDiv2.appendChild(addedDivO);
            row1div2Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });


    rowOneDiv3.addEventListener("click", function isClicked() {
        console.log("You clicked row 1 div 3");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowOneDiv3.appendChild(addedDivX);
            row1div3Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowOneDiv3.appendChild(addedDivO);
            row1div3Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    rowTwoDiv1.addEventListener("click", function isClicked() {
        console.log("You clicked row 2 div 1");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowTwoDiv1.appendChild(addedDivX);
            row2div1Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowTwoDiv1.appendChild(addedDivO);
            row2div1Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    rowTwoDiv2.addEventListener("click", function isClicked() {
        console.log("You clicked row 2 div 2");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowTwoDiv2.appendChild(addedDivX);
            row2div2Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowTwoDiv2.appendChild(addedDivO);
            row2div2Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    rowTwoDiv3.addEventListener("click", function isClicked() {
        console.log("You clicked row 2 div 3");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowTwoDiv3.appendChild(addedDivX);
            row2div3Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowTwoDiv3.appendChild(addedDivO);
            row2div3Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    rowThreeDiv1.addEventListener("click", function isClicked() {
        console.log("You clicked row 3 div 1");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowThreeDiv1.appendChild(addedDivX);
            row3div1Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowThreeDiv1.appendChild(addedDivO);
            row3div1Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    rowThreeDiv2.addEventListener("click", function isClicked() {
        console.log("You clicked row 3 div 2");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowThreeDiv2.appendChild(addedDivX);
            row3div2Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowThreeDiv2.appendChild(addedDivO);
            row3div2Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });

    rowThreeDiv3.addEventListener("click", function isClicked() {
        console.log("You clicked row 3 div 3");
        if(numberOfX > numberOfO)
        {
            const addedDivX = document.createElement("div");
            addedDivX.textContent = "X";
            addedDivX.classList.add("addedDivX");
            rowThreeDiv3.appendChild(addedDivX);
            row3div3Value = "X";
            numberOfO++;
        }
        else
        {
            const addedDivO = document.createElement("div");
            addedDivO.textContent = "O";
            addedDivO.classList.add("addedDivO");
            rowThreeDiv3.appendChild(addedDivO);
            row3div3Value = "O";
            numberOfX++;
        }
        getWinnerX();
        numberOfClicks++;
        this.removeEventListener("click", isClicked);
    });
}
    clicking();

    let totalWinnerX;
    function getWinnerX()
    {
        if(row1div1Value === "X" && row1div2Value === "X" && row1div3Value === "X")
            {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
            }
        else if(row1div1Value === "X" && row2div1Value === "X" && row3div1Value === "X")
            {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
            }
        else if(row1div2Value === "X" && row2div2Value === "X" && row3div2Value === "X")
            {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
            }
        else if(row1div3Value === "X" && row2div3Value === "X" && row3div3Value === "X")
                {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
                }
        else if(row2div1Value === "X" && row2div2Value === "X" && row2div3Value === "X")
                {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
                }
        else if(row3div1Value === "X" && row3div2Value === "X" && row3div3Value === "X")
                {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
                }
        else if(row1div1Value === "X" && row2div2Value === "X" && row3div3Value === "X")
                {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
                }
        else if(row1div3Value === "X" && row2div2Value === "X" && row3div1Value === "X")
                {
                totalWinnerX = true;
                console.log("X is the winner!");
                alert("We have the winner");
                }
    }
