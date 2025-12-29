fetch("https://noisy-sound-60af.tgrk-2024tgproject-official.workers.dev/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "nanasi",
    message: "thisisantestcode."
  })
})