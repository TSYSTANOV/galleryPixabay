const list = document.querySelector("ul");
class Grid {
  async render(data) {
    console.log(data);
    const { hits } = data;
    const items = await Promise.all(
      hits.map(async (elem) => {
        const image = await this.loadImg(elem.previewURL, elem.previewURL);
        const li = document.createElement("li");
        li.className = "card";
        li.innerHTML = `
        <a
            id="${elem.id}"
            class="grid-item"
            href="page.html?photo=${elem.id}"
            >
            <a class="card__author" href="#">
              <img
                class="author__photo"
                src="${elem.userImageURL}"
                width="32"
                height="32"
                role="presentation"
                alt="${elem.user}"
                title="${elem.user}"
              />
            </a>
            <button class="card__photo-like">${elem.likes}</button>
            <a
              class="card__download"
              href="${elem.pageURL}"
              download=""
              target="_blank"
            ></a>
          </a>
        `;
        li.querySelector(".grid-item").prepend(image);
        return li;
      })
    );
    list.append(...items);
    var msnry = new Masonry(list, {
      columnWidth: 150,
      gutter: 10,
      itemSelector: ".card",
      isFitWidth: true,
    });
  }
  loadImg(src, alt) {
    return new Promise((resolve, reject) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.addEventListener("load", () => {
        resolve(img);
      });
    });
  }
}

const GRID_CONTROLLER_component = new Grid();
export { GRID_CONTROLLER_component };
