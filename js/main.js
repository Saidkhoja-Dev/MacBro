// Creating the price variables. The calculation will be done wherever it is required

let elPrice;
let elCrossedPrice;
let elRealPrice = document.querySelector(".real-price");
let elHeroCrossedPrice = document.querySelector(".hero__crossed-price");

// Setting the big img

let elBigImgHolder = document.querySelector(".hero__big-img-holder");

macObject[0].gold.forEach((item) => {
  let elImgKeeper = document.createElement("div");
  elImgKeeper.className = "hero__img-keeper";

  elImgKeeper.innerHTML = `
    <img src="${item}" alt="laptop">
  `;

  elBigImgHolder.appendChild(elImgKeeper);
}); 

// Setting the small imgs in carousel

let elHeroList = document.querySelector(".hero__list");

macObject[0].gold.forEach((item) => {
  let elImgitem = document.createElement("li");
  elImgitem.className = "hero__item";

  elImgitem.innerHTML = `
    <button class="hero__btn">
      <img src="${item}" alt="laptop">
    </button>
  `;

  elHeroList.appendChild(elImgitem);
}); 

let elImgSmallItems = elHeroList.querySelectorAll("li");
elImgSmallItems[0].classList.add("active");
carousel();

// Setting the title of the product

let elTitleHolder = document.querySelector(".title-holder");

elTitleHolder.innerHTML = `
  <h2 class="hero__title">
    ${macObject[0].title} M1/<span class="ram-title">${macObject[0].ram}</span>/<span class="memory-title">${macObject[0].spec[0].memory}</span> <span class="color-name">${macObject[0].color[0]}</span>
  </h2>
`;

// Setting the Rams of the product

let elRamList = document.querySelector(".ram-list");

macObject.forEach((item) => {
  let elRamItem = document.createElement("li");
  elRamItem.className = "hero__choice-item col-6 col-lg-4";

  elRamItem.innerHTML = `
    <button class="hero__choice-btn ram-btn">
      ${item.ram}GB
    </button> 
  `;

  elRamList.appendChild(elRamItem);
});

let elRamItems = document.querySelectorAll(".ram-btn");
elRamItems[0].classList.add("active");

// Setting the memories of the product

let elMemoryList = document.querySelector(".memory-list");

macObject[0].spec.forEach((item) => {
  let elItem = document.createElement("li");
  elItem.className = "hero__choice-item col-6 col-lg-4";

  elItem.innerHTML = `
    <button class="hero__choice-btn memory-btn">
      ${item.memory}
    </button>
  `;

  elMemoryList.appendChild(elItem);
});

let elMemoryBtns = document.querySelectorAll(".memory-btn");
elMemoryBtns[0].classList.add("active");

elPrice = macObject[0].spec[0].price;
elRealPrice.innerText = elPrice;

elCrossedPrice = macObject[0].spec[0].discount;
elHeroCrossedPrice.innerText = elCrossedPrice;

let unchagingValue = elPrice;
let unchagingDiscount = elCrossedPrice;

document.querySelector(".hero__input").value = 1;

// Changing the memories and active state on memory and ram buttons 

memoryFunc(elMemoryBtns, 0);

function memoryFunc(elMemoryBtns, num){
  let elMemoryTitle = document.querySelector(".memory-title");
  
  elMemoryTitle.innerText = `${macObject[0].spec[0].memory}`;

  elMemoryBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      elMemoryBtns.forEach((element) => {
        element.classList.remove("active");
      })
      item.classList.add("active");
         
      let elMemoryTitle = document.querySelector(".memory-title");
  
      elMemoryTitle.innerText = `${macObject[1].spec[index].memory}`;

      elPrice = macObject[num].spec[index].price;
      elRealPrice.innerText = elPrice;

      elCrossedPrice = macObject[num].spec[index].discount;
      elHeroCrossedPrice.innerText = elCrossedPrice;

      unchagingValue = elPrice;
      unchagingDiscount = elCrossedPrice;

      document.querySelector(".hero__input").value = 1;
    });
  });
}

// Changing the imgs in colour buttons

let elColorBtns = document.querySelectorAll(".color-btn");

elColorBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    if(index == 0){
      elBigImgHolder.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      }); 

      elHeroList.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });
      
      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      elBigImgHolder.style.transform = `translateX(${0}px)`;
      carousel();

      let elModalList = document.querySelector(".modal-list");
      elModalList.innerHTML = "";
      macObject[0].gold.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "modal-item";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elModalList.appendChild(elImgKeeper);
      }); 
      
      let elModalBtnDiv = document.querySelector(".modal-btn-div");
      elModalBtnDiv.innerHTML = '';
      macObject[0].gold.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "modal-item-btn";
      
        elImgitem.innerHTML = `
          <button class="modal-btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elModalBtnDiv.appendChild(elImgitem);
      });
      let elBorder = document.querySelectorAll(".modal-item-btn");
      elBorder[0].classList.add("active"); 
      elModalList.style.transform = `translateX(${0}px)`;
      carouselModal();
    } else if(index == 1){
      elBigImgHolder.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      });

      elHeroList.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });

      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      elBigImgHolder.style.transform = `translateX(${0}px)`;
      carousel();

      let elModalList = document.querySelector(".modal-list");
      elModalList.innerHTML = "";
      macObject[0].silver.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "modal-item";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elModalList.appendChild(elImgKeeper);
      }); 
      
      let elModalBtnDiv = document.querySelector(".modal-btn-div");
      elModalBtnDiv.innerHTML = '';
      macObject[0].silver.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "modal-item-btn";
      
        elImgitem.innerHTML = `
          <button class="modal-btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elModalBtnDiv.appendChild(elImgitem);
      });
      let elBorder = document.querySelectorAll(".modal-item-btn");
      elBorder[0].classList.add("active"); 
      elModalList.style.transform = `translateX(${0}px)`;
      carouselModal();
    } else{
      elBigImgHolder.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "hero__img-keeper";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elBigImgHolder.appendChild(elImgKeeper);
      });

      elHeroList.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "hero__item";
      
        elImgitem.innerHTML = `
          <button class="hero__btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elHeroList.appendChild(elImgitem);
      });

      let elImages = document.querySelectorAll(".hero__item");
      elImages[0].classList.add("active");
      elBigImgHolder.style.transform = `translateX(${0}px)`;
      carousel();

      let elModalList = document.querySelector(".modal-list");
      elModalList.innerHTML = "";
      macObject[0].spaceGray.forEach((item) => {
        let elImgKeeper = document.createElement("div");
        elImgKeeper.className = "modal-item";
      
        elImgKeeper.innerHTML = `
          <img src="${item}" alt="laptop">
        `;
      
        elModalList.appendChild(elImgKeeper);
      }); 
      
      let elModalBtnDiv = document.querySelector(".modal-btn-div");
      elModalBtnDiv.innerHTML = '';
      macObject[0].spaceGray.forEach((item) => {
        let elImgitem = document.createElement("li");
        elImgitem.className = "modal-item-btn";
      
        elImgitem.innerHTML = `
          <button class="modal-btn">
            <img src="${item}" alt="laptop">
          </button>
        `;
      
        elModalBtnDiv.appendChild(elImgitem);
      });
      
      let elBorder = document.querySelectorAll(".modal-item-btn");
      elBorder[0].classList.add("active");
      elModalList.style.transform = `translateX(${0}px)`;
      carouselModal();  
    }

    elColorBtns.forEach((element) => {
      element.classList.remove("active");
    })
    item.classList.add("active");
    
    let elClassName = document.querySelector(".color-name");
    elClassName.innerText = `${macObject[0].color[index]}`;
  });
});

// Changing the ram properties on Ram button

let elRamTitle = document.querySelector(".ram-title");
elRamItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    elRamItems.forEach((value) => {
      value.classList.remove("active");
    });
    item.classList.add("active");
    elRamTitle.innerText = macObject[index].ram;

    elPrice = macObject[index].spec[0].price;
    elRealPrice.innerText = elPrice;

    elCrossedPrice = macObject[index].spec[0].discount;
    elHeroCrossedPrice.innerText = elCrossedPrice;

    unchagingValue = elPrice;
    unchagingDiscount = elCrossedPrice;

    document.querySelector(".hero__input").value = 1;

    elMemoryList.innerHTML = "";

    macObject[index].spec.forEach((item) => {
      let elItem = document.createElement("li");
      elItem.className = "hero__choice-item col-6 col-lg-4";
    
      elItem.innerHTML = `
        <button class="hero__choice-btn memory-btn">
          ${item.memory}
        </button>
      `;
    
      elMemoryList.appendChild(elItem);
    });

    let elMemoryBtns = document.querySelectorAll(".memory-btn");
    elMemoryBtns[0].classList.add("active");

    memoryFunc(elMemoryBtns, index);
  });
});

// Adding plus and minus buttons

let elMinus = document.querySelector(".minus");
let elPlus = document.querySelector(".plus");
let elInput = document.querySelector(".hero__input");

elPlus.addEventListener("click", () => {
  let elValue = Number(elInput.value);
  elInput.value = elValue += 1;
  elRealPrice.innerText = elPrice += unchagingValue;

  elHeroCrossedPrice.innerText = elCrossedPrice += unchagingDiscount;
});

elMinus.addEventListener('click', () => {
  let elValue = Number(elInput.value);
  if(elValue > 1){
    elInput.value = elValue -= 1;
    elRealPrice.innerText = elPrice -= unchagingValue;

    elHeroCrossedPrice.innerText = elCrossedPrice -= unchagingDiscount;
  }
});

// Slider

function carousel(){
  let arr = document.querySelectorAll(".hero__item");
  arr.forEach((item, index) => {
    item.addEventListener("click", () => {
      arr.forEach((value) => {
        value.classList.remove("active");
      });
      item.classList.add("active");

      let elSlideWidth = document.querySelector('.hero__img-keeper img').clientWidth;
      console.log(elSlideWidth);
      elBigImgHolder.style.transform = `translateX(${-index * elSlideWidth}px)`;
    });
  });  
}

// Modal 

let elFullScreen = document.querySelector(".full-screen");
let elExit = document.querySelector(".exit-btn");
let elModalList = document.querySelector(".modal-list");
let elModal = document.querySelector(".modal-part");

elFullScreen.addEventListener("click", () => {
  elModal.style.opacity = "1";
  elModal.style.zIndex = "99999999";
});

elExit.addEventListener("click", () => {
  elModal.style.opacity = "0";
  elModal.style.zIndex = "-999999";
});

macObject[0].gold.forEach((item) => {
  let elImgKeeper = document.createElement("div");
  elImgKeeper.className = "modal-item";

  elImgKeeper.innerHTML = `
    <img src="${item}" alt="laptop">
  `;

  elModalList.appendChild(elImgKeeper);
}); 

let elModalBtnDiv = document.querySelector(".modal-btn-div");

macObject[0].gold.forEach((item) => {
  let elImgitem = document.createElement("li");
  elImgitem.className = "modal-item-btn";

  elImgitem.innerHTML = `
    <button class="modal-btn">
      <img src="${item}" alt="laptop">
    </button>
  `;

  elModalBtnDiv.appendChild(elImgitem);
}); 

let modalItemBtns = document.querySelectorAll(".modal-item-btn");
modalItemBtns[0].classList.add("active");

modalItemBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    modalItemBtns.forEach((value) => {
      value.classList.remove("active");
    });
    item.classList.add("active");
  });
});

carouselModal();

function carouselModal(){
  let arr = document.querySelectorAll(".modal-item-btn");
  arr.forEach((item, index) => {
    item.addEventListener("click", () => {
      arr.forEach((value) => {
        value.classList.remove("active");
      });
      item.classList.add("active");

      elModalList.style.transform = `translateX(${-index * 550}px)`;
    });
  });  
}

// Title external link

let elExternal = document.querySelector(".external-btn");

elExternal.addEventListener("click", () => {
  elExternal.style.fontSize = "15px";
  elExternal.innerHTML = "Nusxa olindi";
});

// Desc buttons

let elDescBtn = document.querySelector(".desc__summary");
let elDescSpec = document.querySelector(".desc__spec");
let elColor = document.querySelector(".desc__color");
let eldescSummaryInfo = document.querySelector(".desc__summary-info");
let elDescSpecification = document.querySelector(".desc__specifications");

elDescSpec.addEventListener("click", () => {
  elColor.style.transform = "translateX(100%)";
  eldescSummaryInfo.classList.remove("show-it");
  elDescSpecification.classList.add("show-it");
});

elDescBtn.addEventListener("click", () => {
  elColor.style.transform = "translateX(0)";
  eldescSummaryInfo.classList.add("show-it");
  elDescSpecification.classList.remove("show-it");
});

// Bottom slider

let elSimilarList = document.querySelector(".similar__list");
let elRight = document.querySelector(".right");
let elLeft = document.querySelector(".left");
let elCheck = 0;

elRight.addEventListener("click", () => {
  elCheck++;

  carouselIt();
});

elLeft.addEventListener("click", () => {
  elCheck--;

  carouselIt();
});

function carouselIt(){
  if(elCheck == 0){
    elLeft.style.display = "none";
  } else if(elCheck > 0){
    elLeft.style.display = "block";
  }

  if(elCheck == 7){
    elRight.style.display = "none";
  } else{
    elRight.style.display = "block";
  }

  let elWidth = document.querySelector(".similar__item").clientWidth;
  console.log(elWidth);

  elSimilarList.style.transform = `translate(${-elCheck * elWidth}px)`;
}