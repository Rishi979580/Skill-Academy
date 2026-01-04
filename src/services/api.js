// src/services/api.js

const API_BASE = import.meta.env.VITE_API_BASE;
const API_SECRET = import.meta.env.VITE_API_SECRET;

export async function enrollWorkshop(payload) {
  const res = await fetch(`${API_BASE}/enroll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Secret-Key": API_SECRET,  

    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Enrollment API failed");
  }

  return res.json();
}
