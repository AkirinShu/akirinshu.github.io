/**
 * 历届活动展示页 - JavaScript
 * 包含活动数据、时间轴渲染、筛选、照片画廊和详情弹窗功能
 */

// ==================== 活动数据 ====================
const events = [
  {
    id: 1,
    name: "江西THO 第一届",
    subtitle: "梦违赣鄱荟萃",
    label: "已举办",
    date: "2021-07-11",
    location: "南昌市某文化中心",
    type: "正式场",
    description: "江西THO的开端，首次在江西省举办的东方Project Only同人活动。虽然规模不大，但汇聚了省内众多东方爱好者，开启了江西东方同好会的历史篇章。",
    highlights: [
      "首次江西省内THO活动",
      "现场乐队演奏人气曲目",
      "首批梦违主题周边发售",
      "与本地社团联合出演"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "第一届江西THO于2021年7月11日在南昌市成功举办。作为江西省首个东方Project Only活动，吸引了来自全省各地的东方爱好者参与。活动包含同人摊位展示、现场乐队演出、互动游戏等环节，为江西东方社群的发展奠定了坚实基础。"
  },
  {
    id: 2,
    name: "江西THO 第二届",
    subtitle: "梦违赣鄱荟萃·落霞梦绘市集",
    label: "已举办",
    date: "2023-05-01",
    location: "南昌市某展览中心",
    type: "正式场",
    description: "第二届活动规模扩大，引入了更多互动环节和特邀嘉宾，现场气氛热烈，参与人数创新高。",
    highlights: [
      "规模扩大，摊位数量翻倍",
      "特邀知名东方音乐社团",
      "新增Cosplay走秀环节",
      "限定版镭射票首次推出"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "第二届江西THO「落霞梦绘市集」于2023年5月1日举办，活动规模较第一届有了显著提升。本届活动特别邀请了多个知名东方音乐社团参与演出，新增的Cosplay走秀环节也受到了观众的热烈欢迎。限定版镭射票的推出成为活动一大亮点。"
  },
  {
    id: 3,
    name: "江西THO 第三届",
    subtitle: "梦违赣鄱荟萃·幻想乡音乐祭",
    label: "已举办",
    date: "2024-02-10",
    location: "南昌市某音乐厅",
    type: "正式场",
    description: "第三届以音乐为主题，打造了一场视听盛宴。专业音乐厅场地带来了极佳的演出体验。",
    highlights: [
      "专业音乐厅场地",
      "全程高品质音乐演出",
      "多位知名演奏者参演",
      "同人画集《东方赣韵》首发"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "第三届江西THO「幻想乡音乐祭」于2024年2月10日在专业音乐厅举办，这是一届以音乐演出为核心的特别活动。现场汇聚了多位知名东方音乐演奏者，为观众带来了一场精彩的视听盛宴。同人画集《东方赣韵》也在本届活动首发。"
  },
  {
    id: 4,
    name: "江西THO 第3.5届",
    subtitle: "特别场·温泉小聚",
    label: "已举办",
    tags: ["特别场"],
    date: "2025-02-10",
    location: "宜春市温汤镇",
    type: "特别场",
    description: "小规模特别场活动，在温泉度假区举办，营造轻松愉快的交流氛围，让参与者近距离互动。",
    highlights: [
      "小规模近距离交流",
      "温泉度假区特别场地",
      "全新特别曲目安排",
      "限定纪念镭射票"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "第3.5届江西THO特别场于2025年2月10日在宜春市温汤镇温泉度假区举办。这是一次小规模、高品质的特别活动，参与者们在轻松的氛围中进行了深度交流。活动特别推出了限定纪念镭射票，成为收藏佳品。"
  },
  {
    id: 5,
    name: "江西THO 第四届",
    subtitle: "梦违赣鄱荟萃·东方瑶镜缘",
    label: "已举办",
    date: "2025-05-01",
    location: "南昌市某会展中心",
    type: "正式场",
    description: "第四届活动全面升级，场地更大、内容更丰富，是目前规模最大的一届江西THO。",
    highlights: [
      "历届最大规模",
      "双舞台同步演出",
      "百余个同人摊位",
      "丰富的互动游戏区"
    ],
    photos: [
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg",
      "assets/events/placeholder.jpg"
    ],
    detail: "第四届江西THO「东方瑶镜缘」于2025年5月1日在南昌市某会展中心盛大举办，这是历届规模最大的一次活动。双舞台设计让演出内容更加丰富，百余个同人摊位汇聚了各地创作者的精品。互动游戏区也为参与者带来了更多乐趣。"
  },
  {
    id: 6,
    name: "江西THO 第4.5届",
    subtitle: "东方瑶镜缘Ultra",
    label: "即将举办",
    tags: ["即将举办"],
    date: "2026-02-13",
    location: "宜春市温汤镇·明月山温汤大酒店",
    type: "即将举办",
    description: "即将到来的特别场活动，延续3.5届的温泉主题，预计将带来全新的体验。具体信息将在日后公布。",
    highlights: [
      "温泉度假区再次举办",
      "新主题演出企划",
      "更多原创编曲与合作",
      "限定周边筹备中"
    ],
    photos: [],
    detail: "第4.5届江西THO「东方瑶镜缘Ultra」计划于2026年2月13日在宜春市温汤镇明月山温汤大酒店举办。这将是继3.5届之后又一次温泉主题的特别活动，届时将带来全新的演出内容和互动体验。具体信息请关注官方公告。"
  },
  {
    id: 7,
    name: "江西THO 第五届",
    subtitle: "筹备中",
    label: "筹备中",
    tags: ["筹备中"],
    date: "预计 2026年下半年",
    location: "待公布",
    type: "筹备中",
    description: "第五届正式场活动正在筹备中，预计将在2026年下半年举办。更多信息敬请期待官方公告。",
    highlights: [
      "全新主题企划",
      "更大规模场地",
      "重磅嘉宾邀请中",
      "敬请期待"
    ],
    photos: [],
    detail: "第五届江西THO正在紧锣密鼓地筹备中，预计将在2026年下半年与大家见面。筹办组正在策划全新的主题内容，并积极联络各方合作伙伴。请持续关注我们的官方渠道，第一时间获取最新资讯。"
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
