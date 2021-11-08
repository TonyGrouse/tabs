'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabsContent = document.querySelector('.tabs__content'),
          tabsWrapper = document.querySelectorAll('.tabs__wrapper'),
          list = document.querySelector('.tabs__list'),
          listItem = document.querySelectorAll('.tabs__list-item');

    const setTabsHeight = (i) => {
        tabsContent.style.height = `${tabsWrapper[i].clientHeight}px`;
    };

    listItem[0].classList.add('active');
    tabsWrapper[0].classList.add('active');
    setTabsHeight(0);

    listItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            listItem.forEach(li => {
                li.classList.remove('active');
            });
            tabsWrapper.forEach(tab => {
                tab.classList.remove('active');
            });
            item.classList.add('active');
            tabsWrapper[i].classList.add('active');
            setTabsHeight(i);
        });
    });


    const body = document.querySelector('body'),
          extraList = document.querySelector('.extra-list'),
          extraListBtn = extraList.querySelector('.extra-list p'),
          extraListWrapper = extraList.querySelector('.extra-list__wrapper');

    extraListBtn.addEventListener('click', () => {
        extraListBtn.classList.toggle('active');
    });

    const setExtraTabs = () => {
        if (body.clientWidth > 991.98) {
            for (let i = 0; i < extraListWrapper.children.length; i++) {
                list.append(extraListWrapper.children[i]);
            }
        }
        if (body.clientWidth < 991.98) {
            for (let i = 3; i < listItem.length; i++) {
                extraListWrapper.append(listItem[i]);
            }
        }
    };
    setExtraTabs();

    window.addEventListener(`resize`, () => {
        setExtraTabs();
        listItem.forEach((item, i) => {
            if (item.classList.contains('active')) {
                setTabsHeight(i);
            }
        });
    });
});