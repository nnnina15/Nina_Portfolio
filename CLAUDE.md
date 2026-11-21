# Nina 作品集 — 給 Claude 的工作說明

## 發布方式
- 網站由 GitHub Pages 從 `master` 分支發布。
- **Nina 已同意：改動可以直接 commit 並推到 `master`，不需要開 PR。**
- 推之前先用 Playwright 開 `index.html` 檢查（無 JS 錯誤、手機版無橫向捲動），推完附截圖給 Nina 確認。

## 內容規則
- 內容集中在 `js/content.js`（聯絡方式、案例、作品）。
- 案例 `sample: true` 不顯示；只有真實案例用 `sample: false`。
- 客戶截圖上線前：銀行帳號、電話、營收／成本／分紅等金額一律打馬賽克。
- 圖片壓縮後放 `images/`，原始圖不要直接引用。
