

document.addEventListener("DOMContentLoaded", function() {
  const navItem = document.querySelectorAll('.navbar-item');
  projects();
  for(const item of navItem) {
    item.addEventListener('click', () => {
        if(item.classList.contains('navbar-selected')) return;
        navItem.forEach(item => item.classList.remove('navbar-selected'));
        item.classList.add('navbar-selected');
        const fn = {
            'Projects': projects,
            'Others': others,
            'Social': social,
            'Friends': friends
        }[item.textContent];
        if(fn) fn();
    })
  }
});

function projects() {
  const img = document.querySelector(".img-title");
  img.alt = "Projects";
  img.src = "./assets/pro.png";

  const mods = [
      {
          title: 'Player Heads Add-on',
          description: 'This add-on allows you to add Player Heads to the game, giving you the ability to customize your game and world.',
          link: 'https://modbay.org/mods/1976-player-heads-addon.html',
          coverImage: 'https://modbay.org/uploads/posts/2024-05/player-heads-addon-main-cover.png'
      },
      {
          title: 'Replay Mod [1.21]: BETA',
          description: 'This add-on allows you to record in-game actions and replay it later.',
          link: 'https://modbay.org/mods/1652-replay-mod.html',
          coverImage: 'https://modbay.org/uploads/posts/2024-03/replay-mod-main-cover.png'
      },
      {
          title: 'Arabic Language Fix [1.20 → 1.21]',
          description: 'This add-on fixes the inverted syntax of the Arabic language within the game. هذا المود (إضافة او ادون) يقوم بإصلاح شكل اللغة العربية المعكوس داخل اللعبة',
          link: 'https://modbay.org/mods/1253-arabic-language-fix.html',
          coverImage: 'https://modbay.org/uploads/posts/2023-11/arabic-language-fix-pack-main-cover.jpg'
      },
      {
          title: 'Clickable Signs [1.20.4x | 1.20.6x]',
          description: 'This addon allows you to make signs clickable. You can also add commands that run when clicking the sign (you can add them only in creative).',
          link: 'https://modbay.org/mods/1248-clickable-signs.html',
          coverImage: 'https://modbay.org/uploads/posts/2023-10/clickable-signs-main-cover.png'
      },
      {
          title: 'Banner Markers [1.20.1x | 1.20.7x]',
          description: 'Did you wish that you can place markers in a map? This add-on adds a parity feature from Minecraft: Java Edition. This feature allows you to put markers in your map using banners.',
          link: 'https://modbay.org/mods/1165-banner-markers.html',
          coverImage: 'https://modbay.org/uploads/posts/2023-10/banner-markers-main-cover.png'
      }
  ];
  addPosts(mods);
}

function others() {
  const img = document.querySelector(".img-title");
  img.alt = "Others";
  img.src = "./assets/oth.png";

  const posts = [
    {
        title: 'ModBay Feed Discord App',
        description: 'This Bot allows you to receive notifications from ModBay when a creator you are subscribed to submits a new mod or a new update. you can also subscribe to comment section of any creator.',
        link: '#',
        coverImage: './assets/modBay.png'
    }
  ];

  addPosts(posts);
}

function friends() {
  const img = document.querySelector(".img-title");
  img.alt = "Friends";
  img.src = "./assets/fre.png";
  //https://modbay.org/user/Mevo/
  //https://modbay.org/user/MZ3G/
  //https://modbay.org/user/ShadowGem100k/

  const posts = [
    {
        title: 'Mevo',
        description: 'Minecraft Bedrock Add-on Creator.',
        link: 'https://modbay.org/user/Mevo/',
        coverImage: './assets/me.jpg'
    },
    {
        title: 'MZ3G',
        description: 'Minecraft Bedrock Add-on Creator.',
        link: 'https://modbay.org/user/MZ3G/',
        coverImage: './assets/mz.jpg'
    },
    {
        title: 'ShadowGem100k',
        description: 'Minecraft Bedrock Add-on Creator.',
        link: 'https://modbay.org/user/ShadowGem100k/',
        coverImage: './assets/sh.jpg'
    }
  ]
  addPosts(posts);
}

function social() {
  const img = document.querySelector(".img-title");
  img.alt = "Social";
  img.src = "./assets/soc.png";

  const posts = [
    {
        title: 'Discord Server',
        description: 'This is my official Discord Server. It is open for everyone.',
        link: 'https://discord.gg/6z8ZPUdVTT',
        coverImage: './assets/dis.jpg'
    },
    {
        title: 'github',
        description: 'My github account. I am new to GitHub but feel free to check out my projects.',
        link: 'https://github.com/MinecraftBedrockArabic',
        coverImage: './assets/git.jpg'
    }
  ]

  addPosts(posts);
}

function addPosts(posts) {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const coverDiv = document.createElement('div');
    coverDiv.className = 'cover';
    coverDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgb(58, 58, 58)), url(${post.coverImage})`;

    const titleElement = document.createElement('h2');
    titleElement.className = 'title';
    titleElement.textContent = post.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'description';
    descriptionElement.textContent = post.description;

    const linkElement = document.createElement('a');
    linkElement.href = post.link;
    linkElement.appendChild(titleElement);

    postDiv.appendChild(coverDiv);
    postDiv.appendChild(linkElement);
    postDiv.appendChild(descriptionElement);

    container.appendChild(postDiv);
});
}

function formatContent() {
  fetch('./test.html').then(response => response.text()).then(data => {
    console.log(data);
  })
  const formatPage = document.querySelector('.format-page');

  if (formatPage) {
      formatPage.innerHTML = formatPage.innerHTML.replace(/<p>\[media=(https:\/\/www.youtube.com\/watch\?v=([a-zA-Z0-9_-]+))\]<\/p>/g,
          '<br><div class="center-content"><iframe src="https://www.youtube.com/embed/$2?si=N_0NMzQvmXnh-Ojo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br>'
      );

      // Convert h2 titles to div with class 'title-bookmark'
      formatPage.innerHTML = formatPage.innerHTML.replace(/<h2>(?:(?!Updated).)*?<\/h2>/g,
        '<div class="title-bookmark">$&</div><br>'
      ).replace(/<div class="title-bookmark"><h2>(.*?)<\/h2><\/div>/g,
        '<div class="title-bookmark">$1</div><br>'
      ).replace(/[^\u0000-\u007F]/g, '');

    
      const images = formatPage.querySelectorAll('img');
      images.forEach(img => {
          img.style.maxWidth = '100%'; // Ensure images don't exceed container width
          img.style.height = 'auto'; // Maintain aspect ratio
          // Optionally, you can set a max-height or specific height here if needed
      });

      const listItems = formatPage.querySelectorAll('li');
      listItems.forEach(li => {
          li.style.wordWrap = 'break-word'; // Wrap long words
          li.style.overflowWrap = 'break-word'; // Wrap on word breaks
          li.style.whiteSpace = 'pre-wrap'; // Preserve white space
      });

      // Darken bright text background colors
      const spansWithBackgroundColor = formatPage.querySelectorAll('span[style*="background-color"]');
      spansWithBackgroundColor.forEach(span => {
          const bgColor = span.style.backgroundColor;
          const textColor = span.style.color;
          span.style.backgroundColor = "transparent";
          span.style.color = brightColor(textColor);
      });

      // Create spoilers
      const spoilers = formatPage.querySelectorAll('.spoiler');
      spoilers.forEach(spoiler => {
          const spoilerHead = spoiler.querySelector('.spoiler_head');
          const spoilerBody = spoiler.querySelector('.spoiler_body');
          spoilerBody.style.display = 'none'; // Hide spoiler body by default
          spoilerHead.style.cursor = 'pointer'; // Change cursor to indicate clickable
          spoilerHead.addEventListener('click', () => {
              spoilerBody.style.display = spoilerBody.style.display === 'none' ? 'block' : 'none';
          });
      });
  }
}

// Function to darken a color (adjust as needed)
function brightColor(color) {
  // You can implement a more sophisticated color manipulation if required
  return 'rgb(' +
      Math.floor(parseInt(color.slice(4, -1).split(',')[0]) * 1.2) + ',' +
      Math.floor(parseInt(color.slice(4, -1).split(',')[1]) * 1.2) + ',' +
      Math.floor(parseInt(color.slice(4, -1).split(',')[2]) * 1.2) + ')';
}

// Call the formatContent function when the page loads
document.addEventListener('DOMContentLoaded', formatContent);
