# Tauri + React + TypeScript 模板

这是一个最小化的 Tauri + React + TypeScript 项目模板，包含以下特性：

- ⚡️ Vite + React + TypeScript
- 🔥 Tauri v2 - 用于构建跨平台桌面应用
- 🎨 Material UI - 美观的 UI 组件库
- 📦 TanStack Router - 类型安全的路由系统
- 🛠 Biome - 代码格式化和 lint
- 💅 SCSS 模块 - 样式隔离
- 📱 响应式设计

## 开发环境要求

- Node.js (推荐 v20+)
- pnpm
- Rust (用于 Tauri)

## 开始使用

1. 克隆此仓库
2. 安装依赖：
   ```bash
   pnpm install
   ```
3. 启动开发服务器：
   ```bash
   pnpm dev
   ```

## 项目结构

```
src/
├── routes/             # 路由组件
│   ├── __root.tsx     # 根路由
│   └── index.tsx      # 首页
├── styles/            # 全局样式
│   └── global.scss    # 全局 CSS
└── main.tsx          # 应用入口
```

## 构建

```bash
pnpm build
```

## 许可证

MIT