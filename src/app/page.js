"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [latency, setLatency] = useState(0);
  const [bandwidth, setBandwidth] = useState(0);
  const [packetLoss, setPacketLoss] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [status, setStatus] = useState("Loading...");
  const [lastUpdated, setLastUpdated] = useState("");

  async function fetchTelemetry() {
    try {
      const response = await fetch("/api/telemetry");
      const data = await response.json();

      setLatency(data.latency);
      setBandwidth(data.bandwidth);
      setPacketLoss(data.packetLoss);
      setUptime(data.uptime);
      setStatus(data.status);
      setLastUpdated(data.timestamp);
    } catch (error) {
      console.error("Error fetching telemetry:", error);
      setStatus("Error");
    }
  }

  useEffect(() => {
    fetchTelemetry();
    
    const interval = setInterval(() => {
      fetchTelemetry();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  let statusClass = "status-red";
  if (status === "Healthy") statusClass = "status-green";
  else if (status === "Warning") statusClass = "status-orange";

  return (
    <div className="page">
      <h1 className="title">🌐 Network Monitoring Dashboard</h1>

      <p className="subtitle">Live network telemetry from a simulated server.</p>

      <p className="timestamp">Last updated: {lastUpdated}</p>

      <div className="card-container">

        <div className="card">
          <h2 className="card-title">Latency</h2>
          <p className="card-value">{latency} ms</p>
        </div>

        <div className="card">
          <h2 className="card-title">Bandwidth</h2>
          <p className="card-value">{bandwidth} Mbps</p>
        </div>

        <div className="card">
          <h2 className="card-title">Packet Loss</h2>
          <p className="card-value">{packetLoss}%</p>
        </div>
        
        <div className="card">
          <h2 className="card-title">Uptime</h2>
          <p className="card-value">{uptime} hrs</p>
        </div>

        <div className="card">
          <h2 className="card-title">Status</h2>
          <p className={`card-value ${statusClass}`}>{status}</p>
        </div>

      </div>
    </div>
  );
}
