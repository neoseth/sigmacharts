<?php
    include 'kernel/kernel.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/series-label.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <title></title>
    </head>
    <body>
        <div>
            <h2>Selecione seu relatório:</h2>
            <select id="reports">
                <!--<option>Selecione...</option>-->
            </select>
            <button id="mountCharts">Montar gráficos</button>
        </div>
        <div id="chartbox" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
        <div>
            <button class="changechart" value="dpu">DPU</button>
            <button class="changechart" value="dpom">DPOM</button>
            <button class="changechart" value="nqs">Nivel Sigma de Qualidade</button>
        </div>
        <script>
            var reports = <?php
            $report = new Report();
            echo Report::list_all_str();
            ?>;
            for (var i = 0; i < reports.length; i++) {
                var thisReport = reports[i];
                $('#reports').append('<option value="' + thisReport.path + '">' + thisReport.name + '</option>');
            }
        </script>
        <script src="include/chart.js"></script>
    </body>
</html>
