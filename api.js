import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/auth", async (req, res) => {
  const privateCode = req.query.privateCode;

  if (!privateCode) {
    return res.json({ ok: false, error: "no code" });
  }

  try {
    const verify = await fetch(
      `https://auth-api.itinerary.eu.org/auth/verifyToken/${privateCode}`
    ).then(r => r.json());

    if (verify.valid) {
      return res.json({ ok: true, username: verify.username });
    } else {
      return res.json({ ok: false, error: "invalid" });
    }
  } catch (e) {
    return res.json({ ok: false, error: "verify failed" });
  }
});

app.listen(3000, () => console.log("Auth server running"));