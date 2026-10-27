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
| 初心页 | `/intent` | 成全孩子五层次、彼此滋养四层次、初心共鸣交互、海报生成 |
| 理论页 | `/theory` | 六大结构详解、十大能力时间轴、结构与能力关系 |
| 工具页 | `/tools` | 望杏成林入口、荔枝测评入口、未来预留 |
| 关于我们 | `/about` | 创始人故事简版、理论渊源、联系方式 |

---

## 部署

### 服务端口映射（2026-09-22）

| 域名 | 端口 | PM2 进程 | 代码分支 |
|------|------|----------|----------|
| lzti.nzyy.ltd | 3010 | lzti-dev | dev-work |
| lzti.nzyy.cc | 3000 | lzti | master |
| wxcl.nzyy.ltd | 3011 | wxcl-v2-dev | dev-work |
| wxcl.nzyy.cc | 3006 | wxcl-v2 | master |
| nzyy.cc | 3009 | nzyy | master |
| auth.nzyy.ltd | 3012 | nzyy-auth-dev | - |

### PM2 配置

本机所有实例的启动配置**统一在 `/home/pupeng/projects/deploy/ecosystem.config.js`**，各项目仓库里不再放 ecosystem 文件。

```bash
cd /home/pupeng/projects/deploy
pm2 restart nzyy   # 重启单个实例（最常用）
pm2 save            # 刷新 dump.pm2，重启机器后靠它恢复
```

新增应用或改端口，都改那个目录里的配置。

### Nginx 配置

已存在 `/etc/nginx/sites-enabled/nzyy.cc`，root 指向 `/var/www/nzyy.cc`。

新项目部署后需同步更新 root。

---

## 状态

- [x] 项目初始化（Next.js 16 + React 19 + Tailwind CSS 4）
- [x] 静态页面开发（首页 / 理论页 / 工具页 / 定价页 / 关于我们页 / 咨询页 / 订阅页等）
- [x] 初心共鸣交互逻辑
- [x] 海报生成（Canvas）
- [x] localStorage 记忆功能
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
| nzyy-auth | /srv/nzyy-auth-dev | SSO 认证服务（**dev 与 prod 共用此目录**，改代码要双实例重启）|

---

## SSO 身份互通（v1.3 方案）

### 架构

```
港服（nginx + SSL 终止）
    ↓
auth.nzyy.ltd → 乌服:3012 (auth-dev)
auth.nzyy.cc → 乌服:3013 (auth-prod，已开通)
    ↓
wxcl.nzyy.ltd → 乌服:3011 (wxcl-dev)
lzti.nzyy.ltd → 乌服:3010 (lzti-dev)
```

> 端口订正（2026-10-26）：生产 auth 是 **3013**，不是 3011（3011 被 wxcl-v2-dev 占用，3012 是 auth-dev）。
> 两个 auth 实例**共用同一代码目录** `/srv/nzyy-auth-dev`，改代码必须双实例重启。

### auth-dev 部署状态（2026-09-26）

| 项目 | 状态 | 说明 |
|------|-------|------|
| 项目代码 | ✅ | /srv/nzyy-auth-dev |
| 数据库 | ✅ | nzyy_auth_dev 已创建 |
| Prisma Schema | ✅ | 四表已同步到数据库 |
| RSA 密钥 | ✅ | keys/private.pem, public.pem |
| 环境变量 | ✅ | .env.dev 已配置 |
| nginx (港服) | ✅ | auth.nzyy.ltd → 3012 |
| JWKS 端点 | ✅ | /.well-known/jwks.json |
| authorize 端点 | ✅ | /oauth/authorize |
| 邀请创建 | ✅ | /src/invite.js（凭据签发接口 `POST /internal/invites` 见账号体系一节） |
| 激活 GET 页面 | ✅ | /activate (GET) |
| 激活 POST | ✅ | 已通 |
| 反向冒烟 | ✅ | AUTH_CLIENTS 未配置时启动即死 |
| PM2 守护 | ✅ | 已登记到 /home/pupeng/projects/deploy/ecosystem.config.js |
| HTTPS 验证 | ✅ | auth.nzyy.ltd 访问正常 |
| wxcl-dev 接入 | ✅ | 一次性 token 链路已通（2026-10-24） |
| 生产实例 | ✅ | auth.nzyy.cc → 乌服 **3013**（2026-10-25，与 dev 共用代码目录） |

### auth-dev 服务命令

```bash
# PM2 启动（配置在 /home/pupeng/projects/deploy/ecosystem.config.js）
pm2 start /home/pupeng/projects/deploy/ecosystem.config.js --only nzyy-auth-dev

# PM2 查看状态
pm2 list | grep auth

# PM2 查看日志
pm2 logs nzyy-auth-dev

# PM2 重启
pm2 restart nzyy-auth-dev

# 创建邀请
cd /srv/nzyy-auth-dev && source .env.dev && node src/invite.js +86138xxxxxxx wxcl-dev admin "test"

# 测试端点
curl http://127.0.0.1:3012/.well-known/jwks.json
curl "http://127.0.0.1:3012/oauth/authorize?client_id=wxcl-dev&redirect_uri=https://wxcl.nzyy.ltd/api/auth/callback"
```

### auth-dev 环境变量（.env.dev）

```
NODE_ENV=development
PORT=3012
AUTH_DATABASE_URL=postgresql://postgres@127.0.0.1:5432/nzyy_auth_dev
WXCL_DATABASE_URL=postgresql://postgres@127.0.0.1:5432/wxcl_dev
JWT_ISSUER=https://auth.nzyy.ltd
COOKIE_DOMAIN=.nzyy.ltd
AUTH_CLIENTS=wxcl-dev,lzti-dev
CLIENT_WXCL_DEV_SECRET=<独立生成>
CLIENT_WXCL_DEV_REDIRECT_URI=https://wxcl.nzyy.ltd/api/auth/callback
CLIENT_LZTI_DEV_SECRET=<独立生成>
CLIENT_LZTI_DEV_REDIRECT_URI=https://lzti.nzyy.ltd/api/auth/callback
```

### 下游接入待办

- [x] wxcl-v2-dev 接入 SSO（一次性 token 链路已通，2026-10-24）
- [x] lzti-dev 接入 SSO（2026-10-24）
- [x] 生产 auth 部署（auth.nzyy.cc, port **3013**，2026-10-25）
- [ ] 生产下游接入（等统一账号体系，见下节）

---

## 跨应用账号体系（2026-10-26）

> 详细方案见 `/home/pupeng/projects/lzti-dev/knowledge/跨应用账号体系方案.md`（含〇之七查证事实、〇之八实测、〇之九 B3 落地）。

### 一句话现状

**管道全通，用户还登不了**——两端都是空的：

| 检查项 | 生产实况（2026-10-26 实测） |
|---|---|
| 生产 auth 身份库 `AuthUser` | **0 行** |
| 生产 auth `AuthAuditLog` | **0 行** |
| 生产 wxcl 用户 | 39 个（38 有手机号） |
| 其中归属已证明（`phone_verified_at` 非空） | **0 个** |
| 其中有本地密码且有手机号 | 12 个（归属未证明，申请不了统一密码） |
| 生产 wxcl / lzti 登录页 | `ssoEnabled: false` —— SSO 入口未渲染 |

### 已落地的批次

| 批 | 内容 | 状态 |
|---|---|---|
| B0 | wxcl 通用码越权路径修复 + 存量 25 条通用码作废 | ✅ 提交 `b8caaea` |
| B1 | auth `/activate` 改 upsert、wxcl audience + 409、两端 fetch 超时 | ✅ `140c377` / `b69e9b1` / `39ac331` |
| B2 | auth 凭据签发接口 `POST /internal/invites` + wxcl 统一账号密码入口 | ✅ 2026-10-26 |
| B3 | 登记接口 `POST /internal/registrations` + `AuthAuditLog` + wxcl 两个 hook | ✅ 提交 `210d7cd` / `425a759` / `e5faa79` |
| B4 | 开 SSO 入口 | ⏳ 判据未达 |

### 唯一闸门（阻塞后面所有事）

**运营把 11 张专属码发给用户**（台账在 `/home/pupeng/projects/ops/wxcl-activation-codes-2026-10-26.json`，**不入 git**，权限 600）。

链路：用户激活 → 自动登记 → 设统一密码 → 生产身份库才出现第一个账号。

**闸门没开之前不要开 SSO 入口**——否则会出现「点了登不进去」的半成品状态。

### 新发现的缺口：3 个真人号被漏掉

`18611149931`、`18601041357`、`18618309001`。

这 3 个有 wxcl 本地密码、能正常登录，但手机号归属没被证明过（`phone_verified_at` 为 NULL）→ 登记的 gate 不放行 → **拿不到统一密码，也进不了跨应用体系**。

11 张码覆盖的是「无密码、登不进去」的 11 人；要不要给这 3 个也发码是运营决策——发就全员覆盖，不发就是自愿让他们留在体系外。

> **本轮结论：建议一次发 14 张（11 + 3）**，否则这 3 个真人号会卡在门外。签发需朋大大授权。

### 剩余待办

| 事项 | 判据 |
|---|---|
| B4 开 SSO 入口 | 差 5 个带统一密码的真人号（现 0）。技术上还差两应用各 4 个 env + 重新 build。顺序上必须先做完闸门，否则会出现「点了登不进去」的入口 |
| lzti 接登记 hook | 等 lzti 有归属证明通道（专属码/短信） |
| lzti 侧统一密码入口 | 同上 |
| outbox 重试队列 | 等 hook 丢失率显现问题 |
| 周对账 | 规格要求「每周对账一次」，B3 只做了审计表和补登脚本，**周对账还没做**（备份还原校验 ≠ 账号层对账） |
| 补登脚本生产验证 | `src/register-batch.js` 在生产没跑过（生产集合为 0），发码后再跑一次验证 |
| 生产 wxcl Intent 枚举 | 缺 `venting`（历史漂移，与账号体系无关，但将来 db push 会撞） |

### 风险项

- **deploy 仓库无远端**：`/home/pupeng/projects/deploy/` 的 pm2 配置与部署脚本只存在本机，单点风险。需授权建 GitHub 私有库。
- **GitHub Actions 自动部署**：一直挂着「想好了再实现」，未动。

### 已核实无需处理

- 备份 2026-10-26 03:17 八个库全 OK，`backup/verify_restore.sh` 还原校验通过。
- 生产那两张弱口令种子码（123456/654321）都已被消费（一次性码已作废），不是风险。
- `apply_rewards` 外键缺失可安全后补（无孤儿行）。

### 港服 nginx 配置（auth 服务）

```
/etc/nginx/sites-available/auth.nzyy.ltd
/etc/nginx/sites-available/auth.nzyy.cc
```

### 关键技术问题：阿里云香港节点备案检测

**问题现象**：nginx 代理 upstream 时，响应被替换为 403 ICP 备案页面。

**根因**：阿里云对 HTTP 响应中的 `Host` 头进行备案检测，未备案域名触发拦截。

**解决方案**：nginx 配置使用 `proxy_set_header Host $proxy_host` 而非 `$host`。

```nginx
location / {
    proxy_pass http://auth_dev_backend;
    proxy_set_header Host $proxy_host;  # 绕过阿里云备案检测
}
```

---

## 首页引导页改动（2026-09-26）

### 改动内容

引导页增加"查看我的结果"按钮：
- 首次访问用户：只显示"对齐育儿初心"按钮
- 再次访问用户（有测试记录）：显示"对齐育儿初心" + "查看我的结果"两个按钮

### 代码位置

- 文件：app/page.tsx
- 改动：引导页按钮区域（约 line 558-640）
- 逻辑：基于 hasTestRecord state 判断显示

### 验证

- TypeScript 检查通过
- PM2 重启：`pm2 restart nzyy`

---

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
