document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar a');
  const pages = document.querySelectorAll('.page');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const pageId = link.getAttribute('data-page');
      if (pageId) { // 只有当 data-page 存在时才处理
        e.preventDefault();
        pages.forEach(page => {
          page.classList.remove('active');
        });
        const target = document.getElementById(pageId);
        if (target) {
          target.classList.add('active');
        }
      }
      // 若无 data-page，执行默认跳转
    });
  });

  // 默认显示首页
  document.getElementById('home').classList.add('active');
});

// 新增：启用模块热替换
if (module.hot) {
  module.hot.accept();
}