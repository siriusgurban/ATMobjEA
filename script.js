const atmObj = {
    balance: 500,
    date: new Date(),
    limit: 1000,
    limitAlert: function (id) {
        id.innerHTML = `<div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Something wrong!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`},
    history: [],
    getMoney: function (money) {
        if (money >= this.limit || money >= this.balance || money == "" || money === 0 ) {
            return this.limitAlert(alertId);
        }

        atmObj.history.push({ op: 'get', amount: -inp1.value, date: atmObj.date })
        atmObj.success(alertId);
        return this.balance -= money;
    },
    setMoney: function (money) {
        if (money === 0 || money == "") {
            return this.limitAlert(alertId);
        }
        atmObj.history.push({ op: 'set', amount: +inp1.value, date: atmObj.date })
        atmObj.success(alertId);
        return this.balance += money;
    },
    success: function (id) {
        id.innerHTML = `<div>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
                Your operation successful!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }
}

const balance = document.querySelector("#balance");
const showBalance = document.querySelector("#showBalance");
const setMoney = document.querySelector("#setMoney");
const getMoney = document.querySelector("#getMoney");
const inp1 = document.querySelector("#inp1");
const alertId = document.querySelector("#alert");
const tbody = document.querySelector("#tbody");


showBalance.addEventListener("click", () => {
    balance.innerHTML = `Balance: ${atmObj.balance}`
    showTable(atmObj.history)
})

getMoney.addEventListener("click", () => {
    atmObj.getMoney(+inp1.value);
    inp1.value = "";
})

setMoney.addEventListener("click", () => {
    atmObj.setMoney(+inp1.value);
    inp1.value = "";
})


function showTable(arr) {

    let objArr = Object.entries(arr);

    let objArrHtml = objArr.map(el => {
        return `
       <tr>
            <th scope="row">${+el[0] + 1}</th>
                <td>${el[1].op}</td>
                <td class="${el[1].op == 'set' ? "text-success" : "text-danger"}" >${el[1].amount}</td>
                <td>${el[1].date.getDate()}/${el[1].date.getMonth() + 1}/${el[1].date.getFullYear()}</td>
        </tr>
       `
    }).join("");

    tbody.innerHTML = objArrHtml;

}


