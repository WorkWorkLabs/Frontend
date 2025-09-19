# 图片资源管理指南

## 📁 图片存放位置
**所有图片都应放在这个文件夹：** `public/images/`

## 🎯 图片引用方式
在代码中引用图片时，使用以下路径格式：
```javascript
// ✅ 正确的引用方式
image: '/images/your-image.svg'
src: '/images/your-image.png'
```

## 📝 如何添加新图片

### 1️⃣ 添加产品轮播图片
1. 将图片文件放到 `public/images/` 文件夹
2. 在 `src/stores/content.ts` 中的 `products` 数组添加新产品：
```typescript
{
  id: '5',
  title: '你的产品名称',
  subtitle: '副标题（可选）',
  description: '产品描述...',
  features: [],
  link: '#your-link',
  tags: ['标签1', '标签2'],
  image: '/images/your-new-image.svg'  // 👈 图片路径
}
```

### 2️⃣ 添加评价轮播图片
1. 将评价图片文件放到 `public/images/` 文件夹
2. 在 `src/stores/content.ts` 中的 `reviews` 数组添加新评价：
```typescript
{
  id: '6',
  image: '/images/review-new.svg',
  alt: 'Digital Nomad Review Description'
}
```

### 3️⃣ 其他图片类型
- **Logo相关：** `logo&favicon.svg`, `brandname.svg`
- **图标：** `card1icon.png`, `github-icon.png`, `tg-icon.png`
- **背景图：** `TV - 1.png`, `map.png`
- **功能图片：** `contact.svg`, `genesisteam.svg`, `teammember.svg`
- **评价图片：** `review1.svg`, `review2.svg`

## 🔧 支持的图片格式
- **SVG：** 推荐用于图标和矢量图形
- **PNG：** 适合复杂图片和需要透明背景的图片
- **JPG：** 适合照片类图片

## 📏 建议尺寸
- **轮播图片：** 1000x500px 或等比例
- **图标：** 36x36px 或 SVG矢量格式
- **Logo：** SVG矢量格式最佳

## ⚠️ 注意事项
1. **文件命名：** 使用小写字母、数字和连字符，避免空格和特殊字符
2. **文件大小：** 尽量优化图片大小，建议单个文件不超过500KB
3. **备份：** 添加新图片后建议提交到Git仓库保存

## 🎨 轮播图配置示例
```typescript
// 在 src/stores/content.ts 中
const products = ref<Product[]>([
  {
    id: '1',
    title: 'Digital Nomad Card',
    image: '/images/mastercard.svg'
  },
  {
    id: '2', 
    title: 'Growth Platform',
    image: '/images/growthos.svg'
  }
  // 继续添加更多产品...
])
```

轮播图会自动适配任意数量的图片！🎉