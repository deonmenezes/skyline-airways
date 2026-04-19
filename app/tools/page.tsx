"use client";
import { useState } from "react";

export default function Tools() {
  const [host, setHost] = useState("book.skylineair.example");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const res = await fetch(`/api/ping?host=${encodeURIComponent(host)}`);
    setOut(await res.text());
    setLoading(false);
  }

  return (
    <>
      <h1>Travel Help</h1>
      <p style={{ color: "#5a7486", fontStyle: "italic", maxWidth: 680 }}>
        We're here to help at every stage of your journey.
      </p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Booking System Status</h3>
        <p style={{ color: "#5a7486", fontSize: "0.95rem" }}>
          Check the reachability of Skyline's booking system from your location.
        </p>
        <label>Hostname</label>
        <input value={host} onChange={(e) => setHost(e.target.value)} style={{ width: "70%", marginRight: "0.5rem" }} />
        <button onClick={run} disabled={loading}>{loading ? "Checking…" : "Check"}</button>
        {out && <pre style={{ marginTop: "1rem" }}>{out}</pre>}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Telephone Support</h3>
        <table>
          <tbody>
                        <tr><th>Reservations</th><td>1-800-SKY-FLY1 (24/7)</td></tr>
            <tr><th>SkyMiles Elite Desk</th><td>1-800-SKY-ELITE (for Gold and above)</td></tr>
            <tr><th>Baggage Service</th><td>1-800-SKY-BAGS</td></tr>
            <tr><th>Email</th><td>help@skylineair.example</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
