"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [latency, setLatency] = useState(0);
  const [bandwidth, setBandwidth] = useState(0);
  const [packetLoss, setPacketLoss] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [region, setRegion] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [status, setStatus] = useState("Loading...");
  const [lastUpdated, setLastUpdated] = useState("Fetching data...");

  async function fetchTelemetry() {
    try {
      const response = await fetch("/api/telemetry");
      const data = await response.json();

      setLatency(data.latency);
      setBandwidth(data.bandwidth);
      setPacketLoss(data.packetLoss);
      setUptime(data.uptime);
      setRegion(data.region);
      setTimeZone(data.timeZone);
      setCurrentTime(data.currentTime);
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
  let statusNote = "Investigating network issues";

  if (status === "Healthy") {
    statusClass = "status-green";
    statusNote = "All systems operational";
  } else if (status === "Warning") {
    statusClass = "status-orange";
    statusNote = "Elevated latency detected";
  }

  let latencyClass = "status-green";
  if (latency > 90) {
    latencyClass = "status-red";
  } else if (latency > 70) {
    latencyClass = "status-orange";
  }

  let packetLossClass = "status-green";
  if (packetLoss > 3) {
    packetLossClass = "status-red";
  } else if (packetLoss > 1) {
    packetLossClass = "status-orange";
  }

  return (
    <div className="page">
      <h1 className="title">Network Monitoring Dashboard</h1>

      <p className="subtitle">Live network telemetry from a simulated server.</p>

      <p className="timestamp">
        <span className="live-dot"></span>
        Last updated: {lastUpdated}
      </p>

      <div className="card-container">
        <div className={`card border-left ${latencyClass}`} >
          <div className="card-header">
            <span className="card-title">Latency</span>
          </div>
          <div className="card-body">
            <p className={`card-value ${latencyClass}`}>{latency} ms</p>
            <p className="card-note">milliseconds</p>
          </div>
        </div>

        <div className="card card-bandwidth">
          <div className="card-header">
            <span className="card-title">Bandwidth</span>
          </div>
          <div className="card-body">
            <p className="card-value">{bandwidth} Mbps</p>
            <p className="card-note">megabits per second</p>
          </div>
        </div>

        <div className={`card border-left ${packetLossClass}`} >
          <div className="card-header">
            <span className="card-title">Packet Loss</span>
          </div>
          <div className="card-body">
            <p className={`card-value ${packetLossClass}`}>{packetLoss}%</p>
            <p className="card-note">percentage of dropped packets</p>
          </div>
        </div>
        
        <div className="card card-uptime">
          <div className="card-header">
            <span className="card-title">Uptime</span>
          </div>
          <div className="card-body">
            <p className="card-value">{uptime} hrs</p>
            <p className="card-note">hours of continuous operation</p>
          </div>
        </div>

        <div className={`card border-left ${statusClass}`} >
          <div className="card-header">
            <span className="card-title">Status</span>
          </div>
          <div className="card-body">
            <p className={`card-value ${statusClass}`}>{status}</p>
            <p className="card-note">{statusNote}</p>
          </div>
        </div>

        <div className="card card-region">
          <div className="card-header">
            <span className="card-title">Region</span>
          </div>
          <div className="card-body">
            <p className="card-value-medium">{region}</p>
            <p className="card-note">active server location</p>
          </div>
        </div>
        
        <div className="card card-time-zone">
          <div className="card-header">
            <span className="card-title">Time Zone</span>
          </div>
          <div className="card-body">
            <p className="card-value-medium">{timeZone}</p>
            <p className="card-note">{currentTime}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
