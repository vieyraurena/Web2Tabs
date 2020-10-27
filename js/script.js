const tabs =  document.querySelectorAll('.tabs-tablist-item');
const content =  document.querySelectorAll('.tabs-content-item');

for (let index = 0; index < content.length; index++){
  content[index].classList.add('js-content-hidden');
}

content[0].classList.remove('js-content-hidden');
tabs[0].classList.add('js-active');


for (let index = 0; index < tabs.length; index++){
  tabs[index].addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    const href = element.getAttribute('href');
    const id = href.substring(1);
    for (let index = 0; index < content.length; index++){
      content[index].classList.add('js-content-hidden');
      if (content[index].getAttribute('id') == id){
        content[index].classList.remove('js-content-hidden');
      }
    }
    
    for (let index = 0; index < tabs.length; index++){
      tabs[index].classList.remove('js-active');
    }

    event.currentTarget.classList.add('js-active');
  })

}