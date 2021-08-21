import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { ContextMenu } from './menu'
import * as Modules from './modules/'

const message = new Modules.MessageModule('message', 'Важное сообщение')
const voice = new Modules.ShapeModule('voice', 'Важное звук')
const youtube = new Modules.YoutubeModal('youtube', 'Уроки по Java Script')
const background = new Modules.BackgroundModule('background', 'Поменять цвет')
const arr = {voice, message, youtube, background}

const menu = new ContextMenu()

ContextMenu.open(menu.menu)

ContextMenu.close(menu.menu)


for (let item in arr) {
  ContextMenu.add(menu.menu, arr[item].toHTML())
}
// arr.map((item) => {
//   ContextMenu.add(menu.menu, item.toHTML())
// })

document.querySelector('#menu').addEventListener('click', (e) => {
  const { target } = e;
    // if ('message' === target.id) {
    //   Modules.MessageModule.trigger()
    // } else if ('youtube' === target.id) {
    //   Modules.YoutubeModal.trigger()
    // } else if ('voice' === target.id) {
    //   Modules.ShapeModule.trigger()
    // } else if ('background' === target.id){
    //   background.trigger();
    if(target.id){
      arr[target.id].trigger();
    } else {
      alert('Функционал еще не добавлен')
    }
})
