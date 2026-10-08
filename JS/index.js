document.addEventListener("DOMContentLoaded", () => {
  let doneList = JSON.parse(localStorage.getItem("doneTrips")) || [];

  // 1. 主分頁 Tab 切換 (Day 1~4、航班、住宿、清單)
  const tabs = document.querySelectorAll(".nav-tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document.getElementById(target)?.classList.add("active");
    });
  });

  // 2. 劃掉打勾功能（限定只有包含 .check-icon 的項目才可打勾）
  document.querySelectorAll(".check-item").forEach(item => {
    const key = item.getAttribute("data-key");
    const icon = item.querySelector(".check-icon");

    if (!icon) return; // 景點項目無打勾圖示，略過

    // 初始化狀態
    if (doneList.includes(key)) {
      item.classList.add("done");
      icon.className = "fa-solid fa-circle-check check-icon";
    }

    // 點擊事件
    item.addEventListener("click", (e) => {
      // 避免點到圖片或商品連結時觸發打勾
      if (e.target.closest("img") || e.target.closest(".product-link-btn")) return;

      const isDone = item.classList.toggle("done");
      icon.className = isDone ? "fa-solid fa-circle-check check-icon" : "fa-solid fa-circle check-icon";

      if (isDone) {
        if (!doneList.includes(key)) doneList.push(key);
      } else {
        doneList = doneList.filter(k => k !== key);
      }
      localStorage.setItem("doneTrips", JSON.stringify(doneList));
    });
  });

  // 3. 次級選單切換 (必買清單：Olive Young / 藥局 / 紀念品 / 隱形眼鏡)
  const subTabs = document.querySelectorAll(".sub-tab");
  const subPanels = document.querySelectorAll(".sub-panel");

  subTabs.forEach(subTab => {
    subTab.addEventListener("click", (e) => {
      e.stopPropagation();
      subTabs.forEach(t => t.classList.remove("active"));
      subPanels.forEach(p => p.classList.remove("active"));

      subTab.classList.add("active");
      const targetSub = subTab.getAttribute("data-sub-target");
      document.getElementById(targetSub)?.classList.add("active");
    });
  });

  // 4. 圖片點擊放大 (Lightbox：景點圖與商品圖通用)
  const imageModal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.getElementById("modalClose");

  document.querySelectorAll(".item-gallery img, .product-thumb img").forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      if (imageModal && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || "放大預覽";
        imageModal.classList.add("show");
      }
    });
  });

  const closeModal = () => {
    if (imageModal && modalImg) {
      imageModal.classList.remove("show");
      modalImg.src = "";
    }
  };

  modalClose?.addEventListener("click", closeModal);
  imageModal?.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('#restaurant .filter-btn');
  const items = document.querySelectorAll('#restaurant .check-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 篩選餐廳列表
      items.forEach(item => {
        const itemArea = item.getAttribute('data-area');
        if (filterValue === 'all' || itemArea === filterValue) {
          item.style.display = ''; // 恢復預設顯示
        } else {
          item.style.display = 'none'; // 隱藏非該區餐廳
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const day1Panel = document.querySelector('#day1');		// 修改'#day1'
  if (!day1Panel) return;

  const filterBtns = day1Panel.querySelectorAll('.filter-btn');
  const items = day1Panel.querySelectorAll('.check-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 篩選 Day 1 景點列表
      items.forEach(item => {
        const itemArea = item.getAttribute('data-area');
        
        
        if (filterValue === 'day1-all' || itemArea === filterValue) {// 修改day1-all'
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const day1Panel = document.querySelector('#day4');		// 修改'#day1'
  if (!day1Panel) return;

  const filterBtns = day1Panel.querySelectorAll('.filter-btn');
  const items = day1Panel.querySelectorAll('.check-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 篩選 Day 1 景點列表
      items.forEach(item => {
        const itemArea = item.getAttribute('data-area');
        
        
        if (filterValue === 'day4-all' || itemArea === filterValue) {// 修改day1-all'
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const day1Panel = document.querySelector('#day3');		// 修改'#day1'
  if (!day1Panel) return;

  const filterBtns = day1Panel.querySelectorAll('.filter-btn');
  const items = day1Panel.querySelectorAll('.check-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 篩選 Day 1 景點列表
      items.forEach(item => {
        const itemArea = item.getAttribute('data-area');
        
        
        if (filterValue === 'day3-all' || itemArea === filterValue) {// 修改day1-all'
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const day1Panel = document.querySelector('#day2');		// 修改'#day1'
  if (!day1Panel) return;

  const filterBtns = day1Panel.querySelectorAll('.filter-btn');
  const items = day1Panel.querySelectorAll('.check-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 篩選 Day 1 景點列表
      items.forEach(item => {
        const itemArea = item.getAttribute('data-area');
        
        
        if (filterValue === 'day2-all' || itemArea === filterValue) {// 修改day1-all'
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const day1Panel = document.querySelector('#sub-face');		// 修改'#day1'
  if (!day1Panel) return;

  const filterBtns = day1Panel.querySelectorAll('.filter-btn');
  const items = day1Panel.querySelectorAll('.check-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 2. 篩選 Day 1 景點列表
      items.forEach(item => {
        const itemArea = item.getAttribute('data-area');
        
        
        if (filterValue === 'face-all' || itemArea === filterValue) {// 修改day1-all'
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 自動綁定所有代購金額輸入框
  const bindAutoSavePrice = () => {
    document.querySelectorAll('.check-item[data-key]').forEach(item => {
      const itemKey = item.getAttribute('data-key');
      
      const krwInput = item.querySelector('.save-krw');
      const twdInput = item.querySelector('.save-twd');

      // 1. 韓幣自動讀取與儲存
      if (krwInput) {
        const krwKey = `price-krw-${itemKey}`;
        const savedKrw = localStorage.getItem(krwKey);
        if (savedKrw !== null) krwInput.value = savedKrw;

        krwInput.addEventListener('input', (e) => {
          localStorage.setItem(krwKey, e.target.value);
        });
      }

      // 2. 台幣自動讀取與儲存
      if (twdInput) {
        const twdKey = `price-twd-${itemKey}`;
        const savedTwd = localStorage.getItem(twdKey);
        if (savedTwd !== null) twdInput.value = savedTwd;

        twdInput.addEventListener('input', (e) => {
          localStorage.setItem(twdKey, e.target.value);
        });
      }
    });
  };

  bindAutoSavePrice();
});

// 景點卡片點擊折疊/展開
document.addEventListener('DOMContentLoaded', () => {
  const checkItems = document.querySelectorAll('.trip-list .check-item');

  checkItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // 點擊地圖連結、外部網址、輸入框或圖片時，不觸發折疊
      if (
        e.target.closest('a') ||
        e.target.closest('input') ||
        e.target.tagName.toLowerCase() === 'img' ||
        e.target.closest('.lash-guide-box')
      ) {
        return;
      }
      
      // 切換展開狀態
      item.classList.toggle('expanded');
    });
  });
});
