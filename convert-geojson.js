/**
 * GeoJSON to SVG 转换脚本
 * 将江西省GeoJSON数据转换为SVG路径
 */

const fs = require('fs');

// 读取GeoJSON文件
const geojson = JSON.parse(fs.readFileSync('./assets/jiangxi.json', 'utf8'));

// SVG画布设置
const svgWidth = 450;
const svgHeight = 550;
const padding = 20;

// 计算边界范围
let minX = Infinity, maxX = -Infinity;
let minY = Infinity, maxY = -Infinity;

geojson.features.forEach(feature => {
  const coords = feature.geometry.coordinates;
  coords.forEach(polygon => {
    polygon.forEach(ring => {
      ring.forEach(point => {
        const [lon, lat] = point;
        minX = Math.min(minX, lon);
        maxX = Math.max(maxX, lon);
        minY = Math.min(minY, lat);
        maxY = Math.max(maxY, lat);
      });
    });
  });
});

console.log(`经度范围: ${minX} - ${maxX}`);
console.log(`纬度范围: ${minY} - ${maxY}`);

// 坐标转换函数
function projectPoint(lon, lat) {
  const x = padding + ((lon - minX) / (maxX - minX)) * (svgWidth - 2 * padding);
  // Y轴翻转（SVG的Y轴向下）
  const y = padding + ((maxY - lat) / (maxY - minY)) * (svgHeight - 2 * padding);
  return [Math.round(x), Math.round(y)];
}

// Douglas-Peucker 路径简化算法
function simplifyPath(points, tolerance) {
  if (points.length <= 2) return points;

  let maxDist = 0;
  let maxIndex = 0;
  const first = points[0];
  const last = points[points.length - 1];

  for (let i = 1; i < points.length - 1; i++) {
    const dist = perpendicularDistance(points[i], first, last);
    if (dist > maxDist) {
      maxDist = dist;
      maxIndex = i;
    }
  }

  if (maxDist > tolerance) {
    const left = simplifyPath(points.slice(0, maxIndex + 1), tolerance);
    const right = simplifyPath(points.slice(maxIndex), tolerance);
    return left.slice(0, -1).concat(right);
  } else {
    return [first, last];
  }
}

function perpendicularDistance(point, lineStart, lineEnd) {
  const [x, y] = point;
  const [x1, y1] = lineStart;
  const [x2, y2] = lineEnd;

  const A = x - x1;
  const B = y - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;

  let param = -1;
  if (lenSq !== 0) param = dot / lenSq;

  let xx, yy;
  if (param < 0) {
    xx = x1; yy = y1;
  } else if (param > 1) {
    xx = x2; yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  const dx = x - xx;
  const dy = y - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

// 生成SVG路径（带简化）
const SIMPLIFY_TOLERANCE = 2; // 简化容差，值越大简化越多

function generatePath(coordinates) {
  let pathData = '';
  coordinates.forEach((polygon, pIndex) => {
    polygon.forEach((ring, rIndex) => {
      // 先转换所有点到SVG坐标
      const svgPoints = ring.map(point => projectPoint(point[0], point[1]));
      // 应用Douglas-Peucker简化
      const simplified = simplifyPath(svgPoints, SIMPLIFY_TOLERANCE);

      simplified.forEach((point, index) => {
        const [x, y] = point;
        if (index === 0) {
          pathData += `M${x} ${y}`;
        } else {
          pathData += `L${x} ${y}`;
        }
      });
      pathData += 'Z';
    });
  });
  return pathData;
}

// 城市ID映射
const cityIdMap = {
  '南昌市': 'nanchang',
  '景德镇市': 'jingdezhen',
  '萍乡市': 'pingxiang',
  '九江市': 'jiujiang',
  '新余市': 'xinyu',
  '鹰潭市': 'yingtan',
  '赣州市': 'ganzhou',
  '吉安市': 'jian',
  '宜春市': 'yichun',
  '抚州市': 'fuzhou',
  '上饶市': 'shangrao'
};

// 生成SVG
let svgPaths = '';
let svgMarkers = '';
let svgLabels = '';

geojson.features.forEach(feature => {
  const name = feature.properties.name;
  const cityId = cityIdMap[name] || name.toLowerCase();
  const pathData = generatePath(feature.geometry.coordinates);
  const center = feature.properties.center;
  const [cx, cy] = projectPoint(center[0], center[1]);

  svgPaths += `                <path id="city-${cityId}" class="jx-map__city" d="${pathData}" />\n`;
  svgMarkers += `                <circle class="jx-map__marker" data-city="${cityId}" cx="${cx}" cy="${cy}" r="6" />\n`;

  // 调整标签位置
  const labelName = name.replace('市', '');
  svgLabels += `                <text class="jx-map__label" x="${cx}" y="${parseFloat(cy) + 18}">${labelName}</text>\n`;
});

const svgOutput = `            <!-- 江西省 SVG 地图 (GIS数据生成) -->
            <svg class="jx-map__svg" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
              <!-- 各地级市区域 -->
              <g class="jx-map__cities">
${svgPaths}              </g>

              <!-- 城市标记点 -->
              <g class="jx-map__markers">
${svgMarkers}              </g>

              <!-- 城市名称 -->
              <g class="jx-map__labels">
${svgLabels}              </g>
            </svg>`;

// 输出到文件
fs.writeFileSync('./jiangxi-map.svg.html', svgOutput, 'utf8');
console.log('\nSVG地图已生成: jiangxi-map.svg.html');

// 同时输出到控制台
console.log('\n=== SVG代码 ===\n');
console.log(svgOutput);
