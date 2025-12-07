/**
 * 历届活动展示页 - JavaScript
 * 包含活动数据、时间轴渲染、筛选、照片画廊和详情弹窗功能
 */

// ==================== 活动数据 ====================
const events = [
  {
    id: 1,
    name: "江西THO-梦违赣鄱荟萃·壹~秋水鸣歌宴",
    subtitle: "第一届江西THO",
    label: "已举办",
    date: "2021-07-10",
    location: "江西南昌·嘉莱特和平国际酒店",
    type: "正式场",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "-"
  },
  {
    id: 2,
    name: "江西THO-梦违赣鄱荟萃·贰~落霞梦绘市集",
    subtitle: "第二届江西THO",
    label: "已举办",
    date: "2023-05-01",
    location: "江西南昌·东方豪景花园酒店",
    type: "正式场",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "-"
  },
  {
    id: 3,
    name: "江西THO-梦违赣鄱荟萃·叁~幻想Strawberry~!!",
    subtitle: "第三届江西THO",
    label: "已举办",
    date: "2024-02-10",
    location: "江西南昌·东方豪景花园酒店",
    type: "正式场",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "-"
  },
  {
    id: 4,
    name: "江西THO-梦违赣鄱荟萃·3.5~赣水琼华",
    subtitle: "第3.5届江西THO",
    label: "已举办",
    tags: ["特别场"],
    date: "2025-02-10",
    location: "江西赣州·赣南宾馆",
    type: "特别场",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "-"
  },
  {
    id: 5,
    name: "江西THO-梦违赣鄱荟萃·肆",
    subtitle: "第四届江西THO",
    label: "已举办",
    date: "2025-05-01",
    location: "江西南昌·东方豪景花园酒店",
    type: "正式场",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "-"
  },
  {
    id: 6,
    name: "江西THO-梦违赣鄱荟萃·4.5~东方瑶镜缘Ultra",
    subtitle: "第4.5届江西THO",
    label: "即将举办",
    tags: ["即将举办"],
    date: "2026-02-13",
    location: "江西·宜春·明月山温汤大酒店",
    type: "即将举办",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [],
    detail: "-"
  },
  {
    id: 7,
    name: "江西THO-梦违赣鄱荟萃·伍~名称待定",
    subtitle: "筹备中",
    label: "筹备中",
    tags: ["筹备中"],
    date: "预计 2026年下半年",
    location: "待公布",
    type: "筹备中",
    description: "-",
    highlights: [
      "-",
      "-",
      "-",
      "-"
    ],
    photos: [],
    detail: "-"
  }
];

// ==================== 状态管理 ====================
let currentFilter = "全部";
let currentPhotoIndex = 0;
let currentGalleryPhotos = [];

// ==================== DOM 元素 ====================
const timelineContainer = document.getElementById("timeline");
const photoModal = document.getElementById("photo-modal");
const detailModal = document.getElementById("detail-modal");

// ==================== 渲染函数 ====================
/**
 * 渲染时间轴
 */
function renderTimeline(filteredEvents) {
  timelineContainer.innerHTML = "";

  if (filteredEvents.length === 0) {
    timelineContainer.innerHTML = '<p class="timeline__empty">暂无符合条件的活动</p>';
    return;
  }

  filteredEvents.forEach((event, index) => {
    const isUpcoming = event.type === "即将举办" || event.type === "筹备中";
    const side = index % 2 === 0 ? "left" : "right";

    const item = document.createElement("article");
    item.className = `timeline__item timeline__item--${side} ${isUpcoming ? "timeline__item--upcoming" : ""}`;
    item.setAttribute("data-id", event.id);

    // 标签
    let badgesHtml = `<span class="event-card__badge event-card__badge--${getLabelClass(event.label)}">${event.label}</span>`;
    if (event.tags) {
      event.tags.forEach(tag => {
        badgesHtml += `<span class="event-card__badge event-card__badge--tag">${tag}</span>`;
      });
    }

    // 亮点列表
    let highlightsHtml = "";
    if (event.highlights && event.highlights.length > 0) {
      highlightsHtml = `
        <ul class="event-card__highlights">
          ${event.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      `;
    }

    // 按钮
    let actionsHtml = "";
    if (isUpcoming) {
      actionsHtml = `
        <div class="event-card__actions">
          <button class="event-card__btn event-card__btn--detail" onclick="openDetailModal(${event.id})">查看详情</button>
        </div>
      `;
    } else {
      actionsHtml = `
        <div class="event-card__actions">
          <button class="event-card__btn event-card__btn--photos" onclick="openPhotoGallery(${event.id})">查看照片</button>
          <button class="event-card__btn event-card__btn--detail" onclick="openDetailModal(${event.id})">查看详情</button>
        </div>
      `;
    }

    item.innerHTML = `
      <div class="timeline__dot"></div>
      <div class="timeline__connector"></div>
      <div class="event-card ${isUpcoming ? "event-card--upcoming" : ""}">
        <header class="event-card__header">
          <div class="event-card__badges">${badgesHtml}</div>
          <h3 class="event-card__title">${event.name}</h3>
          ${event.subtitle ? `<p class="event-card__subtitle">${event.subtitle}</p>` : ""}
        </header>
        <div class="event-card__meta">
          <p class="event-card__date"><time datetime="${event.date}">${event.date}</time></p>
          <p class="event-card__location">${event.location}</p>
        </div>
        <div class="event-card__content">
          <p class="event-card__desc">${event.description}</p>
          ${highlightsHtml}
        </div>
        ${actionsHtml}
      </div>
    `;

    timelineContainer.appendChild(item);
  });
}

/**
 * 获取标签样式类
 */
function getLabelClass(label) {
  const labelMap = {
    "已举办": "completed",
    "即将举办": "upcoming",
    "筹备中": "preparing"
  };
  return labelMap[label] || "default";
}

// ==================== 筛选功能 ====================
/**
 * 初始化筛选按钮
 */
function initFilters() {
  const filterBtns = document.querySelectorAll(".events-toolbar__filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });
}

/**
 * 应用筛选
 */
function applyFilter() {
  let filtered = [...events];

  if (currentFilter === "已举办") {
    filtered = filtered.filter(e => e.label === "已举办");
  } else if (currentFilter === "即将举办") {
    filtered = filtered.filter(e => e.label === "即将举办" || e.label === "筹备中");
  }

  renderTimeline(filtered);
}

// ==================== 照片画廊 ====================
/**
 * 打开照片画廊
 */
function openPhotoGallery(eventId) {
  const event = events.find(e => e.id === eventId);
  if (!event || !event.photos || event.photos.length === 0) {
    alert("暂无照片");
    return;
  }

  currentGalleryPhotos = event.photos;
  currentPhotoIndex = 0;
  updateGalleryImage();

  document.getElementById("gallery-title").textContent = event.name + " - 现场照片";
  document.getElementById("gallery-counter").textContent = `1 / ${currentGalleryPhotos.length}`;

  photoModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * 更新画廊图片
 */
function updateGalleryImage() {
  const galleryImage = document.getElementById("gallery-image");
  // 使用占位图
  galleryImage.innerHTML = `<div class="gallery__placeholder">活动现场照片 ${currentPhotoIndex + 1}</div>`;
  document.getElementById("gallery-counter").textContent = `${currentPhotoIndex + 1} / ${currentGalleryPhotos.length}`;
}

/**
 * 上一张照片
 */
function prevPhoto() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    updateGalleryImage();
  }
}

/**
 * 下一张照片
 */
function nextPhoto() {
  if (currentPhotoIndex < currentGalleryPhotos.length - 1) {
    currentPhotoIndex++;
    updateGalleryImage();
  }
}

// ==================== 详情弹窗 ====================
/**
 * 打开详情弹窗
 */
function openDetailModal(eventId) {
  const event = events.find(e => e.id === eventId);
  if (!event) return;

  const isUpcoming = event.type === "即将举办" || event.type === "筹备中";
  const badgeClass = getLabelClass(event.label);

  // 亮点列表
  let highlightsHtml = "";
  if (event.highlights && event.highlights.length > 0) {
    highlightsHtml = `
      <div class="detail-modal__section">
        <h4>活动亮点</h4>
        <ul class="detail-modal__highlights">
          ${event.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  document.getElementById("detail-content").innerHTML = `
    <button class="detail-modal__close" onclick="closeDetailModal()" aria-label="关闭">&times;</button>
    <div class="detail-modal__header">
      <span class="detail-modal__badge detail-modal__badge--${badgeClass}">${event.label}</span>
      <h2 class="detail-modal__title">${event.name}</h2>
      ${event.subtitle ? `<p class="detail-modal__subtitle">${event.subtitle}</p>` : ""}
    </div>
    <div class="detail-modal__meta">
      <p><strong>时间：</strong>${event.date}</p>
      <p><strong>地点：</strong>${event.location}</p>
    </div>
    <div class="detail-modal__body">
      <p>${event.detail}</p>
    </div>
    ${highlightsHtml}
    ${isUpcoming ? `
      <div class="detail-modal__notice">
        活动筹备中，具体信息请以官方公告为准。敬请期待！
      </div>
    ` : ""}
  `;

  detailModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * 关闭照片画廊
 */
function closePhotoModal() {
  photoModal.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * 关闭详情弹窗
 */
function closeDetailModal() {
  detailModal.classList.remove("active");
  document.body.style.overflow = "";
}

// ==================== 事件监听 ====================
// 点击遮罩关闭弹窗
photoModal.addEventListener("click", (e) => {
  if (e.target === photoModal) {
    closePhotoModal();
  }
});

detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) {
    closeDetailModal();
  }
});

// ESC 键关闭弹窗
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (photoModal.classList.contains("active")) {
      closePhotoModal();
    }
    if (detailModal.classList.contains("active")) {
      closeDetailModal();
    }
  }
  // 左右箭头切换照片
  if (photoModal.classList.contains("active")) {
    if (e.key === "ArrowLeft") {
      prevPhoto();
    } else if (e.key === "ArrowRight") {
      nextPhoto();
    }
  }
});

// ==================== 初始化 ====================
document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  applyFilter();
});
