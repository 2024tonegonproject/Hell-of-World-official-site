    const WORKER_URL = "https://noisy-sound-60af.tgrk-2024tgproject-official.workers.dev/";

    // コメント一覧を読み込む
    async function loadComments() {
      console.log("loadComments 実行");

      const res = await fetch(WORKER_URL);
      const comments = await res.json();

      console.log("取得したコメント:", comments);

      const container = document.getElementById("comments");
      container.innerHTML = "";

      comments
        .sort((a, b) => b.date - a.date)
        .forEach(c => {
          const div = document.createElement("div");
          div.style.color = "white";
          div.className = "comment-box";

          const date = new Date(c.date).toLocaleString();

          div.innerHTML = `
            <strong>${c.name}</strong> <span style="opacity:0.7;">(${date})</span><br>
            ${c.message}
          `;

          container.appendChild(div);
        });
    }

    // フォーム送信
    document.getElementById("commentForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log("送信イベント発火");

      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message })
      });

      if (res.ok) {
        console.log("送信成功");
        document.getElementById("message").value = "";
        loadComments();
      } else {
        console.log("送信失敗");
      }
    });

    // ページ読み込み時に一覧を表示
    loadComments();