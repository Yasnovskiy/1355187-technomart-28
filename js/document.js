let link = document.querySelector('.contacts-map');
let map = document.querySelector('.modal-map');
let close = document.querySelectorAll('.modal-close');
let buy = document.querySelectorAll('.card-product-buy-button');
let modalBasketCatalog = document.querySelector('.modal-basket-catalog');
let write= document.querySelector('.contacts-title-link-write');
let communication = document.querySelector('.modal-communication');
let arrange = document.querySelector('.modal-basket-list-button-issue');
let resume = document.querySelector('.modal-basket-list-button-resume');

let modalCommunicationForm =  document.querySelector('.modal-communication-form');
let communicationName =  document.querySelector('.communication-name');
let communicationEmail =  document.querySelector('.communication-email');
let communicationLetter =  document.querySelector('.communication-letter');
let modalCommunication =  document.querySelector('.modal-communication');

let name = document.querySelector('[name=name]');
let email = document.querySelector('[name=email]');


if (link) {
  link.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    map.classList.add ('modal-show');
    console.log ('Отлично!');
  });
};

if (close) {
    close.forEach(function (item) {
    item.addEventListener ("click", function (evt) {
      evt.preventDefault ();
      item.parentElement.classList.remove ('modal-show');
      console.log ('Кнопка закрыть');
    });
  });
};

if(buy) {
  buy.forEach(function (item) {
    item.addEventListener ('click', function (evt) {
      evt.preventDefault ();
      modalBasketCatalog.classList.add ('modal-show');
    });
  });
};

if (write) {
  write.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    communication.classList.add ('modal-show');
    name.focus ();
    console.log ('умный!');
  });
};

if(modalCommunicationForm){
    modalCommunicationForm.addEventListener ('submit', function (evt) {
        if (!communicationName.value || !communicationEmail.value || !communicationLetter.value) {
          evt.preventDefault ();
          modalCommunication.classList.remove ('modal-error');
          modalCommunication.offsetWidth = modalCommunication.offsetWidth;
          modalCommunication.classList.add ('modal-error');
        }
    });
};

if (arrange) {
  arrange.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    modalBasketCatalog.classList.remove ('modal-show');
    console.log ('Ах');
  });
};

if (resume) {
  resume.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    modalBasketCatalog.classList.remove ('modal-show');
    console.log ('Ух!');
  });
};

window.addEventListener ('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (communication.classList.contains ('modal-show')) {
      evt.preventDefault ();
      communication.classList.remove ('modal-show');
    }
  };
});

window.addEventListener ('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (map .classList.contains ('modal-show')) {
      evt.preventDefault ();
      map .classList.remove ('modal-show');
    }
  };
});
