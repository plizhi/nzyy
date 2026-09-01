-- =====================================================
-- 埋点分析数据库 schema
-- 设计理念：One Big Table + JSONB 灵活性 + SQL 规范性
-- =====================================================

-- -----------------------------------------------------
-- 1. sites 表（应用注册表）
-- -----------------------------------------------------
CREATE TABLE sites (
    site_id    VARCHAR(50) PRIMARY KEY,  -- portal / quiz / assessment / ...
    name       VARCHAR(100),            -- 产品中文名
    domain     VARCHAR(255),             -- 域名
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 预置初始应用
INSERT INTO sites (site_id, name, domain) VALUES
    ('nzyy', '内在结构养育', 'nzyy.cc'),
    ('wxcl', '望杏成林', 'wxcl.nzyy.cc'),
    ('lzti', '荔枝测评', 'lzti.nzyy.cc');

-- -----------------------------------------------------
-- 2. events 表（事件大宽表）
-- -----------------------------------------------------
CREATE TABLE events (
    id          BIGSERIAL,
    user_id     VARCHAR(64)  NOT NULL,          -- 内部匿名ID，不存手机号等敏感信息
    session_id  VARCHAR(64),                     -- 会话ID
    event_name  VARCHAR(255) NOT NULL,          -- 事件名：产品_对象_动作
    timestamp   TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- 环境信息
    site_id     VARCHAR(50)  NOT NULL,          -- 应用标识
    url         TEXT,
    referrer    TEXT,
    device_type VARCHAR(20) CHECK (device_type IN ('mobile', 'desktop', 'tablet', 'unknown')),
    browser_name VARCHAR(50),
    os_name     VARCHAR(50),

    -- 渠道信息（UTM）
    utm_source   VARCHAR(100),
    utm_medium   VARCHAR(100),
    utm_campaign VARCHAR(100),

    -- 事件属性（JSONB 灵活扩展）
    properties JSONB DEFAULT '{}'::jsonb,

    PRIMARY KEY (id)
);

-- 关键索引
CREATE INDEX idx_events_timestamp ON events(timestamp DESC);
CREATE INDEX idx_events_user_id ON events(user_id);
CREATE INDEX idx_events_event_name ON events(event_name);
CREATE INDEX idx_events_site_id ON events(site_id);
CREATE INDEX idx_events_session_id ON events(session_id);

-- JSONB GIN 索引（加速 properties 字段查询）
CREATE INDEX idx_events_properties ON events USING GIN (properties);

-- FK 约束
ALTER TABLE events ADD CONSTRAINT fk_events_site
    FOREIGN KEY (site_id) REFERENCES sites(site_id);

-- -----------------------------------------------------
-- 3. users 表（用户首触记录）
-- -----------------------------------------------------
CREATE TABLE users (
    user_id          VARCHAR(64) PRIMARY KEY,
    first_seen_time  TIMESTAMPTZ NOT NULL,
    first_site_id    VARCHAR(50),
    first_traffic_source VARCHAR(100)
);

-- -----------------------------------------------------
-- 4. 事件命名规范（参考）
-- -----------------------------------------------------
-- 格式：产品_对象_动作
-- 示例：
--   nzyy_test_start      -- 开始测试
--   nzyy_test_submit    -- 提交测试
--   nzyy_register       -- 注册
--   wxcl_record_create  -- 创建记录
--   lzti_assess_start   -- 开始评测
--   lzti_assess_complete -- 完成评测

-- -----------------------------------------------------
-- 5. 注意事项
-- -----------------------------------------------------
-- 1. 高频事件（如实时输入、心跳）不进此表，存 Redis 或专门日志表
-- 2. 每月执行一次 VACUUM ANALYZE events 维护索引
-- 3. 数据量超过千万级后考虑按月分区
-- 4. 1年以上数据归档到对象存储
