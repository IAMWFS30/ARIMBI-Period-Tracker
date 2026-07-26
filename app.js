// ============================================================
// ARIMBI Period Tracker v3.1 — app.js
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
};

// ===== DATA STORE =====
const D = {
    get: k => JSON.parse(localStorage.getItem(k) || 'null'),
    set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
    periods: () => D.get('arimbi_p') || [],
    savePeriods: v => D.set('arimbi_p', v),
    moods: () => D.get('arimbi_m') || {},
    saveMoods: v => D.set('arimbi_m', v),
    cfg: () => D.get('arimbi_c') || { notifDays: 2, cycle: 28, dur: 5 },
    saveCfg: v => D.set('arimbi_c', v),
};

// ===== UTILITIES =====
const addD = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const diffD = (a, b) => Math.ceil((new Date(a) - new Date(b)) / 864e5);
const ds = d => d.toISOString().split('T')[0];
const fmt = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
const fmtL = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const last = () => { const p = D.periods(); return p[0] || null; };
const avgC = () => {
    const p = D.periods();
    if (p.length < 2) return D.cfg().cycle;
    let t = 0;
    for (let i = 0; i < p.length - 1; i++) t += diffD(p[i].d, p[i + 1].d);
    return Math.round(t / (p.length - 1));
};

// ===== TOAST =====
function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
}

// ===== CUSTOM MODAL =====
function showModal(msg, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-box">
            <div class="modal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--pink-500)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
            </div>
            <p class="modal-msg">${msg}</p>
            <div class="modal-actions">
                <button class="modal-btn modal-cancel">Batal</button>
                <button class="modal-btn modal-confirm">Hapus</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('show'));

    overlay.querySelector('.modal-cancel').onclick = () => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 250);
    };
    overlay.querySelector('.modal-confirm').onclick = () => {
        overlay.classList.remove('show');
        setTimeout(() => { overlay.remove(); onConfirm(); }, 250);
    };
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 250);
        }
    });
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
    const hSet = new Set(), sSet = new Set(), oSet = new Set();

    periods.forEach(p => {
        const c = avgC();
        for (let k = 0; k < 6; k++) {
            const st = addD(p.d, c * k);
            for (let i = 0; i < p.dur; i++) hSet.add(ds(addD(st, i)));
            const ov = addD(st, c - 14);
            oSet.add(ds(ov));
            for (let i = -5; i <= 1; i++) sSet.add(ds(addD(ov, i)));
        }
    });

    let g = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'].map(x => `<div class="dn">${x}</div>`).join('');
    for (let i = 0; i < fd; i++) g += '<div class="d x"></div>';
    for (let d = 1; d <= dim; d++) {
        const s = `${cY}-${String(cM + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        let cls = 'd';
        if (hSet.has(s)) cls += ' haid';
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
        <div class="cal-legend"><i class="lh">Haid</i><i class="ls">Subur</i><i class="lo">Ovulasi</i></div>
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
    if (!d) return toast('⚠️ Pilih tanggal!');
    if (dur < 2 || dur > 10) return toast('⚠️ Durasi 2–10 hari');
    const p = D.periods();
    p.push({ d, dur, id: Date.now() });
    p.sort((a, b) => new Date(b.d) - new Date(a.d));
    D.savePeriods(p);
    schedNotif();
    toast('✅ Tersimpan!');
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
            const cyc = i < p.length - 1 ? diffD(x.d, p[i + 1].d) : null;
            return `<div class="hist"><div>
                <div class="dt">${fmtL(x.d)} — ${fmt(end)}</div>
                <div class="mt">Durasi ${x.dur} hari${cyc ? ` · Siklus ${cyc} hari` : ''}</div>
            </div><button class="x-btn" onclick="delP(${x.id})">✕</button></div>`;
        }).join('')}
        <button class="btn btn-danger" onclick="clearAll()">Hapus Semua</button>
    </div>`;
};
function delP(id) {
    showModal('Hapus record ini?', () => {
        D.savePeriods(D.periods().filter(x => x.id !== id));
        R.history(); toast('🗑️ Dihapus');
    });
}
function clearAll() {
    showModal('Yakin hapus semua data? Tindakan ini tidak bisa dibatalkan.', () => {
        localStorage.removeItem('arimbi_p');
        localStorage.removeItem('arimbi_m');
        R.history(); toast('🗑️ Semua data dihapus');
    });
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
            <strong style="color:var(--pink-700)">ARIMBI</strong> v3.1<br>
            Period Tracker — Made with 💖<br><br>
            Data tersimpan lokal di perangkatmu.<br>Tidak ada data yang dikirim ke server manapun.
        </p>
    </div>`;
};
function uCfg(k, v) { const c = D.cfg(); c[k] = parseInt(v); D.saveCfg(c); toast('✅ Disimpan'); }
async function togNotif(el) {
    if (Notification.permission === 'granted') {
        toast('ℹ️ Nonaktifkan lewat Settings browser');
        return;
    }
    const p = await Notification.requestPermission();
    if (p === 'granted') { el.classList.add('on'); schedNotif(); R.settings(); toast('🔔 Notifikasi aktif!'); }
    else toast('⚠️ Izin ditolak');
}

// ===== NOTIFICATION =====
function schedNotif() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const L = last(); if (!L) return;
    const cfg = D.cfg();
    const next = addD(L.d, avgC());
    const at = addD(next, -cfg.notifDays);
    const delay = at - new Date();
    if (delay > 0) {
        if (window._nt) clearTimeout(window._nt);
        window._nt = setTimeout(() => {
            new Notification('🌸 ARIMBI', {
                body: `Haid diperkirakan ${cfg.notifDays} hari lagi (${fmt(next)})`,
                icon: 'icons/icon-192.svg', tag: 'arimbi-reminder'
            });
        }, delay);
    }
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ===== INIT =====
buildNav();
R.home();
schedNotif();
