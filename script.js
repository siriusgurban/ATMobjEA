const atmObj = {
    balance: 0,
    date: new Date(),
    history: [],
    getMoney: function (money) {
        return this.balance -= money;
    },
    setMoney: function (money) {
        return this.balance += money;
    }
}


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate = `${day}.${month}.${year}`;


// console.log(atmObj.getMoney(10));
// console.log(atmObj.balance);

const balance = document.querySelector("#balance");
const showBalance = document.querySelector("#showBalance");
const setMoney = document.querySelector("#setMoney");
const getMoney = document.querySelector("#getMoney");
const inp1 = document.querySelector("#inp1");

showBalance.addEventListener("click", () => {
    balance.innerHTML = `Balance: ${atmObj.balance}`
    console.log(atmObj.history);
    showTable(atmObj.history)
})

getMoney.addEventListener("click", () => {
    atmObj.getMoney(+inp1.value);
    atmObj.history.push({ op: 'get' , amount: -inp1.value, date: atmObj.date })
    console.log(inp1.value);
    console.log(atmObj.balance);
    inp1.value = "";
})

setMoney.addEventListener("click", () => {
    atmObj.setMoney(+inp1.value);
    atmObj.history.push({  op: 'set', amount: +inp1.value, date: atmObj.date })
    console.log(inp1.value);
    console.log(atmObj.balance);
    inp1.value = "";
})

const tbody = document.querySelector("#tbody")

function showTable(arr) {

    let objArr = Object.entries(arr);
    console.log(objArr);

    let objArrHtml = objArr.map(el => {
        return `
       <tr>
            <th scope="row">${+el[0]+1}</th>
                <td>${el[1].op}</td>
                <td ${el[1].amount == 'set' ? ".text-success" : ".text-danger"}>${el[1].amount}</td>
                <td>${el[1].date}</td>
        </tr>
       `
    })

    tbody.innerHTML = objArrHtml;

}


