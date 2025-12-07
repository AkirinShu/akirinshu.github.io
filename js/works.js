/**
 * 同人作品展示页 - JavaScript
 * 包含示例数据、渲染逻辑、筛选排序和模态弹层功能
 */

// ==================== 示例数据 ====================
const works = [
  /* {
    id: 1,
    name: "镭射票 - 「春日幻梦」",
    category: "镭射票",
    event: "第 4 届 江西THO",
    description: "采用全息镭射工艺，搭配活动主视觉插画，限定纪念票。光线照射下呈现梦幻色彩变化。",
    size: "148 x 100 mm",
    material: "铜版纸 + 全息镭射覆膜",
    price: 40,
    status: "在售",
    booth: "A-12",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 2,
    name: "主视觉亚克力立牌",
    category: "亚克力",
    event: "第 4 届 江西THO",
    description: "以活动 Logo 为灵感设计的限定亚克力立牌，高透材质，底座稳固。",
    size: "高约 12 cm",
    material: "高透亚克力",
    price: 60,
    status: "预售",
    booth: "B-07",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 3,
    name: "同人刊物《落霞绘梦》",
    category: "同人本",
    event: "第 3 届 江西THO",
    description: "收录插画与江西各大城市相融合的主题创作，全彩印刷，胶装装订。",
    size: "B5 / 80P / 全彩",
    material: "胶装 / 铜版纸封面",
    price: 80,
    status: "绝版展示",
    booth: "C-03",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 4,
    name: "角色亚克力挂件套装",
    category: "亚克力",
    event: "第 4 届 江西THO",
    description: "精选人气角色设计，双面印刷，附赠珠链挂绳，可挂包包或钥匙。",
    size: "约 6 x 6 cm",
    material: "双面印刷亚克力",
    price: 35,
    status: "在售",
    booth: "A-12",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 5,
    name: "镭射票 - 「赣鄱夜色」",
    category: "镭射票",
    event: "第 3 届 江西THO",
    description: "以江西夜景为主题的限定镭射票，独特的渐变色彩设计。",
    size: "148 x 100 mm",
    material: "铜版纸 + 全息镭射覆膜",
    price: 35,
    status: "已完售",
    booth: "-",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 6,
    name: "明信片套装「幻想乡风物志」",
    category: "其他周边",
    event: "第 4 届 江西THO",
    description: "六张装明信片套装，收录江西风景与东方角色的融合创作。",
    size: "148 x 100 mm",
    material: "300g 白卡纸",
    price: 25,
    status: "在售",
    booth: "D-05",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 7,
    name: "同人画集《东方赣韵》",
    category: "同人本",
    event: "第 2 届 江西THO",
    description: "多位画师联合创作的东方同人画集，收录精美插画与创作心得。",
    size: "A4 / 48P / 全彩",
    material: "精装硬壳封面",
    price: 120,
    status: "绝版展示",
    booth: "-",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  },
  {
    id: 8,
    name: "徽章套装「Q版角色」",
    category: "其他周边",
    event: "第 4 届 江西THO",
    description: "可爱的 Q 版角色徽章套装，共五枚，马口铁材质。",
    size: "直径 5.8 cm",
    material: "马口铁",
    price: 30,
    status: "预售",
    booth: "B-07",
    onlineLink: "#",
    images: ["assets/works/placeholder.jpg"]
  }*/
];

// ==================== 状态管理 ====================
let currentCategory = "全部";
let currentSort = "newest";

// ==================== DOM 元素获取 ====================
const worksGrid = document.getElementById("works-grid");
const modalOverlay = document.getElementById("work-modal");
const modalContent = document.getElementById("modal-content");

// ==================== 渲染函数 ====================
/**
 * 渲染作品卡片到页面
 * @param {Array} filteredWorks - 要渲染的作品数组
 */
function renderWorks(filteredWorks) {
  worksGrid.innerHTML = "";

  if (filteredWorks.length === 0) {
    worksGrid.innerHTML = '<p class="works-grid__empty">暂无符合条件的作品</p>';
    return;
  }

  filteredWorks.forEach((work) => {
    const card = document.createElement("article");
    card.className = "work-card";
    card.setAttribute("data-id", work.id);

    // 状态标签样式类
    const statusClass = getStatusClass(work.status);

    card.innerHTML = `
      <div class="work-card__image">
        <div class="work-card__placeholder">${work.category}</div>
        <span class="work-card__badge work-card__badge--${statusClass}">${work.status}</span>
      </div>
      <div class="work-card__body">
        <h3 class="work-card__title">${work.name}</h3>
        <p class="work-card__event">${work.event}</p>
        <p class="work-card__desc">${work.description}</p>
        <div class="work-card__meta">
          <span class="work-card__size">${work.size}</span>
          <span class="work-card__price">¥${work.price}</span>
        </div>
        <div class="work-card__actions">
          <button class="work-card__btn work-card__btn--detail" onclick="openWorkModal(${work.id})">查看详情</button>
          ${work.status !== "绝版展示" && work.status !== "已完售" ?
            `<button class="work-card__btn work-card__btn--buy" onclick="showOnlineLink('${work.onlineLink}')">查看通贩</button>` :
            ""}
        </div>
      </div>
    `;

    // 点击卡片打开详情
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("work-card__btn")) {
        openWorkModal(work.id);
      }
    });

    worksGrid.appendChild(card);
  });
}

/**
 * 获取状态对应的 CSS 类名
 */
function getStatusClass(status) {
  const statusMap = {
    "在售": "available",
    "预售": "presale",
    "绝版展示": "limited",
    "已完售": "soldout"
  };
  return statusMap[status] || "default";
}

// ==================== 筛选与排序 ====================
/**
 * 初始化筛选和排序事件
 */
function initFilters() {
  // 类别筛选按钮
  const filterBtns = document.querySelectorAll(".works-toolbar__filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 更新按钮状态
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      // 筛选
      currentCategory = btn.dataset.category;
      applyFiltersAndSort();
    });
  });

  // 排序按钮
  const sortBtns = document.querySelectorAll(".works-toolbar__sort-btn");
  sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sortBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentSort = btn.dataset.sort;
      applyFiltersAndSort();
    });
  });
}

/**
 * 应用筛选和排序
 */
function applyFiltersAndSort() {
  let filtered = [...works];

  // 筛选
  if (currentCategory !== "全部") {
    filtered = filtered.filter((w) => w.category === currentCategory);
  }

  // 排序
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    // 默认按 id 倒序（模拟最新）
    filtered.sort((a, b) => b.id - a.id);
  }

  renderWorks(filtered);
}

// ==================== 模态弹层 ====================
/**
 * 打开作品详情弹层
 * @param {number} workId - 作品 ID
 */
function openWorkModal(workId) {
  const work = works.find((w) => w.id === workId);
  if (!work) return;

  const statusClass = getStatusClass(work.status);

  modalContent.innerHTML = `
    <button class="work-modal__close" onclick="closeWorkModal()" aria-label="关闭">&times;</button>
    <div class="work-modal__image">
      <div class="work-modal__placeholder">${work.category}</div>
    </div>
    <div class="work-modal__info">
      <span class="work-modal__badge work-modal__badge--${statusClass}">${work.status}</span>
      <h2 class="work-modal__title">${work.name}</h2>
      <p class="work-modal__event">${work.event}</p>
      <p class="work-modal__desc">${work.description}</p>
      <dl class="work-modal__specs">
        <div class="work-modal__spec">
          <dt>尺寸</dt>
          <dd>${work.size}</dd>
        </div>
        <div class="work-modal__spec">
          <dt>材质</dt>
          <dd>${work.material}</dd>
        </div>
        <div class="work-modal__spec">
          <dt>参考价格</dt>
          <dd>¥${work.price}</dd>
        </div>
        ${work.booth !== "-" ? `
        <div class="work-modal__spec">
          <dt>摊位号</dt>
          <dd>${work.booth}</dd>
        </div>
        ` : ""}
      </dl>
      ${work.status !== "绝版展示" && work.status !== "已完售" ?
        `<button class="work-modal__btn" onclick="showOnlineLink('${work.onlineLink}')">查看通贩</button>` :
        `<p class="work-modal__notice">此作品仅供展示，暂不提供购买渠道。</p>`}
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * 关闭模态弹层
 */
function closeWorkModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * 显示通贩链接提示
 */
function showOnlineLink(link) {
  if (link === "#") {
    alert("通贩链接暂未开放，请关注官方公告。");
  } else {
    window.open(link, "_blank");
  }
}

// ==================== 事件监听 ====================
// 点击遮罩关闭弹层
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeWorkModal();
  }
});

// ESC 键关闭弹层
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeWorkModal();
  }
});

// ==================== 初始化 ====================
document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  applyFiltersAndSort();
});
