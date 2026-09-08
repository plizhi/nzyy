"use client";

export default function IntroPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans SC', -apple-system, sans-serif", backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', lineHeight: 1.8, letterSpacing: '0.02em' }}>

      {/* 顶部导航 */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(251, 247, 241, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--divider)' }}>
        <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 600, fontSize: '1.2rem', color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '0.1em' }}>内在结构养育</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}>联系我们</a>
        </nav>
      </header>

      {/* 首屏 */}
      <section style={{ textAlign: 'center', padding: '120px 32px 80px', background: 'linear-gradient(180deg, var(--bg-color) 0%, var(--bg-soft) 100%)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 600, marginBottom: 24, letterSpacing: '0.1em' }}>内在结构养育</h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-secondary)' }}>一套动静兼顾的心灵建造体系</p>
        </div>
      </section>

      {/* 容器 */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>

        {/* 01 它是什么 */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 600 }}>01</span>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)' }}>它是什么</h2>
          </div>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 2, marginBottom: 16 }}>内在结构养育是一套育儿理论框架。</p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 2 }}>它的核心是：<span style={{ color: 'var(--accent-color)', fontWeight: 500 }}>用结构思维理解孩子，用发展眼光看见成长。</span></p>
        </section>

        {/* 分隔线 */}
        <div style={{ borderTop: '1px solid var(--divider)' }} />

        {/* 02 为什么需要它 */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 600 }}>02</span>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)' }}>为什么需要它</h2>
          </div>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 2, marginBottom: 16 }}>孩子出了问题——成绩下滑、沉迷手机、叛逆——家长的第一反应往往是&quot;怎么解决&quot;。</p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 2, marginBottom: 16 }}>但这些问题，只是外在的&quot;症状&quot;。真正的根源，在孩子的内在世界。</p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 2 }}>内在结构养育说：<span style={{ color: 'var(--accent-color)', fontWeight: 500 }}>父母最该做的，不是天天灭火，而是学会看见孩子内在正在发生什么。</span></p>
        </section>

        {/* 分隔线 */}
        <div style={{ borderTop: '1px solid var(--divider)' }} />

        {/* 03 核心框架 */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 600 }}>03</span>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)' }}>核心框架</h2>
          </div>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 32 }}>动静兼顾的理论基石</p>

          {/* 六大内在结构 */}
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: 16, marginTop: 40 }}>六大内在结构（静态） - 孩子内在世界的构成</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, margin: '40px 0' }}>
            {[
              { name: '心神', desc: '统合一切的主体感，觉知、专注、思考、抉择的中心。' },
              { name: '准则价值', desc: '内在的宪法与指南针，为心神的决策提供依据。' },
              { name: '情绪冲动', desc: '内在的能量与潮汐，生命最原始的动力来源。' },
              { name: '防御与妥协机制', desc: '内在的免疫与调节系统，处理内在冲突。' },
              { name: '自我意向', desc: '内在的自画像，对『我是怎样一个人』的整体评价。' },
              { name: '内化客体', desc: '内在的关系模板，重要他人互动方式在内心的烙印。' },
            ].map((item, i) => (
              <div key={i} className="stagger-fade-up" style={{ background: 'var(--card-bg)', padding: '32px 28px', borderRadius: 'var(--radius-m)', border: '1px solid rgba(234, 224, 213, 0.5)', boxShadow: 'var(--shadow-soft)', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'default' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(62, 44, 44, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}>
                <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: 12 }}>{item.name}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 十大心神能力 */}
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: 16, marginTop: 60 }}>十大心神能力（动态） - 孩子在不同阶段的发展任务</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, margin: '40px 0' }}>
            {[
              { stage: '0-6个月', ability: '安全感', exp: '我存在，且被安稳接住' },
              { stage: '3个月-会走', ability: '营养足', exp: '我内外都富足' },
              { stage: '会走-上幼儿园前', ability: '主体感', exp: '我能影响这个世界' },
              { stage: '会走-学前', ability: '现实感', exp: '世界是这样运行的' },
              { stage: '幼儿园阶段', ability: '主动', exp: '我想试试，我敢开始' },
              { stage: '幼儿园阶段', ability: '真实客体之爱', exp: '我能爱一个真实的人' },
              { stage: '小学低年级', ability: '生产勤勉', exp: '我能完成，我因投入而满足' },
              { stage: '小学高年级', ability: '胜任力感', exp: '我擅长这件事' },
              { stage: '初中阶段', ability: '心理韧性', exp: '过程虽苦，但我能掌管并相信努力' },
              { stage: '高中阶段', ability: '三观', exp: '我是谁，我相信什么，我为何而活' },
            ].map((item, i) => (
              <div key={i} className="stagger-fade-up" style={{ display: 'flex', alignItems: 'center', background: 'var(--card-bg)', padding: '24px 32px', borderRadius: 'var(--radius-m)', borderLeft: '4px solid var(--accent-color)', boxShadow: 'var(--shadow-soft)', gap: 24, transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(62, 44, 44, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 500, minWidth: 140 }}>{item.stage}</span>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.2rem', fontWeight: 600, minWidth: 100 }}>{item.ability}</span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flex: 1 }}>{item.exp}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--bg-soft)', padding: '32px 40px', borderRadius: 'var(--radius-m)', marginTop: 40, textAlign: 'center', fontFamily: "'Noto Serif SC', serif", fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            六大结构回答&quot;孩子内在是怎么构成的&quot;<br />十大能力回答&quot;孩子现在在长什么&quot;
          </div>
        </section>

        {/* 分隔线 */}
        <div style={{ borderTop: '1px solid var(--divider)' }} />

        {/* 04 育儿初心 */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 600 }}>04</span>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)' }}>育儿初心</h2>
          </div>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: 32 }}>养育的目标是什么</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 40 }}>
            {/* 成全孩子 */}
            <div>
              <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', marginBottom: 8, color: 'var(--accent-color)' }}>成全孩子</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 32, fontWeight: 500 }}>让他长成他自己</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { title: '永葆热情与好奇', desc: '保护孩子眼里探索的光' },
                  { title: '识风险，知进退', desc: '长出保护自己的智慧' },
                  { title: '唤醒勇气与力量', desc: '困难是唤醒勇气的契机' },
                  { title: '不辜负天赋', desc: '绽放自己的光彩' },
                  { title: '享受其中', desc: '从过程本身获得快乐' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.2rem', color: 'var(--accent-color)', fontWeight: 600, minWidth: 24 }}>{i + 1}</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 4 }}>{item.title}</strong>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 彼此滋养 */}
            <div>
              <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', marginBottom: 8, color: 'var(--accent-color)' }}>彼此滋养</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 32, fontWeight: 500 }}>两个独立的人，彼此成就</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { title: '彼此连接', desc: '知道对方时刻存在，随时可以建立有效的连接' },
                  { title: '彼此看见', desc: '我懂你这个人，你还没说，我已经懂了' },
                  { title: '彼此理解', desc: '我接受你行为背后的逻辑，你的方式，我接受' },
                  { title: '彼此支持', desc: '我愿意为你加持，无论你做什么选择' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.2rem', color: 'var(--accent-color)', fontWeight: 600, minWidth: 24 }}>·</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 4 }}>{item.title}</strong>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 分隔线 */}
        <div style={{ borderTop: '1px solid var(--divider)' }} />

        {/* 落地工具 */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 600 }}>05</span>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)' }}>落地工具</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {/* 望杏成林 */}
            <div style={{ background: 'var(--card-bg)', padding: '36px 28px', borderRadius: 'var(--radius-l)', boxShadow: 'var(--shadow-soft)', border: '1px solid rgba(234, 224, 213, 0.4)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(62, 44, 44, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}>
              <div style={{ fontSize: '2rem', marginBottom: 20 }}>🌱</div>
              <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.3rem', marginBottom: 6, color: 'var(--text-primary)' }}>望杏成林</h4>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', marginBottom: 16 }}>日常陪伴与滋养</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>亲子互动记录 · 情绪命名<br />习惯养成 · 成长瞬间捕捉</p>
            </div>
            {/* 荔枝测评 */}
            <div style={{ background: 'var(--card-bg)', padding: '36px 28px', borderRadius: 'var(--radius-l)', boxShadow: 'var(--shadow-soft)', border: '1px solid rgba(234, 224, 213, 0.4)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 20 }}>📊</div>
              <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.3rem', marginBottom: 6, color: 'var(--text-primary)' }}>荔枝测评</h4>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', marginBottom: 16 }}>阶段性评估</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(199, 109, 74, 0.06)', borderRadius: 10 }}>
                  <div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>荔学卷</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-color)', marginLeft: 8 }}>K12学习力测评</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(62, 44, 44, 0.06)', borderRadius: 4, color: 'var(--text-secondary)' }}>可使用</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(128, 110, 102, 0.04)', borderRadius: 10, opacity: 0.8 }}>
                  <div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>荔心卷</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: 8 }}>十大心神能力发展</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(128, 110, 102, 0.1)', borderRadius: 4, color: 'var(--text-secondary)' }}>预告</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(128, 110, 102, 0.04)', borderRadius: 10, opacity: 0.8 }}>
                  <div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>荔升卷</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: 8 }}>升学潜力指数</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(128, 110, 102, 0.1)', borderRadius: 4, color: 'var(--text-secondary)' }}>预告</span>
                </div>
              </div>
            </div>
            {/* 咨询服务 */}
            <div style={{ background: 'var(--card-bg)', padding: '36px 28px', borderRadius: 'var(--radius-l)', boxShadow: 'var(--shadow-soft)', border: '1px solid rgba(234, 224, 213, 0.4)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(62, 44, 44, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}>
              <div style={{ fontSize: '2rem', marginBottom: 20 }}>💬</div>
              <h4 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.3rem', marginBottom: 6, color: 'var(--text-primary)' }}>咨询服务</h4>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', marginBottom: 16 }}>深度人工服务</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>危机干预包</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-primary)' }}>1999元/次</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>矫正计划</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-primary)' }}>9999元/年</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>标准陪跑</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-primary)' }}>39800元/年</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 06 创始人故事 */}
      <section style={{ background: 'var(--bg-soft)', padding: '80px 32px', margin: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 48, justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.4rem', color: 'var(--accent-color)', fontWeight: 600 }}>06</span>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)' }}>创始故事</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: 2, color: 'var(--text-primary)', marginBottom: 32, textAlign: 'left' }}>
            朋大大与杨莉老师，用十余年时间，在心理学专业学习与真实育儿实践中，共同打磨出这套心灵建造体系。他们的女儿，是这套方法的第一位完整践行者——2023年，以裸分考入清华大学。
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 2, color: 'var(--text-primary)', marginBottom: 32, textAlign: 'left' }}>
            但真正让他们骄傲的，从来不是「考上清华」这个结果，而是女儿在清华园里依然保持的向上生长、自我迭代、终身成长的姿态。
          </p>
          <div style={{ position: 'relative', padding: '24px 0', marginTop: 48 }}>
            <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--accent-color)', lineHeight: 1.6, fontStyle: 'italic' }}>
              每个孩子天生自带内在力量，<br />从不缺少成长的能力，<br />只是缺少被看见、被理解、被科学正向引导
            </p>
          </div>
        </div>
      </section>

      {/* 底部金句 */}
      <section style={{ padding: '100px 32px 60px', textAlign: 'center', background: 'linear-gradient(180deg, var(--bg-color) 0%, var(--bg-soft) 100%)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: 16 }}>你对待孩子的方式<br />就是孩子内心世界的建筑图纸</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>用结构思维理解孩子，用发展眼光看见成长</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 48 }}>从理解开始，真正成全</p>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>内在结构养育</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>理论与实践的完整育儿体系</p>
        </div>
      </section>

      {/* 注册 + 分享 */}
      <section style={{ padding: '48px 32px', background: 'var(--bg-color)' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            style={{ display: 'block', padding: '16px 32px', backgroundColor: '#f59e0b', color: '#fff', fontWeight: 500, borderRadius: 9999, textAlign: 'center', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
          >
            注册 / 登录
          </button>
          <button
            style={{ display: 'block', padding: '16px 32px', border: '1px solid rgba(245,158,11,0.3)', color: 'rgba(120,53,15,0.7)', fontWeight: 500, borderRadius: 9999, textAlign: 'center', background: 'transparent', cursor: 'pointer', fontSize: '1rem' }}
          >
            生成分享海报
          </button>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="contact" style={{ padding: '80px 32px', textAlign: 'center', background: 'var(--bg-soft)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.2rem', fontWeight: 600, marginBottom: 8, color: 'var(--text-primary)' }}>内在结构养育</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>理论与实践的完整育儿体系</p>
        </div>
      </footer>

    </div>
  );
}
