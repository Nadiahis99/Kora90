/**
 * كورة90 — Shared Header & Ticker Injector
 * يحقن الهيدر وشريط الأخبار في كل الصفحات تلقائياً
 */
(function () {
  // ── تحديد الصفحة النشطة ──────────────────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return page === href ? 'class="active"' : '';
  }

  // ── HTML الهيدر ───────────────────────────────────────────
  const headerHTML = `
  <header class="site-header">

    <div class="header-top">
      <a href="index.html" class="header-logo">
        <div class="logo-icon">
           <img src="images/logo.png" alt="كورة90" />
            <circle cx="12" cy="12" r="10" fill="none" stroke="white" stroke-width="1.5"/>
            <polygon points="12,4 14.5,8 12,9.5 9.5,8" fill="white"/>
            <polygon points="19.5,9 18,13 15.5,12 15.5,9" fill="white"/>
            <polygon points="17,18.5 13.5,18 13,15.5 16,14.5" fill="white"/>
            <polygon points="7,18.5 8,15 11,14.5 10.5,18" fill="white"/>
            <polygon points="4.5,9 8.5,9 8.5,12 6,13" fill="white"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="site-name">كورة90</span>
          <span class="site-tagline">أخبار الكرة</span>
        </div>
      </a>

      <div class="header-search">
        <button class="search-btn" aria-label="بحث">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
        <input type="text" placeholder="ابحث عن الأخبار، المباريات..." />
      </div>

      <div class="header-actions">
        <button class="btn-theme" aria-label="تغيير المظهر">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
<button class="btn-login" onclick="window.location.href='admin-login.html'">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          تسجيل الدخول
        </button>
        <button class="menu-toggle" aria-label="القائمة">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <nav class="main-nav" id="main-nav">
      <ul>
        <li ${isActive('index.html')}><a href="index.html">الرئيسية</a></li>
        <li ${isActive('news.html')}><a href="news.html">أخبار</a></li>
        <li ${isActive('matches.html')}><a href="matches.html">مباريات</a></li>
        <li ${isActive('reports.html')}><a href="reports.html">تقارير</a></li>
        <li ${isActive('investigations.html')}><a href="investigations.html">تحقيقات</a></li>
        <li ${isActive('health.html')}><a href="health.html">صحة ولياقة</a></li>
        <li ${isActive('videos.html')}><a href="videos.html">فيديو</a></li>
      </ul>
    </nav>

  </header>`;

  // ── HTML شريط الأخبار ─────────────────────────────────────
  const tickerHTML = `
  <div class="matches-ticker">
    <div class="ticker-label">
      <span class="ticker-dot"></span>
      المباريات المباشرة
    </div>
    <div class="ticker-track-wrap">
      <div class="ticker-track">
        <div class="ticker-match">
          <span class="ticker-team">ريال مدريد</span>
          <span class="ticker-score">2 - 1</span>
          <span class="ticker-team">برشلونة</span>
          <span class="ticker-min live">78'</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">ليفربول</span>
          <span class="ticker-score">1 - 1</span>
          <span class="ticker-team">مانشستر سيتي</span>
          <span class="ticker-min live">45'</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">الهلال</span>
          <span class="ticker-score">3 - 0</span>
          <span class="ticker-team">النصر</span>
          <span class="ticker-min">انتهت</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">يوفنتوس</span>
          <span class="ticker-score">0 - 0</span>
          <span class="ticker-team">إنتر ميلان</span>
          <span class="ticker-min">19:00</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">باريس سان جيرمان</span>
          <span class="ticker-score">2 - 0</span>
          <span class="ticker-team">مارسيليا</span>
          <span class="ticker-min live">62'</span>
        </div>
        <div class="ticker-sep">|</div>
        <!-- Duplicate for seamless loop -->
        <div class="ticker-match">
          <span class="ticker-team">ريال مدريد</span>
          <span class="ticker-score">2 - 1</span>
          <span class="ticker-team">برشلونة</span>
          <span class="ticker-min live">78'</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">ليفربول</span>
          <span class="ticker-score">1 - 1</span>
          <span class="ticker-team">مانشستر سيتي</span>
          <span class="ticker-min live">45'</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">الهلال</span>
          <span class="ticker-score">3 - 0</span>
          <span class="ticker-team">النصر</span>
          <span class="ticker-min">انتهت</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">يوفنتوس</span>
          <span class="ticker-score">0 - 0</span>
          <span class="ticker-team">إنتر ميلان</span>
          <span class="ticker-min">19:00</span>
        </div>
        <div class="ticker-sep">|</div>
        <div class="ticker-match">
          <span class="ticker-team">باريس سان جيرمان</span>
          <span class="ticker-score">2 - 0</span>
          <span class="ticker-team">مارسيليا</span>
          <span class="ticker-min live">62'</span>
        </div>
        <div class="ticker-sep">|</div>
      </div>
    </div>
  </div>`;

  // ── الحقن في الصفحة ───────────────────────────────────────
  // استبدال الهيدر الموجود
  const existingHeader = document.querySelector('header.site-header');
  if (existingHeader) {
    existingHeader.outerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // إضافة التيكر بعد الهيدر مباشرة
  const injectedHeader = document.querySelector('header.site-header');
  if (injectedHeader) {
    // إزالة أي تيكر موجود مسبقاً
    const existingTicker = document.querySelector('.matches-ticker');
    if (existingTicker) existingTicker.remove();
    injectedHeader.insertAdjacentHTML('afterend', tickerHTML);
  }

  // ── Mobile menu toggle ────────────────────────────────────
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('.menu-toggle');
    if (toggle) {
      const nav = document.getElementById('main-nav');
      if (nav) nav.classList.toggle('open');
    }
  });

})();
