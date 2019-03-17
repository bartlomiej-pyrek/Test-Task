const tabBtn = $(".header__nav__btn"),
    tabItem = $(".tabs__item"),
    menuBtn = $(".btn-menu"),
    menuNav = $(".header__nav"),
    skiCams = $("#tab-2");

let tabActive = "",
    skiCamsHolder = "";

$.ajax({
    beforeSend: function (request) {
        request.setRequestHeader("X-Mashape-Key", 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw');
    },
    dataType: "json",
    url: 'https://makevoid-skicams.p.mashape.com/cams.json',
    success: function (data) {
        const skiCameras = data;
        const skiTime = new Date(),
            skiday = skiTime.getDate(),
            skiMonth = skiTime.getMonth() + 1,
            skiDate = `${skiday}-${skiMonth}-${skiTime.getFullYear()}`;

        console.log(skiMonth);
        skiCamsHolder += `<div class="cameras"><ul class="cameras__list">`

        for (let i in skiCameras) {
            if (skiCameras[i].name === "Andalo" || skiCameras[i].name === "Monte Bondone") {
                skiCamsHolder += `<li class="cameras__list__item">`;
                skiCamsHolder += `<p class="cameras__list__item__date">${skiDate}</p>`;
                skiCamsHolder += `<h2 class="cameras__list__item__title">${skiCameras[i].name}</h2>`;
                let k = 0;
                for (let j in skiCameras[i].cams) {
                    while (k < 1) {
                        skiCamsHolder += `<img src="${skiCameras[i].cams[j].url}" class="cameras__list__item__photo" alt="" />`;
                        k++;
                    }
                }
                skiCamsHolder += `</li>`;
            }
        }

        skiCamsHolder += `</ul></div>`;
        skiCams.append(skiCamsHolder);
    }
});



tabBtn.click(function () {
    tabBtn.removeClass("header__nav__btn--active");
    $(this).addClass("header__nav__btn--active");
    tabActive = $(this).attr("href");

    tabItem.removeClass("tabs__item--active");
    $(tabActive).addClass("tabs__item--active");

    return false;
});

menuBtn.click(function () {
    $(this).find('.btn-menu__box__bar').toggleClass("btn-menu__box__bar--active");
    menuNav.toggle();
});