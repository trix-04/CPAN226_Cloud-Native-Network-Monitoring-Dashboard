# Network Monitoring Dashboard

---

## 📌 Project Overview
This project is a **Network Monitoring Dashboard** that displays key network performance metrics such as **latency, bandwidth, packet loss, uptime and system status** in a clean and user-friendly interface.

The purpose of this project is to apply networking concepts learned in class to real-world scenarios, while also focusing on **UI/UX design** to make technical data easy to understand.

---

## ⚙️ How It Works
1. User opens the dashboard
2. Client sends a request to the server endpoint
3. Server returns telemetry data in JSON format
4. Dashboard updates the values every 3 seconds
5. The user sees live network metrics visually displayed

---

## 💡 Features
- Displays key metrics:
  - Latency
  - Bandwidth
  - Packet Loss
  - Uptime
  - Network status

- Clean dashboard layout
- Real-time simulated updates
- Visual indicators for quick understanding

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

The communication follows the *TCP/IP* model , which supports how data moves across the network:

- Application Layer: The dashboard interface and API communication
- Transport Layer (TCP): Reliable communication between client and server
- Network Layer (IP): Routing data between devices using IP addresses
- Link Layer (data transmission): Handles the transmission of data between devices on the same network

The dashboard uses a simulated server endpoint to return telemetry data in JSON format, which is then displayed on the client side.

---

## 🖥️ Technologies Used
- JavaScript / React
- Next.js
- CSS
- Basic Networking Concepts (TCP/IP Model)
- Simulated API-based route for telemetry data
  
---

## 👾 UI/UX Design

The dashboard is designed to be simple and user friendly:

🟩 : Green indicates normal network performance 

🟧 : Orange indicates warning conditions

🟥 : Red indicates critical/network issues   

A clean layout helps users quickly identify important information without needing advanced technical knowledge.

---

## What I Learned
- How client-server communication works
- How API routes can act as a server endpoint
- How to fetch and display telemetry data on the frontend
- How network metrics can be visualized in a dashboard
- The role of TCP and IP in networking
- How data moves through *network layers
- Importance of UI/UX in displaying technical data

---

## Author

Trish F.

---

## Conclusion

This project combines *network fundamentals* with *front-end design* to create a simple but effective monitoring tool. It demonstrates how theoretical concepts learned in class can be applied in a practical and user-focused way.

