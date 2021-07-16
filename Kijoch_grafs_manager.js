window.onload = function() {
    grafs_manager();
}

function grafs_manager(ID) {
    console.log(ID)
    if (ID == "pl1") {
        graf1();
    } else if (ID == "pl2") {
        graf2();
    } else if (ID == "pl3") {
        graf3();
    } else {
        graf4();
    }
}

function graf1() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
            datasets: [{
                label: 'Nawodnienie rośliny 1',
                data: [227, 225, 222, 220, 400, 397],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graf2() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
            datasets: [{
                label: 'Nasłonecznienie',
                data: [397, 394, 390, 380, 370, 360],
                borderColor: 'rgba(50, 202, 235, 1)',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graf3() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
            datasets: [{
                label: 'Wiatr',
                data: [260, 230, 200, 170, 400, 390],
                borderColor: 'rgba(200, 202, 235, 1)',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graf4() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
            datasets: [{
                label: 'Nawodnienie rośliny 2',
                data: [200, 180, 160, 140, 400, 390],
                borderColor: 'rgba(200, 50, 235, 100)',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}