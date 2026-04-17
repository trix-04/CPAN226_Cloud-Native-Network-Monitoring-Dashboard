export async function GET() {
    const latency = Math.floor(Math.random() * 100) + 20;
    const bandwidth = Math.floor(Math.random() * 200) + 50;
    const packetLoss = Number((Math.random() * 5).toFixed(1));
    const uptime = ((Math.random() * 24) + 1).toFixed(0);

    const region = "US-West";
    const timeZone = "PST";
    const currentTime = new Date().toLocaleTimeString() + " PST";

    let status = "Healthy";

    if (latency > 90 || packetLoss > 3 || bandwidth < 80) {
        status = "Critical";
    } else if (latency > 70 || packetLoss > 1 || bandwidth < 120) {
        status = "Warning";
    }

    return new Response(JSON.stringify({ latency, bandwidth, packetLoss, uptime, region, timeZone, currentTime, status, timestamp: currentTime}), {
        headers: { "Content-Type": "application/json" }
    });
}