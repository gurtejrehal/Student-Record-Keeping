
var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.animation.duration = 6000;
Chart.defaults.global.animation.easing = 'easeOutElastic';

var oilData = {
    labels: [
        "AVR",
        "Audrino",
        "Raspberry Pi",
        "PLC",
        "IoT 2020",
        "C++",
        "Blue-J",
        "MATLAB",
        "KUKA-KRL",
        "AutoCAD",
        "SolidWorks",
        "Creo"
    ],
    datasets: [
        {
            data: [8.3, 8.3,8.3,8.3,8.3,8.3,8.3,8.3,8.3,8.3,8.3,8.3],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF",
                "#AF7494",
                "#84FF94",
                "#12AB63",
                "#8463CF",
                "#7894FA",
                "#26EB63",
                "#4563BF",
                
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'doughnut',
  data: oilData
});


