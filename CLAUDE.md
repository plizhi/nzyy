# 内在结构养育体系 · 门户

> nzyy.cc — 整个体系的入口页

---

## 项目定位

nzyy.cc 是整个"内在结构养育"体系的门户页面，不是单一产品的落地页。

核心目标：
1. 让访客理解"内在结构养育"是什么
2. 展示体系下的产品矩阵（评测 / 记录 / 成长）
3. 通过朋大大的故事建立信任

---

## 产品矩阵

### 评测
- 荔学卷 — K12 学习力测评（已有）
- 荔心卷 — 各阶段孩子十大心神能力测评（规划中）
- 升学指数 — 211/985/清北升学指数（规划中）

### 记录
- wxcl（望杏成林）— 亲子成长记录（已有）
- 父母成长 — 家长自我成长（规划中）

### 成长
- 线上课程（规划中）

---

## 内容方向

### 页面结构（从理念到产品）

1. **理念导入** — 内在结构养育的核心，先让用户理解"这是什么"
2. **产品入口** — 评测、记录两大维度并列
3. **朋大大故事** — 发起人自述，增强信任
4. **Footer** — 导航和版权信息

### 核心句式方向（待定）

页面开头需要精准有力的表达，击中一二线K12家长。

参考方向：
- 问题不是突然发生的——沉迷手机、社交困境、厌学躺平，之前都有迹可循
- 养育最大的隐患是"看不见"和"耽误"
- 核心价值：在问题严重之前就被看见

具体句式需继续打磨。

---

## 视觉风格

- 主色：#f59e0b（暖橙），与 lzti/wxcl 一致
- 背景：#FFFBF5（米白）
- 文字：#78350f（深棕）
- Accent：#fef3c7（浅暖黄）

风格：克制从容，留白充足，移动优先，体现专业感和体系感。

---

## 技术栈

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- 海报生成：Canvas 原生绘制
- 数据存储：localStorage（会话级）
- 埋点：自定义埋点函数
- 部署：PM2 + `next start`（port 3009）
- 域名：nzyy.cc
- SSL：Let's Encrypt（已配置）

### 关键约束
- 关键词词库为占位状态，开发用示例词库，上线前替换
- 外部工具链接为占位配置，上线前替换
- 海报设计稿必须由 UI 先交付，前端不提前绘制 Canvas 视觉

---

## 目录结构

```
nzyy.cc/
├── app/
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   ├── globals.css          # 全局样式
│   ├── error.tsx            # 错误边界
│   ├── intent/               # 初心页
│   │   └── page.tsx
│   ├── theory/              # 理论页
│   │   └── page.tsx
│   ├── tools/               # 工具页
│   │   └── page.tsx
│   └── about/               # 关于我们页
│       └── page.tsx
├── components/              # 公共组件
│   ├── Navigation.tsx
│   └── Footer.tsx
├── lib/                     # 工具函数
│   ├── tracking.ts          # 埋点
│   ├── storage.ts           # localStorage
│   └── keywords.ts          # 关键词匹配
├── content/                  # 内容文件
├── public/                   # 静态资源
├── config/                  # 配置文件
│   ├── keywords.json         # 关键词词库（占位）
│   └── links.json            # 外部工具链接（占位）
├── package.json
├── next.config.ts
├── tsconfig.json
└── CLAUDE.md
```

### 页面清单
| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | 首屏、三入口、理念区、理论预览、彼此滋养、工具区、故事区、页脚 |
| 初心页 | `/intent` | 成全孩子五层次、彼此滋养三层次、初心共鸣交互、海报生成 |
| 理论页 | `/theory` | 六大结构详解、十大能力时间轴、结构与能力关系 |
| 工具页 | `/tools` | 望杏成林入口、荔枝测评入口、未来预留 |
| 关于我们 | `/about` | 创始人故事简版、理论渊源、联系方式 |

---

## 部署

### PM2 配置（ecosystem.config.js）

```js
module.exports = {
  apps: [
    {
      name: 'nzyy',
      script: 'node_modules/.bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3009,
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ],
};
```

### Nginx 配置

已存在 `/etc/nginx/sites-enabled/nzyy.cc`，root 指向 `/var/www/nzyy.cc`。

新项目部署后需同步更新 root。

---

## 当前优先级

1. UI 交付海报设计稿（含坐标标注）
2. 提供望杏成林、荔枝测评正式跳转链接
3. Git 初始化并提供远程仓库地址
4. 服务器部署（SSH 权限或手动操作）

## 状态

- [x] 项目初始化（Next.js 16 + React 19 + Tailwind CSS 4）
- [ ] UI 设计稿（海报 + 首页 + 初心页）
- [ ] 静态页面开发（首页 / 理论页 / 工具页 / 关于我们页）
- [ ] 初心共鸣交互逻辑
- [ ] 海报生成（Canvas）
- [ ] 数据埋点
- [ ] 移动端适配
- [ ] 联调测试
- [ ] 部署上线

---

## 相关项目

| 项目 | 目录 | 说明 |
|------|------|------|
| 荔枝测评 | /home/pupeng/projects/lzti | 生产 |
| 荔枝测评开发 | /home/pupeng/projects/lzti-dev | 开发 |
| 望杏成林 | /home/pupeng/projects/wxcl-v2 | 生产 |
| 望杏成林开发 | /home/pupeng/projects/wxcl-v2-dev | 开发 |
| 朋大大故事 | /home/pupeng/projects/peng-story | 备份源文件 |
