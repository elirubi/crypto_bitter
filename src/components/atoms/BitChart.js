import { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";
import "chart.js/auto"
import moment from "moment";
import axios from "axios";
import "chartjs-adapter-moment";
import ChartButton from "@atoms//ChartButton";

export default function BitChart() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [startDate, setStartDate] = useState("2022-01-10");
  const [endDate, setEndDate] = useState("2022-07-10");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let chart;

    const fetchData = async () => {
      try {
        const apiUrl = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=usd`;
        const response = await axios.get(apiUrl);
        const bitcoinData = response.data.bpi;

        if (chartRef.current && Object.keys(bitcoinData).length > 0) {
          const ctx = chartRef.current.getContext("2d");

          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          chart = new Chart(ctx, {
            type: "line",
            data: {
              labels: Object.keys(bitcoinData).map((date) =>
                moment(date).format("MMM DD, YYYY")
              ),
              datasets: [
                {
                  label: "BTC price trend",
                  data: Object.values(bitcoinData),
                  backgroundColor: "rgba(24, 198, 25, 0.2)",
                  borderColor: "rgb(24, 198, 25)",
                  borderWidth: 1,
                  fill: true,
                  pointRadius: 0,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: "Bitcoin Price Trend",
                  color: "rgb(24, 198, 25)",
                },
              },
              scales: {
                x: {
                  type: "time",
                  time: {
                    tooltipFormat: "MMM DD, YYYY",
                  },
                  display: true,
                },
              },
            },
          });

          chartInstanceRef.current = chart;
        }

        setLoading(false);
      } catch (error) {
        console.error("Errore durante il recupero dei dati dall'API:", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [startDate, endDate]);

  const handleLastMonthClick = () => {
    setStartDate("2022-06-10");
    setEndDate("2022-07-10");
  };

  const handleLastThreeMonthsClick = () => {
    setStartDate("2022-04-10");
    setEndDate("2022-07-10");
  };

  const handleLastSixMonthsClick = () => {
    setStartDate("2022-01-10");
    setEndDate("2022-07-10");
  };

  const handleFullYearClick = () => {
    setStartDate("2021-07-10");
    setEndDate("2022-07-10");
  };

  const handleThreeYearClick = () => {
    setStartDate("2019-07-10");
    setEndDate("2022-07-10");
  };

  const handleAllClick = () => {
    setStartDate("2011-07-17");
    setEndDate("2022-07-10");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 py-4">

      <canvas ref={chartRef} width="400" height="200" />

      <div className="w-full flex justify-between">
        <ChartButton label="1M" onClick={handleLastMonthClick} active={startDate === "2022-06-10" && endDate === "2022-07-10"} />
        <ChartButton label="3M" onClick={handleLastThreeMonthsClick} active={startDate === "2022-04-10" && endDate === "2022-07-10"} />
        <ChartButton label="6M" onClick={handleLastSixMonthsClick} active={startDate === "2022-01-10" && endDate === "2022-07-10"}/>
        <ChartButton label="1Y" onClick={handleFullYearClick} active={startDate === "2021-07-10" && endDate === "2022-07-10"} />
        <ChartButton label="3Y" onClick={handleThreeYearClick} active={startDate === "2019-07-10" && endDate === "2022-07-10"} />
        <ChartButton label="ALL" onClick={handleAllClick} active={startDate === "2011-07-17" && endDate === "2022-07-10"}/>
      </div>
      
    </div>
  );
}
