const server = 'http://localhost:3020';


async function Choice() {
    const url = server + '/students';
    const Student = { A: P1, B: P2, C: P3, D: P4, E: P5, F: P6, G: P7 };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Student)
    }
    const response = await fetch(url, options);
}
document.querySelector('form').addEventListener('submit', (e) => {
    if (document.getElementById('P1').checked) {
        P1 = document.getElementById('P1').value;
    } else {
        P1 = null;
    }
    if (document.getElementById('P2').checked) {
        P2 = document.getElementById('P2').value;
    } else {
        P2 = null;
    }
    if (document.getElementById('P3').checked) {
        P3 = document.getElementById('P3').value;
    } else {
        P3 = null;
    }
    if (document.getElementById('P4').checked) {
        P4 = document.getElementById('P4').value;
    } else {
        P4 = null;
    }
    if (document.getElementById('P5').checked) {
        P5 = document.getElementById('P5').value;
    } else {
        P5 = null;
    }
    if (document.getElementById('P6').checked) {
        P6 = document.getElementById('P6').value;
    } else {
        P6 = null;
    }
    if (document.getElementById('P7').checked) {
        P7 = document.getElementById('P7').value;
    } else {
        P7 = null;
    }
    Choice();
    location.reload();
    e.preventDefault();
});

function disableAll() {
    var inputs = document.querySelectorAll('.check');
    if (document.querySelector('.checker').checked) {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
            inputs[i].disabled = true;
        }
    } else {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
    }
}

// returns the content of the file


async function fetchStudents() {
    let response = await fetch(server + "/students", { method: "GET" });
    let data = await response.text();

    var A = 0,
        B = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0;
    jsondata = JSON.parse(data);
    for (i = 0; i < jsondata.length; i++) {
        if (jsondata[i].A) {
            A++;
        }
        if (jsondata[i].B) {
            B++;
        }
        if (jsondata[i].C) {
            C++;
        }
        if (jsondata[i].D) {
            D++;
        }
        if (jsondata[i].E) {
            E++;
        }
        if (jsondata[i].F) {
            F++;
        }
        if (jsondata[i].G) {
            G++;
        }
    }
    var summed = [A, B, C, D, E, F, G];

    var colors = [
        "#007bff",
        "#28a745",
        "#333333",
        "#c3e6cb",
        "#dc3545",
        "#6c757d",
    ];

    var barColors = ["blue", "purple", "yellow", "red", "cyan", "magenta", "grey"];
    var ch = new Chart("cht", {
        type: "bar",
        data: {
            labels: ['Technologies', 'Skills', 'Food & Drinks', 'Accomdation', 'Trainers', 'Fellow students', 'Nothing'],
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: barColors,
                borderColor: barColors,
                borderWidth: 4,
                pointBackgroundColor: colors[1],
                data: summed,
            }, ],
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }, ],
            },
        },
    });
}



// returns the content of the file
async function fetchStudentsNum() {
    const url = server + '/students';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch(url, options);

    // console.log(response)
    return response.json();
}