document.addEventListener('DOMContentLoaded', function() {

  // 获取所有style标签
  let styleTags = document.querySelectorAll('style');
  // 删除style标签
  styleTags.forEach(tag => tag.remove());

  // 获取当前页面
  let currentUrl = window.location.pathname;

  // 主页的样式表

  // 判断当前页面是否为主页
  if (
    currentUrl == '/' || 
    currentUrl.includes('/index.html') || 
    currentUrl.includes('/page')
  ) {
    let style = document.createElement('style');
    style.innerHTML = `

      /* 以下是原版样式 */
      /* 来源：templates/base.html */
      body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 900px;
        margin: 20px auto;
        padding: 45px;
        font-size: 16px;
        font-family: sans-serif;
        line-height: 1.25;
      }

      #header {
        display: flex;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted));
        margin-bottom: 16px;
      }

      #footer {
        margin-top: 64px;
        text-align: center;
        font-size: small;
      }

      /* 来源：templates/plist.html */
      .avatar {
        transition: 0.8s;
        width: 64px;
        height: 64px;
        object-fit: cover;
      }

      .avatar:hover {
        transform: scale(1.15) rotate(360deg);
      }

      .title-left a {
        color: inherit;
        text-decoration: none;
        vertical-align: bottom;
        font-size: 40px;
        font-weight: bold;
        font-family: Monaco;
        margin-left: 8px;
      }

      .title-right {
        display: flex;
        margin: auto 0 0 auto;
      }

      .title-right button {
        margin-right: 8px;
        padding: 16px;
      }

      .title-right .circle {
        padding: 14px 16px;
      }

      .SideNav {
        min-width: 360px;
      }

      .SideNav-icon {
        margin-right: 16px
      }

      .SideNav-item .Label {
        color: #fff;
        margin-left: 4px;
      }

      .d-flex {
        min-width: 0;
      }

      .listTitle {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      .listLabels {
        white-space: nowrap;
        display: flex;
      }

      .listLabels object {
        max-height: 16px;
        max-width: 24px;
      }

      @media (max-width: 600px) {
        body {
          padding: 8px;
        }

        .avatar {
          width: 40px;
          height: 40px;
        }

        .blogTitle {
          display: none;
        }

        #buttonRSS {
          display: none;
        }

        .LabelTime {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 文章页的样式表

  // 判断当前页面是否为文章页
  /*else if (
    currentUrl.includes('/post/') || 
    currentUrl.includes('/link.html') || 
    currentUrl.includes('/about.html')
  ) {
    let style = document.createElement('style');
    style.innerHTML = `
    `;
    document.head.appendChild(style);
  }*/

  // 搜索页的样式表

  // 判断当前页面是否为搜索页
  else if (currentUrl.includes('/tag')) {
    /*let style = document.createElement('style');
    style.innerHTML = `
    `;
    document.head.appendChild(style);*/

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