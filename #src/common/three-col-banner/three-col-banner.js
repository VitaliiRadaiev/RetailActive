{
    let threeColBannerList = document.querySelector('.three-col-banner__list');
    if(threeColBannerList) {
        let liItems = Array.from(threeColBannerList.children);
        if(liItems.length) {
            liItems.forEach(li => {
                let link = li.querySelector('.three-col-banner__link');
                if(link) {
                    li.addEventListener('click', () => {
                        document.location.href = link.href;
                    })
                }
            })
        }

        let elements = threeColBannerList.querySelectorAll('.three-col-banner__text ');
		if(elements.length) {
			const getGropus = (elements) => {
				let obj = {};

				elements.forEach(el => {
					let id = el.dataset.setSameHeight;
					if(obj.hasOwnProperty(id)) {
						obj[id].push(el);
					} else {
						obj[id] = [el];
					}
				})

				return obj;
			}
			const setMinHeight = (groups) => {
				for(let key in groups) {
					let maxHeight = Math.max(...groups[key].map(i => i.clientHeight));
					
					groups[key].forEach(el => {
						el.style.minHeight = maxHeight + 'px';
					})
				}
			}

			let groups = getGropus(elements);

			if(document.documentElement.clientWidth > 767.98) {
				setMinHeight(groups);
			}
		}
    }
}