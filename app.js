// ============================================================
// ARIMBI Period Tracker v3.2 — app.js
// ============================================================

// ===== SVG ICONS =====
const I = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
    pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    trendUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    trendDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
    equal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="15" x2="19" y2="15"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
};

// ===== DATA STORE =====
const D = {
    get: k => JSON.parse(localStorage.getItem(k) || 'null'),
    set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
    periods: () => D.get('arimbi_p') || [],
    savePeriods: v => D.set('arimbi_p', v),
    moods: () => D.get('arimbi_m') || {},
    saveMoods: v => D.set('arimbi_m', v),
    cfg: () => {
        // Merge stored config with defaults so new keys appear for existing users.
        const stored = D.get('arimbi_c') || {};
        return { notifDays: 2, cycle: 28, dur: 5, padDays: 3, padReminder: true, ...stored };
    },
    saveCfg: v => D.set('arimbi_c', v),
};

// ===== UTILITIES =====
const addD = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const diffD = (a, b) => Math.ceil((new Date(a) - new Date(b)) / 864e5);
const ds = d => d.toISOString().split('T')[0];
const fmt = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
const fmtL = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const last = () => { const p = D.periods(); return p[0] || null; };

// Cycle lengths between consecutive records, newest first.
// e.g. cycleGaps()[0] = gap between the 2 most recent periods.
const cycleGaps = () => {
    const p = D.periods();
    const gaps = [];
    for (let i = 0; i < p.length - 1; i++) gaps.push(diffD(p[i].d, p[i + 1].d));
    return gaps;
};

// Weighted average cycle length — recent cycles matter more.
// Falls back to the configured default when there isn't enough history.
const avgC = () => {
    const gaps = cycleGaps();
    if (!gaps.length) return D.cfg().cycle;
    // Use up to the 6 most recent gaps, weighted so newest = highest weight.
    const use = gaps.slice(0, 6);
    let wSum = 0, w = 0;
    use.forEach((g, i) => { const weight = use.length - i; wSum += g * weight; w += weight; });
    return Math.round(wSum / w);
};

// Cycle normality classification (medical rule of thumb: 21–35 days is normal).
// Returns { key, label, color, icon } — `icon` is a small inline SVG line icon
// tinted with currentColor, matching the app's line-icon style (no emoji).
function cycleStatus(len) {
    if (len == null) return { key: 'na', label: 'Data pertama', color: 'var(--muted)', icon: statusIcon('na') };
    if (len < 21) return { key: 'short', label: 'Lebih cepat', color: 'var(--orange-500)', icon: statusIcon('warn') };
    if (len > 35) return { key: 'long', label: 'Lebih lama', color: 'var(--orange-500)', icon: statusIcon('warn') };
    return { key: 'normal', label: 'Normal', color: 'var(--green-500)', icon: statusIcon('ok') };
}

// Small inline status icons (14px), stroke = currentColor so they inherit the
// surrounding text color. Keeps a consistent line-icon look across the app.
function statusIcon(kind) {
    const wrap = svg => `<svg class="sicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>`;
    if (kind === 'ok') return wrap('<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>');
    if (kind === 'warn') return wrap('<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16.5" x2="12.01" y2="16.5"/>');
    // 'na' — neutral dot-in-circle
    return wrap('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/>');
}

// Compare actual cycle length vs the predicted/average cycle.
// Returns a human-readable note about the deviation.
function deviationNote(actualLen, predictedLen) {
    if (actualLen == null || predictedLen == null) return null;
    const diff = actualLen - predictedLen;
    const abs = Math.abs(diff);
    if (abs <= 2) return { key: 'ontime', label: 'Sesuai prediksi', color: 'var(--green-500)' };
    const dir = diff > 0 ? 'lebih lambat' : 'lebih cepat';
    return { key: diff > 0 ? 'late' : 'early', label: `${abs} hari ${dir} dari prediksi`, color: 'var(--orange-500)' };
}

// Status of a recorded period relative to today.
// 'ongoing' = still bleeding, 'done' = finished, 'upcoming' = starts in the future.
function periodPhase(period) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const start = new Date(period.d); start.setHours(0, 0, 0, 0);
    const end = addD(start, period.dur - 1); end.setHours(0, 0, 0, 0);
    if (today < start) return 'upcoming';
    if (today > end) return 'done';
    return 'ongoing';
}

// Build a monthly recap: each period becomes a row (newest first) with its
// cycle length, the month-over-month delta, and normality — plus overall stats.
// Returns { rows, stats } or null when there's no data.
function cycleRecap() {
    const p = D.periods();            // newest-first
    if (!p.length) return null;

    // Chronological (oldest-first) so "cycle length" and month-over-month deltas
    // read naturally, then we present newest-first.
    const chrono = [...p].reverse();
    const rows = chrono.map((rec, i) => {
        // Cycle length = gap from the PREVIOUS (older) period start to this one.
        const cyc = i > 0 ? diffD(rec.d, chrono[i - 1].d) : null;
        return {
            id: rec.id,
            date: rec.d,
            dur: rec.dur,
            cycle: cyc,
            status: cycleStatus(cyc),
            monthLabel: new Date(rec.d).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
            monthShort: new Date(rec.d).toLocaleDateString('id-ID', { month: 'short' }),
        };
    });

    // Month-over-month delta (this cycle vs the previous month's cycle).
    rows.forEach((r, i) => {
        const prev = rows[i - 1];
        if (r.cycle != null && prev && prev.cycle != null) {
            r.delta = r.cycle - prev.cycle;
        } else {
            r.delta = null;
        }
    });

    // Overall stats across all measurable cycles.
    const cycles = rows.map(r => r.cycle).filter(c => c != null);
    const durations = rows.map(r => r.dur);
    const normalCount = cycles.filter(c => c >= 21 && c <= 35).length;
    const stats = {
        count: p.length,
        cycleCount: cycles.length,
        minCycle: cycles.length ? Math.min(...cycles) : null,
        maxCycle: cycles.length ? Math.max(...cycles) : null,
        avgCycle: cycles.length ? Math.round(cycles.reduce((a, b) => a + b, 0) / cycles.length) : null,
        avgDur: durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : null,
        regularity: cycles.length ? Math.round((normalCount / cycles.length) * 100) : null,
        // Variability: max-min spread. Small spread => predictable cycle.
        spread: cycles.length ? Math.max(...cycles) - Math.min(...cycles) : null,
    };

    // Present newest-first for the UI.
    return { rows: [...rows].reverse(), stats };
}

// ===== TOAST =====
function toast(msg, type = 'success') {
    // Remove existing toast
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const icons = {
        success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
        error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
        warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
        delete: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    };

    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.innerHTML = `<div class="toast-icon">${icons[type] || icons.success}</div><span class="toast-msg">${msg}</span>`;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2400);
}

// ===== CUSTOM MODAL =====
function showModal(msg, onConfirm, opts = {}) {
    const { confirmText = 'Hapus', confirmColor = 'danger', icon = 'warning' } = opts;
    const icons = {
        warning: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="var(--orange-500)"/><line x1="12" y1="8" x2="12" y2="12" stroke="var(--orange-500)"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="var(--orange-500)"/></svg>`,
        delete: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--pink-500)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
    };

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-box">
            <div class="modal-icon-wrap">${icons[icon] || icons.warning}</div>
            <p class="modal-msg">${msg}</p>
            <div class="modal-actions">
                <button class="modal-btn modal-cancel">Batal</button>
                <button class="modal-btn modal-confirm">${confirmText}</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('show'));

    const close = () => { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 250); };
    overlay.querySelector('.modal-cancel').onclick = close;
    overlay.querySelector('.modal-confirm').onclick = () => { close(); setTimeout(onConfirm, 250); };
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
}

// ===== NAVIGATION =====
const TABS = [
    { id: 'home', lbl: 'Home', ico: I.home },
    { id: 'calendar', lbl: 'Kalender', ico: I.cal },
    { id: 'log', lbl: 'Catat', ico: I.plus },
    { id: 'history', lbl: 'Riwayat', ico: I.pulse },
    { id: 'settings', lbl: 'Setting', ico: I.gear },
];
let cur = 'home';

function nav(id) {
    cur = id;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    buildNav();
    R[id]();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function buildNav() {
    document.getElementById('nav').innerHTML = TABS.map(t =>
        `<button class="nb${t.id === cur ? ' on' : ''}" onclick="nav('${t.id}')">${t.ico}${t.lbl}</button>`
    ).join('');
}

// ===== RENDERERS =====
const R = {};

// --- HOME ---
R.home = () => {
    const el = document.getElementById('page-home');
    const L = last();
    if (!L) {
        el.innerHTML = `<div class="card"><div class="empty">${I.drop}<p>Belum ada data siklus</p><div class="sub">Tap tab "Catat" untuk mulai</div></div></div>`;
        return;
    }
    const c = avgC(), next = addD(L.d, c);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const left = diffD(next, today);
    const pct = Math.max(0, Math.min(100, ((c - left) / c) * 100));
    const ov = addD(L.d, c - 14);
    const fs = addD(ov, -5), fe = addD(ov, 1), pms = addD(next, -7);

    let num, lbl;
    if (left > 0) { num = left; lbl = 'hari lagi'; }
    else if (left >= -L.dur) { num = '●'; lbl = 'sedang haid'; }
    else { num = Math.abs(left); lbl = 'hari terlambat'; }

    // Latest cycle status — compare the most recent actual cycle vs predicted
    const gaps = cycleGaps();
    const latestGap = gaps.length ? gaps[0] : null;
    const cStatus = cycleStatus(latestGap);
    const devNote = deviationNote(latestGap, c);

    // Cycle regularity summary
    const normalCount = gaps.filter(g => g >= 21 && g <= 35).length;
    const regularity = gaps.length ? Math.round((normalCount / gaps.length) * 100) : 100;

    el.innerHTML = `
    <div class="card">
        <div class="ring-wrap"><div class="ring" style="--p:${pct}"><div class="ring-text">
            <div class="ring-num">${num}</div><div class="ring-lbl">${lbl}</div>
        </div></div></div>
        <div class="grid-2">
            <div class="pred pred-a">${I.drop}<div class="v">${fmt(next)}</div><div class="l">Haid Berikutnya</div></div>
            <div class="pred pred-b">${I.leaf}<div class="v">${fmt(fs)} – ${fmt(fe)}</div><div class="l">Masa Subur</div></div>
            <div class="pred pred-c">${I.sun}<div class="v">${fmt(ov)}</div><div class="l">Ovulasi</div></div>
            <div class="pred pred-d">${I.cloud}<div class="v">${fmt(pms)}</div><div class="l">PMS Mulai</div></div>
        </div>
    </div>
    ${latestGap != null ? `<div class="card">
        <div class="card-title">${I.pulse} Analisis Siklus Terakhir</div>
        <div class="cycle-analysis">
            <div class="ca-row">
                <span class="ca-lbl">Siklus terakhir</span>
                <span class="ca-val" style="color:${cStatus.color}">${cStatus.icon} ${latestGap} hari — ${cStatus.label}</span>
            </div>
            ${devNote ? `<div class="ca-row">
                <span class="ca-lbl">Vs prediksi (${c} hari)</span>
                <span class="ca-val" style="color:${devNote.color}">${devNote.label}</span>
            </div>` : ''}
            <div class="ca-row">
                <span class="ca-lbl">Keteraturan</span>
                <span class="ca-val">${regularity}% siklus normal (21–35 hari)</span>
            </div>
        </div>
    </div>` : ''}
    <div class="card">
        <div class="card-title">${I.pulse} Statistik</div>
        <div class="stats">
            <div><div class="n">${c}</div><div class="t">Avg Siklus</div></div>
            <div><div class="n">${L.dur}</div><div class="t">Durasi</div></div>
            <div><div class="n">${D.periods().length}</div><div class="t">Record</div></div>
        </div>
    </div>`;
};

// --- CALENDAR ---
let cM = new Date().getMonth(), cY = new Date().getFullYear();
const MO = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

function calPrev() { cM--; if (cM < 0) { cM = 11; cY--; } R.calendar(); }
function calNext() { cM++; if (cM > 11) { cM = 0; cY++; } R.calendar(); }

R.calendar = () => {
    const dim = new Date(cY, cM + 1, 0).getDate();
    const fd = new Date(cY, cM, 1).getDay();
    const today = new Date();
    const periods = D.periods();
    const c = avgC();

    // actualSet = real logged periods (confirmed). predSet = future predictions only.
    const actualSet = new Set();
    const hSet = new Set(), sSet = new Set(), oSet = new Set();

    // 1) Mark every actually-recorded period as confirmed haid.
    periods.forEach(p => {
        for (let i = 0; i < p.dur; i++) actualSet.add(ds(addD(p.d, i)));
    });

    // 2) Project predictions FORWARD from the most recent period only.
    //    This avoids overlapping/incorrect marks from projecting every old record.
    const L = periods[0];
    if (L) {
        const dur = L.dur;
        for (let k = 1; k <= 6; k++) {
            const st = addD(L.d, c * k);
            for (let i = 0; i < dur; i++) hSet.add(ds(addD(st, i)));
        }
        // Fertile window + ovulation projected from the last actual + each predicted cycle.
        for (let k = 0; k <= 6; k++) {
            const st = addD(L.d, c * k);
            const ov = addD(st, c - 14);
            oSet.add(ds(ov));
            for (let i = -5; i <= 1; i++) sSet.add(ds(addD(ov, i)));
        }
    }

    let g = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'].map(x => `<div class="dn">${x}</div>`).join('');
    for (let i = 0; i < fd; i++) g += '<div class="d x"></div>';
    for (let d = 1; d <= dim; d++) {
        const s = `${cY}-${String(cM + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        let cls = 'd';
        if (actualSet.has(s)) cls += ' haid haid-actual';       // confirmed, solid
        else if (hSet.has(s)) cls += ' haid haid-pred';         // predicted, dashed
        else if (oSet.has(s)) cls += ' ovul';
        else if (sSet.has(s)) cls += ' subur';
        if (today.getDate() === d && today.getMonth() === cM && today.getFullYear() === cY) cls += ' now';
        g += `<div class="${cls}">${d}</div>`;
    }

    document.getElementById('page-calendar').innerHTML = `<div class="card">
        <div class="card-title">${I.cal} Kalender Siklus</div>
        <div class="cal-nav">
            <button class="cal-btn" onclick="calPrev()">${I.chevL}</button>
            <span class="mo">${MO[cM]} ${cY}</span>
            <button class="cal-btn" onclick="calNext()">${I.chevR}</button>
        </div>
        <div class="cal">${g}</div>
        <div class="cal-legend"><i class="lh">Haid tercatat</i><i class="lhp">Prediksi</i><i class="ls">Subur</i><i class="lo">Ovulasi</i></div>
    </div>`;
};

// --- LOG (Catat) ---
const MOODS = ['😊','😐','😢','😠','😴','🥰','😰','🤢'];
const SYMS = ['Kram','Sakit Kepala','Bloating','Nyeri Payudara','Jerawat','Mood Swing','Lelah','Nafsu Makan ↑','Insomnia','Diare','Punggung Pegal','Mual'];

R.log = () => {
    const cfg = D.cfg(), td = ds(new Date());
    const moods = D.moods(), tm = moods[td] || {};
    document.getElementById('page-log').innerHTML = `
    <div class="card">
        <div class="card-title">${I.drop} Catat Haid Baru</div>
        <div class="field"><label>Tanggal Mulai</label><input type="date" id="inD" value="${td}"></div>
        <div class="field"><label>Durasi Haid (hari)</label><input type="number" id="inDur" value="${cfg.dur}" min="2" max="10"></div>
        <button class="btn btn-primary" onclick="savePeriod()">Simpan</button>
    </div>
    <div class="card">
        <div class="card-title">${I.cloud} Mood & Gejala Hari Ini</div>
        <div class="mood-wrap">${MOODS.map(m => `<button class="mood-btn${tm.mood === m ? ' on' : ''}" onclick="setMood('${m}')">${m}</button>`).join('')}</div>
        <div class="sep"></div>
        <div class="chips">${SYMS.map(s => `<button class="chip${(tm.sym || []).includes(s) ? ' on' : ''}" onclick="toggleSym('${s}')">${s}</button>`).join('')}</div>
    </div>`;
};

function savePeriod() {
    const d = document.getElementById('inD').value;
    const dur = parseInt(document.getElementById('inDur').value);
    if (!d) return toast('Pilih tanggal dulu', 'warning');
    if (dur < 2 || dur > 10) return toast('Durasi harus 2–10 hari', 'warning');
    const p = D.periods();
    p.push({ d, dur, id: Date.now() });
    p.sort((a, b) => new Date(b.d) - new Date(a.d));
    D.savePeriods(p);
    schedNotif();
    toast('Data haid tersimpan', 'success');
    setTimeout(() => nav('home'), 400);
}
function setMood(m) {
    const td = ds(new Date()), moods = D.moods();
    if (!moods[td]) moods[td] = {};
    moods[td].mood = moods[td].mood === m ? null : m;
    D.saveMoods(moods); R.log();
}
function toggleSym(s) {
    const td = ds(new Date()), moods = D.moods();
    if (!moods[td]) moods[td] = {};
    if (!moods[td].sym) moods[td].sym = [];
    const i = moods[td].sym.indexOf(s);
    i >= 0 ? moods[td].sym.splice(i, 1) : moods[td].sym.push(s);
    D.saveMoods(moods); R.log();
}

// --- MONTHLY RECAP (rendered inside History) ---
function renderRecap() {
    const recap = cycleRecap();
    if (!recap) return '';
    const { rows, stats } = recap;

    // Need at least one measurable cycle (>=2 periods) for a meaningful recap.
    if (stats.cycleCount < 1) {
        return `<div class="card recap-card">
            <div class="card-title">${I.chart} Rekap Bulanan</div>
            <div class="recap-empty">
                <p>Catat minimal 2 kali haid untuk melihat perbandingan siklus antar bulan.</p>
            </div>
        </div>`;
    }

    // ----- Summary stat tiles -----
    const summary = `
    <div class="recap-stats">
        <div class="rstat rstat-avg">
            <div class="rstat-num">${stats.avgCycle}<span>hari</span></div>
            <div class="rstat-lbl">Rata-rata Siklus</div>
        </div>
        <div class="rstat rstat-range">
            <div class="rstat-num">${stats.minCycle}–${stats.maxCycle}</div>
            <div class="rstat-lbl">Rentang (${stats.spread} hari)</div>
        </div>
        <div class="rstat rstat-dur">
            <div class="rstat-num">${stats.avgDur}<span>hari</span></div>
            <div class="rstat-lbl">Durasi Haid</div>
        </div>
        <div class="rstat rstat-reg">
            <div class="rstat-num">${stats.regularity}<span>%</span></div>
            <div class="rstat-lbl">Keteraturan</div>
        </div>
    </div>`;

    // ----- Trend bar chart (oldest -> newest, left to right) -----
    // Only cycles that have a measurable length are plotted.
    const chartRows = [...rows].reverse().filter(r => r.cycle != null);
    const maxCyc = Math.max(...chartRows.map(r => r.cycle), 35);
    const bars = chartRows.map(r => {
        const h = Math.round((r.cycle / maxCyc) * 100);
        const color = r.status.key === 'normal' ? 'var(--green-500)'
            : r.status.key === 'na' ? 'var(--pink-200)' : 'var(--orange-500)';
        return `<div class="rbar-col">
            <div class="rbar-val">${r.cycle}</div>
            <div class="rbar-track"><div class="rbar-fill" style="height:${h}%;background:${color}"></div></div>
            <div class="rbar-lbl">${r.monthShort}</div>
        </div>`;
    }).join('');

    // Normal band reference (21–35). Positioned relative to maxCyc.
    const bandTop = 100 - Math.round((35 / maxCyc) * 100);
    const bandH = Math.round(((35 - 21) / maxCyc) * 100);
    const chart = chartRows.length ? `
    <div class="recap-chart">
        <div class="rchart-head">
            <span class="rchart-title">Tren Panjang Siklus</span>
            <span class="rchart-legend"><i class="rl-normal"></i>Normal (21–35 hari)</span>
        </div>
        <div class="rchart-plot">
            <div class="rchart-band" style="top:${bandTop}%;height:${bandH}%"></div>
            <div class="rchart-bars">${bars}</div>
        </div>
    </div>` : '';

    // ----- Month-over-month comparison rows -----
    const monthRows = rows.map(r => {
        let deltaHtml;
        if (r.cycle == null) {
            deltaHtml = `<span class="rcmp-delta rcmp-first">Siklus pertama</span>`;
        } else if (r.delta == null) {
            deltaHtml = `<span class="rcmp-delta rcmp-base">—</span>`;
        } else if (r.delta === 0) {
            deltaHtml = `<span class="rcmp-delta rcmp-same">${I.equal} Sama seperti bulan lalu</span>`;
        } else if (r.delta > 0) {
            deltaHtml = `<span class="rcmp-delta rcmp-up">${I.trendUp} +${r.delta} hari lebih panjang</span>`;
        } else {
            deltaHtml = `<span class="rcmp-delta rcmp-down">${I.trendDown} ${Math.abs(r.delta)} hari lebih pendek</span>`;
        }
        const cycText = r.cycle != null
            ? `<span class="rcmp-cyc" style="color:${r.status.color}">${r.status.icon} ${r.cycle} hari</span>`
            : `<span class="rcmp-cyc rcmp-na">Belum ada pembanding</span>`;
        return `<div class="rcmp-row">
            <div class="rcmp-month">
                <div class="rcmp-mo">${r.monthLabel}</div>
                <div class="rcmp-sub">Mulai ${fmt(r.date)} · Durasi ${r.dur} hari</div>
            </div>
            <div class="rcmp-right">
                ${cycText}
                ${deltaHtml}
            </div>
        </div>`;
    }).join('');

    return `<div class="card recap-card">
        <div class="card-title">${I.chart} Rekap Bulanan</div>
        ${summary}
        ${chart}
        <div class="recap-divider"></div>
        <div class="recap-cmp-title">Perbandingan Antar Bulan</div>
        <div class="recap-cmp">${monthRows}</div>
    </div>`;
}

// --- HISTORY ---
R.history = () => {
    const p = D.periods(), el = document.getElementById('page-history');
    if (!p.length) {
        el.innerHTML = `<div class="card"><div class="empty">${I.pulse}<p>Belum ada riwayat</p></div></div>`;
        return;
    }
    el.innerHTML = `<div class="card">
        <div class="card-title">${I.pulse} Riwayat Siklus</div>
        ${p.map((x, i) => {
            const end = addD(x.d, x.dur - 1);
            // Cycle length = gap from THIS period to the NEXT older one.
            const cyc = i < p.length - 1 ? diffD(x.d, p[i + 1].d) : null;
            const st = cycleStatus(cyc);
            const phase = periodPhase(x);
            const phaseBadge = phase === 'ongoing'
                ? `<span class="badge badge-ongoing">Sedang berlangsung</span>`
                : phase === 'upcoming'
                    ? `<span class="badge badge-upcoming">Akan datang</span>`
                    : `<span class="badge badge-done">Selesai</span>`;
            const cycBadge = cyc != null
                ? `<span class="badge badge-icon" style="background:${st.color}1a;color:${st.color}">${st.icon} ${st.label}</span>`
                : `<span class="badge badge-first">Data pertama</span>`;
            return `<div class="hist"><div style="flex:1;min-width:0">
                <div class="dt">${fmtL(x.d)} — ${fmt(end)}</div>
                <div class="mt">Durasi ${x.dur} hari${cyc ? ` · Siklus ${cyc} hari` : ''}</div>
                <div class="hist-badges">${phaseBadge}${cycBadge}</div>
            </div><div class="hist-actions">
                <button class="edit-btn" onclick="editP(${x.id})" aria-label="Edit record">${I.edit}</button>
                <button class="x-btn" onclick="delP(${x.id})" aria-label="Hapus record">${I.trash}</button>
            </div></div>`;
        }).join('')}
        <button class="btn btn-danger" onclick="clearAll()">Hapus Semua</button>
    </div>
    ${renderRecap()}
    <div class="card">
        <div class="card-title">${I.pulse} Tentang Siklus Normal</div>
        <p style="font-size:0.76rem;color:var(--muted);line-height:1.7">
            Siklus haid normal berkisar <strong style="color:var(--pink-700)">21–35 hari</strong>
            (dihitung dari hari pertama haid ke hari pertama haid berikutnya).<br><br>
            <span class="legend-item" style="color:var(--green-500)">${statusIcon('ok')} Normal</span> — siklus dalam rentang 21–35 hari.<br>
            <span class="legend-item" style="color:var(--orange-500)">${statusIcon('warn')} Lebih cepat / lebih lama</span> — sesekali wajar, tapi kalau
            sering berulang atau disertai keluhan, sebaiknya konsultasi ke bidan/dokter.<br><br>
            <em>Catatan: aplikasi ini bantu memantau pola, bukan pengganti pemeriksaan medis.</em>
        </p>
    </div>`;
};
function delP(id) {
    showModal('Hapus record ini?', () => {
        D.savePeriods(D.periods().filter(x => x.id !== id));
        R.history(); toast('Record dihapus', 'delete');
    }, { icon: 'delete', confirmText: 'Hapus' });
}

// Edit an existing period record — change its start date &/or duration.
// Re-sorts and re-renders so predictions immediately reflect the correction.
function editP(id) {
    const rec = D.periods().find(x => x.id === id);
    if (!rec) return;
    const todayStr = ds(new Date());

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-box" style="text-align:left">
            <div style="text-align:center;margin-bottom:6px">
                <div class="modal-icon-wrap" style="background:var(--pink-50);border-color:var(--pink-100)">
                    <span style="color:var(--pink-500)">${I.edit}</span>
                </div>
            </div>
            <p class="modal-msg" style="margin-bottom:18px;text-align:center">Edit Data Haid</p>
            <div class="field"><label>Tanggal Mulai</label>
                <input type="date" id="edD" value="${rec.d}" max="${todayStr}"></div>
            <div class="field"><label>Durasi Haid (hari)</label>
                <input type="number" id="edDur" value="${rec.dur}" min="2" max="10"></div>
            <div class="modal-actions" style="margin-top:8px">
                <button class="modal-btn modal-cancel">Batal</button>
                <button class="modal-btn modal-confirm" style="background:linear-gradient(135deg,var(--pink-500),var(--pink-600))">Simpan</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('show'));

    const close = () => { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 250); };
    overlay.querySelector('.modal-cancel').onclick = close;
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    overlay.querySelector('.modal-confirm').onclick = () => {
        const newD = overlay.querySelector('#edD').value;
        const newDur = parseInt(overlay.querySelector('#edDur').value);
        if (!newD) return toast('Pilih tanggal dulu', 'warning');
        if (isNaN(newDur) || newDur < 2 || newDur > 10) return toast('Durasi harus 2–10 hari', 'warning');
        // Prevent a future start date (can't have a period that hasn't happened).
        if (new Date(newD) > new Date(todayStr)) return toast('Tanggal tidak boleh di masa depan', 'warning');
        const p = D.periods();
        const item = p.find(x => x.id === id);
        if (!item) return close();
        item.d = newD; item.dur = newDur;
        p.sort((a, b) => new Date(b.d) - new Date(a.d));
        D.savePeriods(p);
        schedNotif();
        close();
        R.history();
        toast('Data haid diperbarui', 'success');
    };
}
function clearAll() {
    showModal('Yakin hapus semua data? Tindakan ini tidak bisa dibatalkan.', () => {
        localStorage.removeItem('arimbi_p');
        localStorage.removeItem('arimbi_m');
        R.history(); toast('Semua data dihapus', 'delete');
    }, { icon: 'delete', confirmText: 'Hapus Semua' });
}

// --- SETTINGS ---
R.settings = () => {
    const cfg = D.cfg();
    const notif = 'Notification' in window && Notification.permission === 'granted';
    document.getElementById('page-settings').innerHTML = `
    <div class="card">
        <div class="card-title">${I.gear} Pengaturan Siklus</div>
        <div class="field"><label>Panjang Siklus Default (hari)</label>
            <input type="number" value="${cfg.cycle}" min="21" max="40" onchange="uCfg('cycle',this.value)"></div>
        <div class="field"><label>Durasi Haid Default (hari)</label>
            <input type="number" value="${cfg.dur}" min="2" max="10" onchange="uCfg('dur',this.value)"></div>
        <div class="field"><label>Reminder (hari sebelum haid)</label>
            <input type="number" value="${cfg.notifDays}" min="1" max="7" onchange="uCfg('notifDays',this.value)"></div>
    </div>
    <div class="card">
        <div class="card-title">${I.cart} Pengingat Beli Pembalut</div>
        <div class="s-row">
            <div><div class="sl">Ingatkan beli pembalut</div>
            <div class="sd">Notifikasi lebih awal biar sempat stok sebelum haid</div></div>
            <div class="sw${cfg.padReminder ? ' on' : ''}" onclick="togPad(this)"></div>
        </div>
        <div class="field" style="margin-top:12px${cfg.padReminder ? '' : ';opacity:0.5;pointer-events:none'}" id="padDaysField">
            <label>Ingatkan berapa hari sebelum haid</label>
            <input type="number" value="${cfg.padDays}" min="1" max="10" onchange="uCfg('padDays',this.value)">
        </div>
    </div>
    <div class="card">
        <div class="card-title">${I.heart} Partner Mode</div>
        <p style="font-size:0.78rem;color:var(--muted);line-height:1.6;margin-bottom:14px">
            Generate link untuk pasanganmu. Dia bisa lihat countdown haid & status kamu tanpa perlu login.
        </p>
        <button class="btn btn-primary" onclick="genPartnerLink()" ${!last() ? 'disabled style="opacity:0.5"' : ''}>
            ${I.share} Generate Partner Link
        </button>
    </div>
    <div class="card">
        <div class="card-title">${I.cloud} Notifikasi</div>
        <div class="s-row">
            <div><div class="sl">Push Notification</div>
            <div class="sd">${notif ? 'Aktif — kamu akan diingatkan' : 'Nonaktif — aktifkan untuk reminder'}</div></div>
            <div class="sw${notif ? ' on' : ''}" onclick="togNotif(this)"></div>
        </div>
    </div>
    <div class="card">
        <div class="card-title">${I.home} Tentang</div>
        <p style="font-size:0.78rem;color:var(--muted);line-height:1.7">
            <strong style="color:var(--pink-700)">ARIMBI</strong> v3.2<br>
            Period Tracker — Made with 💖<br><br>
            Data tersimpan lokal di perangkatmu.<br>Tidak ada data yang dikirim ke server manapun.
        </p>
    </div>`;
};
function uCfg(k, v) { const c = D.cfg(); c[k] = parseInt(v); D.saveCfg(c); schedNotif(); toast('Pengaturan disimpan', 'success'); }
function togPad(el) {
    const c = D.cfg();
    c.padReminder = !c.padReminder;
    D.saveCfg(c);
    el.classList.toggle('on');
    schedNotif();
    R.settings();
    toast(c.padReminder ? 'Pengingat pembalut aktif' : 'Pengingat pembalut nonaktif', c.padReminder ? 'success' : 'info');
}
async function togNotif(el) {
    if (Notification.permission === 'granted') {
        toast('Nonaktifkan lewat Settings browser', 'info');
        return;
    }
    const p = await Notification.requestPermission();
    if (p === 'granted') { el.classList.add('on'); schedNotif(); R.settings(); toast('Notifikasi aktif!', 'success'); }
    else toast('Izin notifikasi ditolak', 'error');
}

// ===== NOTIFICATION =====
function schedNotif() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const L = last(); if (!L) return;
    const cfg = D.cfg();
    const next = addD(L.d, avgC());
    const now = new Date();

    // Clear any previously scheduled timers so re-scheduling doesn't stack up.
    if (window._nt) clearTimeout(window._nt);
    if (window._ntPad) clearTimeout(window._ntPad);

    // 1) Pad-buying reminder — fires EARLIER (padDays before) so there's time to
    //    stock up before bleeding starts. Anticipates being caught without pads.
    if (cfg.padReminder) {
        const padAt = addD(next, -cfg.padDays);
        const padDelay = padAt - now;
        if (padDelay > 0) {
            window._ntPad = setTimeout(() => {
                new Notification('🛒 ARIMBI — Ingat Pembalut', {
                    body: `Haid diperkirakan ${cfg.padDays} hari lagi (${fmt(next)}). Yuk cek & beli stok pembalut dulu biar nggak kehabisan 💕`,
                    icon: 'icons/icon-192.svg', tag: 'arimbi-pad-reminder'
                });
            }, padDelay);
        }
    }

    // 2) Haid reminder — fires closer to the predicted date.
    const at = addD(next, -cfg.notifDays);
    const delay = at - now;
    if (delay > 0) {
        window._nt = setTimeout(() => {
            new Notification('🌸 ARIMBI', {
                body: `Haid diperkirakan ${cfg.notifDays} hari lagi (${fmt(next)})`,
                icon: 'icons/icon-192.svg', tag: 'arimbi-reminder'
            });
        }, delay);
    }
}

// ===== PARTNER MODE =====
function genPartnerLink() {
    const L = last(); if (!L) return;
    const periods = D.periods().slice(0, 3);
    const moods = D.moods();
    const td = ds(new Date());
    const payload = {
        p: periods,
        c: avgC(),
        m: moods[td] || null,
        t: Date.now()
    };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const url = `${window.location.origin}/partner.html?d=${encoded}`;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-box">
            <div class="partner-success-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="var(--green-500)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="var(--green-500)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <p class="modal-msg" style="margin-bottom:6px">Link berhasil dibuat!</p>
            <p style="font-size:0.72rem;color:var(--muted);margin-bottom:18px">Kirim link ini ke pasanganmu</p>
            <div class="partner-link-box"><span>${url.length > 60 ? url.substring(0, 60) + '...' : url}</span></div>
            <div class="partner-actions">
                <button class="partner-btn partner-btn-copy" onclick="copyPartnerLink('${url}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Copy Link
                </button>
                <button class="partner-btn partner-btn-wa" onclick="sharePartnerWA('${url}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                    WhatsApp
                </button>
            </div>
            <button class="partner-btn-close" onclick="this.closest('.modal-overlay').classList.remove('show');setTimeout(()=>this.closest('.modal-overlay').remove(),250)">Tutup</button>
        </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('show'));
}

function copyPartnerLink(url) {
    navigator.clipboard.writeText(url).then(() => toast('Link di-copy!', 'success')).catch(() => toast('Gagal copy', 'error'));
}
function sharePartnerWA(url) {
    const text = encodeURIComponent(`💖 Ini link buat kamu lihat jadwal haid aku:\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

// ===== PARTNER VIEW (check on load) =====
function checkPartnerMode() {
    if (!window.location.pathname.includes('partner.html')) return false;
    const params = new URLSearchParams(window.location.search);
    const data = params.get('d');
    if (!data) return false;
    try {
        const payload = JSON.parse(decodeURIComponent(escape(atob(data))));
        renderPartnerView(payload);
        return true;
    } catch (e) { return false; }
}

function renderPartnerView(data) {
    const { p, c, m, t } = data;
    if (!p || !p.length) return;
    const L = p[0];
    const next = addD(L.d, c);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const left = diffD(next, today);
    const pct = Math.max(0, Math.min(100, ((c - left) / c) * 100));
    const ov = addD(L.d, c - 14);
    const fs = addD(ov, -5), fe = addD(ov, 1);

    let statusNum, statusLbl, statusColor;
    if (left > 0) { statusNum = left; statusLbl = 'hari lagi haid'; statusColor = 'var(--pink-600)'; }
    else if (left >= -L.dur) { statusNum = '●'; statusLbl = 'sedang haid'; statusColor = '#EF5350'; }
    else { statusNum = Math.abs(left); statusLbl = 'hari terlambat'; statusColor = '#FF6F00'; }

    const moodText = m && m.mood ? m.mood : '—';
    const symText = m && m.sym && m.sym.length ? m.sym.join(', ') : 'Tidak ada';
    const lastUpdate = new Date(t).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    // Hide normal app, show partner view
    document.getElementById('app').innerHTML = `
    <div class="header">
        <div class="header-content">
            <svg class="header-logo" width="36" height="36" viewBox="0 0 100 100" fill="none">
                <g transform="translate(50,48)"><ellipse cx="0" cy="-18" rx="9" ry="18" fill="rgba(255,255,255,0.88)" transform="rotate(0)"/><ellipse cx="0" cy="-18" rx="9" ry="18" fill="rgba(255,255,255,0.88)" transform="rotate(72)"/><ellipse cx="0" cy="-18" rx="9" ry="18" fill="rgba(255,255,255,0.88)" transform="rotate(144)"/><ellipse cx="0" cy="-18" rx="9" ry="18" fill="rgba(255,255,255,0.88)" transform="rotate(216)"/><ellipse cx="0" cy="-18" rx="9" ry="18" fill="rgba(255,255,255,0.88)" transform="rotate(288)"/><circle cx="0" cy="0" r="6" fill="#FFD54F" opacity="0.9"/></g>
            </svg>
            <div><h1>ARIMBI</h1><p>Partner View 💖</p></div>
        </div>
    </div>
    <main class="main" style="padding-bottom:40px">
        <div class="card">
            <div class="ring-wrap"><div class="ring" style="--p:${pct}"><div class="ring-text">
                <div class="ring-num" style="color:${statusColor}">${statusNum}</div>
                <div class="ring-lbl">${statusLbl}</div>
            </div></div></div>
            <div class="grid-2">
                <div class="pred pred-a">${I.drop}<div class="v">${fmt(next)}</div><div class="l">Haid Berikutnya</div></div>
                <div class="pred pred-b">${I.leaf}<div class="v">${fmt(fs)} – ${fmt(fe)}</div><div class="l">Masa Subur</div></div>
                <div class="pred pred-c">${I.sun}<div class="v">${fmt(ov)}</div><div class="l">Ovulasi</div></div>
                <div class="pred pred-d">${I.cloud}<div class="v">${c} hari</div><div class="l">Rata-rata Siklus</div></div>
            </div>
        </div>
        <div class="card">
            <div class="card-title">${I.cloud} Mood & Gejala Hari Ini</div>
            <div style="display:flex;gap:16px;align-items:center">
                <div style="font-size:2rem">${moodText}</div>
                <div style="font-size:0.78rem;color:var(--muted)">${symText}</div>
            </div>
        </div>
        <div class="card" style="text-align:center">
            <p style="font-size:0.7rem;color:var(--muted)">Terakhir diupdate: ${lastUpdate}</p>
            <p style="font-size:0.68rem;color:var(--pink-400);margin-top:6px">Data ini read-only. Minta pasanganmu kirim link baru untuk update.</p>
        </div>
    </main>`;
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ===== INIT =====
if (!checkPartnerMode()) {
    buildNav();
    R.home();
    schedNotif();
}
