document.addEventListener('DOMContentLoaded', function() {

  // 获取当前页面
  let currentUrl = window.location.pathname;

  // 主页样式

  // 判断当前页面是否为主页
  if (
    currentUrl === '/' || 
    currentUrl.includes('/index.html') || 
    currentUrl.includes('/page')
  ) {
    let style = document.createElement('style');
    style.innerHTML = `

      #header {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      #header h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      #header h1 a {
        font-size: 35px;
      }

      .title-right {
        margin: 0;
      }

      [data-color-mode=light][data-light-theme=dark_dimmed],
      [data-color-mode=light][data-light-theme=dark_dimmed]::selection,
      [data-color-mode=dark][data-dark-theme=dark_dimmed],
      [data-color-mode=dark][data-dark-theme=dark_dimmed]::selection
        --SideNav-item-hover-bgColor: #f6f8fa;
      }

      :root {
        --SideNav-item-hover-bgColor: #2d333b;
      }

      .SideNav-item:hover {
        transform: scale(1.01);
        transition: 0.1s;
        box-shadow: 0 0 20px rgb(0, 0, 0, 0.5);
        background-color: var(--SideNav-item-hover-bgColor, var(--color-canvas-subtle));
      }

      @media (max-width: 600px) {
        .avatar {
          width: 64px;
          height: 64px;
        }
      }

      @media (max-width: 600px) {
        .blogTitle {
          display: block;
        }
      }

      @media (max-width: 600px) {
        #buttonRSS {
          display: inline;
        }
      }
    `;

    // 应用style样式
    document.head.appendChild(style);
  } 

  // 文章页样式

  // 判断当前页面是否为文章页
  else if (
    currentUrl.includes('/post/') || 
    currentUrl.includes('/link.html') || 
    currentUrl.includes('/about.html')
  ) {
    let style = document.createElement('style');
    style.innerHTML = `

      [data-color-mode=light][data-light-theme=dark_dimmed],
      [data-color-mode=light][data-light-theme=dark_dimmed]::selection,
      [data-color-mode=dark][data-dark-theme=dark_dimmed],
      [data-color-mode=dark][data-dark-theme=dark_dimmed]::selection
        --markdown-pre-bgColor: #27282d;
      }

      :root {
        --markdown-pre-bgColor: #f6f8fa;
      }

      .markdown-body .highlight pre,
      .markdown-body pre {
        background-color: var(--markdown-pre-bgColor);
      }

      .clipboard-container {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.3s ease, visibility 0s 0.3s;
        -webkit-transition: opacity 0.3s ease, visibility 0s 0.3s
      }

      .highlight:hover .clipboard-container {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: opacity 0.3s ease, visibility 0s 0s;
        -webkit-transition: opacity 0.3s ease, visibility 0s 0s
      }

      [data-color-mode=light][data-light-theme=dark_dimmed],
      [data-color-mode=light][data-light-theme=dark_dimmed]::selection,
      [data-color-mode=dark][data-dark-theme=dark_dimmed],
      [data-color-mode=dark][data-dark-theme=dark_dimmed]::selection
        --color-accent-fg: #20d4ff;
      }

      a {
        background: #90d1ff;
        background: linear-gradient(#90d1ff, #90d1ff) no-repeat left bottom;
        background-size: 0 2px;
        transition: all 0.25s ease;
        -webkit-transition: all 0.25s ease;
        var(--color-accent-fg, var(--fgColor-accent));
      }

      .markdown-body a:hover {
        background-size: 100% 2px;
      }
    `;

    // 应用style样式
    document.head.appendChild(style);
  }

  // 搜索页样式

  // 判断当前页面是否为搜索页
  else if (currentUrl.includes('/tag')) {
    let style = document.createElement('style');
    style.innerHTML = ``;

    // 应用style样式
    document.head.appendChild(style);

    // 搜索框回车触发搜索
    let input = document.getElementsByClassName('form-control subnav-search-input float-left')[0];
    let button = document.getElementsByClassName('btn float-left')[0];
    input.addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            button.click();
        }
    });
  }
})