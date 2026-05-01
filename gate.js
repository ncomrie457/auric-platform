(function() {
  const PASSWORD = 'wellnessflex';
  const KEY = 'auric_access';

  if (sessionStorage.getItem(KEY) === 'true') return;

  const overlay = document.createElement('div');
  overlay.id = 'auric-gate';
  overlay.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
      #auric-gate {
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: #FAF8F4; display: flex; align-items: center;
        justify-content: center; z-index: 99999;
        font-family: 'DM Sans', sans-serif;
      }
      #auric-gate .box {
        text-align: center; padding: 48px 32px;
        max-width: 380px; width: 100%;
      }
      #auric-gate .wordmark {
        font-family: 'Cormorant Garamond', serif;
        font-size: 42px; font-weight: 500; color: #2C2418;
        margin-bottom: 6px; line-height: 1;
      }
      #auric-gate .wordmark span { color: #C9A84C; }
      #auric-gate .tagline {
        font-size: 13px; color: #7A6A52; margin-bottom: 36px; line-height: 1.6;
      }
      #auric-gate .badge {
        display: inline-block; background: #FBF5E6;
        border: 1px solid #E8D080; border-radius: 20px;
        padding: 4px 14px; font-size: 11px; color: #7A5C14;
        font-weight: 500; margin-bottom: 28px;
      }
      #auric-gate input {
        width: 100%; height: 46px;
        border: 0.5px solid #EDE9E0; border-radius: 10px;
        padding: 0 16px; font-size: 14px;
        font-family: 'DM Sans', sans-serif;
        background: white; color: #2C2418;
        outline: none; margin-bottom: 10px;
        box-sizing: border-box; letter-spacing: .05em;
        transition: border-color .15s;
      }
      #auric-gate input:focus { border-color: #C9A84C; }
      #auric-gate input.error { border-color: #C47D7D; }
      #auric-gate button {
        width: 100%; height: 46px;
        background: #2C2418; color: white; border: none;
        border-radius: 10px; font-size: 14px; font-weight: 500;
        cursor: pointer; font-family: 'DM Sans', sans-serif;
        transition: opacity .15s; margin-bottom: 12px;
      }
      #auric-gate button:hover { opacity: .88; }
      #auric-gate button:disabled { opacity: .4; cursor: not-allowed; }
      #auric-gate .err-msg {
        font-size: 12px; color: #C47D7D; min-height: 18px; margin-bottom: 4px;
      }
      #auric-gate .footer-note {
        font-size: 11px; color: #B5A48A; margin-top: 28px; line-height: 1.6;
      }
      #auric-gate .footer-note a { color: #C9A84C; text-decoration: none; }
    </style>
    <div class="box">
      <div class="badge">Private beta · NYC</div>
      <div class="wordmark">auric<span>.</span>os</div>
      <p class="tagline">The wellness event platform<br>for creators.</p>
      <input type="password" id="gate-input" placeholder="Enter your access password"
        onkeydown="if(event.key==='Enter')window._auricSubmit()">
      <button id="gate-btn" onclick="window._auricSubmit()">Enter</button>
      <div class="err-msg" id="gate-err"></div>
      <p class="footer-note">
        Don't have a password?
        <a href="mailto:auricmovement@outlook.com?subject=Beta access request">Request access →</a>
      </p>
    </div>
  `;

  document.body.appendChild(overlay);
  setTimeout(() => document.getElementById('gate-input')?.focus(), 100);

  window._auricSubmit = function() {
    const val = document.getElementById('gate-input').value.trim();
    const btn = document.getElementById('gate-btn');
    const err = document.getElementById('gate-err');
    const inp = document.getElementById('gate-input');

    if (!val) return;

    btn.disabled = true;
    btn.textContent = 'Checking...';

    setTimeout(() => {
      if (val === PASSWORD) {
        sessionStorage.setItem(KEY, 'true');
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity .3s';
        setTimeout(() => overlay.remove(), 300);
      } else {
        err.textContent = 'Incorrect password. Try again or request access below.';
        inp.classList.add('error');
        inp.value = '';
        btn.disabled = false;
        btn.textContent = 'Enter';
        inp.focus();
        setTimeout(() => {
          err.textContent = '';
          inp.classList.remove('error');
        }, 3000);
      }
    }, 400);
  };
})();
