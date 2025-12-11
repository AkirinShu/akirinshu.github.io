/**
 * 社群页面 - JavaScript
 * 包含江西省各地级市社群数据、地图交互、信息面板渲染
 */

// ==================== 社群数据 ====================
const cityCommunities = {
  nanchang: {
    name: "南昌市",
    nativeCommunity: {
      name: "南昌东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "南昌东方同好会主群", number: "-" },
        { name: "南昌东方同好会二群", number: "-" }
      ],
      xiaohongshu: {
        exists: true,
        name: "-",
        link: "#"
      },
      bilibili: {
        exists: true,
        name: "-",
        uid: "636402394",
        link: "https://space.bilibili.com/636402394"
      }
    },
    universities: [
      {
        name: "南昌大学",
        communityName: "众神眷恋的幻想乡——南昌大学东方Project同好会",
        qq: "678088149",
        location: { x: 200, y: 120 }
      },
      {
        name: "江西师范大学",
        communityName: "-",
        qq: "-",
        location: { x: 180, y: 150 }
      },
      {
        name: "江西财经大学",
        communityName: "-",
        qq: "-",
        location: { x: 220, y: 140 }
      },
      {
        name: "-",
        communityName: "-",
        qq: "444444444",
        location: { x: 160, y: 130 }
      },
      {
        name: "-",
        communityName: "-",
        qq: "-",
        location: { x: 190, y: 160 }
      }
    ],
    photos: [
      "assets/community/placeholder.jpg",
      "assets/community/placeholder.jpg",
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: true
  },
  jiujiang: {
    name: "九江市",
    nativeCommunity: {
      name: "九江东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: null,
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  jingdezhen: {
    name: "景德镇市",
    nativeCommunity: {
      name: "-",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: [
      {
        name: "景德镇陶瓷大学",
        communityName: "-",
        qq: "-",
        location: null
      }
    ],
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  pingxiang: {
    name: "萍乡市",
    nativeCommunity: {
      name: "萍乡东方Project同好会",
      description: "萍乡东方project同好群，欢迎萍乡与非萍乡车万同好"
    },
    socials: {
      qqGroups: [
        { name: "萍乡东方project同好交流群-赣州萍乡联合", number: "1038983785" }
      ],
      xiaohongshu: { exists: true,
        name: "赣西东方Project同好会",
        link: "https://xhslink.com/m/2PJgs2dEMw1" },
      bilibili: { exists: true,
        name: "赣西东方Project同好会",
        uid: "1284831743",
        link: "https://space.bilibili.com/1284831743" }
    },
    universities: null,
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  xinyu: {
    name: "新余市",
    nativeCommunity: {
      name: "新余东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: null,
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  yingtan: {
    name: "鹰潭市",
    nativeCommunity: {
      name: "鹰潭东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: null,
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  ganzhou: {
    name: "赣州市",
    nativeCommunity: {
      name: "赣州东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "赣州东方同好会群一", number: "-" },
        { name: "赣州东方同好会群二", number: "-" }
      ],
      xiaohongshu: {
        exists: true,
        name: "赣州东方同好会",
        link: "#"
      },
      bilibili: { exists: false }
    },
    universities: [
      {
        name: "赣南师范大学",
        communityName: "-",
        qq: "-",
        location: null
      }
    ],
    photos: [
      "assets/community/placeholder.jpg",
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  yichun: {
    name: "宜春市",
    nativeCommunity: {
      name: "赣西东方Project同好会",
      description: "这里是赣西东方project同好会,也同时是赣西东方线下活动霜筠茶会交流群。欢迎各位来自（宜春萍乡新余）的车万众加群搞事。本群会定期更新线下活动。"
    },
    socials: {
      qqGroups: [
        { name: "赣西东方Project同好会", number: "893375579" }
      ],
      xiaohongshu: { exists: true,
        name: "赣西东方Project同好会",
        link: "https://xhslink.com/m/2PJgs2dEMw1" },
      bilibili: { exists: true,
        name: "赣西东方Project同好会",
        uid: "1284831743",
        link: "https://space.bilibili.com/1284831743" }
    },
    universities: [

    ],
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  shangrao: {
    name: "上饶市",
    nativeCommunity: {
      name: "上饶东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: [
      {
        name: "-",
        communityName: "-",
        qq: "-",
        location: null
      }
    ],
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  jian: {
    name: "吉安市",
    nativeCommunity: {
      name: "吉安东方Project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: [
      {
        name: "-",
        communityName: "-",
        qq: "-",
        location: null
      }
    ],
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  fuzhou: {
    name: "抚州市",
    nativeCommunity: {
      name: "-",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "-", number: "-" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: [
      {
        name: "-",
        communityName: "-",
        qq: "-",
        location: null
      }
    ],
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  }
};

// ==================== 状态管理 ====================
let currentCity = "nanchang";

// ==================== DOM 元素 ====================
const infoPanel = document.getElementById("community-panel");
const nanchangModal = document.getElementById("nanchang-modal");

// ==================== 地图交互 ====================
/**
 * 初始化地图交互
 */
function initMapInteractions() {
  // 为所有城市区域绑定事件
  const cityPaths = document.querySelectorAll(".jx-map__city");
  cityPaths.forEach(path => {
    const cityKey = path.id.replace("city-", "");

    path.addEventListener("mouseenter", () => {
      showTooltip(path, cityKey);
    });

    path.addEventListener("mouseleave", () => {
      hideTooltip();
    });

    path.addEventListener("click", () => {
      selectCity(cityKey);
    });
  });

  // 为所有标记点绑定事件
  const markers = document.querySelectorAll(".jx-map__marker");
  markers.forEach(marker => {
    const cityKey = marker.dataset.city;

    marker.addEventListener("mouseenter", () => {
      const cityPath = document.getElementById(`city-${cityKey}`);
      if (cityPath) showTooltip(cityPath, cityKey);
    });

    marker.addEventListener("mouseleave", () => {
      hideTooltip();
    });

    marker.addEventListener("click", (e) => {
      e.stopPropagation();
      selectCity(cityKey);
    });
  });
}

/**
 * 选择城市
 */
function selectCity(cityKey) {
  if (!cityCommunities[cityKey]) return;

  currentCity = cityKey;
  highlightCityOnMap(cityKey);
  renderCityInfo(cityKey);

  // 移动端滚动到信息面板
  if (window.innerWidth <= 900) {
    infoPanel.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * 高亮指定城市
 */
function highlightCityOnMap(cityKey) {
  // 移除所有高亮
  document.querySelectorAll(".jx-map__city").forEach(path => {
    path.classList.remove("jx-map__city--active");
  });
  document.querySelectorAll(".jx-map__marker").forEach(marker => {
    marker.classList.remove("jx-map__marker--active");
  });

  // 添加当前城市高亮
  const cityPath = document.getElementById(`city-${cityKey}`);
  const cityMarker = document.querySelector(`.jx-map__marker[data-city="${cityKey}"]`);

  if (cityPath) cityPath.classList.add("jx-map__city--active");
  if (cityMarker) cityMarker.classList.add("jx-map__marker--active");
}

// ==================== Tooltip ====================
let tooltipEl = null;

function showTooltip(element, cityKey) {
  const city = cityCommunities[cityKey];
  if (!city) return;

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.className = "jx-map__tooltip";
    document.body.appendChild(tooltipEl);
  }

  const hasUniversities = city.universities && city.universities.length > 0;
  tooltipEl.innerHTML = `
    <strong>${city.name}</strong><br>
    ${city.nativeCommunity.name}
    ${hasUniversities ? `<br><span class="tooltip-tag">+ ${city.universities.length} 所高校社群</span>` : ""}
  `;
  tooltipEl.style.display = "block";

  // 定位
  const rect = element.getBoundingClientRect();
  tooltipEl.style.left = `${rect.left + rect.width / 2}px`;
  tooltipEl.style.top = `${rect.top - 10}px`;
}

function hideTooltip() {
  if (tooltipEl) {
    tooltipEl.style.display = "none";
  }
}

// ==================== 信息面板渲染 ====================
/**
 * 渲染城市社群信息
 */
function renderCityInfo(cityKey) {
  const city = cityCommunities[cityKey];
  if (!city) return;

  // 社交链接
  let socialsHtml = "";

  // QQ群
  city.socials.qqGroups.forEach(group => {
    socialsHtml += `
      <div class="community-socials__item">
        <span class="community-socials__icon">QQ</span>
        <div class="community-socials__info">
          <span class="community-socials__name">${group.name}</span>
          <span class="community-socials__value">${group.number}</span>
        </div>
        <button class="community-socials__copy" onclick="copyToClipboard('${group.number}')">复制群号</button>
      </div>
    `;
  });

  // 小红书
  if (city.socials.xiaohongshu.exists) {
    socialsHtml += `
      <div class="community-socials__item">
        <span class="community-socials__icon community-socials__icon--xhs">小红书</span>
        <div class="community-socials__info">
          <span class="community-socials__name">${city.socials.xiaohongshu.name}</span>
        </div>
        <a href="${city.socials.xiaohongshu.link}" class="community-socials__link" target="_blank">访问</a>
      </div>
    `;
  } else {
    socialsHtml += `
      <div class="community-socials__item community-socials__item--disabled">
        <span class="community-socials__icon community-socials__icon--xhs">小红书</span>
        <span class="community-socials__placeholder">该地区暂未开通小红书账号</span>
      </div>
    `;
  }

  // B站
  if (city.socials.bilibili.exists) {
    socialsHtml += `
      <div class="community-socials__item">
        <span class="community-socials__icon community-socials__icon--bili">B站</span>
        <div class="community-socials__info">
          <span class="community-socials__name">${city.socials.bilibili.name}</span>
          <span class="community-socials__value">UID: ${city.socials.bilibili.uid}</span>
        </div>
        <a href="${city.socials.bilibili.link}" class="community-socials__link" target="_blank">访问</a>
      </div>
    `;
  } else {
    socialsHtml += `
      <div class="community-socials__item community-socials__item--disabled">
        <span class="community-socials__icon community-socials__icon--bili">B站</span>
        <span class="community-socials__placeholder">该地区暂未开通B站账号</span>
      </div>
    `;
  }

  // 高校社群列表
  let universitiesHtml = "";
  if (city.universities && city.universities.length > 0) {
    universitiesHtml = `
      <div class="community-panel__section">
        <h3 class="community-panel__section-title">高校社群</h3>
        <ul class="university-list">
          ${city.universities.map(uni => `
            <li class="university-list__item">
              <div class="university-list__info">
                <span class="university-list__name">${uni.name}</span>
                <span class="university-list__community">${uni.communityName}</span>
              </div>
              <button class="university-list__copy" onclick="copyToClipboard('${uni.qq}')">
                QQ群: ${uni.qq}
              </button>
            </li>
          `).join("")}
        </ul>
        ${city.hasUniversityMap ? `
          <button class="community-panel__btn" onclick="showNanchangMiniMap()">
            查看南昌高校分布地图
          </button>
        ` : ""}
      </div>
    `;
  }

  // 活动照片
  let photosHtml = "";
  if (city.photos && city.photos.length > 0) {
    photosHtml = `
      <div class="community-panel__section">
        <h3 class="community-panel__section-title">活动照片</h3>
        <div class="community-panel__photos">
          ${city.photos.map((_, i) => `
            <div class="community-panel__photo">
              <div class="community-panel__photo-placeholder">活动照片 ${i + 1}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  const hasUniversities = city.universities && city.universities.length > 0;

  infoPanel.innerHTML = `
    <header class="community-panel__header">
      <h2 class="community-panel__title">${city.name}社群</h2>
      <div class="community-panel__tags">
        <span class="community-panel__tag">原生社群</span>
        ${hasUniversities ? `<span class="community-panel__tag community-panel__tag--uni">高校社群 ×${city.universities.length}</span>` : ""}
      </div>
    </header>

    <div class="community-panel__section">
      <h3 class="community-panel__section-title">${city.nativeCommunity.name}</h3>
      <p class="community-panel__desc">${city.nativeCommunity.description}</p>
    </div>

    <div class="community-panel__section">
      <h3 class="community-panel__section-title">联系方式</h3>
      <div class="community-socials">
        ${socialsHtml}
      </div>
    </div>

    ${universitiesHtml}
    ${photosHtml}
  `;
}

// ==================== 复制功能 ====================
/**
 * 复制文本到剪贴板
 */
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyToast("已复制: " + text);
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showCopyToast("已复制: " + text);
}

function showCopyToast(message) {
  let toast = document.getElementById("copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "copy-toast";
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("copy-toast--visible");
  setTimeout(() => {
    toast.classList.remove("copy-toast--visible");
  }, 2000);
}

// ==================== 南昌高校小地图 ====================
/**
 * 显示南昌高校小地图
 */
function showNanchangMiniMap() {
  renderNanchangMiniMap();
  nanchangModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * 关闭南昌高校小地图
 */
function closeNanchangMiniMap() {
  nanchangModal.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * 渲染南昌高校小地图
 */
function renderNanchangMiniMap() {
  const universities = cityCommunities.nanchang.universities;
  const miniMapInfo = document.getElementById("nanchang-mini-info");

  // 默认显示提示
  miniMapInfo.innerHTML = `
    <p class="nanchang-mini-map__hint">点击地图上的高校标记查看社群信息</p>
  `;

  // 为小地图上的标记绑定事件
  const markers = document.querySelectorAll(".nanchang-mini-map__marker");
  markers.forEach((marker, index) => {
    marker.addEventListener("click", () => {
      // 移除其他高亮
      markers.forEach(m => m.classList.remove("nanchang-mini-map__marker--active"));
      marker.classList.add("nanchang-mini-map__marker--active");

      // 显示高校信息
      const uni = universities[index];
      if (uni) {
        miniMapInfo.innerHTML = `
          <div class="nanchang-mini-map__uni-info">
            <h4>${uni.name}</h4>
            <p>${uni.communityName}</p>
            <button class="nanchang-mini-map__copy" onclick="copyToClipboard('${uni.qq}')">
              QQ群: ${uni.qq} (点击复制)
            </button>
          </div>
        `;
      }
    });
  });
}

// ==================== 事件监听 ====================
// 点击遮罩关闭南昌小地图
nanchangModal.addEventListener("click", (e) => {
  if (e.target === nanchangModal) {
    closeNanchangMiniMap();
  }
});

// ESC键关闭弹窗
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nanchangModal.classList.contains("active")) {
    closeNanchangMiniMap();
  }
});

// ==================== 初始化 ====================
document.addEventListener("DOMContentLoaded", () => {
  initMapInteractions();
  // 默认选中南昌
  selectCity("nanchang");
});
