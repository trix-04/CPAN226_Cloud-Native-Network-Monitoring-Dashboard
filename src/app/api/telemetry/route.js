export async function GET() {
    const latency = Math.floor(Math.random() * 100) + 20;
    const bandwidth = Math.floor(Math.random() * 200) + 50;
    const packetLoss = (Math.random() * 5).toFixed(1);
    const uptime = ((Math.random() * 24) + 1).toFixed(0);

    let status = "Healthy";

    if (latency > 90) {
        status = "Critical";
    } else if (latency > 70) {
        status = "Warning";
    }

    return new Response(JSON.stringify({ latency, bandwidth, packetLoss, uptime, status, timestamp: new Date().toLocaleTimeString() + " PST"}), {
        headers: { "Content-Type": "application/json" }
    });
}