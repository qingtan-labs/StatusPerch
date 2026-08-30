import {
  ArrowRight,
  Check,
  ChevronLeft,
  Command,
  CodeXml,
  Download,
  Globe2,
  Laptop,
  Languages,
  LockKeyhole,
  MousePointer2,
  ShieldCheck,
  TimerReset,
  WifiOff,
} from 'lucide-react';
import { useState } from 'react';

type Language = 'en' | 'zh';

const copy = {
  en: {
    nav: ['How it works', 'Privacy', 'Features', 'Download'],
    lang: '中文',
    languageLabel: '切换到中文',
    eyebrow: 'A calmer Mac menu bar',
    titleA: 'Make room in your',
    titleB: 'Mac menu bar.',
    intro:
      'Hide and organize menu bar icons with one click. Lightweight, offline, privacy-friendly, and permission-free.',
    download: 'Download v1.0.0',
    github: 'View on GitHub',
    specs: ['macOS 13+', 'Apple silicon + Intel', 'Free & open source'],
    before: 'Before',
    after: 'After',
    heroNote: 'Your clock and everyday icons stay visible.',
    howEyebrow: 'Native by design',
    howTitle: 'Three steps. Zero new habits.',
    howIntro:
      'StatusPerch works with the way macOS already lets you arrange menu bar items.',
    workflowAlt: 'Arrange, hide, and reveal menu bar items in three steps',
    privacyEyebrow: 'Privacy by design',
    privacyTitle: 'Your menu bar stays yours.',
    privacyIntro:
      'No screenshots, no cloud account, and no background analytics. StatusPerch only controls its own divider and chevron.',
    privacyCards: [
      ['No Screen Recording', 'It never reads or captures your screen.'],
      ['No Accessibility Access', 'No control of other apps or simulated clicks.'],
      ['No Network Required', 'Your settings stay locally on your Mac.'],
    ],
    featureEyebrow: 'Small utility, thoughtful details',
    featureTitle: 'Built to disappear into your workflow.',
    features: [
      ['One-click collection', 'Click the chevron to hide or reveal your low-frequency icons.'],
      ['Native ordering', 'Hold Command and drag. Your chosen order is preserved.'],
      ['Auto-hide timer', 'Collapse again after 5, 10, or 30 seconds.'],
      ['Launch at login', 'Ready when your Mac starts, without opening a window.'],
      ['English & Chinese', 'Follow macOS or choose a language manually.'],
      ['Light & dark', 'Designed to feel at home in either appearance.'],
    ],
    languageTitle: 'Made for more than one language.',
    languageBody:
      'English is the default on the website. The app can follow your Mac or use your preferred language.',
    languageAlt: 'StatusPerch language settings',
    downloadEyebrow: 'Ready when you are',
    downloadTitle: 'Give your menu bar some breathing room.',
    downloadIntro:
      'Universal build for Apple silicon and Intel Macs. Requires macOS 13 Ventura or later.',
    getDmg: 'Download DMG',
    releaseNotes: 'Release notes',
    checksum: 'SHA-256',
    installTitle: 'First launch',
    installBody:
      'StatusPerch is not notarized yet. Control-click the app, choose Open, then confirm Open. Never disable Gatekeeper.',
    limitsTitle: 'Good to know',
    limitsBody:
      'Some macOS system icons cannot be moved with Command-drag. StatusPerch uses the native menu bar and does not create a second row.',
    footer: 'A focused macOS utility by qingtan-labs.',
  },
  zh: {
    nav: ['使用方法', '隐私', '功能', '下载'],
    lang: 'English',
    languageLabel: 'Switch to English',
    eyebrow: '让 Mac 菜单栏更从容',
    titleA: '给你的 Mac 菜单栏',
    titleB: '腾出空间。',
    intro: '一键收起并整理菜单栏图标。轻量、离线、注重隐私，并且无需系统权限。',
    download: '下载 v1.0.0',
    github: '前往 GitHub',
    specs: ['macOS 13+', 'Apple 芯片 + Intel', '免费开源'],
    before: '收起前',
    after: '收起后',
    heroNote: '时钟和常用图标始终保持可见。',
    howEyebrow: '遵循 macOS 原生逻辑',
    howTitle: '三个步骤，无需改变习惯。',
    howIntro: 'StatusPerch 使用 macOS 自带的菜单栏排列方式，简单、稳定、容易理解。',
    workflowAlt: '三个步骤完成菜单栏图标排列、收起和展开',
    privacyEyebrow: '隐私优先',
    privacyTitle: '你的菜单栏，只属于你。',
    privacyIntro:
      '不截屏、不需要云端账户，也没有后台分析。StatusPerch 只控制自己的分隔线和箭头。',
    privacyCards: [
      ['无需屏幕录制', '不会读取或捕获你的屏幕内容。'],
      ['无需辅助功能权限', '不控制其他应用，也不模拟点击。'],
      ['无需联网', '所有设置仅保存在你的 Mac 本地。'],
    ],
    featureEyebrow: '小工具，细节不小',
    featureTitle: '融入日常，用完即隐身。',
    features: [
      ['一键收纳', '单击箭头，收起或展开低频图标。'],
      ['原生排序', '按住 Command 拖动，保留你设定的顺序。'],
      ['自动收起', '展开 5、10 或 30 秒后自动收起。'],
      ['登录时启动', 'Mac 开机后自动就绪，不弹出多余窗口。'],
      ['中英文切换', '可跟随 macOS，也可手动指定语言。'],
      ['亮色与暗色', '自动适配系统外观，始终自然清晰。'],
    ],
    languageTitle: '面向全球用户的语言体验。',
    languageBody: '网站默认使用英文，应用可跟随 Mac 系统，也可以手动选择语言。',
    languageAlt: 'StatusPerch 语言设置',
    downloadEyebrow: '现在开始',
    downloadTitle: '让菜单栏重新呼吸。',
    downloadIntro: '适用于 Apple 芯片与 Intel Mac，需要 macOS 13 Ventura 或更高版本。',
    getDmg: '下载 DMG',
    releaseNotes: '版本说明',
    checksum: 'SHA-256',
    installTitle: '首次打开',
    installBody:
      'StatusPerch 暂未经过 Apple 公证。请按住 Control 点击应用，选择“打开”，再确认“打开”。请勿关闭 Gatekeeper。',
    limitsTitle: '使用须知',
    limitsBody:
      '部分 macOS 系统图标不支持按住 Command 拖动。StatusPerch 使用原生菜单栏，不会创建第二行菜单栏。',
    footer: 'qingtan-labs 打造的专注型 macOS 工具。',
  },
} as const;

const featureIcons = [MousePointer2, Command, TimerReset, Laptop, Languages, Globe2];
const privacyIcons = [ShieldCheck, LockKeyhole, WifiOff];
const downloadUrl =
  'https://github.com/qingtan-labs/StatusPerch/releases/download/v1.0.0/StatusPerch-1.0.0-Universal.dmg';
const githubUrl = 'https://github.com/qingtan-labs/StatusPerch';
const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

function MenuBarDemo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`menu-demo ${compact ? 'is-compact' : ''}`} aria-hidden="true">
      <div className="demo-dots">
        {!compact && (
          <>
            <span className="demo-dot amber" />
            <span className="demo-square" />
            <span className="demo-triangle" />
          </>
        )}
      </div>
      <span className="demo-divider" />
      <ChevronLeft size={17} strokeWidth={2.4} />
      <span className="demo-clock">09:41</span>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = copy[language];

  const toggleLanguage = () => {
    const next = language === 'en' ? 'zh' : 'en';
    setLanguage(next);
    document.documentElement.lang = next === 'zh' ? 'zh-Hans' : 'en';
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="StatusPerch home">
          <img src={asset('statusperch-icon.png')} alt="" width="512" height="512" />
          <span>StatusPerch</span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={`#${['how', 'privacy', 'features', 'download'][index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="language-button"
          type="button"
          onClick={toggleLanguage}
          aria-label={t.languageLabel}
        >
          <Languages size={16} />
          {t.lang}
        </button>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />{t.eyebrow}</p>
          <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href={downloadUrl}>
              <Download size={18} />{t.download}
            </a>
            <a className="button secondary" href={githubUrl} target="_blank" rel="noreferrer">
              <CodeXml size={18} />{t.github}
            </a>
          </div>
          <ul className="spec-list">
            {t.specs.map((spec) => <li key={spec}><Check size={15} />{spec}</li>)}
          </ul>
        </div>

        <div className="hero-visual" aria-label="StatusPerch menu bar before and after illustration">
          <div className="visual-glow" />
          <div className="mac-window">
            <div className="window-top">
              <div className="traffic-lights"><i /><i /><i /></div>
              <span>Mac</span>
            </div>
            <div className="visual-stage">
              <div className="demo-row">
                <span>{t.before}</span><MenuBarDemo />
              </div>
              <div className="transition-arrow"><ArrowRight size={20} /></div>
              <div className="demo-row emphasis">
                <span>{t.after}</span><MenuBarDemo compact />
              </div>
              <p>{t.heroNote}</p>
            </div>
          </div>
          <div className="floating-icon">
            <img src={asset('statusperch-icon.png')} alt="StatusPerch app icon" width="512" height="512" />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Product principles">
        <div><ShieldCheck size={20} /><span>Permission-free</span></div>
        <div><WifiOff size={20} /><span>100% offline</span></div>
        <div><Globe2 size={20} /><span>Universal 2</span></div>
      </section>

      <section className="content-section section-shell" id="how">
        <div className="section-heading">
          <p className="eyebrow"><span />{t.howEyebrow}</p>
          <h2>{t.howTitle}</h2>
          <p>{t.howIntro}</p>
        </div>
        <div className="workflow-frame">
          <img src={asset('usage-workflow.svg')} alt={t.workflowAlt} width="1200" height="560" />
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="section-shell privacy-layout">
          <div className="privacy-copy">
            <p className="eyebrow light"><span />{t.privacyEyebrow}</p>
            <h2>{t.privacyTitle}</h2>
            <p>{t.privacyIntro}</p>
          </div>
          <div className="privacy-grid">
            {t.privacyCards.map(([title, body], index) => {
              const Icon = privacyIcons[index];
              return <article key={title}><Icon /><div><h3>{title}</h3><p>{body}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="features">
        <div className="section-heading centered">
          <p className="eyebrow"><span />{t.featureEyebrow}</p>
          <h2>{t.featureTitle}</h2>
        </div>
        <div className="feature-grid">
          {t.features.map(([title, body], index) => {
            const Icon = featureIcons[index];
            return <article key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{body}</p></article>;
          })}
        </div>
        <div className="language-showcase">
          <div>
            <span className="mini-label">English · 简体中文 · Follow System</span>
            <h3>{t.languageTitle}</h3>
            <p>{t.languageBody}</p>
          </div>
          <img src={asset('language-settings.svg')} alt={t.languageAlt} width="1200" height="620" />
        </div>
      </section>

      <section className="download-section section-shell" id="download">
        <div className="download-card">
          <div className="download-main">
            <img src={asset('statusperch-icon.png')} alt="StatusPerch" width="512" height="512" />
            <div>
              <p className="eyebrow light"><span />{t.downloadEyebrow}</p>
              <h2>{t.downloadTitle}</h2>
              <p>{t.downloadIntro}</p>
              <div className="download-actions">
                <a className="button white" href={downloadUrl}><Download size={18} />{t.getDmg}</a>
                <a className="text-link" href={`${githubUrl}/releases/tag/v1.0.0`} target="_blank" rel="noreferrer">
                  {t.releaseNotes} <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
          <div className="download-meta">
            <div><strong>{t.installTitle}</strong><p>{t.installBody}</p></div>
            <div><strong>{t.limitsTitle}</strong><p>{t.limitsBody}</p></div>
            <code>{t.checksum}: b93c55b944808565…</code>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="brand">
          <img src={asset('statusperch-icon.png')} alt="" width="512" height="512" />
          <span>StatusPerch</span>
        </div>
        <p>{t.footer}</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`${githubUrl}/releases`} target="_blank" rel="noreferrer">Releases</a>
          <a href={`${githubUrl}#privacy`} target="_blank" rel="noreferrer">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
