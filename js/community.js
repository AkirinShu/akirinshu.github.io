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
      description: "那么问题来了，南昌在哪儿？（没有在地图上找到南昌的位置，小爱同学也不知道南昌在哪儿）"
    },
    socials: {
      qqGroups: [
        { name: "南昌东方project同好会", number: "610546073" }
      ],
      xiaohongshu: {
        exists: true,
        name: "江西THO空想豫章筹办组",
        link: "#"
      },
      bilibili: {
        exists: true,
        name: "江西THO空想豫章筹办组",
        uid: "636402394",
        link: "https://space.bilibili.com/636402394"
      }
    },
    universities: [
      {
        name: "南昌大学",
        communityName: "众神眷恋的幻想乡——南昌大学东方Project同好会",
        qq: "678088149",
        // 前湖校区 - OpenStreetMap坐标
        coords: [28.6666, 115.8036]
      },
      {
        name: "江西师范大学",
        communityName: "瑶湖畔的借书屋",
        qq: "1149851021",
        // 瑶湖校区 - OpenStreetMap坐标
        coords: [28.6796, 116.0317]
      },
      {
        name: "江西财经大学",
        communityName: "科学世纪的少年秘封俱乐部",
        qq: "244251443",
        // 蛟桥园校区 - OpenStreetMap坐标
        coords: [28.7500, 115.8514]
      },
      {
        name: "东华理工大学",
        communityName: "东理浮梦东方群",
        qq: "811230610",
        // 南昌校区 - OpenStreetMap坐标
        coords: [28.7222, 115.8233]
      },
      {
        name: "江西农业大学",
        communityName: "江农东方project同好会",
        qq: "740623549",
        // OpenStreetMap坐标
        coords: [28.7630, 115.8340]
      },
      {
        name: "江西中医药大学",
        communityName: "永远亭豫章办事处",
        qq: "799822249",
        // 湾里校区 - OpenStreetMap坐标
        coords: [28.6798, 115.7457]
      },
      {
        name: "江西科技师范大学",
        communityName: "寺子屋",
        qq: "829546109",
        // 红角洲校区 - OpenStreetMap坐标
        coords: [28.6698, 115.8129]
      },
      {
        name: "南昌航空大学",
        communityName: "南昌航空大学东方project同好会",
        qq: "392377871",
        // 前湖校区 - OpenStreetMap坐标
        coords: [28.6511, 115.8201]
      },
      {
        name: "华东交通大学",
        communityName: "东方花椒园",
        qq: "1031987369",
        // OpenStreetMap坐标
        coords: [28.7427, 115.8657]
      },
      {
        name: "江西外语外贸职业技术学院",
        communityName: "江西外语外贸职业技术学院东方project同好会",
        qq: "554194233",
        // OpenStreetMap坐标
        coords: [28.7006, 116.0280]
      },
      {
        name: "江西科技学院",
        communityName: "江西科技学院东方project同好会",
        qq: "1014853052",
        // OpenStreetMap坐标
        coords: [28.6806, 116.0130]
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
      description: "赣北最大的同性交友群(雾），第一届九江thp将在2024年的一月28日举行，希望大家支持哦。(thp游客群526842207）"
    },
    socials: {
      qqGroups: [
        { name: "九江东方project同好会", number: "346566424" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: [{
      name: "共青城市大学城",
      communityName: "共青城市大学城",
      qq: "315859305",
      location: null
    }],
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  jingdezhen: {
    name: "景德镇市",
    nativeCommunity: {
      name: "赣东北-东方project同好会",
      description: "江西省-上饶市周边各地区阿卡林省里的阿卡林地区,多山交通便利地区，欢迎浙西和南平等各个地区的小伙伴们来玩。注：人偶拿的是本地区特产 【油条包麻子馃】"
    },
    socials: {
      qqGroups: [
        { name: "赣东北-东方project同好会", number: "1031987369" }
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
      description: "河童江西钢铁工业基地（指新钢）（阿卡林省的阿卡林市）"
    },
    socials: {
      qqGroups: [
        { name: "新余东方Project同好会", number: "554860987" }
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
      name: "赣东北-东方project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "赣东北-东方project同好会", number: "1031987369" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: {
      name: "鹰潭一中",
      communityName: "博丽神社鹰潭一中第⑨分社",
      qq: "741324286",
      location: null
    },
    photos: [
      "assets/community/placeholder.jpg"
    ],
    hasUniversityMap: false
  },
  ganzhou: {
    name: "赣州市",
    nativeCommunity: {
      name: "赣州东方Project同好会",
      description: "赣州车车人闲聊群 江西则佬吹水则赛特区（确信江西飞机佬吹水聚集地（雾（茶会什么的有在准备第二届了（）"
    },
    socials: {
      qqGroups: [
        { name: "赣州车万人交流聚集地", number: "543308591" },
      ],
      xiaohongshu: {
        exists: false,
      },
      bilibili: { exists: true,
        name: "赣南东方同好会",
        uid: "3546842333711089",
        link: "https://https://space.bilibili.com/3546842333711089"
       }
    },
    universities: [
      {
        name: "赣南师范大学",
        communityName: "明湖寺子屋",
        qq: "788727436",
        location: null
      },
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
      name: "赣东北-东方project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "赣东北-东方project同好会", number: "1031987369" }
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
  jian: {
    name: "吉安市",
    nativeCommunity: {
      name: "湘赣东方project同好会",
      description: "命令昨颂，十万工农下吉安。（欢迎湘赣革命老区的同志来群建设根据地☭）"
    },
    socials: {
      qqGroups: [
        { name: "湘赣东方project同好会", number: "240523252" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: [
      {
        name: "井冈山大学",
        communityName: "井大幻想交流⑨吧",
        qq: "849429686",
        location: null
      },
      {
        name: "吉安一中",
        communityName: "吉安一中秘封俱乐部",
        qq: "1065478682",
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
      name: "赣东北-东方project同好会",
      description: "-"
    },
    socials: {
      qqGroups: [
        { name: "赣东北-东方project同好会", number: "1031987369" }
      ],
      xiaohongshu: { exists: false },
      bilibili: { exists: false }
    },
    universities: null,
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

// ==================== OpenStreetMap 地图 ====================
let nanchangMap = null;

/**
 * 渲染南昌高校小地图 (使用 OpenStreetMap + Leaflet)
 */
function renderNanchangMiniMap() {
  const universities = cityCommunities.nanchang.universities;
  const miniMapInfo = document.getElementById("nanchang-mini-info");
  const mapContainer = document.getElementById("nanchang-osm-map");

  // 默认显示提示
  miniMapInfo.innerHTML = `
    <p class="nanchang-mini-map__hint">点击地图上的高校标记查看社群信息</p>
  `;

  // 如果地图已存在，先销毁
  if (nanchangMap) {
    nanchangMap.remove();
    nanchangMap = null;
  }

  // 南昌市中心坐标
  const nanchangCenter = [28.68, 115.86];

  // 初始化 Leaflet 地图
  nanchangMap = L.map(mapContainer, {
    center: nanchangCenter,
    zoom: 11,
    scrollWheelZoom: true,
    attributionControl: true
  });

  // 添加 OpenStreetMap 瓦片图层
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(nanchangMap);

  // 自定义标记图标
  const uniIcon = L.divIcon({
    className: 'uni-marker-icon',
    html: '<div class="uni-marker-pin"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });

  // 为每个高校添加标记
  universities.forEach((uni, index) => {
    if (!uni.coords) return;

    const marker = L.marker(uni.coords, { icon: uniIcon })
      .addTo(nanchangMap);

    // 创建弹窗内容
    const popupContent = `
      <div class="uni-popup">
        <div class="uni-popup__name">${uni.name}</div>
        <div class="uni-popup__community">${uni.communityName}</div>
        <button class="uni-popup__btn" onclick="copyToClipboard('${uni.qq}')">
          QQ群: ${uni.qq}
        </button>
      </div>
    `;

    marker.bindPopup(popupContent);

    // 点击标记时更新侧边信息面板
    marker.on('click', () => {
      miniMapInfo.innerHTML = `
        <div class="nanchang-mini-map__uni-info">
          <h4>${uni.name}</h4>
          <p>${uni.communityName}</p>
          <button class="nanchang-mini-map__copy" onclick="copyToClipboard('${uni.qq}')">
            QQ群: ${uni.qq} (点击复制)
          </button>
        </div>
      `;
    });
  });

  // 延迟调整地图大小（确保模态框完全显示后）
  setTimeout(() => {
    if (nanchangMap) {
      nanchangMap.invalidateSize();
    }
  }, 100);
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
