/* =========================================================
   Nina 作品集 — 內容設定檔
   只要改這個檔案，就能更新聯絡方式、案例與作品，不用動版面。
   ========================================================= */

/* ---------- 1. 聯絡方式 ---------- */
const CONTACT = {
  // ⚠️ 換成你的 LINE 官方帳號或個人 LINE 加好友連結
  // 例：https://line.me/R/ti/p/@123abcde
  line: "https://line.me/R/ti/p/@your-line-id",
  email: "your-email@example.com", // ⚠️ 換成你的接案 Email
};

/* ---------- 2. 成效案例 ----------
   sample: true  → 卡片會顯示「範例」標籤，換成真實案例後改成 false
   metrics       → 成果數字，建議 2~3 個
*/
const CASES = [
  {
    sample: true,
    industry: "餐飲",
    title: "台中早午餐店｜平日來客提升",
    problem: "假日排隊、平日冷清，粉專貼文觸及很低。",
    actions: [
      "改用「平日限定套餐」主題做系列圖文",
      "FB 廣告鎖定店家 3 公里內上班族",
      "LINE 官方帳號推出平日集點卡",
    ],
    metrics: [
      { value: "+35%", label: "平日來客" },
      { value: "1,200+", label: "LINE 新好友" },
      { value: "NT$8", label: "平均每次互動成本" },
    ],
  },
  {
    sample: true,
    industry: "預售屋",
    title: "中部預售建案｜公開前蓄客",
    problem: "公開前需要累積有效名單，但廣告名單品質不穩。",
    actions: [
      "依生活圈切分 3 組受眾，測試不同賣點素材",
      "Google 關鍵字廣告搶「區域＋建案」搜尋",
      "表單加入預算與看屋時段篩選題",
    ],
    metrics: [
      { value: "420", label: "有效名單" },
      { value: "-28%", label: "名單成本" },
      { value: "65", label: "接待中心預約" },
    ],
  },
  {
    sample: true,
    industry: "LINE 官方帳號",
    title: "火鍋店｜LINE 熟客回訪活動",
    problem: "好友數有 3,000 人，但推播後幾乎沒人回來。",
    actions: [
      "重新設計圖文選單：訂位、菜單、優惠一鍵到位",
      "設定生日禮與「回訪 3 次送肉盤」活動",
      "關鍵字自動回覆，減少店員回訊時間",
    ],
    metrics: [
      { value: "22%", label: "優惠券使用率" },
      { value: "+18%", label: "回訪客" },
      { value: "-60%", label: "人工回訊量" },
    ],
  },
];

/* ---------- 3. 作品集 ----------
   category 會自動變成篩選按鈕
   img 放在 images/ 資料夾
*/
const WORKS = [
  { category: "社群圖文", title: "柚之道展覽｜海報與 IG 圖文", desc: "茶館展覽主視覺、系列海報、IG 活動倒數貼文", img: "images/work-poster2.jpg" },
  { category: "網站與介面", title: "寵物家具電商網站", desc: "電商首頁與商品列表設計", img: "images/work-catshop.jpg" },
  { category: "網站與介面", title: "寵物社群 App 介面", desc: "App UI 流程與畫面設計", img: "images/work-app.jpg" },
  { category: "網站與介面", title: "形象網站設計", desc: "多款品牌形象網站版型", img: "images/work-web.jpg" },
  { category: "網站與介面", title: "Threezero 租屋平台", desc: "物件搜尋與列表介面", img: "images/work-threezero.jpg" },
];
