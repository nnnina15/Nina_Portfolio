# Nina 社群行銷作品集

單頁響應式靜態網站（純 HTML / CSS / JS，可直接用 GitHub Pages 發布）。

## 怎麼改內容
大部分內容都在 **`js/content.js`**：
- `CONTACT`：LINE 加好友連結、Email（上線前務必換成你自己的）
- `CASES`：成效案例。只有 `sample: false` 的真實案例會顯示；全部是範例時，整個案例區會自動隱藏
- `WORKS`：作品集。圖片放進 `images/` 資料夾，`category` 會自動產生篩選按鈕

服務項目、合作方案、關於我、常見問題這些文字，直接在 `index.html` 裡修改。

## 檔案結構
- `index.html` 頁面
- `css/style.css` 樣式（顏色都在最上面的 `:root`）
- `js/content.js` 內容設定
- `js/main.js` 互動功能（選單、篩選、燈箱）
- `images/` 已壓縮的網頁用圖片
