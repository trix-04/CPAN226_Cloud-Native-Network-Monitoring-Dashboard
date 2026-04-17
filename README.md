# Network Monitoring Dashboard

---

## 📌 Project Overview
This project is a **Network Monitoring Dashboard** that displays key network performance metrics such as **latency, bandwidth, packet loss, uptime, region, time zone and system status** in a clean and user-friendly interface.

The purpose of this project is to apply networking concepts learned in class to real-world scenarios, while also focusing on **UI/UX design** to make technical data easy to understand.

---

## ⚙️ How It Works
1. User opens the dashboard in the browser
2. Client sends a request to the server endpoint (/api/telemetry)
3. Server generates simulated telemetry data and returns it in JSON format
4. Dashboard updates the values every 3 seconds using fetch()
5. The user sees live network metrics visually displayed

*The system's status is determined using threshold-based logic that evaluates latency, packet loss and bandwidth values. This approach reflects how real network monitoring systems classify performance issues and alert users when network conditions degrade.*

---

## 💡 Features
- Displays key metrics:
  - Latency
  - Bandwidth
  - Packet Loss
  - Uptime
  - Network Status
  - Region
  - Time Zone

- Real-time simulated updates (every 3 seconds)
- Threshold-based status evaluation (Healthy, Warning & Critical)
- Color coded indicators for quick interpretation
- Left border accents to highlight metric severity
- Hover animation on cards for better user interaction
- Clean and responsive dashboard layout

---

## How to Run

```bash
npm install
npm run dev
```
Open in browser: 
http://localhost:3000

---

## 🌐 Networking Concepts Used
This project uses a **client-server model**, where the client (dashboard) sends requests to a server and receives responses.

The communication follows the *TCP/IP* model, which explains how data moves across a network:

- Application Layer: The dashboard interface and API communication
- Transport Layer (TCP): Reliable communication between client and server
- Network Layer (IP): Routing data between devices using IP addresses
- Link Layer (data transmission): Handles the transmission of data between devices on the same network

The dashboard uses a simulated server endpoint to return telemetry data in JSON format, which is then displayed on the client side.

Additionally, the project applies **threshold-based monitoring**, where network health is evaluated based on:

- Latency (delay)
- Packet Loss (reliability)
- Bandwidth (capacity)

---

## 🖥️ Technologies Used
- JavaScript / React
- Next.js
- CSS
- Fetch API
- Basic Networking Concepts (TCP/IP Model)
- Simulated API-based route for telemetry data
  
---

## 👾 UI/UX Design

The dashboard is designed to be simple and user friendly:

🟩 : Green indicates normal network performance 

🟧 : Orange indicates warning conditions

🟥 : Red indicates critical/network issues   

Additional visual improvements:
- Color coded values and borders to reflect status & severity
- Animated live status indicator
- Hover effects to create an interactive feel

A clean layout helps users quickly identify important information without needing advanced technical knowledge.

---

## What I Learned
- How client-server communication works in a web application
- How API routes can act as a server endpoint in Next.js
- How to fetch and display telemetry data dynamically on the frontend
- How network metrics (latency, packet loss & bandwidth) relate to performance
- The role of TCP and IP in data transmission
- How to apply threshold logic to simulate real monitoring systems
- Importance of UI/UX in displaying technical data

---

## Author

Trish F.

---

## Conclusion

This project combines *network fundamentals* with *front-end design* to create a simple but effective monitoring tool. It demonstrates how theoretical concepts learned in class can be applied in a practical and user-focused way.

